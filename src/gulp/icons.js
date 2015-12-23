var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var path = require('path');

gulp.task('icons', iconsTask);

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