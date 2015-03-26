(function() {
  'use strict';

  /*Dependencies*/
  var lib  = require('./lib');
  var gulp = require('gulp');
  var $    = require('gulp-load-plugins')({lazy:false});
  var del  = require('del');

  /*Tasks*/

  var tasks = lib.tasks;

  //========DEV

  gulp
    .task('default',
      $.sequence( 'clean',
                  'build:dev',
                  'start:dev'
                  )); 

  gulp
    .task('clean', del.bind(null, ['build']));


  //=======BUILD

  gulp
    .task('js:dev'    ,tasks.js.dev)
    .task('css:dev'   ,tasks.css.dev)
    .task('build:dev' ,
      $.sequence('js:dev',
                 'css:dev'
                 ));

  //=======START

  gulp
    .task('vendor:dev' ,tasks.vendor.dev)
    .task('inject:dev' ,tasks.inject.dev)
    .task('watch:dev'  ,tasks.watch.dev)
    .task('start:dev'  ,
      $.sequence('vendor:dev',
                 'inject:dev',
                 'watch:dev'
                 ));

  gulp
    .task('mocha' ,tasks.mocha.dev)
    .task('karma' ,tasks.karma.dev)
    .task('test'  ,
      $.sequence('mocha',
                 'karma'
                ));


})();