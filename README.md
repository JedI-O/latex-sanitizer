# latex-sanitizer

I wanted to make sure, that a given string compiles in a latex file with a specific textencoding. The idea is that 
you give the latex-sanitizer your string and your encoding and you get a string back stat only contains allowed and escaped characters.


## How to use

````
  var sanitizeLatex = require('latex-sanitizer');

  var str = 'Hallo` \'Welt @|l€s\\ & % klar ?ß ¥ œ∑´®†¥¨ˆøπ“‘åß∂ƒ©˙∆˚¬…æΩ≈ç√∫˜µ≤≥÷';

  console.log(str);

  console.log(sanitizeLatex(str, 't1_textcomp'));

````

### Supported options

- ascii
- t1 (default)
- t1_textcomp