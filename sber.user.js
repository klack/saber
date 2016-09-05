// ==UserScript==
// @name           sber
// @namespace      klack
// @description    Fixes margin, hides side panel, adds "turn page" by scrolling the page when the sides are tapped"
// @copyright      Richard Layton
// @version        0.4
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

function main() {
  // Note, jQ replaces $ to avoid conflicts.
  jQ('.js-toc').append('<div id="sber-next">n</div><div id="sber-prev">p</div>');
  jQ('.js-toc').append('<div id="sber-menu">m</div><div id="sber-menu-hidden">h</div>');
	jQ( "#sber-next" ).click(function() {
	  var sber_wh = jQ( window ).height();
	  window.scrollBy(0, sber_wh / 2);
	});
	jQ( "#sber-prev" ).click(function() {
	  var sber_wh = jQ( window ).height();
	  window.scrollBy(0, -(sber_wh / 2));
	});
	jQ( "#sber-menu" ).click(function() {
		jQ(this).hide();
		jQ('#sber-menu-hidden').show();
		jQ('.interface-controls-top').hide();
		jQ('.topbar').hide();
	});
	jQ( "#sber-menu-hidden" ).click(function() {
		jQ(this).hide();
		jQ('#sber-menu').show();
		jQ('.interface-controls-top').show();
		jQ('.topbar').show();
	});
}

addJQuery(main);

GM_addStyle(" \
.no-padding{\
	padding-left:0; !important \
}\
#sbo-rt-content { \
	min-width:100%; !important \
} \
.topbar { \
	//position:static; !important \
} \
body.sidenav { \
	// \
} \
.topnav{ \
	margin-top: 100px; \
} \
#sber-prev, #sber-next { \
	top:62px; \
		z-index: 999; \
			position: fixed; \
				height: 100px; \
	width: 100px; \
		background: black; \
	color: white; \
	font-size: 80px; \
} \
.interface-controls-top { \
	margin-top: 100px; \
} \
#sber-next { \
	right: 0; \
} \
#sber-menu-hidden { \
	display: none; \
} \
#sber-menu, #sber-menu-hidden { \
	top:0; \
	height:62px; \
	background:black; \
	width:62px; \
	position:fixed; \
	z-index:999; \
	color:white; \
} \
#sbo-rt-content .FontName1 { \
	font-size: initial; !important; \
} \
pre .FontName1 { \
	font-size:151%; !important \
} \
");

console.log('Finished');