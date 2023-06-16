// ==UserScript==
// @name         wusunk下载简化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://wusunk.com/*
// @match        https://www.wusunk.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wusunk.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = (function() {
        var as = document.querySelector("#post-241 > div > div.single-content > div.down-form > fieldset > span.down-form-inf > span.pass > span:nth-child(2)")
        var text=as.innerHTML.replace("提取码：", "?pwd=").replace(" ", "");
        var save=document.querySelector("#post-241 > div > div.single-content > div.down-form > fieldset > span.down-form-inf > span.pass > span:nth-child(3)")
        save.innerHTML= "<a style='color:red' href='" + getUrl(text) + "'>下载</a>"
      // title.innerHTML = title.innerHTML + "<a style='color:red' href='" + url + "'>ÏÂÔØÁ´½Ó</a>"
    });
    // Your code here...
})();
function getUrl (str) {
    const reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
    str = str.match(reg);
    if (str && str.length > 0) {
        return str[0];
    }
    return null;
}