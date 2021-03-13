
// this is newTodoApp database path
const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');

const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');



const id = '6037e86f1a97c653dcb761d7';

// {} - it will remove all the documents in the User
// User.remove({}).then((doc) => {
//     console.log(doc);
// })

// if (!ObjectID.isValid(id)) {
//     console.log('ID not found')
// }

// Todo.findOneAndRemove({ _id: id }).then((todo) => {
//     console.log(`find by id ${todo}`);
// });

// Todo.findByIdAndRemove(id).then((todo) => {
//     console.log(`Removed ${todo}`);
// }).catch((err) => {
//     console.log(`Id not found ${err} `);
// });



