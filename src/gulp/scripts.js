var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task('scripts', scriptsTask);

function scriptsTask() {
    var compileScripts = function (files, targetFile) {
        gulp.src(files)
            .pipe(plumber())
            // .pipe(sourcemaps.init())
            .pipe(concat(targetFile + '.js'))
            // .pipe(uglify())
            //.pipe(rename({suffix: '.min'}))
            // .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(destinationPath + 'js'));
    };

    compileScripts(jsFilesApp, 'app');
}