module.exports = function (grunt) {
  return {
    'options': {
      'implementation': require('node-sass'),
      'sourceMap': true,
      'outputStyle': 'compressed'
    },
    'dist': {
      'files': [{
        'expand': true,
        'cwd': './assets/scss/',
        'src': ['**/*.scss'],
        'dest': './assets/css/',
        'ext': '.css'
      }]
    }
  }
};
