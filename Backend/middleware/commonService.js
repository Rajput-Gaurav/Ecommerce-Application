// Create fuction too check value is undefiend or null:
exports.isUndefinedOrNull = _isUndefinedOrNull;

function _isUndefinedOrNull(value) {
    if( value == "undefined" || value == null || value == "") {
        return true;
    } else {
        return false;
    }
}