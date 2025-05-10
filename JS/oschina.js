// ==UserScript==
// @name         oschina内容放大评论缩小
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.oschina.net/comment/news/*
// @match        https://www.oschina.net/news/*
// @match        https://www.oschina.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=oschina.net
// @grant        unsafeWindow
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js
// ==/UserScript==

(function () {
    var rootUrl = window.location.pathname;
    if (rootUrl.includes("/news/") && !rootUrl.includes("/comment/news/")) {
        var jumpurl = window.location.href.replace("https://www.oschina.net/news/", "https://www.oschina.net/comment/news/");
        window.location.href = jumpurl;
        return;
    }
    $("a").each(function (index, element) {
        var url = $(this).attr('href') ?? 'default string';
        if (url == "null" || !url || url == undefined || url == null || url == "")
            return;
        if (url.indexOf("https://www.oschina.net/news/" > 0)) {
            $(this).attr('href', url.replace("https://www.oschina.net/news/", "https://www.oschina.net/comment/news/"))
        }
    });

    if (!rootUrl.includes("/comment/news/"))
        return;
    document.querySelector("#commentIndex > div.four.wide.computer.sixteen.wide.tablet.column").style.setProperty('width', '55%', 'important');
    document.querySelector("#commentIndex > div.twelve.wide.computer.sixteen.wide.tablet.column").style.setProperty('width', '45%', 'important');
    document.querySelector("#commentIndex > div.twelve.wide.computer.sixteen.wide.tablet.column > div > div.comment-box").style.setProperty('width', '60%', 'important');
    var tgq = document.querySelector("#commentIndex > div.twelve.wide.computer.sixteen.wide.tablet.column > div > div.right-sidebar");
    tgq.style.setProperty('width', '40%', 'important');
    tgq.style.padding = "0px";
    // Your code here...
})();