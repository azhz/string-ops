/**
 * Function to check if given string contains a given substring
 */
exports.contains = function(src, substring) {
    return src.indexOf(substring) > -1;
};

/**
 * Function to check if given string contains a given substring ignoring case
 */
exports.containsIgnoreCase = function(src, substring) {
    return exports.contains(src.toLowerCase(), substring.toLowerCase());
};

/**
 * Function to count number of occurrences of a substring
 */
exports.countMatches = function(src, substring) {
    return (src.match(new RegExp(substring, 'g')) || []).length;
};

/**
 * Function to check whether given string ends with given substring
 */
exports.endsWith = function(src, substring) {
    return (src.length - src.indexOf(substring)) === substring.length;
};

/**
 * Function to check whether given string ends with given substring ignoring case
 */
exports.endsWithIgnoreCase = function(src, substring) {
    return (src.length - (src.toLowerCase().indexOf(substring.toLowerCase()))) === substring.length;
};

/**
 * Function to check whether given string starts with given substring
 */
exports.startsWith = function(src, substring) {
    return src.indexOf(substring) === 0;
};

/**
 * Function to check whether given string starts with given substring ignoring case
 */
exports.startsWithIgnoreCase = function(src, substring) {
    return src.toLowerCase().indexOf(substring.toLowerCase()) === 0;
};

/**
 * Function to capitalize first letter of a given string
 */
exports.capitalize = function(src) {
    return src.charAt(0).toUpperCase() + src.slice(1);
};

/**
 * Function to check whether given string contains whitespace characters
 */
exports.containsWhitespace = function(src) {
    return (src.match(/\s/g) || []).length > 0;
};

/**
 * Function to delete all the whitespace characters
 */
exports.deleteWhitespace = function(src) {
    return src.replace(/\s/g, '');
};

/**
 * Function to check string equality
 */
exports.equals = function(firstStr, secondStr) {
    return firstStr == secondStr;
}

/**
 * Function to check string equality ignoring case
 */
exports.equalsIgnoreCase = function(firstStr, secondStr) {
    return firstStr.toLowerString() == secondStr.toLowerCase();
}
