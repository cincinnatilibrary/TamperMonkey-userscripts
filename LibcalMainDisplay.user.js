// ==UserScript==
// @name         Libcal Modification
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Removes the BC header and other pieces for portrait touchscreen
// @author       Ryan Bley
// @match        https://cincinnatilibrary.libcal.com/*
// @icon         https://cincinnatilibrary.libcal.com/favicon.ico
// @grant        GM_addStyle
// @downloadURL  https://github.com/cincinnatilibrary/TamperMonkey-userscripts/raw/main/LibcalMainDisplay.user.js
// @updateURL    https://github.com/cincinnatilibrary/TamperMonkey-userscripts/raw/main/LibcalMainDisplay.user.js
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle ( `

                   :root {
                        font-family: 'Open Sans';
                   }

                   .bc_core_external, #s-lc-eq-n-navform, .s-lc-public-footer, #s-lc-public-bc .breadcrumb {
                        display:none;
                   }
                   .modal-dialog {
                        width: 700px !important;
                   }
                   .panel-default > .panel-heading {
                        background-color: #0c2340 !important;
                        color: #ffffff !important;
                   }
                   .table-responsive {
	                    border: 1px solid #0c2340;
                   }
                   .table-bordered > tbody > tr > td, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > td, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > thead > tr > th {
	                    border: 1px solid #0c2340;
                   }

              ` );
    document.querySelector("#s-lc-eq-confirmed > div > div.panel-heading > h2").childNodes[2].textContent='Confirmed Room Bookings and Events';
    document.querySelector("#s-lc-nick-new-booking-btn > a").textContent='Book a Space';

})();