/*
// Feature Detection Script
// @file: brwsrs.js
// @author: Dominic Vogl
// @date: 2016-06-09
// @version: 1.0
// -----//-----//-----//-----//-----*/

// define html element
var html = $('html');
html.removeClass('no-js').addClass('js');

// @todo Remove jquery stuff, use vanilla js

if(supports('svg')){

    // when no svg is supportet...
    // add ".no-svg" class to <html>...
    html.addClass('no-svg');

    // ... and change ".svg" to ".png"
    $('img[src$="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });

} else {
    // ... or hust ad ".svg" to <html>
    html.addClass('svg');
}

// check touch support and render class to <html>
if(!supports('touch')) {
    html.addClass('no-touch');
}
else {
    html.addClass('touch');
}

/**
 * check different types of browser support and return boolean
 * @param type
 * @returns boolean
 */

function supports(type) {

    switch(type) {

        // matchmedia support
        case 'matchMedia':
            return window.matchMedia && window.matchMedia('all').addListener;
            break;

        // touch support
        case 'touch':
            return !!('ontouchstart' in window);

        // svg support
        case 'svg':
            return !document.createElement('svg').getAttributeNS;

        default:
            return false;

    }
}