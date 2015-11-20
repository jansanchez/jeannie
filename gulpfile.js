/*!!
 *
 * gulpfile.js
 * @author: Jan Sanchez
 *
 */

var gulp = require('gulp'),
	coffee = require('gulp-coffee'),
	complexity = require('gulp-complexity'),
	chalk = require('chalk'),
	exec = require('child_process').exec;

gulp.task('default', function() {
	console.log('go!');
});

var path = {};

path.source = "source/";
path.dist = "dist/";


gulp.task('js', function() {
	return gulp.src(path.source + "coffee/**/**/*.coffee")
	.pipe(coffee({bare: true}))
	.pipe(gulp.dest(path.dist));
});

gulp.task('watch', function () {
	return gulp.watch(path.source + "coffee/**/**/*.coffee", ["js", "complexity", "delimiter"]);
});

gulp.task('delimiter', function () {
	console.log(chalk.magenta(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'));
	return true;
});

gulp.task('complexity', function(){
	return gulp.src(path.dist + "**/**/*.js")
	.pipe(complexity({breakOnErrors: false, halstead: [10, 13, 20]}));
});

gulp.task('watch2', function(){
	  return gulp.watch(path.dist + "package/lib/*.js", ["exec"]);
});


gulp.task('exec', function(cb){
	exec('node test/index', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});



