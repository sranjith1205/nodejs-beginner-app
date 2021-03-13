const { MongoClient, ObjectID } = require('mongodb');

const url = "mongodb://localhost:27017/TodoApp"

MongoClient.connect(url, (err , client) => {

    if (err) {
        return console.log("Unable to connect Mongodb Server", err);
    }
    
    console.log('Connectd to Mongodb Server');

    const db = client.db("TodoApp");

    // Delete Many or Find and Delete Many
    // db.collection("Users").deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // Delete One
    // db.collection("Users").deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // Find One and delete

    db.collection("Users").findOneAndDelete({text: 'eat lunch'}).then((result) => {
        console.log(result);
    });
});