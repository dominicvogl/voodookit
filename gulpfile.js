//
// Gulp Configuration
//------------------------------------------------------------------------

// Include gulp
var
   gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   concat = require('gulp-concat'),
   sass = require('gulp-sass'),
   watch = require('gulp-watch'),
   plumber = require('gulp-plumber'),
   rename = require("gulp-rename");

// Compile SASS files
gulp.task('styles', function () {

   // Foundation 5
   gulp.src(['src/scss/app.scss'])
      .pipe(plumber())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(gulp.dest('css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('css'));

});

var filelist = [

   // Foundation Stuff
   //'src/js/libs/foundation/foundation.js',
   //'src/js/libs/foundation/foundation.abide.js',
   //'src/js/libs/foundation/foundation.accordion.js',
   //'src/js/libs/foundation/foundation.alert.js',
   //'src/js/libs/foundation/foundation.clearing.js',
   //'src/js/libs/foundation/foundation.dropdown.js',
   //'src/js/libs/foundation/foundation.equalizer.js',
   //'src/js/libs/foundation/foundation.interchange.js',
   //'src/js/libs/foundation/foundation.joyride.js',
   //'src/js/libs/foundation/foundation.magellan.js',
   //'src/js/libs/foundation/foundation.offcanvas.js',
   //'src/js/libs/foundation/foundation.orbit.js',
   //'src/js/libs/foundation/foundation.reveal.js',
   //'src/js/libs/foundation/foundation.slider.js',
   //'src/js/libs/foundation/foundation.tab.js',
   //'src/js/libs/foundation/foundation.tooltip.js',
   //'src/js/libs/foundation/foundation.topbar.js',

   // Your Own Stuff
   'src/js/libs/custom/fastclick.js',
   'src/js/libs/custom/jquery.min.js',
   'src/js/libs/custom/modernizr.js',
   'src/js/custom/custom.js'

];

// Concatenate & Minify JS
gulp.task('scripts', function () {
   gulp.src(filelist)
      .pipe(plumber())
      .pipe(concat('/app.js'))
      .pipe(gulp.dest('js'))
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('js'))
});

// Watch files for changes
gulp.task('watch', function () {
   gulp.watch('src/scss/**/*.scss', ['styles']);
   gulp.watch('src/js/**/*.js', ['scripts']);
});

// Default Task
gulp.task('default', ['styles', 'watch']);