var path = require('path');
var sassTrue = require('sass-true');
 
var sassFile = path.join(__dirname, 'mixins/functions.test.scss');
sassTrue.runSass({ file: sassFile }, { describe, it });