module.exports = function($, gulp, paths){

  return {
    dev: function(){
      var source = gulp.src(paths.client.css);
      var dest   = gulp.dest(paths.build.dir.css);

      return source
        .pipe($.plumber())
      	.pipe($.sass())
        .pipe($.concat('index.css'))
        .pipe($.plumber.stop())
        .pipe( dest );

    }

  }

}