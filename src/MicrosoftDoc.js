// ==UserScript==
// @name         微软文档自动跳转中文版
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://docs.microsoft.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  var url = window.location.pathname;
  var urllan = url.substring(1, url.length);
  // console.log(urllan);
  // console.log(urllan.indexOf("/answers/") > 0);
  if (urllan.indexOf("/answers/") > 0)
    return;
  urllan = urllan.substring(0, urllan.indexOf('/'));
  // console.log(urllan);
  var chlan = "zh-cn";
  if (urllan == chlan)
    return;
  var jumpurl = window.location.href.replace(urllan, chlan);
  window.location.href = jumpurl;
  console.log(jumpurl);
})();