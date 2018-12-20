const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return onsole.log('Unable to connect to Mongo');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c1be7c23ea03ce9681b0f0c')
    }, 
    {   $set : { completed : true } }, 
    {   returnOriginal : false }
    ).then((result) => {
        console.log(result);
    });

    client.close;
});