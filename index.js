/*
 * @title where-page-in-slide
 * @description where-page-in-slide
 * @include http://*
 * @license MIT License
 *
 * Source Code : https://github.com/azu/where-page-in-slide
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