'use strict';

var paramRegExp = /\$([\$&`']|\d{1,2})/g;

module.exports = function matchReplace(str, regexp, replacement) {
  var matches = (str || '').match(regexp);
  if (!matches) return false;
  return replacement.replace(paramRegExp, function(m, p1) {
    if (p1 === '$') return p1;
    if (p1 === '&') return matches[0];
    if (p1 === '`') return str.substr(0, matches.index);
    if (p1 === '\'') return str.substr(matches.index + matches[0].length);
    var i = parseInt(p1, 10);
    if (i > 0 && i < matches.length) return matches[i];
    return m;
  });
};
