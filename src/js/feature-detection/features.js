/*
// Feature Detection Script
// @file: brwsrs.js
// @author: Dominic Vogl
// @date: 2016-06-09
// @version: 1.0
// -----//-----//-----//-----//-----*/

// Check if Javascript is active, overwrite no-js class
document.documentElement.className = "js";

// @todo Remove jquery stuff, use vanilla js

if(feature.svg){

    // ... or hust ad ".svg" to <html>
    document.documentElement.className += " svg";

} else {

    // when no svg is supportet change ".svg" to ".png"
    var imgs = document.getElementsByTagName('img');
    var endsWithDotSvg = /.*\.svg$/
    var i = 0;
    var l = imgs.length;
    for(; i != l; ++i) {
        if(imgs[i].src.match(endsWithDotSvg)) {
            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
        }
    }
}

// check touch support and render class to <html>
if(feature.touch) {
    document.documentElement.className += " touch";
}