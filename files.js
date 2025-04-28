import fs from 'fs'

const myFilename = process.argv[2];

if (!myFilename) {
  console.error('Please give a filename.');
  process.exit(1);
}

fs.readFile(myFilename, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    process.exit(1);
  }

  console.log(data);
});