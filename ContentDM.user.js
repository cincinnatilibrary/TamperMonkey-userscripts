// ==UserScript==
// @name         ContentDM Changes
// @namespace    http://tampermonkey.net/
// @version      21.0.0
// @description  Changes button placement for ContentDM
// @author       Ryan Bley
// @match        https://digital.cincinnatilibrary.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cincinnatilibrary.org
// @grant        GM_addStyle
// @downloadURL  https://github.com/cincinnatilibrary/TamperMonkey-userscripts/raw/main/ContentDM.user.js
// @updateURL    https://github.com/cincinnatilibrary/TamperMonkey-userscripts/raw/main/ContentDM.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle ( `
        .ImageViewer-buttonGroup, .Lightbox-lightbox > div:nth-child(2) {
            bottom: 0 !important;
            top: unset !important;
        }
    `);
})();