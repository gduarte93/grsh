/**
 *  @param {string} a - A string you want to capitalize
 *  @param {number} [n] - A positive integer; will capitalize the first n chars of a string
 *      If not provided, then will capitalize the entire string.
 *  @param {boolean} [b] - If true, will grow each word instead of the string as a whole
 *
 *  @example
 *      grow('hello, world.')          // HELLO, WORLD.
 *      grow('hello, world.', 1)       // Hello, world.
 *      grow('hello, world.', 1, true) // Hello, World.
 */
function grow(a, n, b) {
    var type = typeof a;

    if (type === 'string') {
        return growStr(a, n, b);
    }

    throw "ERROR: do not know how to grow " + type;
}

function growStr(str, n, b) {
    if (typeof n === 'number') {
        if (b === true) {
            var ary  = str.match(/\w+\W+/g),
                gAry = ary.map(word => growStrSome(word, n));
            
            return gAry.join('');
        } else {
            return growStrSome(str, n);
        }
    } else {
        return str.toUpperCase();
    }
}

function growStrSome(a, n) {
    return growStr(a.slice(0, n)).concat(a.slice(n));
}

module.exports = grow;
