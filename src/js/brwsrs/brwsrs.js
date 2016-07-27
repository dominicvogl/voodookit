/*
// Feature Detection Script
// @file: brwsrs.js
// @author: Dominic Vogl
// @date: 2016-06-09
// @version: 1.0
// -----//-----//-----//-----//-----*/

// define html element
var html = document.querySelector('html');

html.classList.remove('no-js');
html.classList.add('js');

// @todo Remove jquery stuff, use vanilla js

if(supports('svg')){

    // when no svg is supportet...
    // add ".no-svg" class to <html>...
    html.classList.add('no-svg');

    // ... and change ".svg" to ".png"
    var imgs = document.getElementsByTagName('img');
    var endsWithDotSvg = /.*\.svg$/
    var i = 0;
    var l = imgs.length;
    for(; i != l; ++i) {
        if(imgs[i].src.match(endsWithDotSvg)) {
            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
        }
    }

} else {
    // ... or hust ad ".svg" to <html>
    html.classList.add('svg');
}

// check touch support and render class to <html>
if(!supports('touch')) {
    html.classList.add('no-touch');
}
else {
    html.classList.add('touch');
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