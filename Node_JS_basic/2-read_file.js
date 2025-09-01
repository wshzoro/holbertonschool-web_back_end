const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
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

  // Afficher les champs dans l'ordre exact d'apparition dans le CSV
  const fieldOrder = [];
  students.forEach(line => {
    const field = line.split(',').pop().trim();
    if (!fieldOrder.includes(field)) fieldOrder.push(field);
  });

  fieldOrder.forEach(field => {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
    );
  });
}

module.exports = countStudents;
