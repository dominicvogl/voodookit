var favicons = require('gulp-favicons');

gulp.task('favicon', faviconTask);

function faviconTask() {
    return gulp.src([sourcePath + 'assets/favicon/favicon.png'])
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
                coast: false,
                favicons: true,
                firefox: false,
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
