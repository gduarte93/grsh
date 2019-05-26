Small module to grow (capitalize) or shrink (lowercase) things. Currently only working with Strings.

To use:

```javascript
var grow   = require('grsh').grow,
    shrink = require('grsh').shrink;

/**
 *  @func grow(a,n,b)
 * 
 *  @param {string} a - A string you want to capitalize
 *  @param {number} [n] - A positive integer; will capitalize the first n chars of a string
 *      If not provided, then will capitalize the entire string.
 *  @param {boolean} [b] - If true, will grow each word instead of the string as a whole
 */

// grow examples
grow('hello, world.')          // returns 'HELLO, WORLD.'
grow('hello, world.', 1)       // returns 'Hello, world.'
grow('hello, world.', 2)       // returns 'HEllo, world.'
grow('hello, world.', 1, true) // returns 'Hello, World.'
grow('hello, world.', 2, true) // returns 'HEllo, WOrld.'

/**
 *  @func shrink(a,n,b)
 * 
 *  @param {string} a - A string you want to lowercase
 *  @param {number} [n] - A positive integer; will lowercase the first n chars of a string
 *      If not provided, then will lowercase the entire string.
 *  @param {boolean} [b] - If true, will shrink each word instead of the string as a whole
 */

// shrink examples
shrink('HELLO, WORLD.')          // returns 'hello, world.'
shrink('HELLO, WORLD.', 1)       // returns 'hELLO, WORLD.'
shrink('HELLO, WORLD.', 2)       // returns 'heLLO, WORLD.'
shrink('HELLO, WORLD.', 1, true) // returns 'hELLO, wORLD.'
shrink('HELLO, WORLD.', 2, true) // returns 'heLLO, woRLD.'
```