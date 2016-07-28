var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', stylesTask);

function stylesTask() {
    var compileStyles = function (baseName) {
        gulp.src([sourcePath + 'scss/' + baseName + '.scss'])
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}))
            //.pipe(rename({suffix: '.min'}))
            .pipe(autoprefixer({
                browsers: ['last 5 versions'],
                cascade: false
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(destinationPath + 'css'))
    };

    compileStyles('app');
}