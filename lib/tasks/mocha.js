module.exports = function($, gulp, paths){

  return {
    dev: function(){
      return gulp.src(paths.tests.client, {read: false})
        .pipe($.browserify({
            insertGlobals: true
          }))
        .pipe($.mocha({reporter: 'nyan'}));
    }
  }
}