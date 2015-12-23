var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task('styles', stylesTask);

function stylesTask() {
    var compileStyles = function (baseName) {
        gulp.src([sourcePath + 'scss/' + baseName + '.scss'])
            .pipe(plumber())
            //.pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'expanded'}))
            //.pipe(rename({suffix: '.min'}))
            //.pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(destinationPath + 'css'))
    };

    compileStyles('app');
}