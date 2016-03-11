var jade = require('gulp-jade');

gulp.task('jade', jadeTask);


function jadeTask() {
   var compileJade = function (basePath, destPath) {
      gulp.src(sourcePath + 'templates/' + basePath +'/*.jade')
         .pipe(jade({
            pretty: true
         }))
         .pipe(gulp.dest(destPath));
   };

   compileJade('pages', 'public');
}