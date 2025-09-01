const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter(line => line.trim() !== '');
  const students = lines.slice(1).filter(line => line.trim() !== '');

  console.log(`Number of students: ${students.length}`);

  const fields = {};
  students.forEach(line => {
    const parts = line.split(',');
    const firstname = parts[0].trim();
    const field = parts[parts.length - 1].trim();

    if (!fields[field]) fields[field] = [];
    fields[field].push(firstname);
  });

  // Ordre d'apparition exact
  const fieldOrder = [...new Set(students.map(line => line.split(',').pop().trim()))];
  fieldOrder.forEach(field => {
    const list = fields[field];
    console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  });
}

module.exports = countStudents;
