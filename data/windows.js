var pagingColor = $.navbarBkgdColor ? $._bkgdContrastColor : $._color;
var toolbarButtonBkgd = $.navbarBkgdColor ? "rgba(0,0,0,.1)" : "#c0c0c0";
var winNavBackgroundColor = 'transparent';
if ($._navbarBkgdColor) winNavBackgroundColor = $._color;
var stylesheet = '/*\n\
ChocolateChip-UI\n\
ChUI-Windows.css\n\
Copyright 2015 Sourcebits www.sourcebits.com\n\
License: MIT\n\
Version: 3.8.8\n\
*/\n\
.attentionGrapper {\n\
  color: ' + $._secondaryColor + ' !important;\n\
}\n\
.cloak > * {\n\
  display: none;\n\
}\n\
html, body {\n\
  padding: 0;\n\
  margin: 0;\n\
  position: absolute;\n\
  top: 0;\n\
  right: 0;\n\
  bottom: 0;\n\
  left: 0;\n\
  overflow: hidden;\n\
  font: normal 14px/18px SegoeWP, SegoeUI, HelveticaNeue, Sans-serif;\n\
  -ms-touch-action: none;\n\
}\n\
body {\n\
  background-color: #000000;\n\
  font: normal 10pt/13pt SegoeWP, SegoeUI, HelveticaNeue, Sans-serif;\n\
  -ms-user-select: none;\n\
}\n\
body * {\n\
  -ms-user-select: none;\n\
}\n\
article {\n\
  position: absolute;\n\
  top: 45pt;\n\
  right: 0;\n\
  bottom: 0;\n\
  left: 0;\n\
  transition: opacity 0.5s ease-out, transform 0.35s ease-out;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -ms-overflow-style: -ms-autohiding-scrollbar;\n\
  -ms-scroll-chaining: none;\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: column;\n\
  flex-direction: column;\n\
  -ms-flex-pack: flex-start;\n\
  justify-content: flex-start;\n\
  -ms-flex-align: stretch;\n\
  align-items: stretch;\n\
}\n\
.hide-navbars article {\n\
  top: 0;\n\
}\n\
.current {\n\
  transform: translate3d(0, 0, 0);\n\
  opacity: 1;\n\
}\n\
.next {\n\
  transform: translate3d(105%, 0, 0);\n\
  opacity: 0;\n\
}\n\
.previous {\n\
  transform: translate3d(-100%, 0, 0);\n\
  opacity: 0;\n\
}\n\
html[dir=rtl] .current {\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
html[dir=rtl] .next {\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
html[dir=rtl] .previous {\n\
  transform: translate3d(105%, 0, 0);\n\
}\n\
article > section,\n\
.scroller-vertical,\n\
.scroller-horizontal {\n\
  height: 100%;\n\
  padding-bottom: 10px;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -ms-overflow-style: -ms-autohiding-scrollbar;\n\
  box-sizing: border-box;\n\
  -ms-flex: 1;\n\
  flex: 1;\n\
}\n\
.scroller-horizontal {\n\
  overflow-y: hidden;\n\
  overflow-x: auto;\n\
}\n\
.scroller-vertical {\n\
  padding-top: 0;\n\
}\n\
article > section {\n\
  padding-top: 10px;\n\
}\n\
article > section > :last-child:not(button)::after {\n\
  content: "";\n\
  display: block;\n\
  margin-bottom: 100px;\n\
}\n\
.horizontal {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: flex-start;\n\
  justify-content: flex-start;\n\
  -ms-flex-align: stretch;\n\
  align-items: stretch;\n\
}\n\
.horizontal.centered {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: center;\n\
  justify-content: center;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
}\n\
button {\n\
  cursor: pointer;\n\
  text-decoration: none;\n\
  font-size: 13pt;\n\
  transition: all 0.35s ease-out;\n\
  display: block;\n\
  width: auto;\n\
  box-sizing: border-box;\n\
  height: 30px;\n\
  height: auto;\n\
  position: relative;\n\
  white-space: nowrap;\n\
  overflow-x: hidden;\n\
  text-overflow: ellipsis;\n\
  vertical-align: middle;\n\
  border: solid 2px #ffffff;\n\
  color: #ffffff;\n\
  background-color: #000000;\n\
  padding: 5px 10px;\n\
  overflow: hidden;\n\
  text-align: center;\n\
}\n\
button.align-flush {\n\
  position: absolute;\n\
  right: 16px;\n\
  top: 16px !important;\n\
}\n\
button:hover,\n\
button.selected {\n\
  color: #ffffff;\n\
  background-color: ' + $._color + ';\n\
  border-color: #ffffff !important;\n\
}\n\
button.back,\n\
button.backTo {\n\
  display: inline-block;\n\
  min-width: 0;\n\
  min-height: 0;\n\
  background-clip: border-box;\n\
  box-sizing: border-box;\n\
  border-radius: 50%;\n\
  border-width: 2px;\n\
  border-style: solid;\n\
  border-color: #ffffff;\n\
  padding: 0;\n\
  text-align: center;\n\
  width: 41px;\n\
  height: 41px;\n\
  font-size: 0;\n\
  line-height: 30px !important;\n\
  vertical-align: baseline;\n\
  overflow: hidden;\n\
}\n\
button.back::before,\n\
button.backTo::before {\n\
  font-family: "Segoe UI Symbol";\n\
  font-weight: normal;\n\
  content: "\\E0D5";\n\
  vertical-align: 50%;\n\
  font-size: 14pt;\n\
  display: block;\n\
  margin-left: -3px;\n\
}\n\
button.back:hover,\n\
button.backTo:hover {\n\
  background-color: #ffffff;\n\
}\n\
button.back:hover::before,\n\
button.backTo:hover::before {\n\
  color: ' + $._color + ';\n\
}\n\
button.action {\n\
  width: auto;\n\
  display: block;\n\
  margin: 0 auto;\n\
  padding: 10px 20px;\n\
  box-sizing: border-box;\n\
  height: auto;\n\
  min-width: 200px;\n\
  max-width: 300px;\n\
}\n\
@media only screen and (device-width: 480px) and (orientation: portrait) {\n\
  .back::before,\n\
  .backTo::before {\n\
    width: 41px;\n\
    height: 41px;\n\
  }\n\
}\n\
html[dir=rtl] button.back::before,\n\
html[dir=rtl] button.backTo::before {\n\
  transform: rotate(180deg);\n\
}\n\
html[dir=rtl] button.align-flush {\n\
  left: 16px;\n\
  right: auto;\n\
}\n\
#global-nav {\n\
  background-color: #000000;\n\
  overflow: hidden;\n\
  padding: 0 5px;\n\
}\n\
nav {\n\
  height: 45pt;\n\
  line-height: 40pt;\n\
  box-sizing: border-box;\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: flex-start;\n\
  justify-content: flex-start;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
  position: absolute;\n\
  top: 0;\n\
  left: 0;\n\
  right: 0;\n\
  transition: opacity 0.5s ease-in, transform 0.35s ease-out;\n\
  padding: 5px 15px;\n\
  vertical-align: middle;\n\
  background-color: ' + winNavBackgroundColor + ';\n\
}\n\
nav > h1 {\n\
  text-align: left;\n\
  display: inline-block;\n\
  margin: 0;\n\
  font-size: x-large;\n\
  font-family: SegoeWP, SegoeUI, HelveticaNeue, Sans-serif;\n\
  font-weight: normal;\n\
  padding: 2px 10px 0px 0px;\n\
  -ms-touch-action: none;\n\
  position: relative;\n\
  z-index: -1;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  color: #ffffff;\n\
}\n\
nav button {\n\
  position: relative;\n\
  line-height: 20pt;\n\
  padding: 0 10px;\n\
}\n\
nav button + h1 {\n\
  padding-left: 10px;\n\
}\n\
nav button:first-of-type {\n\
  line-height: 14pt;\n\
  padding: 4px 10px;\n\
  position: relative;\n\
  top: 0;\n\
  margin-left: 2px;\n\
}\n\
nav button:hover {\n\
  border-color: #ffffff !important;\n\
  background-color: #ffffff;\n\
  color: #000000;\n\
}\n\
nav button.align-flush {\n\
  position: absolute;\n\
  right: 10px;\n\
  top: 0;\n\
}\n\
nav > h1 + button {\n\
  margin-top: -4px;\n\
  float: right;\n\
}\n\
nav > h1 + button:first-of-type {\n\
  margin-top: -4px;\n\
  float: right;\n\
}\n\
.slide-out-app > nav > h1 {\n\
  margin-left: 45px !important;\n\
}\n\
.slide-out-app > nav#global-nav > button:first-of-type {\n\
  top: 8px;\n\
}\n\
html[dir=rtl] .slide-out-app > nav > h1 {\n\
  margin-right: 80px !important;\n\
  margin-left: auto;\n\
}\n\
nav > h1,h2,h3,h4,h5,\n\
section h2,p,li,\n\
.list > li > p {\n\
  color: #ffffff;\n\
}\n\
.list {\n\
  list-style: none;\n\
  margin: 10px 8px 0;\n\
  padding: 0;\n\
}\n\
.list:first-child {\n\
  margin-top: 0;\n\
}\n\
.list > li {\n\
  padding: 5px;\n\
  transition: all 0.3s ease-out;\n\
  position: relative;\n\
  background-color: #000000;\n\
  font-size: initial;\n\
  border: solid 1px transparent;\n\
  -ms-user-select: none;\n\
}\n\
.list > li.show-detail::after {\n\
  content: "i";\n\
  display: block;\n\
  height: 20px;\n\
  width: 22px;\n\
  border-radius: 20px;\n\
  border: solid 1px #ffffff;\n\
  color: #ffffff;\n\
  font: bold 14px/0 SegoeWP, SegoeUI, serif;\n\
  box-sizing: border-box;\n\
  padding: 10px 8px;\n\
  position: absolute;\n\
  top: 10px;\n\
  right: 16px;\n\
}\n\
.list > li + .button.action {\n\
  margin-top: 40px;\n\
}\n\
.list > li[data-goto]:hover,\n\
.list > li[data-show-article]:hover {\n\
  cursor: pointer;\n\
  border: solid 1px #ffffff;\n\
  background-color: ' + $._color + ';\n\
  color: #ffffff !important;\n\
}\n\
.list > li[data-goto]:hover *,\n\
.list > li[data-show-article]:hover * {\n\
  color: #ffffff;\n\
}\n\
.list > li > h3,\n\
.list > li > h4 {\n\
  width: 80%;\n\
  font-weight: 200;\n\
  margin: 0;\n\
}\n\
.list > li h3 {\n\
  font-size: 13pt;\n\
  line-height: 16pt;\n\
  margin-bottom: 4px;\n\
  margin-top: 0 !important;\n\
}\n\
.list > li h4 {\n\
  line-height: 12pt;\n\
  color: #9e9e9e;\n\
}\n\
.list > li > h4,\n\
.list > li > div > h4 {\n\
  font-size: 12pt;\n\
  line-height: 15pt;\n\
  margin: 0;\n\
}\n\
.list + h2 {\n\
  margin-top: 10px;\n\
}\n\
h2 + .list {\n\
  margin-top: 0;\n\
  border-top: solid 2px rgba(255, 255, 255, 0.25);\n\
  padding-top: 5px;\n\
}\n\
section h2 {\n\
  font: normal 11pt/12pt SegoeWP, SegoeUI, HelveticaNeue, Sans-serif;\n\
  margin: 10px 10px 0px 10px;\n\
  padding-left: 5px;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  padding-bottom: 5px;\n\
}\n\
section h2.normal-case {\n\
  text-transform: none;\n\
}\n\
section h2.wrap {\n\
  white-space: normal;\n\
}\n\
section > p,\n\
.list > li > p,\n\
.list > li > div > p {\n\
  font-size: 11pt;\n\
  line-height: 14pt;\n\
  margin: 0;\n\
}\n\
.list > li p + p {\n\
  margin-top: 5px;\n\
}\n\
.list > li > p {\n\
  margin: 5px 0px;\n\
  font-size: 11pt;\n\
  line-height: 14pt;\n\
  color: #ffffff;\n\
}\n\
html[dir=rtl] .list > li.show-detail::after {\n\
  left: 10px;\n\
  right: auto;\n\
}\n\
li.comp {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-align: stretch;\n\
  align-items: stretch;\n\
  padding-bottom: 0;\n\
}\n\
li.comp > div {\n\
  -ms-flex: 1 !important;\n\
  flex: 1 !important;\n\
  padding: 0 0 10px 0;\n\
}\n\
li.comp > div + aside {\n\
  margin-right: -20px;\n\
}\n\
li.comp > h3,\n\
li.comp > h4 {\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  font-family: SegoeWP, SegoeUI, HelveticaNeue, Sans-serif;\n\
  font-weight: 200;\n\
}\n\
li.comp > h3 > h3,\n\
li.comp > h4 > h3 {\n\
  margin: 0;\n\
  min-width: 40%;\n\
}\n\
li.comp > h3 > h4,\n\
li.comp > h4 > h4 {\n\
  margin: 0;\n\
}\n\
li.comp.wrap > div > h3,\n\
li.comp.wrap > div > h4 {\n\
  white-space: normal;\n\
  overflow: visible;\n\
}\n\
li.comp > aside {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-pack: center;\n\
  justify-content: center;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
  padding: 0 0 10px 0;\n\
}\n\
li.comp > aside:first-child {\n\
  -ms-flex-align: start;\n\
  align-items: start;\n\
  margin-right: 10px;\n\
}\n\
li.comp > aside:last-child {\n\
  padding: 0 20px 10px 10px;\n\
}\n\
li.comp > aside > label,\n\
li.comp > aside > span {\n\
  display: inline-block;\n\
  margin-left: 5px;\n\
}\n\
li.comp > aside > .nav {\n\
  display: none;\n\
}\n\
li.comp > aside > .nav::after {\n\
  display: none;\n\
}\n\
li.comp > aside > .show-detail::after {\n\
  content: "i";\n\
  display: block;\n\
  height: 20px;\n\
  width: 22px;\n\
  border-radius: 20px;\n\
  border: solid 1px #ffffff;\n\
  color: #ffffff;\n\
  font: bold 14px/0 SegoeWP, SegoeUI, Times, serif;\n\
  box-sizing: border-box;\n\
  padding: 10px 8px;\n\
  float: right;\n\
  margin: -20px 0 0 0;\n\
}\n\
li.comp:last-of-type > aside:last-child {\n\
  border: none;\n\
}\n\
.list > li > aside > h4 {\n\
  margin: 0;\n\
  font-weight: normal;\n\
  color: #cccccc;\n\
}\n\
aside > span.counter,\n\
aside > span.date-time {\n\
  font-weight: normal;\n\
  color: #cccccc;\n\
  font-size: 12pt;\n\
}\n\
p {\n\
  color: #ffffff;\n\
}\n\
html[dir=rtl] li.comp > aside:first-child {\n\
  margin-right: auto;\n\
  margin-left: 10px;\n\
}\n\
html[dir=rtl] li.comp > aside > span.counter,\n\
html[dir=rtl] li.comp > aside > span.date-time {\n\
  margin-right: 10px !important;\n\
  margin-left: 0 !important;\n\
  display: inline-block !important;\n\
}\n\
@media only screen and (max-device-width: 320px) and (orientation: portrait) {\n\
  li.comp > aside > h4 {\n\
    max-width: 100px;\n\
    white-space: nowrap;\n\
    overflow: hidden;\n\
    text-overflow: ellipsis;\n\
  }\n\
}\n\
.grid {\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-box-align: stretch;\n\
  display: -webkit-flex;\n\
  -webkit-flex-direction: row;\n\
  -webkit-align-items: stretch;\n\
  display: -ms-flexbox;\n\
  -ms-flex-direction: row;\n\
  -ms-align-items: stretch;\n\
  display: flex;\n\
  flex-direction: row;\n\
  align-items: stretch;\n\
}\n\
/* Allow columns to wrap */\n\
.grid.wrap {\n\
  -webkit-box-wrap: wrap;\n\
  -webkit-flex-wrap: wrap;\n\
  -ms-flex-wrap: wrap;\n\
  flex-wrap: wrap;\n\
}\n\
/* Column: */\n\
.col {\n\
  -webkit-box-flex: 1 1 auto;\n\
  -webkit-flex: 1 1 auto;\n\
  -ms-flex: 1 1 auto;\n\
  flex: 1 1 auto;\n\
}\n\
/* Centered grids: */\n\
.grid.center {\n\
  -webkit-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  -ms-justify-content: center;\n\
  justify-content: center;\n\
}\n\
.center .col {\n\
  -webkit-flex-grow: 0;\n\
  -webkit-flex-shrink: 0;\n\
  -ms-flex-grow: 0;\n\
  -ms-flex-shrink: 0;\n\
  flex-grow: 0;\n\
  flex-shrink: 0;\n\
}\n\
/* Columns: */\n\
.flex-1 {\n\
  -webkit-flex-basis: 10%;\n\
  -ms-flex-basis: 10%;\n\
  flex-basis: 10%;\n\
}\n\
.flex-2 {\n\
  -webkit-flex-basis: 20%;\n\
  -ms-flex-basis: 20%;\n\
  flex-basis: 20%;\n\
}\n\
.flex-3 {\n\
  -webkit-flex-basis: 30%;\n\
  -ms-flex-basis: 30%;\n\
  flex-basis: 30%;\n\
}\n\
.flex-4 {\n\
  -webkit-flex-basis: 40%;\n\
  -ms-flex-basis: 40%;\n\
  flex-basis: 40%;\n\
}\n\
.flex-5 {\n\
  -webkit-flex-basis: 50%;\n\
  -ms-flex-basis: 50%;\n\
  flex-basis: 50%;\n\
}\n\
.flex-6 {\n\
  -webkit-flex-basis: 60%;\n\
  -ms-flex-basis: 60%;\n\
  flex-basis: 60%;\n\
}\n\
.flex-7 {\n\
  -webkit-flex-basis: 70%;\n\
  -ms-flex-basis: 70%;\n\
  flex-basis: 70%;\n\
}\n\
.flex-8 {\n\
  -webkit-flex-basis: 80%;\n\
  -ms-flex-basis: 80%;\n\
  flex-basis: 80%;\n\
}\n\
.flex-9 {\n\
  -webkit-flex-basis: 90%;\n\
  -ms-flex-basis: 90%;\n\
  flex-basis: 90%;\n\
}\n\
.flex-10 {\n\
  -webkit-flex-basis: 100%;\n\
  -ms-flex-basis: 100%;\n\
  flex-basis: 100%;\n\
}\n\
.gutter-5 .col {\n\
  margin: 5px;\n\
}\n\
.gutter-10 .col {\n\
  margin: 10px;\n\
}\n\
body.isNativeAndroidBrowser .flex-1 {\n\
  -webkit-box-flex: 1;\n\
}\n\
body.isNativeAndroidBrowser .flex-2 {\n\
  -webkit-box-flex: 2;\n\
}\n\
body.isNativeAndroidBrowser .flex-3 {\n\
  -webkit-box-flex: 3;\n\
}\n\
body.isNativeAndroidBrowser .flex-4 {\n\
  -webkit-box-flex: 4;\n\
}\n\
body.isNativeAndroidBrowser .flex-5 {\n\
  -webkit-box-flex: 5;\n\
}\n\
body.isNativeAndroidBrowser .flex-6 {\n\
  -webkit-box-flex: 6;\n\
}\n\
body.isNativeAndroidBrowser .flex-7 {\n\
  -webkit-box-flex: 7;\n\
}\n\
body.isNativeAndroidBrowser .flex-8 {\n\
  -webkit-box-flex: 8;\n\
}\n\
body.isNativeAndroidBrowser .flex-9 {\n\
  -webkit-box-flex: 9;\n\
}\n\
body.isNativeAndroidBrowser .flex-10 {\n\
  -webkit-box-flex: 10;\n\
}\n\
html[dir=rtl] .grid {\n\
  -webkit-box-direction: horizontal;\n\
  -webkit-flex-direction: row;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
}\n\
.segmented {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: center;\n\
  justify-content: center;\n\
  -ms-flex: 1;\n\
  flex: 1;\n\
  box-sizing: border-box;\n\
  margin: 0px 10px;\n\
}\n\
.segmented > button {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: column !important;\n\
  flex-direction: column !important;\n\
  -ms-flex-pack: center;\n\
  justify-content: center;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
  border: solid 2px #ffffff;\n\
  border-left: none;\n\
  text-align: center;\n\
  font-size: 9pt;\n\
  box-sizing: border-box;\n\
  height: 30px;\n\
  cursor: pointer;\n\
  margin: 0px !important;\n\
  padding: 0px 10px;\n\
  transition: none;\n\
}\n\
.segmented > button:first-of-type {\n\
  border-left: solid 2px #ffffff;\n\
}\n\
.segmented > button:hover,\n\
.segmented > button.selected {\n\
  color: #ffffff !important;\n\
  background-color: ' + $._color + ' !important;\n\
  opacity: 1 !important;\n\
  box-shadow: none;\n\
  border-color: #ffffff !important;\n\
}\n\
div.horizontal.centered > .segmented {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  margin: 10px 16px;\n\
}\n\
.segmented.align-flush {\n\
  position: absolute;\n\
  right: 15px;\n\
  top: 10px;\n\
}\n\
html[dir=rtl] .segmented.align-flush {\n\
  left: 15px;\n\
  right: auto;\n\
}\n\
html[dir=rtl] .segmented > button {\n\
  border-left: solid 2px #ffffff;\n\
  border-right: none;\n\
}\n\
html[dir=rtl] .segmented > button:first-of-type {\n\
  border-right: solid 2px #ffffff;\n\
}\n\
.segmented.paging > button {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-pack: center;\n\
  justify-content: center;\n\
  font-size: 20pt;\n\
  padding: 0;\n\
  width: 40px;\n\
  height: 40px;\n\
  border: solid 2px #ffffff;\n\
  box-shadow: none;\n\
  position: relative;\n\
  box-sizing: border-box;\n\
}\n\
.segmented.paging > button:first-of-type {\n\
  margin-right: 10px !important;\n\
  top: 0 !important;\n\
}\n\
.segmented.paging > button:hover,\n\
.segmented.paging > button.selected {\n\
  color: ' + $._color + ';\n\
  box-shadow: none;\n\
  border-color: #ffffff;\n\
  background-color: #ffffff;\n\
  color: #ffffff;\n\
  opacity: 1;\n\
}\n\
.segmented.paging > button:hover::before,\n\
.segmented.paging > button.selected::before {\n\
  background-color: #ffffff;\n\
  color: ' + $._color + ';\n\
}\n\
.segmented.paging > button::before {\n\
  content: "";\n\
  display: block;\n\
  -ms-flex: 1;\n\
  flex: 1;\n\
  height: 38px;\n\
  width: 38px;\n\
  font-family: "Segoe UI Symbol";\n\
  font-weight: normal;\n\
  line-height: 20pt;\n\
  vertical-align: 50%;\n\
  font-size: 24pt;\n\
  color: #ffffff;\n\
}\n\
nav .segmented.paging > button {\n\
  border-radius: 50%;\n\
}\n\
.segmented.paging.horizontal > button:first-of-type::before {\n\
  content: "\\E09E";\n\
  margin-left: -2px;\n\
}\n\
.segmented.paging.horizontal > button:last-of-type::before {\n\
  content: "\\E09F";\n\
}\n\
.segmented.paging.vertical > button:first-of-type::before {\n\
  content: "\\E0A0";\n\
}\n\
.segmented.paging.vertical > button:last-of-type::before {\n\
  content: "\\E0A1";\n\
}\n\
article.paging > section {\n\
  position: absolute;\n\
  width: 100%;\n\
  left: 0;\n\
  right: 0;\n\
  bottom: 0;\n\
  top: 0;\n\
  opacity: 1;\n\
  padding: 0 0 100px 0 !important;\n\
  transition: all 0.15s ease-out;\n\
}\n\
article.paging.horizontal > section.previous {\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
article.paging.horizontal > section.current {\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
article.paging.horizontal > section.next {\n\
  transform: translate3d(100%, 0, 0);\n\
}\n\
article.paging.vertical > section.previous {\n\
  transform: translate3d(0, -100%, 0);\n\
}\n\
article.paging.vertical > section.current {\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
article.paging.vertical > section.next {\n\
  transform: translate3d(0, -100%, 0);\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal > button:first-of-type::before,\n\
html[dir=rtl] .segmented.paging.vertical > button:first-of-type::before,\n\
html[dir=rtl] .segmented.paging.horizontal > button:last-of-type::before,\n\
html[dir=rtl] .segmented.paging.vertical > button:last-of-type::before {\n\
  transform: rotate(-180deg);\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal > button:first-of-type::before,\n\
html[dir=rtl] .segmented.paging.vertical > button:first-of-type::before {\n\
  margin-right: -2px;\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal > button:last-of-type,\n\
html[dir=rtl] .segmented.paging.vertical > button:last-of-type {\n\
  margin-right: 10px !important;\n\
  border: solid 2px #ffffff !important;\n\
}\n\
html[dir=rtl] article.paging.horizontal > section.previous {\n\
  transform: translate3d(100%, 0, 0);\n\
}\n\
html[dir=rtl] article.paging.horizontal > section.next {\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
div.toolbar {\n\
  position: fixed;\n\
  bottom: 0;\n\
  left: 0;\n\
  right: 0;\n\
  height: 45pt;\n\
  padding: 0 15px;\n\
  background-color: #1a1a1a;\n\
  border-top: solid 1px #333333;\n\
  overflow: hidden;\n\
  box-sizing: border-box;\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: flex-start;\n\
  justify-content: flex-start;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
  -webkit-transition: all 0.15s ease-out;\n\
  transition: all 0.15s ease-out;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  background-color: ' + winNavBackgroundColor + ';\n\
}\n\
div.toolbar > button {\n\
  margin-right: 10px;\n\
}\n\
.splitlayout > .master + .toolbar {\n\
  left: 0;\n\
  width: 320px;\n\
  border-right: solid 1px #333333 !important;\n\
  background-color: #1a1a1a;\n\
}\n\
.splitlayout > .detail + .toolbar {\n\
  left: 320px;\n\
  background-color: #1a1a1a;\n\
}\n\
article.has-toolbar {\n\
  bottom: 45pt !important;\n\
}\n\
div.toolbar.current {\n\
  -webkit-transform: translate3d(0, 0, 0) !important;\n\
}\n\
div.toolbar.next {\n\
  -webkit-transform: translate3d(101%, 0, 0) !important;\n\
}\n\
div.toolbar.previous {\n\
  -webkit-transform: translate3d(-101%, 0, 0) !important;\n\
}\n\
html[dir=rtl] .splitlayout > .master + .toolbar {\n\
  right: 0;\n\
  left: 320px;\n\
  width: 320px;\n\
  border-right: none;\n\
  border-left: solid 1px #333333 !important;\n\
}\n\
html[dir=rtl] .splitlayout > .detail + .toolbar {\n\
  right: 320px;\n\
  left: 0;\n\
}\n\
html[dir=rtl] div.toolbar.current {\n\
  transform: translate3d(0, 0, 0) !important;\n\
}\n\
html[dir=rtl] div.toolbar.next {\n\
  transform: translate3d(-100%, 0, 0) !important;\n\
}\n\
html[dir=rtl] div.toolbar.previous {\n\
  transform: translate3d(105%, 0, 0) !important;\n\
}\n\
body.splitlayout {\n\
  display: -ms-flexbox;\n\
  -ms-flex-direction: row;\n\
  -ms-flex-align: stretch;\n\
}\n\
body.splitlayout > nav {\n\
  background-color: #1a1a1a !important;\n\
  border-bottom: solid 1px #333333;\n\
}\n\
body.splitlayout > nav:first-of-type {\n\
  width: 320px;\n\
  border-right: solid 1px #333333 !important;\n\
}\n\
body.splitlayout > nav:last-of-type {\n\
  left: 320px;\n\
}\n\
body.splitlayout > nav h1 {\n\
  z-index: auto;\n\
  text-align: center;\n\
}\n\
body.splitlayout > .master + nav:not(:last-of-type) {\n\
  width: 320px;\n\
  right: auto;\n\
  border-right: solid 1px #333333 !important;\n\
}\n\
body.splitlayout > article.master {\n\
  top: 60px;\n\
  left: 0;\n\
  bottom: 0;\n\
  right: 320px;\n\
  box-sizing: border-box;\n\
  width: 320px;\n\
  border-right: solid 1px #262626 !important;\n\
}\n\
body.splitlayout > article.master > section {\n\
  padding-bottom: 100px;\n\
  height: 100%;\n\
}\n\
body.splitlayout > article.detail {\n\
  top: 60px;\n\
  left: 320px !important;\n\
  bottom: 0;\n\
  left: 0;\n\
  -ms-flex: 1;\n\
  overflow: hidden;\n\
}\n\
body.splitlayout > article.detail > section {\n\
  padding-bottom: 100px;\n\
  height: 100%;\n\
}\n\
.master .list > li.selected {\n\
  background-color: #ffffff;\n\
  color: #000000 !important;\n\
}\n\
html[dir=rtl] body.splitlayout > nav:first-of-type {\n\
  right: 0;\n\
  left: 320px;\n\
  border-right: none;\n\
  border-left: solid 1px #333333 !important;\n\
}\n\
html[dir=rtl] body.splitlayout > nav:last-of-type {\n\
  left: 0;\n\
  right: 320px;\n\
}\n\
html[dir=rtl] body.splitlayout > .master + nav:not(:last-of-type) {\n\
  right: 0;\n\
  left: 320px;\n\
  border-right: none;\n\
  border-left: solid 1px #333333 !important;\n\
}\n\
html[dir=rtl] body.splitlayout > article.master {\n\
  left: 320px !important;\n\
  right: 0 !important;\n\
  border-right: none !important;\n\
  border-left: solid 1px #333333 !important;\n\
}\n\
html[dir=rtl] body.splitlayout > article.detail {\n\
  right: 320px !important;\n\
  left: 0 !important;\n\
}\n\
@media only screen and (max-device-width: 320px) and (orientation: portrait) {\n\
  .splitlayout > article.master {\n\
    right: 260px !important;\n\
  }\n\
  .splitlayout > article.detail {\n\
    left: 260px !important;\n\
  }\n\
  .splitlayout > nav:first-of-type {\n\
    width: 260px !important;\n\
  }\n\
  .splitlayout > nav:last-of-type {\n\
    left: 260px !important;\n\
  }\n\
}\n\
.mask {\n\
  display: block;\n\
  background-color: #000;\n\
  position: absolute;\n\
  top: 0;\n\
  bottom: 0;\n\
  left: 0;\n\
  right: 0;\n\
  height: 100%;\n\
  width: 100%;\n\
  z-index: 9999;\n\
  cursor: pointer;\n\
}\n\
.busy {\n\
  width: 150px;\n\
  display: block;\n\
  margin-left: auto;\n\
  margin-right: auto;\n\
  position: relative;\n\
  top: 20px;\n\
}\n\
.busy.align-flush {\n\
  position: absolute;\n\
  right: 15px;\n\
}\n\
nav > .busy {\n\
  width: 80px;\n\
}\n\
.popover {\n\
  min-width: 200px;\n\
  background-color: #000000;\n\
  height: 250px;\n\
  max-height: 300px;\n\
  position: absolute;\n\
  z-index: 111111;\n\
  margin-top: 10px;\n\
  transform: scaleY(0);\n\
  transition: all 0.15s ease-in-out;\n\
  transform-origin: 50% 0%;\n\
  box-shadow: 0 0 5px 3px #4d4d4d;\n\
  border: solid 2px #000000;\n\
}\n\
.popover.open {\n\
  transform: scaleY(1);\n\
}\n\
.popover header {\n\
  display: none;\n\
}\n\
.popover > section {\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -ms-overflow-style: -ms-autohiding-scrollbar;\n\
  padding-bottom: 0;\n\
  position: absolute;\n\
  top: 4px;\n\
  bottom: 4px;\n\
  width: 100%;\n\
  padding-bottom: 20px;\n\
}\n\
.popover > section > ul.list,\n\
.popover > section > ul.list > li {\n\
  margin: 0 !important;\n\
}\n\
.popover > section > ul.list > li:hover {\n\
  background-color: ' + $._color + ';\n\
  color: #ffffff;\n\
}\n\
button.show-popover:hover {\n\
  background-color: #ffffff;\n\
  color: #000000;\n\
}\n\
.popup {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: column;\n\
  flex-direction: column;\n\
  width: 100%;\n\
  background-color: #fafafa;\n\
  padding: 20px 10px;\n\
  transform: scaleY(1);\n\
  transition: all 0.25s ease-in-out;\n\
  position: absolute;\n\
  top: 0;\n\
  left: 0;\n\
  right: 0;\n\
  z-index: 10000;\n\
  margin-left: auto;\n\
  margin-right: auto;\n\
  transition: all 0.25s ease-in;\n\
  transform-origin: top center;\n\
  min-height: 100px;\n\
}\n\
.popup.closed {\n\
  transform: scaleY(0);\n\
}\n\
.popup.opened {\n\
  display: block;\n\
  transform: scaleY(1);\n\
  transition: all 0.25s ease-in-out;\n\
}\n\
.popup * {\n\
  color: #000000;\n\
}\n\
.popup > .panel {\n\
  display: block !important;\n\
  color: #fff;\n\
  font: normal 16px/22px Helvetica, Arial, Sans-serif;\n\
  padding: 0 0 10px 0;\n\
  width: 80%;\n\
  height: 100%;\n\
  margin: 0 20px;\n\
}\n\
.popup > .panel > p {\n\
  padding: 0 20px;\n\
}\n\
.popup header > h1 {\n\
  font-size: 24px;\n\
}\n\
.popup header,\n\
.popup footer {\n\
  box-sizing: border-box;\n\
  display: -ms-flexbox !important;\n\
  display: flex !important;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: center;\n\
  justify-content: center;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
  height: auto !important;\n\
}\n\
.popup footer {\n\
  height: auto;\n\
  position: relative;\n\
  bottom: -10px;\n\
  left: -10px;\n\
  padding: 0 20px;\n\
  height: 42px;\n\
}\n\
.popup footer > button {\n\
  -ms-flex: 1;\n\
  flex: 1;\n\
  display: block;\n\
  box-sizing: border-box;\n\
  max-width: 100%;\n\
  box-shadow: none;\n\
  margin: 10px 0px !important;\n\
  height: 42px !important;\n\
  font-size: 18px;\n\
  line-height: 32px;\n\
  padding: 8px 20px;\n\
  border-color: #000000;\n\
  background-color: #ffffff;\n\
  color: #000000;\n\
  font: bold 16px/20px Helvetica, sans-serif;\n\
  border-right: none;\n\
  text-align: center;\n\
}\n\
.popup footer > button:last-of-type {\n\
  border-right: solid 2px #000000;\n\
}\n\
.popup footer > button:hover {\n\
  background-color: ' + $._color + ';\n\
  border-color: #000000 !important;\n\
  color: #ffffff;\n\
}\n\
.popup footer + button {\n\
  border-right: solid 2px #000000;\n\
}\n\
html[dir=rtl] .popup footer > button:first-of-type {\n\
  border-right: solid 2px #000000;\n\
  border-left: solid 2px #000000;\n\
}\n\
.list.editable > li,\n\
.list.deletable > li {\n\
  overflow: hidden;\n\
  padding: 7px 5px;\n\
}\n\
.list.editable > li > .move-up,\n\
.list.deletable > li > .move-up,\n\
.list.editable > li > .move-down,\n\
.list.deletable > li > .move-down {\n\
  width: 27px;\n\
  height: 27px;\n\
  display: block !important;\n\
  position: relative;\n\
  float: right;\n\
  margin-top: -33px;\n\
  transition: all 0.25s ease-out;\n\
  -ms-transform: translate3d(100px, 0, 0);\n\
  transform: translate3d(140px, 0, 0);\n\
}\n\
.list.editable > li > .move-up::after,\n\
.list.deletable > li > .move-up::after,\n\
.list.editable > li > .move-down::after,\n\
.list.deletable > li > .move-down::after {\n\
  display: block;\n\
  content: "\\E0A0";\n\
  width: 27px;\n\
  height: 27px;\n\
  position: absolute;\n\
  border: solid 2px #fff;\n\
  border-radius: 50%;\n\
  color: #fff;\n\
  z-index: 1000000;\n\
  font-family: "Segoe UI Symbol";\n\
  font-weight: normal;\n\
  line-height: .9;\n\
  font-size: 16pt;\n\
  text-align: center;\n\
}\n\
.list.editable > li > .move-up,\n\
.list.deletable > li > .move-up {\n\
  margin-top: -32px;\n\
}\n\
.list.editable > li > .move-down,\n\
.list.deletable > li > .move-down {\n\
  margin-right: 10px !important;\n\
  content: "\\E0A1";\n\
}\n\
.list.editable > li:first-of-type > .move-up,\n\
.list.deletable > li:first-of-type > .move-up {\n\
  opacity: .35;\n\
}\n\
.list.editable > li:last-of-type > .move-down,\n\
.list.deletable > li:last-of-type > .move-down {\n\
  opacity: .35;\n\
}\n\
.deletion-indicator {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  box-sizing: border-box;\n\
  padding: 2px 5px 13px 1px;\n\
  height: 24px;\n\
  width: 24px;\n\
  background-color: #000000;\n\
  border: solid 2px #ffffff;\n\
  position: absolute;\n\
  top: 5px;\n\
  left: -50px;\n\
  transition: all 0.25s ease-out;\n\
  cursor: pointer;\n\
}\n\
.deletion-indicator:hover {\n\
  box-shadow: 0 0 6px 2px #ffffff !important;\n\
  color: ' + $._color + ' !important;\n\
}\n\
li.selected > .deletion-indicator {\n\
  box-shadow: 0 0 6px 2px #ffffff !important;\n\
  color: ' + $._color + ' !important;\n\
}\n\
li.selected > .deletion-indicator::before {\n\
  font-family: "Segoe UI Symbol";\n\
  font-weight: normal;\n\
  font-size: 13pt;\n\
  text-align: left;\n\
  content: "\\E008";\n\
  color: ' + $._color + ';\n\
  display: block;\n\
  margin: -2px 0 0 -4px;\n\
}\n\
.list.editable.showIndicators .deletion-indicator,\n\
.list.deletable.showIndicators .deletion-indicator {\n\
  margin-left: 55px;\n\
}\n\
.list.editable.showIndicators li,\n\
.list.deletable.showIndicators li {\n\
  padding-left: 34px;\n\
}\n\
.list.editable.showIndicators li .move-up,\n\
.list.deletable.showIndicators li .move-up {\n\
  -ms-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.list.editable.showIndicators li .move-down,\n\
.list.deletable.showIndicators li .move-down {\n\
  margin-top: -28px;\n\
  -ms-transform: translate3d(-36px, 0, 0) rotate(180deg);\n\
  transform: translate3d(-36px, 0, 0) rotate(180deg);\n\
}\n\
.list.editable.showIndicators li > li > h3,\n\
.list.deletable.showIndicators li > li > h3 {\n\
  width: 55%;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
}\n\
.list.editable.showIndicators li.selected > .move-up,\n\
.list.deletable.showIndicators li.selected > .move-up {\n\
  -ms-transform: translate3d(-45px, 0, 0);\n\
  transform: translate3d(-45px, 0, 0);\n\
}\n\
.list.editable.showIndicators li.selected > .move-down,\n\
.list.deletable.showIndicators li.selected > .move-down {\n\
  -ms-transform: translate3d(-80px, 0, 0) rotate(180deg);\n\
  transform: translate3d(-80px, 0, 0) rotate(180deg);\n\
}\n\
.list.editable.showIndicators > li > h3,\n\
.list.deletable.showIndicators > li > h3 {\n\
  width: 55%;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
}\n\
button.delete {\n\
  float: right;\n\
  color: #ffffff;\n\
  text-align: center;\n\
  box-sizing: border-box;\n\
  width: 32px;\n\
  height: 30px;\n\
  position: absolute;\n\
  right: 0;\n\
  top: 0;\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: center;\n\
  justify-content: center;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
  transition: all 0.25s ease-out;\n\
  transform: translate3d(140px, 0, 0);\n\
  cursor: pointer;\n\
  font-weight: 200;\n\
  border: solid 2px #ffffff;\n\
  border-radius: 50%;\n\
  padding: 0;\n\
  overflow: hidden;\n\
}\n\
button.delete:hover {\n\
  border-color: #ffffff !important;\n\
}\n\
button.delete:hover::before {\n\
  color: #ffffff;\n\
}\n\
button.delete::before {\n\
  font-family: "Segoe UI Symbol";\n\
  font-weight: normal;\n\
  content: "\\E107";\n\
  vertical-align: 50%;\n\
  font-size: 14pt;\n\
  display: block;\n\
  width: 100%;\n\
  height: 100%;\n\
  text-align: center;\n\
  margin-top: 8px;\n\
}\n\
li.selected > button.delete {\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
html[dir=rtl] .deletion-indicator {\n\
  right: -50px !important;\n\
  left: auto;\n\
}\n\
html[dir=rtl] li.selected > .deletion-indicator::before {\n\
  margin: -2px 18px 0 0;\n\
}\n\
html[dir=rtl] .list.showIndicators li {\n\
  padding-left: 0;\n\
  padding-right: 34px;\n\
}\n\
html[dir=rtl] button.delete {\n\
  float: left;\n\
}\n\
html[dir=rtl] .list.editable > li > .deletion-indicator,\n\
html[dir=rtl] .list.deletable > li > .deletion-indicator {\n\
  float: right;\n\
  margin-right: auto;\n\
  margin-left: -20px;\n\
  right: -40px;\n\
}\n\
html[dir=rtl] .list.editable > li > button.delete,\n\
html[dir=rtl] .list.deletable > li > button.delete {\n\
  transform: translate3d(-80px, 0, 0);\n\
  left: 0;\n\
  right: auto;\n\
}\n\
html[dir=rtl] .list.editable > li > .move-up,\n\
html[dir=rtl] .list.deletable > li > .move-up {\n\
  float: left !important;\n\
  -ms-transform: translate3d(-100px, 0, 0);\n\
  transform: translate3d(-100px, 0, 0);\n\
}\n\
html[dir=rtl] .list.editable > li > .move-down,\n\
html[dir=rtl] .list.deletable > li > .move-down {\n\
  margin-top: -28px;\n\
  float: left !important;\n\
  -ms-transform: translate3d(-140px, 0, 0) rotate(180deg);\n\
  transform: translate3d(-140px, 0, 0) rotate(180deg);\n\
}\n\
html[dir=rtl] .list.showIndicators > li > .deletion-indicator {\n\
  right: 0px !important;\n\
  margin-left: 10px;\n\
}\n\
html[dir=rtl] .list.showIndicators > li > .move-up {\n\
  -ms-transform: translate3d(10px, 0, 0) !important;\n\
  transform: translate3d(10px, 0, 0) !important;\n\
}\n\
html[dir=rtl] .list.showIndicators > li > .move-down {\n\
  -ms-transform: translate3d(50px, 0, 0) rotate(180deg) !important;\n\
  transform: translate3d(50px, 0, 0) rotate(180deg) !important;\n\
}\n\
html[dir=rtl] .list.showIndicators > li.selected {\n\
  margin-right: 0;\n\
  padding-left: 45px;\n\
}\n\
html[dir=rtl] .list.showIndicators > li.selected > button.delete {\n\
  transform: translate3d(6px, 0, 0);\n\
}\n\
input:not([type=range]),\n\
textarea {\n\
  border: solid 2px #ffffff;\n\
  background: transparent !important;\n\
  padding: 5px;\n\
  color: #ffffff;\n\
}\n\
input[type="range"]::-ms-fill-lower {\n\
    background-color: ' + $._color + ';\n\
}\n\
input[type="range"]:hover::-ms-thumb,\n\
input[type="range"]:focus::-ms-thumb {\n\
  background-color: black !important;\n\
}\n\
input:focus:not([type=range]) {\n\
  border-color: ' + $._secondaryColor + ';\n\
  color: #ffffff;\n\
}\n\
select {\n\
  background-color: transparent;\n\
  border: solid 2px #ffffff;\n\
  color: #ffffff;\n\
  height: 30px;\n\
  padding-left: 5px;\n\
}\n\
select:focus {\n\
  border-color: ' + $._secondaryColor + ';\n\
}\n\
select:focus::-ms-value {\n\
  background-color: transparent;\n\
  color: #ffffff;\n\
}\n\
select:focus::-ms-expand {\n\
  border: solid 2px ' + $._secondaryColor + ';\n\
  border-top: none;\n\
  border-right: none;\n\
  border-bottom: none;\n\
}\n\
select::-ms-expand {\n\
  border: solid 2px #ffffff;\n\
  border-top: none;\n\
  border-bottom: none;\n\
  border-right: none;\n\
  color: #ffffff;\n\
  background-color: transparent;\n\
  padding: 0 2px;\n\
}\n\
select option:hover,\n\
select option:focus,\n\
select option:checked {\n\
  background-color: ' + $._secondaryColor + ';\n\
}\n\
option {\n\
  color: #000000;\n\
  padding: 5px;\n\
}\n\
.select-box-label {\n\
  display: none;\n\
}\n\
html[dir=rtl] select::-ms-expand {\n\
  border: none;\n\
  border-right: solid 2px #ffffff;\n\
  padding: 0 4px 0 0;\n\
}\n\
.searchBar {\n\
  width: auto;\n\
  box-sizing: border-box;\n\
  height: 30px;\n\
  margin-left: auto;\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: flex-start;\n\
  justify-content: flex-start;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
}\n\
.searchBar > input[type="search"] {\n\
  padding: 4px 0 4px 10px;\n\
  width: auto;\n\
  padding-left: 10px;\n\
  margin-left: 25px;\n\
  text-align: left;\n\
  color: #000;\n\
  background-color: #fff !important;\n\
  border: none;\n\
  border: solid 2px #fff;\n\
}\n\
.searchBar > input[type="search"]:focus {\n\
  text-align: left;\n\
  outline: none !important;\n\
  color: #000;\n\
}\n\
.searchBar > input[type="search"]::-ms-clear {\n\
  color: #000;\n\
  border: solid 1px #000;\n\
  height: 20px;\n\
  margin: 2px 4px 2px 0;\n\
}\n\
.searchGlyph {\n\
  font-family: "Segoe UI Symbol";\n\
  display: inline-block;\n\
  height: 28px;\n\
  width: 28px;\n\
  box-sizing: border-box;\n\
  padding: 2px;\n\
  line-height: 16px;\n\
  background-color: #000;\n\
  border: solid 3px #fff;\n\
  color: #fff;\n\
}\n\
*/\n\
.icon {\n\
  height: 40px;\n\
  width: 40px;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  background-size: auto 70%;\n\
  border-radius: 0;\n\
}\n\
input[type="range"] {\n\
  display: block;\n\
  margin-top: 20px;\n\
  margin-bottom: 20px;\n\
}\n\
.list.select li::before {\n\
  content: "";\n\
  display: block;\n\
  float: left;\n\
  transition: all 0.125s ease-in-out;\n\
  border: solid 2px #ffffff;\n\
  height: 16px;\n\
  width: 16px;\n\
  border-radius: 50%;\n\
  margin-right: 10px;\n\
  margin-top: 0px;\n\
}\n\
.list.select li:hover::before,\n\
.list.select li.selected::before {\n\
  background-image: radial-gradient(circle, #ffffff 5px, transparent 5px);\n\
  background-color: ' + $._color + ';\n\
}\n\
.list.select li > input {\n\
  display: none;\n\
}\n\
.sheet {\n\
  position: absolute;\n\
  top: 0;\n\
  left: 0;\n\
  bottom: 0;\n\
  right: 0;\n\
  background-color: rgba(255, 255, 255, 0.85);\n\
  transition: all 0.25s ease-in;\n\
  transform: translate3d(0, -100%, 0);\n\
  visibility: hidden;\n\
}\n\
.sheet.opened {\n\
  visibility: visible;\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.sheet button {\n\
  width: auto;\n\
  margin: 0 auto;\n\
  padding: 10px 20px;\n\
  height: auto;\n\
  background-color: #ffffff;\n\
  border-color: #000000;\n\
  color: #000000;\n\
}\n\
.sheet button:hover,\n\
.sheet button.selected {\n\
  color: #ffffff;\n\
  background-color: ' + $._color + ';\n\
  border-color: #000000 !important;\n\
}\n\
.sheet > section {\n\
  position: absolute;\n\
  top: 36px;\n\
  left: 0;\n\
  bottom: 0;\n\
  height: auto;\n\
  right: 0;\n\
}\n\
.sheet > section > *,\n\
.sheet > section h2 {\n\
  color: #appBkColor;\n\
}\n\
.sheet > section > .list {\n\
  border: none;\n\
  background-color: transparent !important;\n\
}\n\
.sheet > section > .list > li {\n\
  border-bottom: solid 1px #4d4d4d;\n\
  background-color: transparent !important;\n\
}\n\
.sheet > section > .list::before {\n\
  content: none;\n\
}\n\
.sheet > div.handle {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: column;\n\
  flex-direction: column;\n\
  -ms-flex-pack: center;\n\
  justify-content: center;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
  text-align: center;\n\
  margin: 0 auto;\n\
  color: #000000;\n\
  cursor: pointer;\n\
  height: 28pt;\n\
}\n\
.sheet > div.handle::before {\n\
  content: "\\E0A0";\n\
  font-family: "Segoe UI Symbol";\n\
  font-weight: normal;\n\
  font-size: 24pt;\n\
  text-align: left;\n\
  color: #000000;\n\
  display: block;\n\
  margin-bottom: 10px;\n\
}\n\
.slide-out {\n\
  position: absolute;\n\
  top: 44pt;\n\
  left: 0;\n\
  bottom: 0;\n\
  background-color: #000000;\n\
  z-index: 111111111;\n\
  width: 100%;\n\
  visibility: hidden;\n\
  transform: translate3d(-100%, 0, 0);\n\
  transition: all 0.25s ease-out;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  box-sizing: border-box;\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: column;\n\
  flex-direction: column;\n\
  -ms-flex-pack: flex-start;\n\
  justify-content: flex-start;\n\
  -ms-flex-align: stretch;\n\
  align-items: stretch;\n\
}\n\
.slide-out.open {\n\
  visibility: visible;\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.slide-out > section {\n\
  -ms-flex: 1;\n\
  flex: 1;\n\
  padding-bottom: 100px;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -ms-overflow-style: -ms-autohiding-scrollbar;\n\
}\n\
.slide-out > section > ul.list {\n\
  margin-top: 20px;\n\
}\n\
button.slide-out-button {\n\
  position: absolute;\n\
  z-index: 1111111;\n\
  top: 0 !important;\n\
  left: 15px;\n\
  height: 35px;\n\
  width: 35px;\n\
  box-sizing: border-box;\n\
  margin-left: -5px !important;\n\
}\n\
button.slide-out-button::before {\n\
  content: "\\E179";\n\
  height: 35px;\n\
  width: 35px;\n\
  color: #ffffff;\n\
  font-family: "Segoe UI Symbol";\n\
  font-weight: normal;\n\
  font-size: 14pt;\n\
  text-align: left;\n\
  display: block;\n\
  margin: 2px 0 0 -5px;\n\
}\n\
button.slide-out-button:hover::before {\n\
  color: #000000;\n\
}\n\
body.slide-out-app > article,\n\
body.slide-out-app > nav:not(:first-of-type) {\n\
  display: none !important;\n\
}\n\
body.slide-out-app > article.show,\n\
body.slide-out-app > nav.show {\n\
  display: block !important;\n\
  z-index: 100;\n\
}\n\
.slideout-header {\n\
  background-color: #000000 !important;\n\
}\n\
.slideout-header h2 {\n\
  margin-left: 0;\n\
  color: #ffffff !important;\n\
  margin-top: 20px !important;\n\
}\n\
html[dir=rtl] .slide-out {\n\
  transform: translate3d(100%, 0, 0);\n\
}\n\
html[dir=rtl] .slide-out.open {\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
html[dir=rtl] button.slide-out-button {\n\
  margin-right: 10px !important;\n\
}\n\
html[dir=rtl] button.slide-out-button::before {\n\
  margin: 2px -17px 0 0 !important;\n\
}\n\
.stepper {\n\
  -ms-flex-align: start;\n\
  display: flex;\n\
  display: -ms-inline-flexbox;\n\
  display: inline-flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: center;\n\
  justify-content: center;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
  padding: 1px;\n\
}\n\
.stepper > input {\n\
  margin: 0;\n\
  display: none;\n\
}\n\
.stepper > label {\n\
  display: block;\n\
  border: solid 2px #ffffff;\n\
  width: 36px;\n\
  height: 32px;\n\
  box-sizing: border-box;\n\
  font: bold 14pt/20pt SegoeWP, SegoeUI, HelveticaNeue, Sans-serif;\n\
  text-align: center;\n\
  background-color: #ffffff;\n\
  color: #000000;\n\
}\n\
.stepper > button {\n\
  display: inline-block;\n\
  text-align: center;\n\
  font-weight: bold;\n\
  font-size: 12pt;\n\
  line-height: 18pt;\n\
  cursor: pointer !important;\n\
  margin: 0;\n\
  overflow: hidden;\n\
  box-sizing: border-box;\n\
  height: 32px;\n\
  padding: 1px 10px;\n\
  box-shadow: none;\n\
}\n\
.stepper > button > span {\n\
  display: none;\n\
}\n\
.stepper > button:first-of-type {\n\
  border-right: none;\n\
}\n\
.stepper > button:first-of-type::before {\n\
  font-family: "Segoe UI Symbol";\n\
  font-weight: normal;\n\
  content: "\\E108";\n\
}\n\
.stepper > button:last-of-type {\n\
  border-left: none;\n\
}\n\
.stepper > button:last-of-type::before {\n\
  font-family: "Segoe UI Symbol";\n\
  font-weight: normal;\n\
  content: "\\E109";\n\
}\n\
html[dir=rtl] .stepper > button:first-of-type {\n\
  border-right: solid 2px #ffffff;\n\
}\n\
html[dir=rtl] .stepper > button:last-of-type {\n\
  border-left: solid 2px #ffffff;\n\
}\n\
li.switched {\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row-reverse;\n\
  flex-direction: row-reverse;\n\
  -ms-flex-pack: flex-start;\n\
  justify-content: flex-start;\n\
}\n\
li.switched h3 {\n\
  width: auto;\n\
  font-size: 13pt;\n\
  line-height: 24pt;\n\
  color: #9e9e9e;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  -ms-flex: 1;\n\
  flex: 1;\n\
}\n\
li.switched h4 {\n\
  width: auto;\n\
  text-align: right;\n\
  margin-right: 10px;\n\
  font-size: 14pt;\n\
  line-height: 24pt;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  color: #ffffff;\n\
  max-width: 50%;\n\
}\n\
html[dir=rtl] li.switched h4 {\n\
  margin-left: 10px;\n\
  margin-right: auto;\n\
}\n\
.switch {\n\
  position: relative;\n\
  height: 25px;\n\
  width: 60px;\n\
  border: 2px solid #ffffff;\n\
  background-color: #000000;\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: space-around;\n\
  justify-content: space-around;\n\
  box-sizing: border-box;\n\
  text-align: center;\n\
  line-height: 28px;\n\
  cursor: pointer;\n\
  -ms-user-select: none;\n\
  animation-duration: .65s;\n\
  animation-timing-function: ease-in-out;\n\
  animation-fill-mode: forwards;\n\
  animation-name: switchAnimationOff;\n\
}\n\
.switch:before {\n\
  content: "";\n\
  display: block;\n\
  position: absolute;\n\
  z-index: 3;\n\
  top: 0px;\n\
  border: solid 1px #ffffff;\n\
  background-color: ' + $._secondaryColor + ';\n\
  height: 19px;\n\
  width: 0;\n\
  transition: all 0.15s ease-in-out;\n\
}\n\
.switch.on:before {\n\
  width: 54px;\n\
}\n\
.switch.on > em {\n\
  -ms-transform: translate3d(48px, 0, 0);\n\
}\n\
.switch > em {\n\
  display: block;\n\
  position: relative;\n\
  z-index: 3;\n\
  top: -2px;\n\
  left: -3px;\n\
  background-color: #ffffff;\n\
  width: 12px;\n\
  height: 25px;\n\
  pointer-events: none;\n\
  -ms-transform: translate3d(-1px, 0, 0);\n\
  -ms-transition: all 0.15s ease-in-out;\n\
  transition: all 0.15s ease-in-out;\n\
  -ms-touch-action: none;\n\
}\n\
.switch > input {\n\
  display: none;\n\
}\n\
html[dir=rtl] .switch:before {\n\
  left: 0;\n\
}\n\
html[dir=rtl] .switch > em {\n\
  -ms-transform: translate3d(-40px, 0, 0);\n\
  transform: translate3d(-40px, 0, 0);\n\
}\n\
html[dir=rtl] .switch.on > em {\n\
  -ms-transform: translate3d(2px, 0, 0);\n\
  transform: translate3d(2px, 0, 0);\n\
}\n\
.tabbar {\n\
  height: 47px;\n\
  padding: 1px 5px;\n\
  display: block;\n\
  box-sizing: border-box;\n\
  font-size: 10px;\n\
  text-align: left;\n\
  position: absolute;\n\
  top: 45pt;\n\
  left: 10px;\n\
  right: 10px;\n\
  overflow: hidden;\n\
}\n\
.tabbar > button {\n\
  position: relative;\n\
  display: inline-block !important;\n\
  margin: 0;\n\
  height: 30px;\n\
  text-align: left;\n\
  color: #ffffff;\n\
  border-color: #000000;\n\
  padding: 4px 10px 4px 0;\n\
  border: none !important;\n\
}\n\
.tabbar > button:hover,\n\
.tabbar > button.selected {\n\
  color: ' + $._color + ' !important;\n\
  opacity: 1 !important;\n\
  background-color: transparent;\n\
}\n\
.tabbar > button.more {\n\
  font-size: 0;\n\
  width: 40px;\n\
}\n\
.tabbar > button.more::before {\n\
  font-family: "Segoe UI Symbol";\n\
  font-weight: normal;\n\
  content: "\\E10C";\n\
  font-size: 20pt;\n\
  line-height: 0.85;\n\
}\n\
.tabbar > button.more > label {\n\
  display: none !important;\n\
}\n\
.tabbar > button > label {\n\
  font-size: 10pt !important;\n\
}\n\
body.hasTabBar > article {\n\
  top: 95px !important;\n\
}\n\
@media only screen and (device-width: 480px) and (orientation: portrait) {\n\
  @-ms-viewport {\n\
    width: 240px;\n\
  }\n\
  html,\n\
  body,\n\
  body {\n\
    width: 240px;\n\
    height: 400px;\n\
  }\n\
  nav > button {\n\
    -ms-flex: 0;\n\
    flex: 0;\n\
  }\n\
  nav > h1 {\n\
    -ms-flex: 2;\n\
    flex: 2;\n\
  }\n\
  nav > h1 {\n\
    font-size: large;\n\
  }\n\
  .list > li h3 {\n\
    font-size: 14pt;\n\
  }\n\
  button.back,\n\
  button.backTo {\n\
    width: 30px;\n\
    height: 30px;\n\
    line-height: 18px !important;\n\
    -ms-flex: none;\n\
    flex: none;\n\
  }\n\
  button.back::before,\n\
  button.backTo::before {\n\
    vertical-align: 52%;\n\
    font-size: 11pt;\n\
    margin-left: -17px;\n\
  }\n\
  .segmented.paging > button {\n\
    font-size: 20pt;\n\
    width: 30px;\n\
    height: 30px;\n\
  }\n\
  .segmented.paging > button::before {\n\
    height: 30px;\n\
    width: 30px;\n\
    line-height: 20pt;\n\
    vertical-align: 50%;\n\
    font-size: 20pt;\n\
    margin: -4px 0 0 0;\n\
  }\n\
  .popover {\n\
    height: 200px;\n\
  }\n\
  .switch:before {\n\
    height: 12px !important;\n\
  }\n\
  .stepper > label {\n\
    width: 28px;\n\
    height: 26px;\n\
    font: bold 14pt/20pt SegoeWP, SegoeUI, HelveticaNeue, Sans-serif;\n\
  }\n\
  .stepper > button {\n\
    font-size: 10pt;\n\
    line-height: 14pt;\n\
    height: 26px;\n\
    padding: 1px 6px;\n\
  }\n\
}\n\
@media only screen and (device-width: 480px) and (orientation: portrait) {\n\
  .popover {\n\
    width: 200px;\n\
  }\n\
  .popup {\n\
    padding: 20px 10px;\n\
  }\n\
  .popup header > h1 {\n\
    font-size: 14pt;\n\
  }\n\
  .splitlayout > nav:first-of-type {\n\
    width: 150px;\n\
  }\n\
  .splitlayout > nav:last-of-type {\n\
    left: 150px;\n\
  }\n\
  .splitlayout > article.master {\n\
    width: 150px !important;\n\
  }\n\
  .splitlayout > article.detail {\n\
    left: 150px !important;\n\
  }\n\
  .tabbar {\n\
    display: -ms-flexbox;\n\
    display: flex;\n\
  }\n\
  .tabbar > button {\n\
    font-size: 9pt;\n\
    -ms-flex: 1;\n\
    flex: 1;\n\
  }\n\
  .busy.align-flush {\n\
    position: static;\n\
  }\n\
  .switch {\n\
    height: 18px;\n\
    width: 40px;\n\
  }\n\
  .switch > em {\n\
    width: 12px;\n\
    height: 18px;\n\
  }\n\
  .switch:before {\n\
    height: 15px;\n\
  }\n\
  .switch.on > em {\n\
    -ms-transform: translate3d(28px, 0, 0);\n\
  }\n\
  .switch.on:before {\n\
    width: 26px;\n\
  }\n\
  .tabbar > button > label {\n\
    font-size: 8pt !important;\n\
  }\n\
  .tabbar > button.more::before {\n\
    font-size: 8pt;\n\
  }\n\
  button.slide-out-button {\n\
    top: 5px;\n\
    left: 15px;\n\
    height: 28px;\n\
    width: 28px;\n\
    margin-left: -5px !important;\n\
  }\n\
  button.slide-out-button::before {\n\
    height: 28px;\n\
    width: 28px;\n\
    font-size: 10pt;\n\
    margin: -1px 0 0 -6px;\n\
  }\n\
}\n\
@media only screen and (device-width: 480px) and (orientation: landscape) {\n\
  @-ms-viewport {\n\
    width: 480px;\n\
  }\n\
  .splitlayout > nav:first-of-type {\n\
    width: 200px;\n\
  }\n\
  .splitlayout > nav:last-of-type {\n\
    left: 200px;\n\
  }\n\
  .splitlayout > article.master {\n\
    width: 200px !important;\n\
  }\n\
  .splitlayout > article.detail {\n\
    left: 200px !important;\n\
  }\n\
  .busy.align-flush {\n\
    position: static;\n\
  }\n\
}\n\
@media only screen and (device-width: 768px) and (orientation: portrait) {\n\
  @-ms-viewport {\n\
    width: 384px;\n\
  }\n\
}\n\
@media only screen and (device-width: 768px) and (orientation: landscape) {\n\
  @-ms-viewport {\n\
    width: 512px;\n\
  }\n\
}\n\
#carousel {\n\
  width: 100%;\n\
  height: 100%;\n\
  margin: 10px auto;\n\
  box-sizing: border-box;\n\
  background-color: #000000;\n\
  border: solid 1px #ffffff;\n\
}\n\
.carousel-track {\n\
  margin: 0;\n\
  padding: 0;\n\
}\n\
.carousel-track > li {\n\
  box-sizing: border-box;\n\
  list-style: none;\n\
  margin: 0;\n\
  padding: 0;\n\
  position: relative;\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: column;\n\
  flex-direction: column;\n\
  -ms-flex-pack: flex-start;\n\
  justify-content: flex-start;\n\
  -ms-flex-align: center;\n\
  align-items: center;\n\
  overflow: hidden;\n\
  border-left: solid 1px #ffffff;\n\
  padding: 1px 1px 10px;\n\
  -ms-user-select: none;\n\
  -ms-touch-action: none;\n\
}\n\
.carousel-track > li.carousel-panel-active {\n\
  border: none;\n\
}\n\
.pagination {\n\
  list-style: none;\n\
  padding: 0;\n\
  margin: 0 auto;\n\
  display: -ms-flexbox;\n\
  display: flex;\n\
  -ms-flex-direction: row;\n\
  flex-direction: row;\n\
  -ms-flex-pack: space-around;\n\
  justify-content: space-around;\n\
}\n\
.pagination::after {\n\
  content: "";\n\
  display: block;\n\
  clear: both;\n\
}\n\
.pagination > li {\n\
  list-style: none;\n\
  padding: 0;\n\
  margin: 0;\n\
  height: 10px;\n\
  width: 10px;\n\
  background-color: #ffffff;\n\
  margin-right: 5px;\n\
}\n\
.pagination > li:hover,\n\
.pagination > li.selected {\n\
  background-color: ' + $._color + ';\n\
  cursor: pointer;\n\
}\n\
.pagination > li:last-of-type {\n\
  margin-right: 0;\n\
}\n\
html[dir=rtl] .pagination > li {\n\
  margin-right: 0;\n\
  margin-left: 5px;\n\
  padding: 0;\n\
}\n\
html[dir=rtl] .pagination > li:last-of-type {\n\
  margin-left: 0;\n\
}\n\
.horizontal-scroll-panel {\n\
  width: 100%;\n\
  height: 240px;\n\
  background-color: #ccc;\n\
  padding: 20px;\n\
  -webkit-overflow-scrolling: touch;\n\
  -ms-overflow-style: -ms-autohiding-scrollbar;\n\
  overflow-y: hidden !important;\n\
  overflow-x: scroll;\n\
  white-space: nowrap;\n\
  box-sizing: border-box;\n\
}\n\
.horizontal-scroll-panel > ul {\n\
  list-style: none;\n\
  margin: 0;\n\
  padding: 0;\n\
  -webkit-padding-start: 0;\n\
  font-size: 0;\n\
  width: 100%;\n\
}\n\
.horizontal-scroll-panel > ul li {\n\
  display: inline-block;\n\
  border: solid 1px #666;\n\
  box-shadow: 0 0 4px #666;\n\
  width: 200px;\n\
  height: 200px;\n\
  overflow: hidden;\n\
  margin-right: 20px;\n\
  font-size: 0;\n\
}\n\
.horizontal-scroll-panel > ul li:first-of-type {\n\
  margin-left: 0 !important;\n\
}\n\
.horizontal-scroll-panel > ul li:last-of-type {\n\
  margin-right: 20px !important;\n\
}\n\
body.isWindows .horizontal-scroll-panel {\n\
  background-color: #333;\n\
}\n\
[dir=rtl] .horizontal-scroll-panel {\n\
  margin-right: 0;\n\
  padding-right: 20px;\n\
}\n\
[dir=rtl] .horizontal-scroll-panel li {\n\
  margin-right: 0 !important;\n\
  margin-left: 20px !important;\n\
  padding: 0;\n\
}\n\
[dir=rtl] .horizontal-scroll-panel li:first-of-type {\n\
  margin-right: 0 !important;\n\
  margin-left: 20px !important;\n\
}\n\
[dir=rtl] .horizontal-scroll-panel li:last-of-type {\n\
  margin-left: 20px !important;\n\
  margin-right: 0 !important;\n\
}\n\
[dir=rtl] body.isWindows .horizontal-scroll-panel li {\n\
  float: right;\n\
}\n\
@media only screen and (max-device-width: 480px) {\n\
  .horizontal-scroll-panel {\n\
    height: 125px !important;\n\
    padding: 10px;\n\
  }\n\
  .horizontal-scroll-panel li {\n\
    height: 125px !important;\n\
    width: 125px !important;\n\
  }\n\
}';
$('textarea').val(stylesheet);