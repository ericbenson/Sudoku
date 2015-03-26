module.exports = function($, gulp, paths){

	return {
		dev: function(){
      		var source = gulp.src(paths.client.js);
      		var dest   = gulp.dest(paths.build.dir.js);

      		return source
            .pipe($.jshint())
            .pipe($.jshint.reporter('default', {verbose: true}))
            .pipe($.browserify({
                insertGlobals: true
              }))
        		.pipe( dest );

   		 }
	}

}