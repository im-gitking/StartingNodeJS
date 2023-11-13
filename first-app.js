// to import fs - file system, that can access files in the device
const fs = require('fs');

// creating new file named "hello.txt" and writing some text inside it.
// writeFileSync(fileName, 'content inside it') --> if file not present then create or if present then update 
fs.writeFileSync('hello.txt', 'Hello fro Node.JS');
// test