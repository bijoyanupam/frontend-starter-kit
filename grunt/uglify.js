module.exports = function (grunt) {
  return {
    'options': {
      'sourceMap': true,
    },
    'dist': {
      'src': ['./assets/js-build/main.js'],
      'dest': './assets/js-build/main.min.js'
    }
  }
};
