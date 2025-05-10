// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.huluobuzhou.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=huluobuzhou.com
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setTimeout(function () {

        // Something you want delayed.
        $(document.querySelector("body")).removeClass("ilrctme-gaptqj-blur");
        $(document.querySelector("body > div.ilrctme-gaptqj-blackout.active")).removeClass("active")
        $(document.querySelector("body > div.ilrctme-gaptqj-wrapper")).addClass("hidden");
    }, 1000); // How long do you want the delay to be (in milliseconds)?

    // Your code here...
})();