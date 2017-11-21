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

  // Load the task config files.
  function loadConfig(path) {
    var glob = require('glob'),
      object = {},
      key;

    glob.sync('*', {
      'cwd': path
    }).forEach(function (option) {
      key = option.replace(/\.js$/, '');
      var gruntTask = require(path + option);
      object[key] = (typeof gruntTask == "function") ? gruntTask() : gruntTask;
    });
    return object;
  };

  // Initial config/paths.
  var config = {
    'pkg': grunt.file.readJSON('package.json')
  };

  grunt.util._.extend(config, loadConfig('./grunt/'));
  grunt.initConfig(config);

  // Load the npm plugins.
  require('load-grunt-tasks')(grunt);

  // Register tasks as npm scripts. See package.json.
  grunt.task.registerTask('test', ['connect', 'qunit', 'eslint', 'sasslint']);
  grunt.task.registerTask('build-js', ['connect', 'qunit', 'eslint', 'browserify', 'uglify']);
  grunt.task.registerTask('build-css', ['sasslint', 'sass', 'postcss']);
};
