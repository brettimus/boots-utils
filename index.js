module.exports = {
    ajax: require("./ajax"),
    array: require("./array"),
    extend: extend,
    nully: nully,
    replaceAll: replaceAll,
};

/**
 * Tests whether value is null or undefined
 * @function esacpeRegExp
 */
function nully(x) {
    return x == null;
}

/**
 * Escapes a string for use in RegExp
 * @function esacpeRegExp
 */
function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

/**
 * Globally replaces a given string in another string
 * @function replaceAll
 * @param {stirng} [options] - RegExp options (like "i").
 **/
function replaceAll(string, toReplace, replaceWith, options) {
    options = options || "";
    var reOpts = "g" + options,
        re     = new RegExp(escapeRegExp(toReplace), reOpts);

    return string.replace(re, replaceWith);
}

/**
 * Shallow-copies an arbitrary number of objects' properties into the first argument. Applies "last-in-wins" policy to conflicting property names.
 * @function extend
 * @param {...Object} o
 */
function extend(o) {
    var args   = [].slice.call(arguments, 0),
        result = args[0];

    for (var i=1; i < args.length; i++) {
        result = extendHelper(result, args[i]);
    }

    return result;
}

/**
 * Shallow-copies one object into another.
 * @function extendHelper
 * @param {Object} destination - Object into which `source` properties will be copied.
 * @param {Object} source - Object whose properties will be copied into `destination`.
 */
function extendHelper(destination, source) {
    // thanks be to angus kroll
    // https://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
          destination[k] = source[k];
        }
    }
    return destination;
}