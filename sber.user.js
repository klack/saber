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
// a function that loads jQuery and calls a callback function when jQuery has finished loading

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  // Note, jQ replaces $ to avoid conflicts.
  jQ('.js-toc').append('<div id="sber-next">N</div><div id="sber-prev">P</div>');
	jQ( "#sber-next" ).click(function() {
	  var sber_wh = jQ( window ).height();
	  window.scrollBy(0, sber_wh / 2);
	});
	jQ( "#sber-prev" ).click(function() {
	  var sber_wh = jQ( window ).height();
	  window.scrollBy(0, -(sber_wh /2));
	});	


}

// load jQuery and execute the main function
addJQuery(main);

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
		.topnav{ \
			margin-top: 100px; \
		} \
		#sber-prev { \
	    background: black; \
	    color: white;        \
	    font-size: 80px;    \
	    height: 100px;         \
	    width: 100px; \
	    position: fixed;  \
	    z-index: 999; \
	    top: 0; \
		} \
		.interface-controls-top { \
			margin-top: 100px; \ 
		}\
		#sber-next { \
	    background: black; \
	    color: white;        \
	    font-size: 80px;    \
	    height: 100px;         \
	    width: 100px; \
	    position: fixed;  \
	    top: 0; \
	    z-index: 999; \
	    right: 0; \
		} \
		#sbo-rt-content .FontName1 { \
    	font-size: initial; !important; \
		} \
		pre .FontName1 { \
			font-size:151%; !important\
		} \
	" );

