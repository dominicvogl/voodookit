// Gulp Modules
var gulp = require('gulp'),
   iconfont = require('gulp-iconfont'),
   consolidate = require('gulp-consolidate'),
   uglify = require('gulp-uglify'),
   concat = require('gulp-concat'),
   path = require('path'),
   watch = require('gulp-watch'),
   plumber = require('gulp-plumber'),
   rename = require('gulp-rename'),
   sass = require('gulp-sass'),
   sourcemaps = require('gulp-sourcemaps'),
   favicons = require('gulp-favicons');

var defaultTasks = [
   'styles',
   'scripts',
   'watch'
];

var jsFilesApp = [

   // Basics
   'src/js/libs/custom/fastclick.js',
   'src/js/libs/custom/jquery.min.js',
   'src/js/libs/custom/modernizr.js',

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
   'src/js/custom/custom.js'
];

gulp.task('styles', stylesTask);

gulp.task('scripts', scriptsTask);

gulp.task('icons', iconsTask);

gulp.task('favicon', faviconTask);

gulp.task('watch', watchTask);

gulp.task('default', defaultTasks);

function watchTask() {
   gulp.watch('src/scss/**/*.scss', ['styles']);
   gulp.watch(jsFilesApp, ['scripts']);
}

function iconsTask() {
   gulp.src(['src/assets/svg/*.svg'])
      .pipe(iconfont({
         fontName: 'icon',
         appendCodepoints: true
      }))
      .on('codepoints', function (codepoints, options) {
         gulp.src('src/scss/template/icons.scss')
            .pipe(consolidate('lodash', {
               glyphs: codepoints,
               fontName: 'icon',
               fontPath: '../fonts/generated/',
               className: 'icon'
            }))
            .pipe(gulp.dest('src/scss/generated'));
      })
      .pipe(gulp.dest('fonts/generated'));
}

function stylesTask() {
   var compileStyles = function (_baseName) {
      gulp.src(['src/scss/' + _baseName + '.scss'])
         .pipe(plumber())
         .pipe(sourcemaps.init())
         .pipe(sass({outputStyle: 'compressed'}))
         .pipe(rename({suffix: '.min'}))
         .pipe(sourcemaps.write('./'))
         .pipe(gulp.dest('./css'))
   };

   compileStyles('app');
}

function scriptsTask() {
   var compileScripts = function (files, targetFile) {
      gulp.src(files)
         .pipe(plumber())
         .pipe(concat(targetFile + '.js'))
         .pipe(gulp.dest('js'))
         .pipe(uglify())
         .pipe(rename({suffix: '.min'}))
         .pipe(gulp.dest('js'));
   };

   compileScripts(jsFilesApp, 'app');
}

function faviconTask() {
   gulp.src(['src/assets/favicon/favicon.png'])
      .pipe(favicons({
         files: {
            src: 'src/assets/favicon/favicon.png',
            dest: 'assets/favicon',
            iconsPath: '/Icons/',
            html: '/dev/null'
         },
         icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: true,
            favicons: true,
            firefox: true,
            opengraph: true,
            windows: false,
            yandex: false
         },
         settings: {
            logging: false,
            vinylMode: true,
            background: false
         }
      }))
      .pipe(gulp.dest('assets/favicon'));
}

