module.exports = function (grunt) {
  return {
    'options': {
      'transform': ["babelify"]
    },
    'dist': {
      'src': ['./assets/js/**/*.js'],
      'dest': './assets/js-build/main.js'
    }
  }
};
