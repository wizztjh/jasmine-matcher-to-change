# Generated on 2014-07-19 using generator-bower 0.0.1
'use strict'

mountFolder = (connect, dir) ->
    connect.static require('path').resolve(dir)

module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  yeomanConfig =
    src: 'src'
    dist : 'dist'
  grunt.initConfig
    yeoman: yeomanConfig
    coffee:
      dist:
        files: [
          expand: true
          cwd: '<%= yeoman.src %>'
          src: '{,*/}*.coffee'
          dest: '<%= yeoman.dist %>'
          ext: '.js'
        ]
    uglify:
      build:
        src: '<%=yeoman.dist %>/jasmine-matcher-to-change.js'
        dest: '<%=yeoman.dist %>/jasmine-matcher-to-change.min.js'
    mochaTest:
      test: 
        options: 
          reporter: 'spec'
          compilers: 'coffee:coffee-script'
        src: ['test/**/*.coffee']

    jasmine_node:
      options:
        forceExit: true,
        match: '.'
        matchall: false,
        extensions: 'js'
        specNameMatcher: 'spec'
        jUnit:
          # report: true
          # savePath : "./build/reports/jasmine/"
          useDotNotation: true
          consolidate: true
      all: ['test/']

  grunt.loadNpmTasks('grunt-jasmine-node')

  grunt.registerTask 'default', [
    'jasmine_node'
    'coffee'
    'uglify'
  ]
