// Fichier ex03/test2.js
var fs = require('fs'), processId;
fs.readdir(".", function (err, filenames) {
    for (var i = 0; i < filenames.length; i++) {
        console.log(filenames[i]);
    }
});
console.log("Ready.");
