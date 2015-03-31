var sanitizeLatex = require('../index.js');

var str = 'Hallo` \'Welt @|l€s\\ & % klar ?ß ¥ œ∑´®†¥¨ˆøπ“‘åß∂ƒ©˙∆˚¬…æΩ≈ç√∫˜µ≤≥÷';

console.log(str);

console.log(sanitizeLatex(str, 't1_textcomp'));