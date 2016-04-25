# curried-paths

This lets you create functions that behave similarly to path.join(), rooted at 
specified directories. You can then create new functions, recursively, for 
subdirectories.

For example:

```javascript
var curriedPath = require('curried-path');
var process = require('process');

// Curried path for the current working directory
var work = curriedPath(process.cwd());
work();               //=>  string representation of cwd
work('sub');          //=>  `cwd`/sub
work('sub', 'sub');   //=>  `cwd`/sub/sub
work('..', '..');     //=>  grandparent of `cwd`

// Create a new function for a subdirectory
var test = work.sub('test');
test();                  //=> `cwd`/test
test('sub1', 'sub2');    //=> `cwd`/test/sub1/sub2
```
