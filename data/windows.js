var pagingColor = $.navbarBkgdColor ? $._bkgdContrastColor : $._color;
var toolbarButtonBkgd = $.navbarBkgdColor ? "rgba(0,0,0,.1)" : "#c0c0c0";
var stylesheet = '/*\n\
ChocolateChip-UI\n\
ChUI-Windows.css\n\
Copyright 2015 Sourcebits www.sourcebits.com\n\
License: MIT\n\
Version: 3.8.3\n\
*/\n\
.attentionGrapper {\n\
  color: ' + $._secondaryColor + ' !important;\n\
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
  background-color: #007aff;\n\
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
  content: "\E0D5";\n\
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
  color: #007aff;\n\
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
}';
$('textarea').val(stylesheet);