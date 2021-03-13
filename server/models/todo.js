const mongoose = require("mongoose");

// todo is model name and sometimes called as collection name 
const Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = { Todo };

// const newTodo = new Todo({ text: 'Cook dinner' });
// newTodo.save().then((doc) => {
//     console.log(`Saved todo ${doc}`);
// }, (err) => {
//     console.log("Unable to save todo");
// });

// const otherTodo = new Todo({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 123
// });
// otherTodo.save().then((doc) => {
//     console.log(`Saved todo ${doc}`);
// }, (err) => {
//     console.log("Unable to save todo");
// });


// const otherTodo = new Todo({
//     text: ' Trim this text ',
// });

// otherTodo.save().then((doc) => {
//     console.log(`Saved todo ${doc}`);
// }, (err) => {
//     console.log("Unable to save todo", err);
// });
