var sanitizeLatex = require('../index.js');

var str = 'Hallo Welt @|l€s klar ?ß';

console.log(str);

console.log(sanitizeLatex(str));