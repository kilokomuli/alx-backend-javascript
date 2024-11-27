const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '' && !line.startsWith('firstname'));
      if (lines.length === 0) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      console.log(`Number of students: ${lines.length}`);

      const fields = {};
      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });
      for (const [field, students] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
