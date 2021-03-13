
// const { SHA256 } = require('crypto-js');

const bcrypt = require('bcryptjs');

const password = 'allisgood**7';
let hashValue;
bcrypt.genSalt(11, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('hash', hash);
        hashValue = hash;
        bcrypt.compare(password, hashValue, (err, res) => {
            console.log(res);
        });
    });
});



// const jwt = require('jsonwebtoken');
// const data = {
//     id: 10
// };
// const token = jwt.sign(data, 'abc123'); // sign method used to get token 
// const decoded = jwt.verify(token, 'abc123') // seconde argument is secret
// console.log(token);
// console.log(decoded);

// const message = 'I am user number 3';
// const hash = SHA256(message).toString();
// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// const data = {
//     id: 4
// };

// const token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();

// const resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('data was not changed');
// } else {
//     console.log('data was changed. Do not trust!');
// }


/**
 * bcrypt - it is an algorithm and it is super secure and  it has salting built in.
 */


