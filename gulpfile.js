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
   'src/js/libs/fastclick.js',
   'src/js/libs/jquery-1.11.3.js',
   //'src/js/libs/jquery-2.1.4.js',
   'src/js/libs/custom/modernizr.js',

   // Foundation Stuff
   //'src/js/foundation/foundation.core.js',
   //'src/js/foundation/foundation.abide.js',
   //'src/js/foundation/foundation.accordion.js',
   //'src/js/foundation/foundation.accordionMenu.js',
   //'src/js/foundation/foundation.drilldown.js',
   //'src/js/foundation/foundation.dropdown.js',
   //'src/js/foundation/foundation.dropdownMenu.js',
   //'src/js/foundation/foundation.equalizer.js',
   //'src/js/foundation/foundation.interchange.js',
   //'src/js/foundation/foundation.magellan.js',
   //'src/js/foundation/foundation.offcanvas.js',
   //'src/js/foundation/foundation.orbit.js',
   //'src/js/foundation/foundation.responsiveMenu.js',
   //'src/js/foundation/foundation.responsiveToggle.js',
   //'src/js/foundation/foundation.reveal.js',
   //'src/js/foundation/foundation.slider.js',
   //'src/js/foundation/foundation.sticky.js',
   //'src/js/foundation/foundation.tabs.js',
   //'src/js/foundation/foundation.toggler.js',
   //'src/js/foundation/foundation.tooltip.js',
   //'src/js/foundation/foundation.util.box.js',
   //'src/js/foundation/foundation.util.keyboard.js',
   //'src/js/foundation/foundation.util.mediaQuery.js',
   //'src/js/foundation/foundation.util.motion.js',
   //'src/js/foundation/foundation.util.nest.js',
   //'src/js/foundation/foundation.util.timerAndImageLoader.js',
   //'src/js/foundation/foundation.util.touch.js',
   //'src/js/foundation/foundation.util.trigger.js',

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
         //.pipe(sourcemaps.init())
         .pipe(sass({outputStyle: 'nested'}))
         //.pipe(rename({suffix: '.min'}))
         //.pipe(sourcemaps.write('./'))
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
         //.pipe(uglify())
         //.pipe(rename({suffix: '.min'}))
         //.pipe(gulp.dest('js'));
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