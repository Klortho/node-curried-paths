var curriedPath = require('../main.js');
var process = require('process');


// Curried path for the current working directory
var work = curriedPath(process.cwd());
console.log(
  'work: ' + work() + '\n' +
  'sub: ' + work('sub') + '\n' +
  'sub/sub: ' + work('sub', 'sub') + '\n' +
  'up: ' + work('..', '..')
);

// Create another path function based on work:
var sub = work.sub('sub');
console.log(
  'sub: ' + sub() + '\n' +
  'sub/sub: ' + sub('sub') + '\n' +
  'up: ' + sub('..', '..')
);
