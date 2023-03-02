module.exports = function (grunt) {
  return {
    'options': {
      'processors': [
        require('postcss-import'),
        require('autoprefixer'),
        require('cssnano')
      ]
    },
    'dist': {
      'src': './assets/css/*.css'
    }
  }
};
