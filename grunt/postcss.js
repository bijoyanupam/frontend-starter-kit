module.exports = function (grunt) {
  return {
    'options': {
      'processors': [
        require('autoprefixer'),
        require('postcss-import'),
        require('cssnano')
      ]
    },
    'dist': {
      'src': './assets/css/*.css'
    }
  }
};
