/**
 * Grunt configuration file.
 */

/**
 * Method to export grunt plugin configurations.
 *
 * @param {object} grunt Grunt object.
 *
 * @return void
 */
module.exports = function (grunt) {
  'use strict';

  // Load the npm plugins.
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    // JS build configurations.
    'qunit': {
      'all': {
        'options': {
          'urls': [
            'http://localhost:<%= connect.server.options.port %>/tests/js/example/example.html'
          ]
        }
      }
    },

    'eslint': {
      'options': {
        'format': 'stylish'
      },
      'target': ['./assets/js/**/*.js']
    },

    'browserify': {
      'options': {
        'transform': ["babelify"]
      },
      'dist': {
        'src': ['./assets/js/**/*.js'],
        'dest': './assets/js-build/main.js'
      }
    },

    'uglify': {
      'options': {
        'sourceMap': true,
      },
      'dist': {
        'src': ['./assets/js-build/main.js'],
        'dest': './assets/js-build/main.min.js'
      }
    },

    // CSS build configurations.
    'sasslint': {
      'options': {
        'cacheConfig': true,
        'configFile': '.sass-lint.yml',
        'formatter': 'stylish'
      },
      'target': ['./assets/scss/**/*.scss']
    },

    'sass': {
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
    },

    // Post CSS build configurations.
    'postcss': {
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
    },

    // Static webserver.
    'connect': {
      'server': {
        'options': {
          'port': 8000,
          'base': '.'
        }
      }
    }
  });

  // Register tasks.
  grunt.task.registerTask('test', ['connect', 'qunit', 'eslint', 'sasslint']);
  grunt.task.registerTask('build-js', ['connect', 'qunit', 'eslint', 'browserify', 'uglify']);
  grunt.task.registerTask('build-css', ['sasslint', 'sass', 'postcss']);
};
