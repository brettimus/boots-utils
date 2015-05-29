module.exports = {
    loadJSON: loadJSON,
};

/**
 * Shallow-copies an arbitrary number of objects' properties into the first argument. Applies "last-in-wins" policy to conflicting property names.
 * @function loadJSON
 * @param {string} path
 * @param {function} success
 * @param {function} error
 */
function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success) {
                    success(JSON.parse(xhr.responseText));
                }
            } else {
                if (error) {
                    error(xhr);
                }
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
    return xhr;
}