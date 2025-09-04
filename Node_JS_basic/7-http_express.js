import express from 'express';
import countStudents from './3-read_file_async';

const database = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let output = '';
  const originalConsoleLog = console.log;

  console.log = (msg) => { output += `${msg}\n`; };

  countStudents(database)
    .then(() => {
      console.log = originalConsoleLog;
      res.type('text/plain').status(200)
        .send(`This is the list of our students\n${output}`);
    })
    .catch(() => {
      console.log = originalConsoleLog;
      res.type('text/plain').status(200)
        .send('This is the list of our students\nCannot load the database');
    });
});

app.use((req, res) => {
  res.status(404).type('text/plain').send('Not Found');
});

// Écoute sur le port 1245
app.listen(1245);

export default app;
