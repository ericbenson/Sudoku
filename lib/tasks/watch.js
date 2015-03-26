module.exports = function($, gulp, paths){

	return {
		dev: function(){
			gulp.watch(paths.client.js,   ['js:dev'    ]);
			gulp.watch(paths.client.css,  ['css:dev'   ]);
			gulp.watch(paths.client.index, ['inject:dev']);
		}

	}

}