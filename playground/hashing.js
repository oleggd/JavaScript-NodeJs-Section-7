const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123ddd?';
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log('hash : '+ hash);
//     });
// });

var hashedPassword = '$2a$10$5utJ7BHjzS2PQXkHO/6rte7YwUT.S9xTtO2IvzgQAMP0a2v69u.2i';

bcrypt.compare(password,hashedPassword, (err, result)=>{
    console.log('result : '+result);
});
// var message = 'I am user number 5';
// var hash = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hash : ${hash}`);

// var data = {
//     id : 10
// };

// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// var token = jwt.sign(data, 'secretT0kEn');
// console.log('Token :' + token);

// var decoded = jwt.verify(token, 'secretT0kEn');
// console.log('Decoded', JSON.stringify(decoded));

// token.data.id = 5;
// token.data.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not change');
// } else {
//     console.log('Data was change. Do not trust!');
// }
