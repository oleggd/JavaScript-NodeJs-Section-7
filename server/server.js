var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text : req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});



app.listen(3000, ()=>{
    console.log('Server started on port 3000');
});



// var newTodo = new Todo ({
//     text: 'Learn lessons',
//     completed: false,
//     completedAt: 10
// });

// var newUser = new User ({
//     name : 'newUser',
//     email : 'newuser1@test.com'
// });

// newTodo.save().then((doc)=>{
//     console.log('Save todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// newUser.save().then((doc)=>{
//     console.log('Save user', doc);
//     }, (e) => {
//         console.log('Unable to save User',e);
//     }

// )
