// ==UserScript==
// @name           SafariBooks E-Reader
// @namespace      klack
// @description    Fixes margin, hides side panel, adds "turn page" by scrolling the page when the sides are tapped"
// @copyright      Richard Layton
// @version        0.1
// @grant          GM_addStyle
// @include        https://www.safaribooksonline.com*
// @include-jquery
// ==/UserScript==

GM_addStyle ( "                                     \
    #sbo-rt-content {                                   \
        min-width:100%; !important                    \
    }                                                 \
    .topbar {                                  \
        position:static; !important                    \
    }  \
		body.sidenav { \
    	padding-left:0; !important \
		}                                             \
	" );
console.log('test');