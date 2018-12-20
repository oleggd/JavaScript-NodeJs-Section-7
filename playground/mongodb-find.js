const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return onsole.log('Unable to connect to Mongo');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    db.collection('Users').find({name : 'User5'}).count().then((count)=>{
             console.log(`Users count: ${count}`);
         }, (err) => {
             console.log('Unable to fetch todos', err);
         });

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=> {
    //     if (err) {
    //         return console.log('Unable to inset todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name: 'User1',
    //     age: 30,
    //     location:  'USA'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User'), err;
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    client.close;
});