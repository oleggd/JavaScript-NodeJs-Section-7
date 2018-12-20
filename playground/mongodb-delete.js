const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return onsole.log('Unable to connect to Mongo');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');


    // delete Many
    // db.collection('Users').deleteMany({
    //     name: 'User7'
    // }).then((result) => {
    //     console.log(result);
    // });
    //delete one 
    // db.collection('Users').deleteOne({
    //     name: 'User5'
    // }).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c19506fdecc5128c0b1aff9')
    }).then((result) => {
        console.log(result);
    });

    client.close;
});