// console.log('Starting notes.js');
//Every js files has access to module object.
//exports = object property in module
//app.js will have the module for this through the const declaration
//of the notes.js
// console.log(module);
const fs =  require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  // console.log('Adding Note', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  }
  //ES6 Arrow Functions
  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll =  () => {
  // console.log('Getting all notes');
  return fetchNotes();
};

var getNote = (title) => {
  // console.log(`Getting Note ${title}`);
  var notes = fetchNotes();
  var filteredNote = notes.filter((note) => note.title === title);
  return filteredNote[0];
};

var removeNote = (title) => {
  // console.log(`Removing Note ${title}`);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  // debugger;
  console.log('----------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  //addNote: addNote
  //getAll: getAll

  //ES6 Syntax same as above declaration
  //applies only if the property is the same name as the variable
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
