var _ = require('lodash');
var ascii = require('./asciiEncodingGenerator');
var t1 = require('./t1');
var textcomp = require('./textcomp');


matches = _.union(ascii, t1, textcomp).sort(function(a, b) {
  return a - b;
});

if (matches.length >= 1) {
  console.log('module.exports = [');
  for (var i = 0; i < matches.length; i++) {
    console.log(matches[i] + ',     // ' + String.fromCharCode(matches[i]) );
  };
  console.log('];\n');
}
