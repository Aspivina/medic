const path = require('path');
const fs = require('fs');

let directorio = '\img';
let dirBuffer = Buffer.from(directorio);
let files = fs.readdirSync(directorio);

console.log(files);