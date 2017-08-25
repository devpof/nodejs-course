// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
//parses proccess.argv
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true, //demand = tells yargs if argument is required
  alias: 't' //shortcut in arguments run command in terminal using this syntax "-t" instead of "--title"
};

const bodyOptions = {
  describe: 'The body of note',
  demand: true,
  alias: 'b'
};

// const argv = yargs.argv;
//below will have the arguments required.
const argv = yargs
  //shorthand version of those commands:
  //assuming titleOptions is named title as well. ES6 syntax.
  //.command('add','Text Here', {title, body});
  .command('add','Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list','List all notes')
  .command('read','Read a note', {
    title: titleOptions
  })
  .command('remove','Remove a note', {
    title: titleOptions
  })
  //sets up yargs to provide useful information cmd line syntax: node <jsFile> [optional: <command>]--help
  .help()
  .argv;
//list is in the 2 index
// console.log('Process', process.argv);
// console.log('Yargs', argv);
// var command = process.argv[2];
//gets the first command in the argv
var command = argv._[0];
// console.log('Command: ',  command);
// console.log('Yargs', argv);

if (command === 'add') {
  // console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  //you can use lodash _.isObject(note) in the if statement
  if (note) {
    console.log('Note Created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  // console.log('Listing all notes');
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  // console.log('Reading note');
  var note = notes.getNote(argv.title);
  if(note) {
    console.log('Note Found');
    notes.logNote(note);
  } else {
    console.log(`Note Tile "${argv.title}" not found`);
  }
} else if (command === 'remove') {
  // console.log('Removing note');
  var noteRemoved = notes.removeNote(argv.title);
  //ternary operator
  var message = noteRemoved ? 'Note was removed.' : 'Note not found';
  console.log(message);
} else {
  console.log('Command Not Recognize');
}
