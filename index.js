/*
 * @title where-page-in-slide
 * @description where-page-in-slide
 * @include http://*
 * @license MIT License
 * 
 */


"use strict";
switch (location.host) {
    case "speakerdeck.com":
        require("./lib/speakerdeck")();
        break;
    case "www.slideshare.net":
        require("./lib/slideshare")();
        break;
}