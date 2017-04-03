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
    return firstStr.toLowerCase() == secondStr.toLowerCase();
}

/**
 * Function to repeat the given string for number of characters with given separator
 */
exports.repeat = function(value, count, separator) {
	if(!separator) {
		return value.repeat(count);
	}
	var repeatedString = value;
	for(var i = 0; i < count - 1; i++) {
		repeatedString += separator + value;
	}
	return repeatedString;
}

/**
 * Function to format a string by replacing placeholders with given strings
 *
 * Example: var str = 'Hi, {0}. {1} is awesome!';
 *			var values = ['Foo', 'Bar'];
 *			var formattedString = s.format(str, values);
 *			formattedString will contain - 'Hi, Foo. Bar is awesome!'
 */
exports.format = function(value, formattingStrings) {
	var formattedString = value;
	for(var i = 0; i < formattingStrings.length; i++) {
		formattedString = formattedString.replace('{'+i+'}', formattingStrings[i]);
	}
	return formattedString;
}
