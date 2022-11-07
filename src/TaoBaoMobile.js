// ==UserScript==
// @name         淘宝移动页面自动跳转桌面版中文版
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://new.m.taobao.com/detail.htm?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=taobao.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  window.location.href = window.location.href.replace("new.m", "item").replace("detail","item");
  //console.log(jumpurl);
})();