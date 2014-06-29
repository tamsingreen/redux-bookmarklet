//JS code for the TMTR bookmarklet. This code is saved as an <a> tag with whitespace removed in bookmarklet.html
//using Bookmarkleter

'use strict';

function loadJQuery(callback) {

    if (typeof jQuery == 'undefined') {
        var jq = document.createElement('script');
        jq.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
        jq.type = 'text/javascript';
        jq.onload = callback;
        console.log("Loading JQuery");
        document.body.appendChild(jq);
    } else {
        callback();
    }
}

function loadTMTRScript(callback) {
    var len = $('script').filter(function() {
        return ($(this).attr('src') === 'http://tamsingreen.github.io/redux1.js');
    }).length;
    if (len === 0) {
        var tmtrScript = document.createElement('script');
        tmtrScript.src = 'http://tamsingreen.github.io/redux1.js';
        tmtrScript.type = 'text/javascript'; 
        tmtrScript.onload = takeMeToRedux;
        console.log("Loading TMTR");
        document.body.appendChild(tmtrScript);
    } else {
        takeMeToRedux();
    }          
}

function takeMeToRedux() {
    console.log("Taking you to Redux");
    createRedux1Link(window.location.pathname);
}

loadJQuery(loadTMTRScript);