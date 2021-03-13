const { MongoClient, ObjectID } = require('mongodb');

const url = "mongodb://localhost:27017/TodoApp"

MongoClient.connect(url, (err , client) => {
    if (err) {
        return console.log("Unable to connect Mongodb Server", err);
    }
    console.log('Connectd to Mongodb Server');

    const db = client.db("TodoApp");

    db.collection("Todos").find().toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 3));

    }, (err) => {
        console.log("Unable to fetch the document", err);
    });

    db.collection("Todos").find({completed: true}).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 3));

    }, (err) => {
        console.log("Unable to fetch the document", err);
    });

    // If you want to filter some data, you have to use find method which is used to query those data
    db.collection("Todos").find({_id: ObjectID('603640b3483ead14883210f2')}).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 3));

    }, (err) => {
        console.log("Unable to fetch the document", err);
    });

    
    db.collection("Todos").find().count().then((count) => {
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log("Unable to fetch the document", err);
    });
});