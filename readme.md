# match-replace

Retrieves a new string when matching a pattern.

## Usage

```js
matchReplace(str, regexp, replacement)
```

### Parameters

- `str` input string
- `regexp` a RegExp object or literal
- `replacement` the string that replaces the matched `regexp`

The `replacement` string can include the following special replacement patterns:

Pattern | Inserts
------- | -------
`$$` | Inserts a "$".
`$&` | Inserts the matched string.
`` $` `` | Inserts the portion of the string that precedes the matched substring.
`$'` | Inserts the portion of the string that follows the matched substring.
`$n` | Where n is a positive integer less than 100, inserts the nth parenthesized submatch string.

### Return value

A new string based on `replacement` when `regexp` has matched; `false` if if there were no matches.

## Examples

```js
import matchReplace from 'match-replace';

matchReplace('123456789', /(\n{2})(\n{3})(\n{4})/, '($0) $1-$2');
// returns "(12) 345-6789"

matchReplace('invalid data', /(\n{2})(\n{3})(\n{4})/, '($0) $1-$2');
// returns false
```
