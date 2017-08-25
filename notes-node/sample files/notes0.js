console.log('Starting notes.js');
//Every js files has access to module object.
//exports = object property in module
//app.js will have the module for this through the const declaration
//of the notes.js
// console.log(module);

module.exports.age = 28;
module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note';
}

module.exports.add = (a, b) => {
  console.log('add function initialized.');
  return a + b;
}
