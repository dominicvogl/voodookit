// Gulp Modules
gulp = require('gulp');
var requireDir = require('require-dir');

// Base Configuration for gulp modules
var config = [
    environment = 'fm',
    sourcePath = 'src/',
    destinationPath = 'dist/',

    // JS Filelist for concatinating
    jsFilesApp = [

        // Jquery
        sourcePath + 'bower-components/jquery/dist/jquery.js',

        // Fastclick
        sourcePath + 'bower-components/fastclick/lib/fastclick.js',

        // Picturefill
        // sourcePath + 'bower-components/dist/picturefill.js',

        // Simple state manager
        // sourcePath + 'bower-components/SimpleStateManager/src/ssm.js',

        // Slick
        // sourcePath + 'bower-components/slick/slick/slick.js',

        // Foundation
        //sourcePath + 'bower-components/foundation-sites/js/foundation.core.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.util.box.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.util.keyboard.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.util.mediaQuery.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.util.motion.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.util.nest.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.util.timerAndImageLoader.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.util.touch.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.util.triggers.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.abide.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.accordion.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.accordionMenu.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.drilldown.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.dropdown.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.dropdownMenu.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.equalizer.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.interchange.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.magellan.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.offcanvas.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.orbit.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.responsiveMenu.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.responsiveToggle.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.reveal.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.slider.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.sticky.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.tabs.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.toggler.js',
        //sourcePath + 'bower-components/foundation-sites/js/foundation.tooltip.js',

        // Own stuff
        sourcePath + 'js/modernizr/modernizr.js',
        sourcePath + 'js/modernizr/setup.js',

        sourcePath + 'js/ajax/load.js'
    ]
];

// Include other gulp modules
requireDir(sourcePath + '/gulp');

var defaultTasks = [
    'styles',
    'scripts',
    'jade',
    'watch'
];

gulp.task('default', defaultTasks);