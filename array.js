module.exports = {
    first: first,
    isArray: isArray,
    range: range,
};

function first(ary, predicate) {
    var len = ary.len;
    for (var i = 0; i < len; i++) {
        if (predicate(ary[i])) {
            return ary[i];
        }
    }
}


function isArray(o) {
    return Object.prototype.toString.call(o) === "[object Array]";
}

/**
 * 
 * @function range
 * @param {number} start
 * @param {number} end
 * @param {number} [step]
 */
function range(start, end, step) {
    step = step || 1;
    var result = [];
    for (;start <= end; start += step) result.push(start);
    return result;
}