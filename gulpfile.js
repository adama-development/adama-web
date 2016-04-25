var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var prettify = require('gulp-jsbeautifier');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var lesshint = require('gulp-lesshint');
var autoprefixer = require('gulp-autoprefixer');
var templateCache = require('gulp-angular-templatecache');

require('gulp-release-tasks')(gulp);

var config = {
	applicationUrl : 'http://localhost:3000',
	mainPath : './src/',
	targetPath : './dist/'
};

var onError = function(err) {
	plugins.notify.onError({
		title : 'Gulp',
		subtitle : 'Failure!',
		message : 'Error: <%= error.message %>',
		sound : 'Pop'
	})(err);
	this.emit('end');
};

gulp.task('clean', function() {
	return gulp.src(config.targetPath, {
		read : false
	}).pipe(clean());
});

gulp.task('js', function() {
	var jsPipe = gulp.src([ config.mainPath + 'js/app.js', config.mainPath + 'js/**/*.js' ]) //
	.pipe(plugins.plumber({
		errorHandler : onError
	})) //
	.pipe(jshint()) //
	.pipe(jshint.reporter('jshint-stylish')) //
	.pipe(jscs()) //
	.pipe(jscs.reporter()) //
	.pipe(browserSync.stream()); //
	if (gutil.env.type === 'production') {
		jsPipe = jsPipe.pipe(prettify()) //
		.pipe(gulp.dest(config.mainPath + 'js')) //
		// angular annotation
		.pipe(ngAnnotate());

		// Concat version
		jsPipe.pipe(sourcemaps.init()) //
		.pipe(concat('adama-web.js')) //
		.pipe(sourcemaps.write('./')) //
		.pipe(gulp.dest(config.targetPath));

		// Concat and minified version
		jsPipe.pipe(sourcemaps.init()) //
		.pipe(concat('adama-web-min.js')) //
		.pipe(uglify()) //
		.pipe(sourcemaps.write('./')) //
		.pipe(gulp.dest(config.targetPath));

		// export template
		gulp.src(config.mainPath + 'js/**/*.html') //
		.pipe(templateCache('adama-web-templates.js', {
			root : 'adama-web/',
			module : 'adama-web'
		})) //
		.pipe(gulp.dest(config.targetPath));
	}
	return jsPipe;

});

gulp.task('css', function() {
	var cssPipe = gulp.src([ config.mainPath + 'less/adama-web.less' ]) //
	.pipe(plugins.plumber({
		errorHandler : onError
	})) //
	.pipe(lesshint()) //
	.pipe(lesshint.reporter()) //
	.pipe(less()) //
	.pipe(autoprefixer({
		browsers : [ 'last 2 versions', 'safari > 5' ]
	})) //
	.pipe(gulp.dest(config.targetPath)) //
	.pipe(browserSync.stream()); //
	if (gutil.env.type === 'production') {
		cssPipe.pipe(sourcemaps.init()) //
		.pipe(cssnano()) //
		.pipe(rename({
			suffix : '.min'
		})) //
		.pipe(sourcemaps.write('./')) //
		.pipe(gulp.dest(config.targetPath));
	}
	return cssPipe;
});

gulp.task('serve', [ 'js', 'css' ], function() {
	browserSync.init({
		server : {
			baseDir : [ 'demo' ],
			routes : {
				'/adama-web' : config.mainPath + 'js/',
				'/dist' : 'dist',
				'/mocks' : 'mocks',
				'/node_modules' : 'node_modules',
				'/vendor-no-npm' : 'vendor-no-npm'
			}
		},
		open : false
	});

	gulp.watch('demo/**').on('change', browserSync.reload);
	gulp.watch('mocks/**').on('change', browserSync.reload);
	gulp.watch(config.mainPath + 'js/**/*.html').on('change', browserSync.reload);
	gulp.watch([ config.mainPath + 'js/**/*.js' ], [ 'js' ]);
	gulp.watch([ config.mainPath + 'less/**/*.less' ], [ 'css' ]);
});

gulp.task('default', [ 'serve' ]);
