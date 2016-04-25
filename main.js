var _ = require('lodash');
var path = require('path');

// Factory method that creates a new path-type function. Each one has a
// `sub` method, which recursively creates another path-type function for
// a subdirectory.
var _newPath = function(f) {
  return _.assign(f, {
    sub: function(kid) {
      // The subdir function is the result of partially applying this 
      // subdirectory (kid) to the parent function
      return _newPath(_.partial(this, kid));
    },
  });
};

module.exports = function(p) {
  // Create a clone of path.join (so we're not changing the system version) 
  // and then add the `sub` method.
  var cp = _.bind(path.join, null, p);
  return _newPath(cp, null);
};
