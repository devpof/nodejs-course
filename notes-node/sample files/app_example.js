console.log('Starting app.js');
//require
//loads a module
//loads a 3rd party extension
//loads own files

const fs = require('fs');
const os = require('os');
// var user = os.userInfo();
// console.log(user);

//loads a file
const notes = require('./notes.js');
// var res = notes.addNote();
// console.log('Result:', notes.add(9,-2));

//_ = common name of lodash utility library
const _ = require('lodash');
// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
var filteredArray = _.uniq(['Me',1,'Philip',1,2,3,4]);
console.log(filteredArray);

//ES6 Template String Starts and Ends with ``
//variable will be enclosed in ${}
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.\r\n`, function (err) {
//   if(err) {
//     console.console.log('Unable to write to file.');
//   }
// });
