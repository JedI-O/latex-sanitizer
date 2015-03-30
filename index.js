var lescape = require('escape-latex');
var encArray = require('./lib/t1.js');
var binaryIndexOf = require('./vendor/binaryIndexOf');

// %% \CharacterTable
// %%  {Upper-case    \A\B\C\D\E\F\G\H\I\J\K\L\M\N\O\P\Q\R\S\T\U\V\W\X\Y\Z
// %%   Lower-case    \a\b\c\d\e\f\g\h\i\j\k\l\m\n\o\p\q\r\s\t\u\v\w\x\y\z
// %%   Digits        \0\1\2\3\4\5\6\7\8\9
// %%   Exclamation   \!     Double quote  \"     Hash (number) \#
// %%   Dollar        \$     Percent       \%     Ampersand     \&
// %%   Acute accent  \'     Left paren    \(     Right paren   \)
// %%   Asterisk      \*     Plus          \+     Comma         \,
// %%   Minus         \-     Point         \.     Solidus       \/
// %%   Colon         \:     Semicolon     \;     Less than     \<
// %%   Equals        \=     Greater than  \>     Question mark \?
// %%   Commercial at \@     Left bracket  \[     Backslash     \\
// %%   Right bracket \]     Circumflex    \^     Underscore    \_
// %%   Grave accent  \`     Left brace    \{     Vertical bar  \|
// %%   Right brace   \}     Tilde         \~}

// REGEX to filter all charactars that are parsed without a problem
NON_STANDARD_REGEX = /[^a-zA-Z\d\s!"#\$\%&'\(\)\*\+,\-\.\/:;<=>\?@\[\\\]\^_`\{\|\}~]/g;
// All other characters have to be matches according to the fontenc

var sanitizeLatex = function(str){
  var text = '';
  var index = -1;

  for (var i = 0; i < str.length; i++) {
    
    var specialChar = NON_STANDARD_REGEX.exec(str[i]);

    if (specialChar != null) {
      index = binaryIndexOf.call(encArray, specialChar[0].charCodeAt(0));
      if(index !== -1) {
        text += lescape(specialChar);
      }
    } else {
      text += lescape(str[i]);
    }
  }

  return text;
}

module.exports = sanitizeLatex;
