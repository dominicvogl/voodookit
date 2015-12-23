// Gulp Modules
gulp = require('gulp');
var requireDir = require('require-dir');

// Include other gulp modules
requireDir('./gulp');

// Base Configuration for gulp modules
var config = [
    environment = 'fm',
    sourcePath = 'src/',
    destinationPath = 'dist/',

    // JS Filelist for concatinating
    jsFilesApp = [

        // Jquery
        sourcePath + 'js/libs/jquery-2.1.4.js',

        // Fastclick
        //sourcePath + 'js/libs/fastclick.js',

        // Modernizr
        sourcePath + 'js/libs/modernizr.js',

        // Picturefill
        //sourcePath + 'js/libs/picturefill.js',

        // Simple state manager
        //sourcePath + 'js/libs/ssm.js',

        // Slick
        //sourcePath + 'js/libs/slick.min.js',

        // Foundation
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
    ]
];

var defaultTasks = [
    'styles',
    'scripts',
    'watch'
];

gulp.task('default', defaultTasks);