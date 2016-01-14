Number.prototype.between  = function (a, b, inclusive) {
    var min = Math.min.apply(Math, [a,b]),
        max = Math.max.apply(Math, [a,b]);
    return inclusive ? this >= min && this <= max : this > min && this < max;
};


// eine geschickte schnelle treffer suche wäre nice

var fs = require('fs');

var EXTRACT_UNICODE_REGEX = /DeclareUnicodeCharacter\{(.*?)\}/g;
var matches = [];

fs.readFile('./ts1enc.dfu', function (err, data) {
  if (err) throw err;
  var match = EXTRACT_UNICODE_REGEX.exec(data);
  while (match != null) {
      matches.push(parseInt(match[1], 16));
      match = EXTRACT_UNICODE_REGEX.exec(data);
  }
  console.log(matches.length);

  if (matches.length >= 1) {
    console.log('module.exports = [');
    for (var i = 0; i < matches.length; i++) {
      console.log(matches[i] + ',     // ' + String.fromCharCode(matches[i]) );
    }
    console.log('];\n');
  }

  // if (matches.length >= 1) {
  //   var x = 0;
  //   var next = matches[0];
  //   var ranges = [];
  //   ranges[x] = {start: next, end: next}
  //   for (var i = 1; i < matches.length; i++) {
  //     next += 1;
  //     if(matches[i] === next) {
  //       ranges[x]['end'] = next;
  //     } else {
  //       x += 1;
  //       next = matches[i];
  //       ranges[x] = {start: next, end: next}
  //     }
  //   };
  // }

  //console.log(ranges);

});
