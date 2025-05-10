// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.wotianna.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wotianna.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = (function() {
        var as = document.getElementsByTagName('a')
        var url = "";
        var pwd = "";
        for (var i = 0, j = as.length; i < j; i++) {
            var src = as[i].getAttribute("href");

            if (src != null && src.indexOf('pan.baidu.com') !== -1) {
                console.log(src)
                url = src;
                var text = as[i].parentElement.parentElement.nextElementSibling.innerHTML;
                pwd = text.replace("提取码：", "").replace("<!--wechatfans end-->", "");
                console.log(pwd);
            }
        }
        if (url.indexOf('pwd') == -1)
            url = url + "?pwd=" + pwd;
        console.log(url);
        var title = document.getElementById("text-67");
        title.innerHTML = title.innerHTML + "<a style='color:red' href='" + url + "'>下载链接</a>"
    });
    // Your code here...
})();