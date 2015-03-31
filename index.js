var lescape       = require('escape-latex');
var encArray      = require('./lib/t1_textcomp.js');
var binaryIndexOf = require('./vendor/binaryIndexOf');


var sanitizeLatex = function(str){
  var text = '';
  var index = -1;

  for (var i = 0; i < str.length; i++) {
    
    //var specialChar = NON_STANDARD_REGEX.exec(str[i]);
    var char = str[i];

    if (char != null) {
      //console.log(char);
      index = binaryIndexOf.call(encArray, char.charCodeAt(0));
      if(index !== -1) {
        text += lescape(char);
      }
    } else {
      text += lescape(str[i]);
    }
  }

  return text;
}

module.exports = sanitizeLatex;
