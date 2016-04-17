var path = require('path');
var wallabify = require('wallabify');

module.exports = function (wallaby) {

  var wallabyPostprocessor = wallabify({
      paths: [path.join(wallaby.projectCacheDir, 'src')]
    }
    // you may also pass an initializer function to chain other
    // browserify options, such as transformers
    // , b => b.exclude('mkdirp').transform(require('babelify'))
  );

  return {
    // set `load: false` to all of the browserified source files and tests,
    // as they should not be loaded in browser, 
    // their browserified versions will be loaded instead
    files: [
      {pattern: 'src/*.js', load: false}
    ],

    tests: [
      {pattern: 'test/*Spec.js', load: false}
    ],

    postprocessor: wallabyPostprocessor,

    bootstrap: function () {
      // required to trigger tests loading 
      window.__moduleBundler.loadTests();
    }
  };
};
