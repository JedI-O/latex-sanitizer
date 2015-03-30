// eine geschickte schnelle treffer suche wäre nice

var fs = require('fs')

var EXTRACT_UNICODE_REGEX = /TextSymbol{(.*?)}/g;
var matches = [];

fs.readFile('./textcomp.txt', function (err, data) {
  if (err) throw err;
  var match = EXTRACT_UNICODE_REGEX.exec(data);
  while (match != null) {
      matches.push(match[1]);
      match = EXTRACT_UNICODE_REGEX.exec(data);
  }
  console.log(matches.length);

  for (var i = 0; i < matches.length; i++) {
    console.log(matches[i]);
  };

  // matches.sort(function(a, b) {
  //   return a - b;
  // });

  // if (matches.length >= 1) {
  //   console.log('module.exports = [');
  //   for (var i = 0; i < matches.length; i++) {
  //     console.log(matches[i] + ',  // ' + String.fromCharCode(matches[i]));
  //   };
  //   console.log('];\n');
  // }

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
