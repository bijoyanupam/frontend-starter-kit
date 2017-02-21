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

    grunt.initConfig({
        // CSS build configurations.
        sasslint: {
            options: {
                cacheConfig: true,
                configFile: 'sass-lint.yml',
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
                    src: ['*.scss'],
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

    // Load the npm plugins.
    grunt.task.loadNpmTasks('grunt-sass-lint');
    grunt.task.loadNpmTasks('grunt-sass');
    grunt.task.loadNpmTasks('grunt-postcss');

    // Register tasks.
    grunt.task.registerTask('build', ['sasslint', 'sass', 'postcss']);
};
