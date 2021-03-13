const { MongoClient, ObjectID } = require('mongodb');

const url = "mongodb://localhost:27017/TodoApp"

MongoClient.connect(url, (err, client) => {

    if (err) {
        return console.log("Unable to connect Mongodb Server", err);
    }

    console.log('Connectd to Mongodb Server');

    const db = client.db("TodoApp");

    // db.collection("Todos").findOneAndUpdate(
    //     { _id: ObjectID("6036631ca859bc9e4be898cf") },
    //     { $set: {completed: true} },
    //     { returnOriginal: false }
    // ).then(res => {
    //     console.log(res);
    // });

    // db.collection("Users").findOneAndUpdate(
    //     { _id: new ObjectID("603658bd2637f80830c76b21") },
    //     { $set: { name: "deva" } },
    //     { returnOriginal: false }
    // ).then(res => {
    //     console.log(res);
    // });

    // db.collection("Users").findOneAndUpdate(
    //     { name: "deva" },
    //     { $inc: { age: 1 } },
    //     { returnOriginal: false }
    // ).then(res => {
    //     console.log(res);
    // });

    // db.collection('market').insertOne(
    //     {
    //         name: 'logesh', age: 26,
    //         vegetables:
    //             [
    //                 { v_name: "carrot", available_wght: ["gm"] },
    //                 { v_name: "potato", available_wght: ["gm", "kg"] }
    //             ]
    //     },
    //     (err, result) => {
    //         if (err) {
    //             console.log("Unable to inset user", err);
    //         }
    //         console.log(result.ops[0]._id.getTimestamp())
    //     });


    // db.collection('market').updateOne(
    //     { name: 'logesh' },
    //     { $push: {
             
    //     }}

    // )


    // db.collection('students').insertOne(
    //     {name: 'joe', age: 26, scores: [89]},
    //     (err, result) => {
    //         if (err) {
    //             console.log("Unable to inset user", err);
    //         }
    //         console.log(result.ops);
    //     });

        // db.collection('market').updateOne(
        //     { name: "joe" },
        //     { $push: { 
        //         scores: { $each: [ 90, 92, 85 ] } }}
        // ).then((res) => {
        //     console.log(res)

        // }).catch(e => {
        //     console.log('err', e)
        // })

        // db.market.update(
        //     { name: "joe" },
        //     { $push: { 
        //         vegetables: {
        //             v_name: "Carrot",
        //             Available_wght: {$each: ["kg"]} 
        //         }  
        //      }
        //     }
        // ).then((res) => {
        //     console.log(res)

        // }).catch(e => {
        //     console.log('err', e)
        // })

        


});