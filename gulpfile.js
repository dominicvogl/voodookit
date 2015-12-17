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

var environment = 'fm';

var config = [
    sourcePath = 'src/',
    destinationPath = 'dist/'
];

var jsFilesApp = [

    // Jquery
    sourcePath + 'js/libs/jquery-2.1.4.js',

    // Fastclick
    //sourcePath + 'js/libs/fastclick.js',

    // Modernizr
    sourcePath + 'js/libs/modernizr.js',


    // Picturefill
    //sourcePath + 'js/libs/picturefill.js',

    // SSM
    //sourcePath + 'js/libs/ssm.js',

    // Slick
    //sourcePath + 'js/libs/slick.min.js',

    //sourcePath + 'src/js/foundation/foundation.core.js',
    //sourcePath + 'src/js/foundation/foundation.util.box.js',
    //sourcePath + 'src/js/foundation/foundation.util.keyboard.js',
    //sourcePath + 'src/js/foundation/foundation.util.mediaQuery.js',
    //sourcePath + 'src/js/foundation/foundation.util.motion.js',
    //sourcePath + 'src/js/foundation/foundation.util.nest.js',
    //sourcePath + 'src/js/foundation/foundation.util.timerAndImageLoader.js',
    //sourcePath + 'src/js/foundation/foundation.util.touch.js',
    //sourcePath + 'src/js/foundation/foundation.util.triggers.js',
    //sourcePath + 'src/js/foundation/foundation.abide.js',
    //sourcePath + 'src/js/foundation/foundation.accordion.js',
    //sourcePath + 'src/js/foundation/foundation.accordionMenu.js',
    //sourcePath + 'src/js/foundation/foundation.drilldown.js',
    //sourcePath + 'src/js/foundation/foundation.dropdown.js',
    //sourcePath + 'src/js/foundation/foundation.dropdownMenu.js',
    //sourcePath + 'src/js/foundation/foundation.equalizer.js',
    //sourcePath + 'src/js/foundation/foundation.interchange.js',
    //sourcePath + 'src/js/foundation/foundation.magellan.js',
    //sourcePath + 'src/js/foundation/foundation.offcanvas.js',
    //sourcePath + 'src/js/foundation/foundation.orbit.js',
    //sourcePath + 'src/js/foundation/foundation.responsiveMenu.js',
    //sourcePath + 'src/js/foundation/foundation.responsiveToggle.js',
    //sourcePath + 'src/js/foundation/foundation.reveal.js',
    //sourcePath + 'src/js/foundation/foundation.slider.js',
    //sourcePath + 'src/js/foundation/foundation.sticky.js',
    //sourcePath + 'src/js/foundation/foundation.tabs.js',
    //sourcePath + 'src/js/foundation/foundation.toggler.js',
    //sourcePath + 'src/js/foundation/foundation.tooltip.js',

    // Own stuff
    sourcePath + 'js/custom/**/*.js'
];

var defaultTasks = [
    'styles',
    'scripts',
    'watch'
];

gulp.task('default', defaultTasks);
gulp.task('watch', watchTask);
gulp.task('styles', stylesTask);
gulp.task('scripts', scriptsTask);
gulp.task('icons', iconsTask);
gulp.task('favicon', faviconTask);

function watchTask() {
    gulp.watch(sourcePath + 'scss/**/*.scss', ['styles']);
    gulp.watch(jsFilesApp, ['scripts']);
}

function stylesTask() {
    var compileStyles = function (baseName) {
        gulp.src([sourcePath + 'scss/' + baseName + '.scss'])
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(destinationPath + 'css'))
    };

    compileStyles('app');
}

function scriptsTask() {
    var compileScripts = function (files, targetFile) {
        gulp.src(files)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(concat(targetFile + '.js'))
            //.pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(destinationPath + 'js'));
    };

    compileScripts(jsFilesApp, 'app');
}

function iconsTask() {
    gulp.src([sourcePath + 'assets/svg/use/*.svg'])
        .pipe(iconfont({
            fontName: 'icon',
            appendCodepoints: true
        }))
        .on('codepoints', function (codepoints, options) {
            gulp.src(sourcePath + 'scss/templates/_icons.scss')
                .pipe(consolidate('lodash', {
                    glyphs: codepoints,
                    fontName: 'icon',
                    fontPath: '../fonts/generated/',
                    className: 'icon'
                }))
                .pipe(gulp.dest(sourcePath + 'scss/generated'));
        })
        .pipe(gulp.dest(destinationPath + 'fonts/generated'));
}


function faviconTask() {
    gulp.src([sourcePath + 'assets/favicon/favicon.png'])
        .pipe(favicons({
            files: {
                src: sourcePath + 'assets/favicon/favicon.png',
                dest: destinationPath + 'assets/favicon',
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
        .pipe(gulp.dest(destinationPath + 'assets/favicon'));
}