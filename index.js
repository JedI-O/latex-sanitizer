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

  // additional character replacements
  var charList = []; //save open chars like left quotes

  // global replacement of many space chars after each other
  var followingSpaceChars = /\s{2,}/g;
  var spaceArray;
  while ((spaceArray = followingSpaceChars.exec(str)) !== null) {
    var len = spaceArray[0].length;
    var newSpaces = '';
    for(var counter=0; counter<len; counter++) {
      newSpaces += '␣';
    }
    str = str.substr(0, spaceArray.index) + newSpaces + str.substr(spaceArray.index+len);
  }

  var find = ["€","§","²","³","©","®","™","_","<",">","ä","ö","ü","Ä","Ö","Ü","ß","␣"];
  var replace = ["\\euro{}","\\S{}","$^{2}$", "$^{3}$", "\\copyright{}","\\textregistered{}","\\texttrademark{}","\\_",
    "\\textless{}","\\textgreater{}", "\"a","\"o","\"u","\"A","\"O","\"U","\"s","~"];

  for (var i=0; i<str.length; i++) {
    
    // every char has to be checked 
    var char = str[i];
      
    // per definition all encodings are sorted lists
    // so a binary search is the fastest option
    index = binaryIndexOf.call(encoding, char.charCodeAt(0));
    if(index !== -1 && index !== 126) {
      // escape reserved latex characters
      text += lescape(char);
    }

    for(var findIndex=0; findIndex<find.length; findIndex++) {
      if(char==find[findIndex]) {
        text += replace[findIndex];
        break;
      }
    }

    if(char=="\"") {
      if(charList.indexOf("doubleQuote") == -1) {
        //add an open double quote to the charList
        charList.push("doubleQuote");
        //textbf is only an empty placeholder so that between this command and
        //the following text there is some space
        text += "\\glqq \\textbf{}";
      } else {
        //remove double quote from list
        charList = charList.splice(charList.indexOf("\""),1);
        text += "\\grqq{} ";
      }
    }
  }

  return text;
};

module.exports = sanitizeLatex;
