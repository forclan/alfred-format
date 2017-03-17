var jsbeautify = require('js-beautify');

var formattedData = jsbeautify(process.argv[2]);
console.log(formattedData);