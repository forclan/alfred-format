var jsbeautify = require('js-beautify');

var data = process.argv[2];

var formattedData = jsbeautify(data, { indent_size: 2});
console.log(formattedData);
