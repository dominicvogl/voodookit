//
// Setup jQuery Plugins
//------------------------------------------------------------------------

(function ($) {

    'use strict';

    // $(document).ready(function() {

    if (!Modernizr.svg) {

        console.log('SVG Support: ' + Modernizr.svg);

        $('img[src$="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    // });

})(jQuery);