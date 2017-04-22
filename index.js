'use strict';

var paramRegExp = /\$(\$|&|\d{2})/g;

module.exports = function matchReplace(str, regexp, replacement) {
  var matches = (str || '').match(regexp);
  if (!matches) return false;
  return replacement.replace(paramRegexp, function(m, p1) {
    if (p1 === '$') return p1;
    if (p1 === '&') return matches[0];
    var i = parseInt(p1, 10);
    if (i > 0 && i < matches.length) return matches[i];
    return m;
  });
};
