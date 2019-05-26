/**
 *  @param {string} a - A string you want to lowercase
 *  @param {number} [n] - A positive integer; will lowercase the first n chars of a string
 *      If not provided, then will lowercase the entire string.
 *  @param {boolean} [b] - If true, will shrink each word instead of the string as a whole
 *
 *  @example
 *      shrink('HELLO, WORLD.')          // hello, world.
 *      shrink('HELLO, WORLD.', 1)       // hELLO, WORLD.
 *      shrink('HELLO, WORLD.', 1, true) // hELLO, wORLD.
 */
function shrink(a, n, b) {
    var type = typeof a;

    if (type === 'string') {
        return shrinkStr(a, n, b);
    }

    throw "ERROR: do not know how to shrink " + type;
}

function shrinkStr(str, n, b) {
    if (typeof n === 'number') {
        if (b === true) {
            var ary  = str.match(/\w+\W+/g),
                gAry = ary.map(word => shrinkStrSome(word, n));
            
            return gAry.join('');
        } else {
            return shrinkStrSome(str, n);
        }
    } else {
        return str.toLowerCase();
    }
}

function shrinkStrSome(a, n) {
    return shrinkStr(a.slice(0, n)).concat(a.slice(n));
}

module.exports = shrink;
