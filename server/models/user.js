// User
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: value => `${value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]

});
// instance method
// here, we can customize the return values for user 
UserSchema.methods.toJSON = function () {
    const user = this;
    // const userObject = user.toObject();
    return _.pick(user, ['_id', 'email']);
}

// instance method
// UserSchema.method // this method is a object which can used to add any method
// we can access individual documents in this method
// 'this' keyword does not work in arror function that's why we used function keyword
UserSchema.methods.generateAuthToken = function () {
    const user = this;
    const access = 'auth';
    const token = jwt.sign({ _id: user._id.toHexString(), access }, process.env.JWT_SECRET).toString();
    console.log('token -> ', token)
    user.tokens = user.tokens.concat([{ access, token }]);
    return user.save().then(() => {
        return token;
    });
}

// instance method
// $pull is used to remove the specific field
UserSchema.methods.removeToken = function (token) {
    let user = this;
    return user.update({
        $pull: {
            tokens: {
                token
            }},
    });
}

UserSchema.statics.findByToken = function (token) {
    const User = this;
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        return User.findOne({
            '_id': decoded,
            'tokens.access': 'auth',
            'tokens.token': token
        });
    } catch (e) {
        return Promise.reject();
        // return new Promise((resolve, reject) => {
        //     reject()
        // });
    }
}

// Pre middleware functions are executed one after another, when each middleware calls next.
UserSchema.pre('save', function (next) {
    let user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

UserSchema.statics.findByUserCredentials = function (email, password) {
    let User = this;
    return User.findOne({ email }).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        return new Promise((resolve, reject) => {
            // user.password is hash sting for user password
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    resolve(user);
                } else {
                    reject(err);
                }
            });
        });
    });
};

const User = mongoose.model("User", UserSchema);
module.exports = { User };

const user = new User({
    email: " chiyaanRanjith@gmail.com "
});

// user.save().then((doc) => {
//     console.log(`Saved user ${JSON.stringify(doc, undefined, 2)}`);
// }, (err) => {
//     console.log(`Unable to save the user ${err}`);
// });