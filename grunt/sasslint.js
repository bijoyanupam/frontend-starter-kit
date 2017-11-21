module.exports = function (grunt) {
  return {
    'options': {
      'cacheConfig': true,
      'configFile': '.sass-lint.yml',
      'formatter': 'stylish'
    },
    'target': ['./assets/scss/**/*.scss']
  }
};
