"use strict";
var assert = require("assert");
module.exports = function speackerdeck() {
    var iframeDoc = document.querySelector(".speakerdeck-iframe").contentDocument;
    assert(iframeDoc != null);
    var slideSpan = iframeDoc.getElementsByClassName("current_slide")[0];
    var slideNo = slideSpan.textContent;
    assert(slideNo >= 0);
    // http://d.hatena.ne.jp/kitokitoki/20130722/p2
    var newURL = location.protocol + "//" + location.host + location.pathname + "?slide=" + slideNo;
    history.pushState(__filename, "", newURL);
};