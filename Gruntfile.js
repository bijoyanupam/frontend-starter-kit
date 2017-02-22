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
        pkg: grunt.file.readJSON('package.json'),

        // JS build configurations.
        eslint: {
            options: {
                format: 'stylish'
            },
            target: ['./assets/js/*.js']
        },

        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                },
                files: [{
                    expand: true,
                    cwd: './assets/js/',
                    src: ['**/*.js'],
                    dest: './assets/js-minified/',
                    ext: '.js'
                }]
            }
        },

        // CSS build configurations.
        sasslint: {
            options: {
                cacheConfig: true,
                configFile: '.sass-lint.yml',
                formatter: 'stylish'
            },
            target: ['./assets/scss/*.scss']
        },

        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: './assets/scss/',
                    src: ['**/*.scss'],
                    dest: './assets/css/',
                    ext: '.css'
                }]
            }
        },

        // Post CSS build configurations.
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')
                ]
            },
            dist: {
                src: './assets/css/*.css'
            }
        }
    });

    // Register tasks.
    grunt.task.registerTask('default', ['eslint', 'sasslint']);
    grunt.task.registerTask('build', ['eslint', 'uglify', 'sasslint', 'sass', 'postcss']);
};
