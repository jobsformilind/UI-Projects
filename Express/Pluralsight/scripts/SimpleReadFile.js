var message = "Hello there";
console.log(message);
//----------------------------

var fs = require('fs');
var content = fs.readFileSync('SimpleReadFile.js', 'utf-8');
console.log(content);
//----------------------------

fs.readFile('SimpleReadFile.js', 'utf-8', onFileRead);

function onFileRead(err, data) {
    console.log(content);
}
//----------------------------
