var textcomp = require('./textcomp');
var t1       = require('./ts1enc');
var x = 0;
matches = [];
console.log('[');
for (var i = 0; i < textcomp.length; i++) {
  if (char = t1[textcomp[i]]){
    
    console.log(parseInt(t1[textcomp[i]], 16) + ',     // ' + String.fromCharCode(parseInt(t1[textcomp[i]], 16)) );
  }
};
console.log(']');
