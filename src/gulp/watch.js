var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', watchTask);

function watchTask() {
    gulp.watch(sourcePath + 'scss/**/*.scss', ['styles']);
    gulp.watch(jsFilesApp, ['scripts']);
    gulp.watch(sourcePath + 'templates/**/*.jade', ['jade']);
}