var expect = require('expect');
var matchReplace = require('./');

describe('match-replace', function() {
  it('returns the replacement string when regexp has matched', function() {
    expect(matchReplace('meow', /meow/, 'roar')).toBe('roar');
  });

  it('returns false when regexp has not matched', function() {
    expect(matchReplace('meep', /meow/, 'roar')).toBe(false);
  });

  it('handles "$$" special replacement pattern', function() {
    expect(matchReplace('cash', /cash/, 'ca$$h')).toBe('ca$h');
  });

  it('handles "$&" special replacement pattern', function() {
    expect(matchReplace('hi there', /hi/, '$&! $&!')).toBe('hi! hi!');
  });

  it('handles "$`" special replacement pattern', function() {
    expect(matchReplace('hey yo', /yo/, '$`! you')).toBe('hey ! you');
  });

  it('handles "$n" special replacement pattern', function() {
    expect(matchReplace('hey yo', /(hey) (yo)/, '$2 $1')).toBe('yo hey');
  });

  it('doesn\'t replace "$n" where n doesn\'t match', function() {
    expect(matchReplace('hey yo', /(hey) (yo)/, '$3 $100')).toBe('$3 $100');
  });
});
