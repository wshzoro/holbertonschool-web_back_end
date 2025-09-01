const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = express();

app.get('/students', async (req, res) => {
  res.type('text/plain');
  let output = 'This is the list of our students\n';
  try {
    const originalLog = console.log;
    let logOutput = '';
    console.log = (msg) => { logOutput += `${msg}\n`; };
    await countStudents(database);
    console.log = originalLog;
    output += logOutput.trim();
    res.send(output);
  } catch (err) {
    res.send(err.toString());
  }
});

app.listen(1245);

module.exports = app;
