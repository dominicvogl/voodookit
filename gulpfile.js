//
// Gulp Configuration
//------------------------------------------------------------------------

// Include gulp
var gulp = require('gulp'),

// Include gulp plugin
   uglify = require('gulp-uglify'),
   concat = require('gulp-concat'),
   sass = require('gulp-sass'),
   watch = require('gulp-watch'),
   plumber = require('gulp-plumber'),
   rename = require("gulp-rename"),
   //compass = require('gulp-compass'),
   autoprefixer = require("gulp-autoprefixer");

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
   //'src/js/foundation/foundation.js',
   //'src/js/foundation/foundation.abide.js',
   //'src/js/foundation/foundation.accordion.js',
   //'src/js/foundation/foundation.alert.js',
   //'src/js/foundation/foundation.clearing.js',
   //'src/js/foundation/foundation.dropdown.js',
   //'src/js/foundation/foundation.equalizer.js',
   //'src/js/foundation/foundation.interchange.js',
   //'src/js/foundation/foundation.joyride.js',
   //'src/js/foundation/foundation.magellan.js',
   //'src/js/foundation/foundation.offcanvas.js',
   //'src/js/foundation/foundation.orbit.js',
   //'src/js/foundation/foundation.reveal.js',
   //'src/js/foundation/foundation.slider.js',
   //'src/js/foundation/foundation.tab.js',
   //'src/js/foundation/foundation.tooltip.js',
   //'src/js/foundation/foundation.topbar.js',

   // Your Own Stuff
   'src/js/custom/fastclick.js',
   'src/js/custom/jquery.min.js',
   //'src/js/custom/modernizr.js',
   'src/js/custom/setup.js'
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
   gulp.watch('scss/**/*.scss', ['styles']);
   gulp.watch('js/src/*.js', ['scripts']);
});

// Default Task
gulp.task('default', ['styles', 'watch']);