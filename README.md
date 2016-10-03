# string-ops

string-ops is a simple nodejs module for all the possible string operations out there.

## Usage

Clone the github repository to your local machine, copy the string-ops folder to your node-modules and require it in your nodejs app.

Example:
```
var s = require('./node-modules/string-ops');
var containsHi = s.contains('Hi there!', 'Hi');
```

This package is not yet released on npm so you won't be able to ```npm install``` yet for using it right away.
This section will be updated once package is released.

## To-Do
1. Capitalize - To return the current String with the first letter changed to title case.
2. Format - To treat the current string as a pattern that should be used for substitution.
3. Repeat - To return the current String repeated the specified number of times using the specified separator to separate the repeated Strings.

## License

string-ops.js is distributed under the [MIT](https://github.com/azhz/string-ops/blob/master/LICENSE) license.
