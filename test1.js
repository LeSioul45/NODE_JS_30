// Fichier ex030/test1.js
var fs = require('fs'), filenames;
filenames = fs.readdirSync(".");
for (var i = 0; i < filenames.length; i++) {
    console.log(filenames[i]);
}
console.log("Ready.");
