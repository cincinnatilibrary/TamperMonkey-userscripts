// ==UserScript==
// @name         BiblioWeb Modification
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Removes the BC header and footer for portrait touchscreen
// @author       Owen Henry
// @match        https://chpl.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=arcgis.com
// @grant        GM_addStyle
// @downloadURL  https://github.com/cincinnatilibrary/TamperMonkey-userscripts/raw/main/BiblioWebModification.user.js
// @updateURL    https://github.com/cincinnatilibrary/TamperMonkey-userscripts/raw/main/BiblioWebModification.user.js
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle ( `
                   .biblioweb header, .footer-wrapper, .footer-version, .bc_core_external {
                        display:none;
                   }
              ` );
    //(new MutationObserver(check)).observe(document, {childList: true, subtree: true});
    //function check(changes, observer) {
    //     if(document.querySelector('.container.partial-screen.docked')) {
    //          observer.disconnect();
    //          GM_addStyle ( `
    //               .container {
    //                    top: 6.4rem !important;
    //               }
    //          ` );
    //    }
    //}
})();