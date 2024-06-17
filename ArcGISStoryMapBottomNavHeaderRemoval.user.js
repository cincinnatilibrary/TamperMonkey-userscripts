// ==UserScript==
// @name         ARC GIS Story Map Bottom Navigation and Header Removal
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Moves the nav bar to the bottom for portrait touchscreen and removes the ARC GIS header and repositions the nav for portrait t
// @author       Ryan Bley
// @match        https://storymaps.arcgis.com/stories/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=arcgis.com
// @grant        GM_addStyle
// @downloadURL  https://github.com/cincinnatilibrary/TamperMonkey-userscripts/raw/main/ArcGISStoryMapBottomNavHeaderRemoval.user.js
// @updateURL    https://github.com/cincinnatilibrary/TamperMonkey-userscripts/raw/main/ArcGISStoryMapBottomNavHeaderRemoval.user.js
// ==/UserScript==

(function() {
    'use strict';
     GM_addStyle ( `
                    .layout-wrapper {
                        --small-and-print-margin-bottom: 0 !important;
                        margin-bottom: 0 !important;
                    }
                    .layout-wrapper.navigation-bar {
                        position: fixed !important;
                        bottom: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        top: unset !important;
                    }
                    header.viewer-header, .header-space {
                         display:none;
                    }
              ` );
     (new MutationObserver(check)).observe(document, {childList: true, subtree: true});
     function check(changes, observer) {
          if(document.querySelector('.container.partial-screen.docked')) {
               observer.disconnect();
               GM_addStyle ( `
                    .container {
                         top: 0 !important;
                    }
               ` );
          }
     }
})();