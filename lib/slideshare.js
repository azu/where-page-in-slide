"use strict";
var assert = require("assert");
module.exports = function slideshare() {
    var slideNo = window.$.slideshareEventManager.controller.currentPosition;
    assert(slideNo >= 0);
    // http://d.hatena.ne.jp/kitokitoki/20130722/p2
    var newURL = location.protocol + "//" + location.host + location.pathname + "/" + slideNo;
    history.pushState(__filename, "", newURL);
};