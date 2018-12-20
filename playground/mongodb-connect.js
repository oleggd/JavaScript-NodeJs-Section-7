const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return onsole.log('Unable to connect to Mongo');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=> {
    //     if (err) {
    //         return console.log('Unable to inset todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    db.collection('Users').insertOne({
        name: 'User1',
        age: 30,
        location:  'USA'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User'), err;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close;
});


// (function addHandler() {
//     var element = document.getElementById("element");
//     element.onclick = function(){
//         alert("Hello from closure!");
//     };
// })();