//
// Setup jQuery Plugins
//------------------------------------------------------------------------



$(document).ready(function() {

    //
    // Modernizr I: SVG Fallback
    //------------------------------------------------------------------------

    if(!Modernizr.svg) {

        $('img[src$="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

});



$(window).load(function () {

    // Your awesome code

});