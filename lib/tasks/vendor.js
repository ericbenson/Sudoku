module.exports = function($, gulp, paths){

	return {
		dev: function(){

			return $.bower()
				.pipe(gulp.dest(paths.build.dir.vendor));

		}

	}

}