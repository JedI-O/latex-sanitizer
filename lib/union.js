var _ = require('lodash');
var t1 = require('./t1');
var t2 = require('./ts1');


matches = _.union(t1, t2).sort(function(a, b) {
  return a - b;
});

if (matches.length >= 1) {
  console.log('module.exports = [');
  for (var i = 0; i < matches.length; i++) {
    console.log(matches[i] + ',     // ' + String.fromCharCode(matches[i]) );
  };
  console.log('];\n');
}