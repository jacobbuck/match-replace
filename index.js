'use strict';

var paramRegExp = /\$(\$|&|\d{2})/g;

module.exports = function matchReplace(str, regexp, replacement) {
  var matches = (str || '').match(regexp);
  if (!matches) return false;
  return replacement.replace(paramRegexp, function(m, p1) {
    if (p1 === '$') return p1;
    var i = p1 === '&' ? 0 : parseInt(p1);
    return i < matches.length ? matches[i] : m;
  });
};
