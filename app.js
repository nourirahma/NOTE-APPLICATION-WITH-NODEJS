const fs = require('fs')
const yargs = require('yargs')
const note = require('./note')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

let command = argv._[0]

if (command === 'add') {
    let {title, body} = {title: argv.title,body: argv.body }
    note.addNote(title,body)
}else if (command === 'read') {
    let title = argv.title
    note.findNote(title)
}else if (command === 'list') {
    console.log(note.listNotes())
}else if (command === 'remove') {
    let title = argv.title
    note.deleteNote(title)
}