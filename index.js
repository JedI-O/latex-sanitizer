var lescape       = require('escape-latex');
var encodingList   = require('./encodings/all.js');
var binaryIndexOf = require('./vendor/binaryIndexOf');


var sanitizeLatex = function(str, encoding){
  // dynamically load the right encoding
  if (typeof encoding === 'undefined' || typeof encodingList[encoding] === 'undefined') {
    encoding = encodingList.t1;
  } else {
    encoding = encodingList[encoding];
  }

  // return string starts empty
  var text = '';
  var index = -1;

  for (var i = 0; i < str.length; i++) {
    
    // every char has to be checked 
    var char = str[i];
      
    // per definition all encodings are sorted lists
    // so a binary search is the fastest option
    if(index !== -1) {
      // escape reserved latex characters
      text += lescape(char);
    }
  }

  return text;
};

module.exports = sanitizeLatex;
