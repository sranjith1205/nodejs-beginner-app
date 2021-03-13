const { MongoClient, ObjectID} = require('mongodb');

let objId = new ObjectID(); // this is similar to document object id

console.log(objId);

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, function (err, client) {

    if (err) {
        return console.log("Unable to connect Mongodb Server", err);
    }

    console.log('Connectd to Mongodb Server');
    const db = client.db("TodoApp");
     
    // db.collection('Todos').insertOne({
    //     text: 'Something  to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // here, we set own _id for users collection
    // db.collection('Users').insertOne(
    //     {name: 'ranjith', age: 24, location: 'India'},
    //     (err, result) => {
    //         if (err) {
    //             console.log("Unable to inset user", err);
    //         }
    //         console.log(result.ops)
    //     });

    // insert a new doc into Users collection 
    db.collection('Users').insertOne(
        {name: 'logesh', age: 26, location: 'India'},
        (err, result) => {
            if (err) {
                console.log("Unable to inset user", err);
            }
            console.log(result.ops[0]._id.getTimestamp())
        });





    client.close();
});