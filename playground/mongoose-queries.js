
// this is newTodoApp database path
const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');

const { Todo } = require('../server/models/todo');

// find all the doc with array format
// Todo.find().then((doc) => {
//     console.log(doc);
// });

const id = '6037e86f1a97c653dcb761d7';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not found')
// } else {
//     // both findOne and findByid are getting same format data. So findById is easy one for
//     // perform this find operation
//     Todo.findOne({
//         _id: id
//     }).then((doc) => {
//         console.log(`find one todo ${todo}`);
//     });

//     Todo.findById(id).then((todo) => {
//         console.log(`find by id ${todo}`);
//     });
// }

// Todo.findById(id).then((todo) => {
//     console.log(`find by id ${todo}`);
// }).catch((err) => {
//     console.log(`Unable to saved todo ${JSON.stringify(err, undefined, 2)} `);
// });



