module.exports = function (grunt) {
  return {
    'options': {
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
