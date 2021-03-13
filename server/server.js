
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const { mongoose } = require('./db/mongoose.js');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const { ObjectID } = require('mongodb');
const { authenticate } = require('./middleware/authenticate');

const app = express() // this is going to store our express application 

/***
 * app.use - this is configuration of middleware
 * app.use() - inside this function used to configure then access the third party library
 * app.use(bodyParser.json()); - middleware used to return json to express application
 */
app.use(bodyParser.json());

app.post('/todos', authenticate, (req, res) => {
    // here, req.body gets stored by body parser
    console.log(req.body)
    // the one that set default by Express is the 200 status 
    // 400 status means value as empty or didnt provide any values
    const todo = new Todo({
        text: req.body.text,
        _creator: req.user._id
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});


app.get('/todos', authenticate, (req, res) => {
    // Todo comes with array format as it is collection so it is format as array
    // creator is the user and get the creator data only this find operator
    Todo.find({
        _creator: req.user._id
    }).then((todos) => {
        console.log(todos);
        res.send({ todos });
    }, (err) => {
        res.status(400).send(err);
    });

});

app.get('/todos/:id', authenticate, (req, res) => {
    const id = req.params.id;
    // findById - can pass id only in the arguments
    Todo.findOne({
        _id: id,
        _creator: req.user._id
    }).then((todo) => {
        if (!todo) {
            res.status(404).send();
            return;
        }
        console.log(`find by id ${todo}`);
        res.send(({ todo }));
    }).catch((err) => {
        res.status(400).send();
        console.log(`Unable to saved todo ${JSON.stringify(err, undefined, 2)} `);
    });
});

app.delete('/users', (req, res) => {
    User.remove({}).then((doc) => {
        if (!doc) {
            res.status(404).send();
            return;
        }
        res.send(doc);
    });
});

app.delete('/todos', (req, res) => {
    Todo.remove({}).then((doc) => {
        if (!doc) {
            res.status(404).send();
            return;
        }
        res.send(doc);
    });
});

// app.delete('/users/:id', authenticate, (req, res) => {
//     if (!ObjectID.isValid(req.params.id)) {
//         res.status(404).send();
//         return;
//     }
//     const id = req.params.id;

//     User.findOneAndRemove({
//         _id: id,
//         _creator: req.user._id
//     }).then((user) => {
//         if (!user) {
//             res.status(404).send();
//             return;
//         }
//         console.log()
//         res.send(user);
//     }).catch((err) => {
//         res.status(400).send();
//     });
// });

app.delete('/todos/:id', authenticate, (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        res.status(404).send();
        return;
    }
    const id = req.params.id;
    // findByIdAndRemove - can pass id only in the arguments
    Todo.findOneAndRemove({
        _id: id,
        _creator: req.user._id
    }).then((user) => {
        if (!user) {
            res.status(404).send();
            return;
        }
        console.log()
        res.send(user);
    }).catch((err) => {
        res.status(400).send();
    });
});

// used to update the resoure like put method
app.patch('/todos/:id', authenticate, (req, res) => {
    const id = req.params.id;
    const body = req.body;

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return;
    }

    if (body?.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    // $set - used to update whole the json of the field
    // $push - used to update object of object
    Todo.findOneAndUpdate({
        _id: id,
        _creator: req.user._id
    }, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo });
    }).catch((err) => {
        res.send(400).send();
    });
});

// /user login
// this is express route handler
app.post('/signup', (req, res) => {
    const body = req.body;
    const user = new User(body);
    console.log('user ==> ', body)

    // User - this is the model method
    // user - this is the individual instance method which will be used to create the generate auth

    /**
     * generateAuthToken() is responsible for adding a token on it individual user document
     *  saving that and return the token
     */
    // user.generateAuthToken  //
    user.save().then(() => {
        // console.log(`Saved user ${JSON.stringify(doc, undefined, 2)}`);
        // res.send(doc);
        return user.generateAuthToken();
    }).then((token) => {
        // header prefix with x means this is the custom header
        res.header('x-auth', token).send(user);
    }).catch((err) => {
        res.status(400).send(err);
        console.log(`Unable to save the user ${err}`);
    });
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

// login

app.post('/users/login', (req, res) => {
    //    let body = _.pick(req.body, ['email', 'password']);
    User.findByUserCredentials(req.body.email, req.body.password).then((user) => {
        user.generateAuthToken().then(token => {
            res.header('x-auth', token).send(user);
        });
    }).catch(err => {
        res.status(400).send(err);
    });
});


app.delete('/users/me/token', authenticate, (req, res) => {
    // let token = req.header('x-auth');
    // console.log('1234', req.user);
    // this is way to call the instance method
    req.user.removeToken(req.token).then((user) => {
        console.log('1234', user);
        if (!user) {
            return res.status(400).send();
        }
        res.send();
    }).catch(err => {
        console.log('234')
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});
