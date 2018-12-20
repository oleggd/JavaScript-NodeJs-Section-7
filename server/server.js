var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text: {
        type: String
    },
    completed : {
        type: Boolean
    },
    completedAt : {
        type: Number
    }
});

var newTodo = new Todo ({
    text: 'Learn lessons',
    completed: false,
    completedAt: 10
});


newTodo.save().then((doc)=>{
    console.log('Save todo', doc);
}, (e) => {
    console.log('Unable to save todo');
});


