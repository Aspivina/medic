const path = require('path');
const fs = require('fs');

let directorio = 'img/0013';
let dirBuffer = Buffer.from(directorio);
let files = fs.readdirSync(directorio);

console.log(files);