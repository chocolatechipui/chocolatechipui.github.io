var pagingColor = $.navbarBkgdColor ? $._bkgdContrastColor : $._color;
var toolbarButtonBkgd = $.navbarBkgdColor ? "rgba(0,0,0,.1)" : "#c0c0c0";
var androidNavbarColor = $._color;
if ($._navbarBkgdColor) {
  var androidNavbarColor = $('#primaryColorChooser .sp-input-container input').val();
}

var stylesheet = '/*\n\
ChocolateChip-UI\n\
ChUI-Android.css\n\
Copyright 2015 Sourcebits www.sourcebits.com\n\
License: MIT\n\
Version: 3.8.5\n\
*/\n\
.attentionGrapper {\n\
  color: ' + $._secondaryColor + ' !important;\n\
}\n\
.cloak > * {\n\
  display: none;\n\
}\n\
@keyframes backButtonRipple {\n\
  0% {\n\
    box-shadow: inset 0 0 0 rgba(' + $._androidBackTap + ', 0), 0 0 0 rgba(' + $._androidBackTap + ', 0);\n\
  }\n\
  50% {\n\
    box-shadow: inset 0 0 40px rgba(' + $._androidBackTap + ', ' + $._androidBackTapPercentage + '), 0 0 10px rgba(' + $._androidBackTap + ', ' + $._androidBackTapPercentage + ');\n\
  }\n\
  90% {\n\
    box-shadow: inset 0 0 40px rgba(' + $._androidBackTap + ', ' + $._androidBackTapPercentage2 + '), 0 0 3px rgba(' + $._androidBackTap + ', ' + $._androidBackTapPercentage + ');\n\
  }\n\
  100% {\n\
    box-shadow: inset 0 0 0 rbga(' + $._androidBackTap + ', 0), 0 0 0 rgba(' + $._androidBackTap + ', 0);\n\
  }\n\
}\n\
@keyframes tapRipple {\n\
  0% {\n\
    background-size: 0% 100%;\n\
  }\n\
  50% {\n\
    background-size: 100% 500%;\n\
  }\n\
  100% {\n\
    background-size: 1100% 1100%;\n\
  }\n\
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
  -webkit-font-smoothing: subpixel-antialiased;\n\
}\n\
body {\n\
  /* Change background color for your app: */\n\
  background-color: #fafafa;\n\
  -webkit-user-select: none;\n\
  -webkit-tap-highlight-color: transparent;\n\
}\n\
html,body,h1,h2,h3,h4,h5,p,div,span,ul,ol,li,pre,blockquote,article,section,nav,aside,header,footer,address,dl,tdt,dd,figure,figcaption,a,em,strong,abbr,time,code,sup,sub,i,b,u,ruby,table,thead,tbody,th,tr,td,label,input,button,select,option,textarea,menu,body {\n\
    font: 100 14px/18px Roboto, SegoeWP, HelveticaNeue, sans-serif;\n\
}\n\
article {\n\
  position: absolute;\n\
  top: 52px;\n\
  right: 0;\n\
  bottom: 0;\n\
  left: 0;\n\
  padding-top: 1px;\n\
  -webkit-transition: all .45s ease-out;\n\
  -moz-transition: all .45s ease-out;\n\
  transition: all .45s ease-out;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -webkit-overflow-scrolling: touch;\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -moz-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: start;\n\
  -moz-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
  z-index: 1111111;\n\
}\n\
article > section {\n\
  background-color: #fafafa;\n\
}\n\
.hide-navbars article {\n\
  top: 0;\n\
}\n\
.current {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
  visibility: visible;\n\
}\n\
.next {\n\
  -webkit-transform: translate3d(105%, 0, 0);\n\
  -moz-transform: translate3d(105%, 0, 0);\n\
  transform: translate3d(105%, 0, 0);\n\
  visibility: hidden;\n\
}\n\
.previous {\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  -moz-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
  visibility: hidden;\n\
}\n\
html[dir=rtl] .current {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
html[dir=rtl] .next {\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  -moz-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
html[dir=rtl] .previous {\n\
  -webkit-transform: translate3d(105%, 0, 0);\n\
  -moz-transform: translate3d(105%, 0, 0);\n\
  transform: translate3d(105%, 0, 0);\n\
}\n\
.scroller-vertical,\n\
.scroller-horizontal {\n\
  -webkit-box-flex: 1 !important;\n\
  -moz-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  padding-bottom: 100px;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -webkit-overflow-scrolling: touch;\n\
}\n\
.scroller-horizontal {\n\
  overflow-y: hidden;\n\
  overflow-x: auto;\n\
}\n\
article > section,\n\
.scroller-vertical {\n\
  padding-top: 10px;\n\
  padding-bottom: 100px;\n\
  min-height: 100%;\n\
  width: 100%;\n\
}\n\
article > section > :last-child::after,\n\
.scroller-vertical > :last-child::after {\n\
  margin-bottom: 100px;\n\
}\n\
.vertical,\n\
li.comp > aside.vertical {\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -moz-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -moz-box-pack: start;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: start;\n\
  -moz-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
}\n\
.horizontal {\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: start;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: start;\n\
  -moz-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
}\n\
.horizontal.centered {\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: start;\n\
  -moz-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
}\n\
.align-flush {\n\
  position: absolute;\n\
  top: auto;\n\
  bottom: auto;\n\
  right: 10px;\n\
  left: auto;\n\
}\n\
body.isNativeAndroidBrowser .align-flush {\n\
  float: right;\n\
}\n\
button {\n\
  text-transform: uppercase !important;\n\
}\n\
button:focus {\n\
  outline: none;\n\
}\n\
button:not(.segment) {\n\
  -webkit-appearance: none;\n\
  box-shadow: none;\n\
  border: none;\n\
  color: #666666;\n\
  display: -webkit-inline-box;\n\
  display: -webkit-inline-flex;\n\
  display: inline-flex;\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: center;\n\
  -moz-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  font-size: 12px;\n\
  height: 40px;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  -webkit-tap-highlight-color: transparent;\n\
  -webkit-user-select: none;\n\
  margin: 0px 10px;\n\
  position: relative;\n\
  cursor: pointer;\n\
  text-align: center;\n\
  text-decoration: none;\n\
  padding: 12px 20px 10px;\n\
  text-transform: uppercase;\n\
  font-family: "Roboto Regular", HeveticaNeue, Sans-serif;\n\
  border-radius: 2px;\n\
  -webkit-transition: all 0.35s ease-out;\n\
  -moz-transition: all 0.35s ease-out;\n\
  transition: all 0.35s ease-out;\n\
  -webkit-animation-duration: 0.35s;\n\
  -webkit-animation-timing-function: ease-out;\n\
  animation-duration: 0.35s;\n\
  animation-timing-function: ease-out;\n\
  background-image: -webkit-radial-gradient(rgba(0, 0, 0, 0.125) 50%, rgba(0, 0, 0, 0) 60%);\n\
  background-size: 0 0;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  -webkit-animation-fill-mode: forwards;\n\
}\n\
button:not(.segment):not(.back),\n\
button:not(.segment):not(.backTo) {\n\
  background-image: -webkit-radial-gradient(circle, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.025) 10%);\n\
  background-size: 1000% 1000%;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  box-shadow: 0 1px 4px #666666;\n\
  -webkit-animation-timing-function: ease-out;\n\
  animation-timing-function: ease-out;\n\
  -webkit-animation-duration: .5s;\n\
  animation-duration: .5s;\n\
  -webkit-animation-fill-mode: forwards;\n\
  animation-fill-mode: forwards;\n\
}\n\
button:not(.segment):not(.back).selected,\n\
button:not(.segment):not(.backTo).selected {\n\
  animation-name: tapRipple;\n\
  box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.25);\n\
}\n\
button:not(.segment):focus {\n\
  outline: none !important;\n\
}\n\
button:not(.segment).no-border {\n\
  border: none !important;\n\
}\n\
button:not(.segment).action {\n\
  color: #666666;\n\
  background-color: #f5f5f5;\n\
  margin: 0 auto;\n\
  width: auto;\n\
  height: 40px;\n\
  min-width: 200px;\n\
  max-width: 300px;\n\
  margin: 20px auto;\n\
  display: -webkit-box;\n\
  display: -webkit-flex;\n\
  display: flex;\n\
}\n\
section > button:not(.segment).action {\n\
  margin: 20px auto;\n\
}\n\
.isDesktop button:not(.segment).action:hover {\n\
  box-shadow: 0 3px 7px #666666;\n\
  box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.25);\n\
}\n\
nav > button:not(.segment).back,\n\
nav > button:not(.segment).backTo {\n\
  padding: 10px;\n\
  text-align: left;\n\
  background-color: transparent;\n\
  background-image: none;\n\
  background-image: -webkit-linear-gradient(left, ' + $._contrast + ', ' + $._contrast + ') !important;\n\
  background-image: linear-gradient(left, ' + $._contrast + ', ' + $._contrast + ') !important;\n\
  background-size: 19px 2px;\n\
  background-repeat: no-repeat;\n\
  background-position: 10px center;\n\
  position: relative;\n\
  overflow: visible;\n\
  box-shadow: none;\n\
  margin: 0 0 0 0;\n\
  border: none;\n\
  border-radius: 50%;\n\
  width: 35px;\n\
  height: 35px;\n\
  -webkit-transition: all 0.4s ease-out;\n\
  -moz-transition: all 0.4s ease-out;\n\
  transition: all 0.4s ease-out;\n\
  font-size: 0 !important;\n\
  -webkit-animation-name: "";\n\
  top: 0;\n\
  -webkit-animation-duration: 0.5s;\n\
  -webkit-animation-timing-function: ease-out;\n\
  -webkit-animation-fill-mode: forwards;\n\
  animation-duration: .5s;\n\
  animation-timing-function: ease-out;\n\
  animation-fill-mode: forwards;\n\
}\n\
nav > button:not(.segment).back:hover,\n\
nav > button:not(.segment).backTo:hover {\n\
  -webkit-animation-name: backButtonRipple;\n\
  animation-name: backButtonRipple;\n\
  background-color: transparent !important;\n\
}\n\
nav > button:not(.segment).back::before,\n\
nav > button:not(.segment).backTo::before {\n\
  display: block;\n\
  content: "";\n\
  -webkit-mask-image: none !important;\n\
  background-color: ' + $._contrast + ';\n\
  height: 2px;\n\
  width: 14px;\n\
  position: absolute;\n\
  top: 12px;\n\
  left: 6px;\n\
  transition: all 0.25s ease-out;\n\
  -webkit-transform: rotate(-45deg);\n\
}\n\
nav > button:not(.segment).back::after,\n\
nav > button:not(.segment).backTo::after {\n\
  display: block;\n\
  content: "";\n\
  background-color: ' + $._contrast + ';\n\
  height: 2px;\n\
  width: 14px;\n\
  position: absolute;\n\
  top: 22px !important;\n\
  left: 6px;\n\
  -webkit-transform: rotate(45deg);\n\
}\n\
body.isChrome a.button.back,\n\
body.isChrome a.button.backTo {\n\
  top: 6px;\n\
}\n\
body.isNativeAndroidBrowser button.back,\n\
body.isNativeAndroidBrowser button.backTo {\n\
  top: 0;\n\
  bottom: 0;\n\
}\n\
body.isNativeAndroidBrowser button.back::after,\n\
body.isNativeAndroidBrowser button.backTo::after {\n\
  top: -2px;\n\
}\n\
body.isNativeAndroidBrowser button.backTo::after {\n\
  top: 2px;\n\
}\n\
body.isNativeAndroidBrowser button.back::before {\n\
  top: 8px;\n\
}\n\
nav > button,\n\
nav > div > button,\n\
.toolbar > button {\n\
  -webkit-appearance: none;\n\
  background-color: transparent !important;\n\
  border: none !important;\n\
  box-shadow: none !important;\n\
  padding: 12px 20px 10px;\n\
  margin: 5px;\n\
  background-image: -webkit-radial-gradient(circle, ' + $._androidTapColor + ' 10%) !important;\n\
}\n\
nav > button:not(.back):hover,\n\
nav > button:not(.backTo):hover,\n\
.toolbar > button:hover {\n\
  background-color: rgba(0, 0, 0, 0.05) !important;\n\
}\n\
html[dir=rtl] button {\n\
  line-height: 12pt;\n\
}\n\
html[dir=rtl] button.back,\n\
html[dir=rtl] button.backTo {\n\
  margin: 0 0 0 16px;\n\
}\n\
html[dir=rtl] button.back::after,\n\
html[dir=rtl] button.backTo::after {\n\
  -webkit-transform: rotate(180deg);\n\
  -moz-transform: rotate(180deg);\n\
  transform: rotate(180deg);\n\
  right: auto;\n\
}\n\
html[dir=rtl] button.align-flush {\n\
  left: 10px;\n\
  right: auto;\n\
}\n\
#global-nav {\n\
  background-color: '+ $._bkgdColor +';\n\
  overflow: hidden;\n\
  box-shadow: 0 1px 2px #666666;\n\
  padding: 0 5px;\n\
  z-index: 1111111111;\n\
}\n\
nav {\n\
  background-color: '+ $._bkgdColor +';\n\
  height: 50px;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  display: -moz-box;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: start;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: center;\n\
  -moz-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  display: flex;\n\
  text-align: center;\n\
  position: absolute;\n\
  top: 0;\n\
  left: 0;\n\
  right: 0;\n\
  -webkit-transition: all 0.45s ease-out;\n\
  -moz-transition: all 0.45s ease-out;\n\
  transition: all 0.45s ease-out;\n\
  padding: 0 10px;\n\
  vertical-align: middle;\n\
  z-index: 1111111111;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
nav.current {\n\
  box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.2);\n\
}\n\
nav > button:first-child {\n\
  margin-left: 0;\n\
}\n\
nav > h1 {\n\
  text-align: left;\n\
  display: inline-block;\n\
  margin: 0 16px 0 8px;\n\
  -webkit-box-flex: 1 !important;\n\
  -moz-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  font: 100 14pt/30pt Roboto, SegoeWP, HelveticaNeue, Sans-serif !important;\n\
  position: relative;\n\
  z-index: -1;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  color: ' + $._contrast + ';\n\
}\n\
nav > h1 + button {\n\
  margin: 5px 5px 0 0;\n\
  position: absolute;\n\
  top: 0;\n\
  right: 10px;\n\
}\n\
nav > button,\n\
nav > div > button {\n\
  position: relative;\n\
  color: ' + $._contrast + ' !important;\n\
}\n\
.hasTabBar nav {\n\
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.05);\n\
  border-bottom: solid 1px rgba(0, 0, 0, 0.09);\n\
}\n\
html[dir=rtl] nav > h1 {\n\
  text-align: right;\n\
  margin-right: 8px;\n\
}\n\
html[dir=rtl] nav > h1 + button {\n\
  position: relative !important;\n\
  margin: 10px 10px 10px 10px;\n\
}\n\
html[dir=rtl] body.isNativeAndroidBrowser nav > h1 + button {\n\
  left: 10px !important;\n\
  right: auto !important;\n\
  top: 5px !important;\n\
  margin-top: 0;\n\
  position: absolute !important;\n\
}\n\
@-webkit-keyframes listRipple {\n\
  0% {\n\
    background-size: 0% 100%;\n\
  }\n\
  50% {\n\
    background-size: 50% 100%;\n\
  }\n\
  100% {\n\
    background-size: 500% 500%;\n\
  }\n\
}\n\
.list {\n\
  list-style: none;\n\
  margin: 16px 0 0;\n\
  padding: 0;\n\
  border-top: solid 1px #cbcbcb;\n\
  border-bottom: solid 1px #cbcbcb;\n\
  background-color: #ffffff;\n\
}\n\
.list > li {\n\
  padding: 13px 10px 13px 10px;\n\
  -webkit-transition: all 0.3s ease-out;\n\
  -moz-transition: all 0.3s ease-out;\n\
  transition: all 0.3s ease-out;\n\
  position: relative;\n\
  background-color: #ffffff;\n\
  font-size: 12pt;\n\
  border-bottom: solid 1px #cbcbcb;\n\
}\n\
.list > li[data-goto],\n\
.list > li[data-show-article] {\n\
  background-image: -webkit-radial-gradient(circle, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.065) 20%);\n\
  background-size: 1000% 1000%;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  -webkit-animation-timing-function: ease-out;\n\
  animation-timing-function: ease-out;\n\
  -webkit-animation-duration: .2s;\n\
  animation-duration: .2s;\n\
  -webkit-animation-fill-mode: forwards;\n\
  animation-fill-mode: forwards;\n\
}\n\
.list > li[data-goto].selected,\n\
.list > li[data-show-article].selected {\n\
  -webkit-animation-name: listRipple;\n\
  animation-name: listRipple;\n\
}\n\
.list > li.nav::after {\n\
  display: block;\n\
  content: "";\n\
  width: 7px;\n\
  height: 7px;\n\
  border-right: solid 3px ' + $._secondaryColor + ';\n\
  border-top: solid 3px ' + $._secondaryColor + ';\n\
  -webkit-transform: rotate(45deg);\n\
  -moz-transform: rotate(45deg);\n\
  transform: rotate(45deg);\n\
  float: right;\n\
  position: absolute;\n\
  top: 16px;\n\
  right: 15px;\n\
  -webkit-transition: all 0.4s ease-out;\n\
  -moz-transition: all 0.4s ease-out;\n\
  transition: all 0.4s ease-out;\n\
}\n\
.list > li.show-detail::after {\n\
  content: "i";\n\
  display: block;\n\
  width: 22px;\n\
  height: 20px;\n\
  border-radius: 20px;\n\
  border: solid 1px ' + $._secondaryColor + ';\n\
  color: ' + $._secondaryColor + ';\n\
  font: bold 14px/0 Roboto, SegoeWP, HelveticaNeue, Sans-serif;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  padding: 10px 8px;\n\
  position: absolute;\n\
  top: 10px;\n\
  right: 16px;\n\
}\n\
.list + .button {\n\
  margin-top: 20px !important;\n\
}\n\
h2 + .list {\n\
  margin-top: 0;\n\
}\n\
p {\n\
  font-family: "Roboto Regular", "HeveletcaNeue", Helvetica, sans-serif;\n\
}\n\
.list ~ p {\n\
  margin: 10px 16px 0;\n\
}\n\
.list ~ p + p {\n\
  margin-top: 5pt;\n\
}\n\
.isDesktop .list > li[data-goto]:hover,\n\
.list > li[data-goto].touched,\n\
.isDesktop li[data-show-article]:hover,\n\
li[data-show-article].touched {\n\
  cursor: pointer;\n\
}\n\
.list > li {\n\
  color: #666;\n\
}\n\
.list > li > h3,\n\
.list > li > h4 {\n\
  width: 80%;\n\
  font-weight: 200;\n\
  margin: 0;\n\
}\n\
.list > li > h3 > span,\n\
.list > li > h4 > span {\n\
  font-size: inherit;\n\
  font-weight: inherit;\n\
}\n\
.list > li h3 {\n\
  font-family: "Roboto Thin", "HeveletcaNeue Light", Helvetica, sans-serif;\n\
  font-weight: normal;\n\
  font-size: 14pt;\n\
  line-height: 18pt;\n\
  margin-bottom: 2px;\n\
  color: #666;\n\
}\n\
.list > li h4 {\n\
  font-family: "Roboto Regular", "HeveletcaNeue", Helvetica, sans-serif;\n\
  font-weight: normal;\n\
  color: #666;\n\
}\n\
.list > li > h4,\n\
.list > li > div > h4,\n\
.list > li > p,\n\
.list > li > div > p {\n\
  font-size: 12pt;\n\
  line-height: 14pt;\n\
  margin: 0;\n\
}\n\
.list > li > p,\n\
.list > li > div > p {\n\
  font-size: 12pt;\n\
  line-height: 14pt;\n\
}\n\
.list > li > p + p,\n\
.list > li > div > p + p {\n\
  margin-top: 6px;\n\
}\n\
.list > li + .button.action {\n\
  margin-top: 40px;\n\
}\n\
.list > li > p {\n\
  margin: 6px 16px 6px 0;\n\
  font-size: 12pt;\n\
  line-height: 14pt;\n\
  color: #666666;\n\
}\n\
section h2 {\n\
  font: normal 11pt/12pt "Roboto Regular", SegoeWP, HelveticaNeue, Sans-serif;\n\
  color: #4d4d4d;\n\
  margin: 26px 0 6px 0;\n\
  padding-left: 16px;\n\
  text-transform: uppercase;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  padding-bottom: 6px;\n\
}\n\
section h2.normal-case {\n\
  text-transform: none;\n\
}\n\
section h2.normal-case {\n\
  text-transform: none;\n\
}\n\
html[dir=rtl] section h2 {\n\
  padding-right: 16px;\n\
}\n\
html[dir=rtl] li {\n\
  padding: 13px 10px 13px 10px;\n\
}\n\
html[dir=rtl] li > h3,\n\
html[dir=rtl] li > h4 {\n\
  text-align: right;\n\
}\n\
html[dir=rtl] li > p {\n\
  margin-right: 0;\n\
}\n\
html[dir=rtl] .list > li.nav::after {\n\
  right: auto;\n\
  left: 16px;\n\
  border: none;\n\
  border-left: solid 3px #666666;\n\
  border-bottom: solid 3px #666666;\n\
}\n\
html[dir=rtl] li.show-detail::after {\n\
  left: 16px;\n\
  right: auto;\n\
}\n\
li.comp {\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-box-align: stretch;\n\
  -display: flex;\n\
  -webkit-direction: row;\n\
  -webkit-align-items: stretch;\n\
  display: flex;\n\
  direction: row;\n\
  align-items: stretch;\n\
  padding-bottom: 0;\n\
}\n\
li.comp.wrap > div > h3,\n\
li.comp.wrap > div > h4 {\n\
  white-space: wrap;\n\
  overflow: visible;\n\
}\n\
li.comp > div {\n\
  -webkit-box-flex: 1 !important;\n\
  -moz-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  padding: 0 0 10px 0;\n\
}\n\
li.comp > div:first-child {\n\
  padding: 8px 0 10px 0;\n\
  min-width: 48%;\n\
}\n\
li.comp > div:first-child + aside > h4 {\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  white-space: nowrap;\n\
  max-width: 60%;\n\
}\n\
li.comp > div:first-child + aside > h4:nth-child(1) {\n\
  max-width: 100% !important;\n\
}\n\
li.comp > div > div > h3,\n\
li.comp > div > div > h4 {\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  font-family: "Roboto Thin", SegoeWP, HelveticaNeue, Sans-serif;\n\
  font-weight: 200;\n\
}\n\
li.comp > div > h3 {\n\
  font-family: "Roboto Thin", SegoeWP, HelveticaNeue, Sans-serif;\n\
  line-height: 18pt;\n\
  margin: 0 0 10px 0;\n\
  font-weight: 200;\n\
}\n\
li.comp > div > h4 {\n\
  margin: 0;\n\
}\n\
li.comp > aside {\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: center;\n\
  -moz-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  padding: 0 0 10px 0;\n\
}\n\
li.comp > aside:first-child {\n\
  -webkit-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
  margin-right: 10px;\n\
  padding: 0 0px 10px 0px;\n\
}\n\
li.comp > aside > h4 {\n\
  margin: 0;\n\
  font-weight: normal;\n\
  color: #666666;\n\
}\n\
li.comp > aside > label,\n\
li.comp > aside > span {\n\
  display: inline-block;\n\
  margin-left: 6px;\n\
}\n\
li.comp > aside > .nav {\n\
  display: block;\n\
  width: 12px;\n\
  height: 12px;\n\
}\n\
li.comp > aside > .nav::after {\n\
  display: block;\n\
  content: "";\n\
  width: 7px;\n\
  height: 7px;\n\
  border-right: solid 3px ' + $._secondaryColor + ';\n\
  border-top: solid 3px ' + $._secondaryColor + ';\n\
  -webkit-transform: rotate(45deg) translate3d(2px, -2px, 0);\n\
  -moz-transform: rotate(45deg) translate3d(2px, -2px, 0);\n\
  transform: rotate(45deg) translate3d(2px, -2px, 0);\n\
}\n\
li.comp > aside > .show-detail {\n\
  display: inline-block;\n\
  margin-bottom: -4px;\n\
}\n\
li.comp > aside > .show-detail::after {\n\
  content: "i";\n\
  display: block;\n\
  width: 22px;\n\
  height: 20px;\n\
  border-radius: 20px;\n\
  border: solid 1px ' + $._secondaryColor + ';\n\
  color: ' + $._secondaryColor + ';\n\
  font: bold 14px/0 Roboto, Times, serif;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  padding: 10px 8px;\n\
  float: right;\n\
  margin: -20px 0 0 0;\n\
}\n\
li.comp:last-of-type > aside:last-child {\n\
  border: none;\n\
}\n\
p {\n\
  color: #707070;\n\
  font-size: 12pt;\n\
  line-height: 16pt;\n\
}\n\
html[dir=rtl] li.comp {\n\
  padding: 13px 10px 13px 10px;\n\
}\n\
html[dir=rtl] li.comp > aside:first-child {\n\
  margin-right: 0;\n\
  padding: 0 0 10px 10px;\n\
}\n\
html[dir=rtl] li.comp > aside:last-child {\n\
  margin-right: 10px;\n\
}\n\
html[dir=rtl] li.comp aside > span.counter,\n\
html[dir=rtl] li.comp aside > span.date-time {\n\
  margin-right: 5px;\n\
  margin-left: 5px;\n\
  white-space: nowrap;\n\
}\n\
html[dir=rtl] li.comp aside > span.nav {\n\
  margin-left: 4px;\n\
  margin-right: 0;\n\
}\n\
html[dir=rtl] li.comp aside > span.nav::after {\n\
  right: auto;\n\
  left: 16px;\n\
  border: none;\n\
  border-left: solid 3px ' + $._secondaryColor + ';\n\
  border-bottom: solid 3px ' + $._secondaryColor + ';\n\
}\n\
html[dir=rtl] li.comp aside > h4 {\n\
  margin-left: 5px;\n\
  width: 90%;\n\
}\n\
html[dir=rtl] li.comp div > h3 + h4 {\n\
  text-align: right !important;\n\
}\n\
@media only screen and (max-device-width: 320px) and (orientation: portrait) {\n\
  li.comp > aside > h4 {\n\
    max-width: 100px;\n\
    white-space: nowrap;\n\
    overflow: hidden;\n\
    text-overflow: ellipsis;\n\
  }\n\
}\n\
@media only screen and (max-width: 480px) and (orientation: portrait) {\n\
  li.comp > div:first-child + aside > h4:nth-child(1) {\n\
    max-width: 45% !important;\n\
    flex: 1;\n\
  }\n\
  li.comp > div:first-child + aside {\n\
    -webkit-box-pack: end;\n\
    -webkit-justify-content: end;\n\
    justify-content: flex-end;\n\
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
.col {\n\
  -webkit-box-flex: 1 1 auto;\n\
  -webkit-flex: 1 1 auto;\n\
  -ms-flex: 1 1 auto;\n\
  flex: 1 1 auto;\n\
}\n\
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
.segmented:not(.paging) {\n\
  display: -moz-box;\n\
  display: inline-flex;\n\
  display: -webkit-inline-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  margin: 0px 10px;\n\
  -webkit-box-flex: 1 !important;\n\
  -moz-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  height: 44px;\n\
}\n\
.segmented:not(.paging).align-flush {\n\
  position: absolute;\n\
  right: 15px;\n\
  top: 4px;\n\
}\n\
.segmented:not(.paging) > button.segment {\n\
  -webkit-appearance: none !important;\n\
  background-color: transparent !important;\n\
  background-image: -webkit-radial-gradient(circle, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.025) 10%);\n\
  background-size: 1000% 1000%;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  box-shadow: 0 1px 4px #666666;\n\
  -webkit-animation-timing-function: ease-out;\n\
  animation-timing-function: ease-out;\n\
  -webkit-animation-duration: .5s;\n\
  animation-duration: .5s;\n\
  -webkit-animation-fill-mode: forwards;\n\
  animation-fill-mode: forwards;\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -moz-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: center;\n\
  -moz-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  border: solid 1px #979797;\n\
  text-align: center !important;\n\
  padding: 10px 10px 4px;\n\
  border: none;\n\
  border-bottom: solid 1px #cecece;\n\
  box-shadow: none !important;\n\
  font-size: 13px;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  height: 30px;\n\
  cursor: pointer;\n\
  margin: 0px !important;\n\
  padding: 6px 20px 0px !important;\n\
  border-radius: 0;\n\
}\n\
.segmented:not(.paging) > button.segment:focus {\n\
  outline: none !important;\n\
}\n\
.isDesktop .segmented:not(.paging) > button.segment:hover,\n\
.segmented:not(.paging) > button.segment.selected {\n\
  opacity: 1 !important;\n\
  box-shadow: none;\n\
  border-bottom: solid 3px ' + $._color + ';\n\
  padding: 11px 10px 3px;\n\
}\n\
.segmented:not(.paging) > button.segment.selected {\n\
  animation-name: tapRipple;\n\
}\n\
div.horizontal.centered > .segmented {\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-flex: 1 !important;\n\
  -moz-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  margin: 10px 16px;\n\
  width: 100%;\n\
}\n\
html[dir=rtl] .segmented.align-flush {\n\
  left: 15px;\n\
  right: auto;\n\
}\n\
.isNativeAndroidBrowser .segmented.paging {\n\
  top: 0px !important;\n\
}\n\
.segmented.paging > button {\n\
  top: 10px;\n\
  background: none !important;\n\
  border-radius: 50%;\n\
  padding: 10px;\n\
}\n\
.segmented.paging.horizontal > button {\n\
  border: none !important;\n\
  background-color: none !important;\n\
  margin: 0 !important;\n\
  width: 30px !important;\n\
  height: 30px !important;\n\
}\n\
.segmented.paging.horizontal > button:first-of-type::before,\n\
html[dir=rtl] .segmented.paging.horizontal > button:last-of-type::before {\n\
  content: "";\n\
  display: block;\n\
  width: 16px;\n\
  height: 16px;\n\
  border-left: solid 3px ' + $._contrast + ';\n\
  border-top: solid 3px ' + $._contrast + ';\n\
  -webkit-transform: rotate(-45deg);\n\
  -moz-transform: rotate(-45deg);\n\
  transform: rotate(-45deg);\n\
  position: absolute;\n\
  top: 5px;\n\
  left: 8px;\n\
}\n\
.segmented.paging.horizontal > button:last-of-type::before,\n\
html[dir=rtl] .segmented.paging.horizontal > button:first-of-type::before {\n\
  content: "";\n\
  display: block;\n\
  width: 16px;\n\
  height: 16px;\n\
  margin: 0 !important;\n\
  border-right: solid 3px ' + $._contrast + ';\n\
  border-bottom: solid 3px ' + $._contrast + ';\n\
  -webkit-transform: rotate(-45deg);\n\
  -moz-transform: rotate(-45deg);\n\
  transform: rotate(-45deg);\n\
  position: absolute;\n\
  top: 5px;\n\
  right: 8px;\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal > button:last-of-type::before {\n\
  border-right: none;\n\
  border-bottom: none;\n\
  right: 6px !important;\n\
  left: 0 !important;\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal > button:first-of-type::before {\n\
  border-left: none;\n\
  border-top: none;\n\
}\n\
.segmented.paging.vertical {\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
}\n\
.segmented.paging.vertical > button {\n\
  margin: 0 !important;\n\
  background-color: none !important;\n\
  width: 30px !important;\n\
  height: 30px !important;\n\
}\n\
.segmented.paging.vertical > button:hover {\n\
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.07) !important;\n\
  background-color: rgba(0, 0, 0, 0.07) !important;\n\
}\n\
.segmented.paging.vertical > button:first-of-type::before {\n\
  content: "";\n\
  display: block;\n\
  width: 16px;\n\
  height: 16px;\n\
  border-right: solid 3px ' + $._contrast + ';\n\
  border-bottom: solid 3px ' + $._contrast + ';\n\
  -webkit-transform: rotate(45deg);\n\
  -moz-transform: rotate(45deg);\n\
  transform: rotate(45deg);\n\
  position: absolute;\n\
  top: 2px;\n\
  left: 5px;\n\
}\n\
.segmented.paging.vertical > button:last-of-type::before {\n\
  content: "";\n\
  display: block;\n\
  width: 16px;\n\
  height: 16px;\n\
  border-right: solid 3px ' + $._contrast + ';\n\
  border-top: solid 3px ' + $._contrast + ';\n\
  -webkit-transform: rotate(-45deg);\n\
  -moz-transform: rotate(-45deg);\n\
  transform: rotate(-45deg);\n\
  position: absolute;\n\
  top: 12px;\n\
  left: 6px;\n\
}\n\
article.paging > section {\n\
  position: fixed;\n\
  width: 100%;\n\
  top: 0 !important;\n\
  left: 0;\n\
  right: 0;\n\
  bottom: 0;\n\
  opacity: 1;\n\
  padding: 10px 0 40px 0 !important;\n\
  -webkit-transition: all 0.15s ease-out;\n\
  -moz-transition: all 0.15s ease-out;\n\
  transition: all 0.15s ease-out;\n\
  overflow-y: auto;\n\
  overflow-x: hidden;\n\
  padding-bottom: 40px;\n\
}\n\
article.paging.horizontal > section.previous {\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  -moz-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
article.paging.horizontal > section.current {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
article.paging.horizontal > section.next {\n\
  -webkit-transform: translate3d(100%, 0, 0);\n\
  -moz-transform: translate3d(100%, 0, 0);\n\
  transform: translate3d(100%, 0, 0);\n\
}\n\
article.paging.vertical > section.previous {\n\
  -webkit-transform: translate3d(0, -100%, 0);\n\
  -moz-transform: translate3d(0, -100%, 0);\n\
  transform: translate3d(0, -100%, 0);\n\
}\n\
article.paging.vertical > section.current {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
article.paging.vertical > section.next {\n\
  -webkit-transform: translate3d(0, -100%, 0);\n\
  -moz-transform: translate3d(0, -100%, 0);\n\
  transform: translate3d(0, -100%, 0);\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal {\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row-reverse;\n\
  flex-direction: row-reverse;\n\
  display: -webkit-flex;\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal button:first-child {\n\
  -webkit-box-ordinal-group: 2;\n\
  -webkit-order: 2;\n\
  order: 2;\n\
  float: right;\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal button:last-child {\n\
  -webkit-box-ordinal-group: 1;\n\
  -webkit-order: 1;\n\
  order: 1;\n\
}\n\
html[dir=rtl] article.paging.horizontal > section.previous {\n\
  -webkit-transform: translate3d(100%, 0, 0);\n\
  -moz-transform: translate3d(100%, 0, 0);\n\
  transform: translate3d(100%, 0, 0);\n\
}\n\
html[dir=rtl] article.paging.horizontal > section.next {\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  -moz-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
html[dir=rtl] article.paging.horizontal > section.current {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
html[dir=rtl] .isNativeAndroidBrowser .segmented.paging.horizontal > button:last-of-type {\n\
  -webkit-box-ordinal-group: 2;\n\
  float: left;\n\
}\n\
html[dir=rtl] .isNativeAndroidBrowser .segmented.paging.horizontal > button:first-of-type {\n\
  -webkit-box-ordinal-group: 1;\n\
}\n\
.toolbar {\n\
  position: fixed;\n\
  bottom: 0;\n\
  left: 0;\n\
  right: 0;\n\
  height: 50px;\n\
  padding: 0 15px;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: start;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: center;\n\
  -moz-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  display: -webkit-box !important;\n\
  -webkit-transition: all 0.15s ease-out;\n\
  -moz-transition: all 0.15s ease-out;\n\
  transition: all 0.15s ease-out;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
  padding: 0 16px;\n\
  vertical-align: middle;\n\
  background-color: '+ $._bkgdColor +';\n\
  overflow: hidden;\n\
  border-top: solid 1px #666666;\n\
}\n\
.toolbar > button {\n\
  color: ' + $._contrast + ' !important;\n\
  background-color: #f5f5f5;\n\
  background-image: -webkit-radial-gradient(circle, ' + $._androidTapColor + ' 10%) !important;\n\
  background-size: 1000% 1000%;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  box-shadow: 0 1px 4px #666666;\n\
  -webkit-animation-timing-function: ease-out;\n\
  animation-timing-function: ease-out;\n\
  -webkit-animation-duration: .5s;\n\
  animation-duration: .5s;\n\
  -webkit-animation-fill-mode: forwards;\n\
  animation-fill-mode: forwards;\n\
}\n\
.toolbar > button.selected {\n\
  animation-name: tapRipple;\n\
  box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.25);\n\
}\n\
.toolbar > button.align-flush {\n\
  top: 5px !important;\n\
}\n\
.isDesktop .toolbar > button:hover {\n\
  box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.25);\n\
}\n\
.splitlayout > .master + .toolbar {\n\
  left: 0;\n\
  width: 320px;\n\
  border-right: solid 1px #c8c8c7 !important;\n\
}\n\
.splitlayout > .detail + .toolbar {\n\
  left: 320px;\n\
}\n\
article.has-toolbar {\n\
  bottom: 50px !important;\n\
}\n\
div.toolbar.current {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
div.toolbar.next {\n\
  -webkit-transform: translate3d(105%, 0, 0);\n\
  -moz-transform: translate3d(105%, 0, 0);\n\
  transform: translate3d(105%, 0, 0);\n\
}\n\
div.toolbar.previous {\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  -moz-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
html[dir=rtl] div.toolbar.current {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
html[dir=rtl] div.toolbar.next {\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  -moz-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
html[dir=rtl] div.toolbar.previous {\n\
  -webkit-transform: translate3d(105%, 0, 0);\n\
  -moz-transform: translate3d(105%, 0, 0);\n\
  transform: translate3d(105%, 0, 0);\n\
}\n\
html[dir=rtl] .splitlayout > .master + .toolbar {\n\
  right: 0;\n\
  left: 320px;\n\
  width: 320px;\n\
  border-right: none;\n\
  border-left: solid 1px #c8c8c7 !important;\n\
}\n\
html[dir=rtl] .splitlayout > .detail + .toolbar {\n\
  right: 320px;\n\
  left: 0;\n\
}\n\
body.splitlayout {\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: start;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: stretch;\n\
  -moz-box-align: stretch;\n\
  -webkit-align-items: stretch;\n\
  align-items: stretch;\n\
}\n\
.splitlayout > nav {\n\
  background-color: ' + androidNavbarColor + ';\n\
  border-bottom: solid 1px #a7a7aa;\n\
}\n\
.splitlayout > nav:first-of-type {\n\
  width: 320px;\n\
  border-right: solid 1px #c8c8c7 !important;\n\
}\n\
.splitlayout > nav:last-of-type {\n\
  left: 320px;\n\
}\n\
.splitlayout > nav h1 {\n\
  z-index: auto;\n\
  text-align: left;\n\
}\n\
.splitlayout > .master + nav:not(:last-of-type) {\n\
  width: 320px;\n\
  right: auto;\n\
  border-right: solid 1px #c8c8c7 !important;\n\
}\n\
.splitlayout > article.master {\n\
  top: 50px;\n\
  left: 0;\n\
  bottom: 0;\n\
  right: 320px;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  width: 320px;\n\
  border-right: solid 1px #c8c8c7 !important;\n\
}\n\
.splitlayout > article.detail {\n\
  top: 50px;\n\
  left: 320px !important;\n\
  bottom: 0;\n\
  left: 0;\n\
  -webkit-box-flex: 1 !important;\n\
  -moz-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
}\n\
.master .list > li.selected {\n\
  background-color: #d9d9d9;\n\
}\n\
html[dir=rtl] body.splitlayout > nav:first-of-type {\n\
  right: 0;\n\
  left: 320px;\n\
  border-right: none;\n\
  border-left: solid 1px #c8c8c7 !important;\n\
}\n\
html[dir=rtl] body.splitlayout > nav:last-of-type {\n\
  left: 0;\n\
  right: 320px;\n\
}\n\
html[dir=rtl] body.splitlayout > nav > h1 {\n\
  text-align: right;\n\
}\n\
html[dir=rtl] body.splitlayout > .master + nav:not(:last-of-type) {\n\
  right: 0;\n\
  left: 320px;\n\
  border-right: none;\n\
  border-left: solid 1px #c8c8c7 !important;\n\
}\n\
html[dir=rtl] body.splitlayout > article.master {\n\
  left: 320px !important;\n\
  right: 0 !important;\n\
  border-right: none !important;\n\
  border-left: solid 1px #c8c8c7 !important;\n\
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
  background-color: rgba(0, 0, 0, 0.5);\n\
  position: absolute;\n\
  top: 0;\n\
  bottom: 0;\n\
  left: 0;\n\
  right: 0;\n\
  width: 100%;\n\
  height: 100%;\n\
  z-index: 1111111111;\n\
  cursor: pointer;\n\
}\n\
.busy {\n\
  -webkit-animation: spin 1.77s infinite ease-out;\n\
  -webkit-transform-origin: center center;\n\
  display: block;\n\
  position: absolute;\n\
}\n\
section > .busy {\n\
  margin: auto;\n\
  left: calc(40%);\n\
}\n\
.busy circle {\n\
  -webkit-transform-origin: center center;\n\
  fill: none;\n\
  stroke: #4288ef;\n\
  stroke-width: 10;\n\
  stroke-linecap: round;\n\
  stroke-dasharray: 0.001, 180;\n\
  stroke-dashoffset: 0;\n\
  -webkit-animation: loading 1.5s infinite ease-out;\n\
}\n\
@-webkit-keyframes spin {\n\
  0% {\n\
    -webkit-transform: rotate(0);\n\
  }\n\
  100% {\n\
    -webkit-transform: rotate(360deg);\n\
  }\n\
}\n\
@-webkit-keyframes loading {\n\
  0% {\n\
    stroke-dasharray: 0.001, 180;\n\
    stroke-dashoffset: 0;\n\
  }\n\
  50% {\n\
    stroke-dasharray: 140,140;\n\
    stroke-dashoffset: 20;\n\
  }\n\
  100% {\n\
    stroke-dasharray: 180, 180;\n\
    stroke-dashoffset: -179;\n\
  }\n\
}\n\
:not(.isNativeAndroidBrowser) .busy {\n\
  -webkit-animation: spin 2s infinite linear;\n\
}\n\
html[dir=rtl] .busy.align-flush {\n\
  left: 10px !important;\n\
  right: auto !important;\n\
  float: left !important;\n\
}\n\
.popover {\n\
  width: 300px;\n\
  background-color: #f5f5f5;\n\
  box-shadow: 0 0 5px #000000;\n\
  border-radius: 4px;\n\
  height: 250px;\n\
  max-height: 300px;\n\
  position: absolute;\n\
  z-index: 11111111111;\n\
  margin-top: 10px;\n\
  transform: scaleY(0);\n\
  transform-origin: top center;\n\
  opacity: 0;\n\
  transition: all 0.25s ease-in-out;\n\
}\n\
.popover.opened {\n\
  transform: scaleY(1);\n\
  opacity: 1;\n\
}\n\
.popover header {\n\
  display: none;\n\
}\n\
.popover > section {\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -webkit-overflow-scrolling: touch;\n\
  padding-bottom: 0;\n\
  position: absolute;\n\
  top: 4px;\n\
  bottom: 4px;\n\
  width: 100%;\n\
  padding-bottom: 20px;\n\
}\n\
.popover .list > li {\n\
  background-image: -webkit-radial-gradient(circle, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.065) 20%);\n\
  background-size: 1000% 1000%;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  -webkit-animation-timing-function: ease-out;\n\
  animation-timing-function: ease-out;\n\
  -webkit-animation-duration: .2s;\n\
  animation-duration: .2s;\n\
  -webkit-animation-fill-mode: forwards;\n\
  animation-fill-mode: forwards;\n\
}\n\
.popover .list > li.selected {\n\
  -webkit-animation-name: listRipple;\n\
  animation-name: listRipple;\n\
}\n\
button.show-popover {\n\
  position: relative;\n\
  background-color: transparent !important;\n\
  border: none !important;\n\
  padding: 6px 20px 2px 20px !important;\n\
  margin: 0 10px 0 0 !important;\n\
  box-shadow: none !important;\n\
  font-size: 13px !important;\n\
}\n\
button.show-popover.align-flush {\n\
  position: absolute;\n\
}\n\
button.show-popover.selected {\n\
  background-color: ' + $._color + ';\n\
}\n\
.segmented > button.show-popover:first-of-type {\n\
  border-left: none !important;\n\
}\n\
button.show-popover::after {\n\
  content: "";\n\
  display: block;\n\
  position: absolute;\n\
  right: 0px;\n\
  bottom: 18px;\n\
  width: 0px;\n\
  height: 0px;\n\
  border-right: solid 6px ' + $._contrast + ';\n\
  border-bottom: solid 6px ' + $._contrast + ';\n\
  border-top: solid 6px transparent;\n\
  border-left: solid 6px transparent;\n\
  -webkit-transform: rotate(45deg);\n\
  -moz-transform: rotate(45deg);\n\
  transform: rotate(45deg);\n\
}\n\
nav > button.show-popover::after {\n\
  border-right: solid 6px ' + $._contrast + ';\n\
  border-bottom: solid 6px ' + $._contrast + ';\n\
}\n\
nav > h1 + button.show-popover.align-flush {\n\
  margin: 8px 0 0 0 !important;\n\
}\n\
html[dir=rtl] button.show-popover {\n\
  padding: 6px 10px 2px 20px !important;\n\
}\n\
html[dir=rtl] button.show-popover::after {\n\
  left: 2px;\n\
  right: auto;\n\
  border: none;\n\
  border-left: solid 6px ' + $._contrast + ';\n\
  border-bottom: solid 6px ' + $._contrast + ';\n\
  border-top: solid 6px transparent;\n\
  border-right: solid 6px transparent;\n\
}\n\
html[dir=rtl] button.show-popover + button {\n\
  -webkit-box-ordinal-group: 1;\n\
  -webkit-order: 1;\n\
}\n\
html[dir=rtl] .isDesktop .button.show-popover:hover::after {\n\
  border-left: solid 6px ' + $._contrast + ' !important;\n\
  border-bottom: solid 6px ' + $._contrast + ';\n\
  border-top: solid 6px transparent;\n\
  border-right: solid 6px transparent;\n\
}\n\
.isNativeAndroidBrowser .popup {\n\
  box-shadow: 0 0 6px 4px #666;\n\
}\n\
.isNativeAndroidBrowser .popup > .panel > header {\n\
  padding-top: 1px;\n\
}\n\
.popup {\n\
  display: block;\n\
  -webkit-box-sizeing: border-box;\n\
  width: 320px;\n\
  padding: 1px;\n\
  background-color: #ffffff;\n\
  position: absolute;\n\
  z-index: 10000;\n\
  margin-left: auto;\n\
  margin-right: auto;\n\
  box-shadow: 0 0 6px 4px #888888;\n\
  border-radius: 3px;\n\
  min-height: 100px;\n\
  z-index: 11111111111;\n\
  -webkit-transition: all 0.25s ease-in-out;\n\
  -moz-transition: all 0.25s ease-in-out;\n\
  transition: all 0.25s ease-in-out;\n\
  opacity: 0;\n\
  transform: scale(0);\n\
}\n\
.popup.opened {\n\
  display: block;\n\
  opacity: 1;\n\
  transform: scale(1);\n\
}\n\
.popup > .panel {\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -moz-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: center;\n\
  -moz-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  padding: 4px 16px;\n\
}\n\
.popup > .panel > header,\n\
.popup > .panel > footer {\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -moz-box-pack: justify;\n\
  -webkit-justify-content: justify;\n\
  justify-content: space-between;\n\
  -webkit-box-align: stretch;\n\
  -moz-box-align: stretch;\n\
  -webkit-align-items: stretch;\n\
  align-items: stretch;\n\
}\n\
.popup > .panel > header > h1 {\n\
  position: static;\n\
  text-align: center;\n\
  margin: 0 15px;\n\
  line-height: 32pt;\n\
  font-weight: bold;\n\
  font-size: 16pt;\n\
  color: #666666;\n\
}\n\
.popup > footer {\n\
  width: 320px;\n\
  padding: 0;\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal !important;\n\
  -moz-box-orient: horizontal !important;\n\
  -webkit-flex-direction: row !important;\n\
  flex-direction: row !important;\n\
}\n\
.popup > footer > button {\n\
  display: block !important;\n\
  -webkit-box-flex: 1 !important;\n\
  -moz-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  height: 100%;\n\
  line-height: 30pt;\n\
  background-color: #ffffff;\n\
  color: #666666;\n\
  font-size: 12pt;\n\
  padding-top: 4px;\n\
  max-width: 320px !important;\n\
  margin: 0 !important;\n\
  border: none;\n\
  box-shadow: none !important;\n\
}\n\
.popup > footer > button.selected {\n\
  -webkit-animation-name: tapRipple;\n\
  animation-name: tapRipple;\n\
}\n\
.popup > p {\n\
  padding: 0 15px;\n\
  text-align: center;\n\
}\n\
.popup button {\n\
  box-shadow: none;\n\
  border: none;\n\
}\n\
.list.editable > li,\n\
.list.deletable > li {\n\
  overflow: hidden;\n\
}\n\
.list.editable > li > .move-up,\n\
.list.deletable > li > .move-up,\n\
.list.editable > li > .move-down,\n\
.list.deletable > li > .move-down {\n\
  width: 21px;\n\
  height: 21px;\n\
  display: inline-block;\n\
  position: relative;\n\
  float: right;\n\
  margin-top: -20px;\n\
  -webkit-transition: all 0.25s ease-out;\n\
  -moz-transition: all 0.25s ease-out;\n\
  transition: all 0.25s ease-out;\n\
  -webkit-transform: translate3d(100px, 0, 0);\n\
  -moz-transform: translate3d(100px, 0, 0);\n\
  transform: translate3d(100px, 0, 0);\n\
}\n\
.list.editable > li > .move-up::before,\n\
.list.deletable > li > .move-up::before,\n\
.list.editable > li > .move-down::before,\n\
.list.deletable > li > .move-down::before {\n\
  display: block;\n\
  content: "";\n\
  width: 21px;\n\
  height: 21px;\n\
  position: absolute;\n\
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20width%3D%22367px%22%20height%3D%22367px%22%20viewBox%3D%220%200%20367%20367%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22Sortable%22%20transform%3D%22translate%2813.000000,%2013.000000%29%22%20stroke%3D%22%23' + $._color.split('#')[1] + '%22%20stroke-width%3D%2225%22%3E%3Ccircle%20id%3D%22Oval-1%22%20cx%3D%22170.5%22%20cy%3D%22170.5%22%20r%3D%22170.5%22%3E%3C/circle%3E%3Cpath%20d%3D%22M55.3736267,209.778395%20L172.745285,100.706186%20L286.306656,209.611568%22%20id%3D%22Path-2%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  background-size: 100% 100%;\n\
}\n\
.list.editable > li > .move-down,\n\
.list.deletable > li > .move-down {\n\
  margin-right: 10px !important;\n\
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
  display: -webkit-box;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  padding: 2px 5px 13px 1px;\n\
  width: 24px;\n\
  height: 24px;\n\
  border: solid 2px ' + $._color + ';\n\
  position: absolute;\n\
  top: 14px;\n\
  left: -32px;\n\
  -webkit-transition: all 0.25s ease-out;\n\
  -moz-transition: all 0.25s ease-out;\n\
  transition: all 0.25s ease-out;\n\
  cursor: pointer;\n\
}\n\
.isDesktop .deletion-indicator:hover,\n\
li.selected > .deletion-indicator {\n\
  color: ' + $._color + ' !important;\n\
  background-color: ' + $._color + ';\n\
  box-shadow: 0 0 3px ' + $._color + ';\n\
  border-color: ' + $._color + ';\n\
}\n\
li.selected > .deletion-indicator::before {\n\
  content: "";\n\
  display: block !important;\n\
  width: 22px;\n\
  height: 22px;\n\
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20width%3D%22140px%22%20height%3D%22144px%22%20viewBox%3D%220%200%20140%20144%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M47.9487979,122.136928%20L92.9487978,122.136928%20L92.9487978,22.1369286%20L81.3308475,22.1369281%20L81.3308475,109.597461%20L47.9487979,109.597462%20L47.9487979,122.136928%20Z%22%20id%3D%22Rectangle-1%22%20fill%3D%22%23ffffff%22%20transform%3D%22translate%2870.448798,%2072.136929%29%20rotate%2835.000000%29%20translate%28-70.448798,%20-72.136929%29%20%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E");\n\
  background-position: 50% 50%;\n\
  background-size: 100% 100%;\n\
  background-repeat: no-repeat;\n\
  font-size: 24pt;\n\
  position: relative;\n\
  top: 1px;\n\
  left: -1px;\n\
}\n\
.isAndroid li.selected > .deletion-indicator::before {\n\
  margin: -6px 0 0 -2px !important;\n\
}\n\
.isDesktopChrome li.selected > .deletion-indicator::before {\n\
  margin: -7px 0 0 -2px !important;\n\
}\n\
.list.showIndicators .deletion-indicator {\n\
  margin-left: 40px;\n\
}\n\
.list.showIndicators li {\n\
  padding-left: 38px;\n\
}\n\
.list.showIndicators li > h3 {\n\
  width: 55%;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
}\n\
.list.showIndicators li .move-up {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.list.showIndicators li .move-down {\n\
  -webkit-transform: translate3d(0, 0, 0) rotate(180deg);\n\
  -moz-transform: translate3d(0, 0, 0) rotate(180deg);\n\
  transform: translate3d(0, 0, 0) rotate(180deg);\n\
}\n\
.list.showIndicators > li.selected > .move-up {\n\
  margin-right: 60px;\n\
}\n\
.list.showIndicators > li.selected > .move-down {\n\
  margin-right: 100px;\n\
}\n\
button.delete {\n\
  float: right;\n\
  text-align: center;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  width: 60px;\n\
  height: 100%;\n\
  position: absolute;\n\
  top: 0;\n\
  right: -10px;\n\
  bottom: 0;\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -moz-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: center;\n\
  -moz-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  -webkit-transition: all 0.15s ease-out;\n\
  -moz-transition: all 0.15s ease-out;\n\
  transition: all 0.15s ease-out;\n\
  -webkit-transform: translate3d(60px, 0, 0);\n\
  -moz-transform: translate3d(60px, 0, 0);\n\
  transform: translate3d(60px, 0, 0);\n\
  visibility: hidden;\n\
  cursor: pointer;\n\
  font-weight: 200;\n\
  margin-right: 0 !important;\n\
  color: transparent;\n\
  background-color: #eeeeee;\n\
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20width%3D%2283px%22%20height%3D%22108px%22%20viewBox%3D%220%200%2083%20108%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22%233A3A3A%22%20x%3D%225%22%20y%3D%2224%22%20width%3D%2272%22%20height%3D%2284%22%20rx%3D%228%22%3E%3C/rect%3E%3Cpath%20d%3D%22M-0.411132812,17.9316406%20L-0.411132812,6.22558594%20L20.1357422,6.48730469%20L25.3134766,0.25390625%20L57.4667969,0.25390625%20L62.6025391,6.48730469%20L82.9248047,6.48730469%20L82.9248047,17.8554688%20L-0.411132812,17.9316406%20Z%22%20id%3D%22Path-1%22%20fill%3D%22%233A3A3A%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E") !important;\n\
  background-position: 50% 50% !important;\n\
  background-size: auto 20px !important;\n\
  background-repeat: no-repeat;\n\
  box-shadow: inset 2px 2px 2px rgba(51, 51, 51, 0.2);\n\
  border-radius: 0;\n\
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);\n\
  border-right: 1px solid rgba(51, 51, 51, 0.2);\n\
  -webkit-animation-name: "none" !important;\n\
  animation-name: "none" !important;\n\
}\n\
button.delete > label {\n\
  display: none;\n\
}\n\
li.selected > button.delete {\n\
  display: block;\n\
}\n\
li.selected > button.delete {\n\
  visibility: visible;\n\
  -webkit-transform: translate3d(-10px, 0, 0);\n\
  -moz-transform: translate3d(-10px, 0, 0);\n\
  transform: translate3d(-10px, 0, 0);\n\
}\n\
html[dir=rtl] .list.editable li > .move-up,\n\
html[dir=rtl] .list.deletable li > .move-up {\n\
  float: left !important;\n\
  -webkit-transform: translate3d(-100px, 0, 0);\n\
  -moz-transform: translate3d(-100px, 0, 0);\n\
  transform: translate3d(-100px, 0, 0);\n\
}\n\
html[dir=rtl] .list.editable li > .move-down,\n\
html[dir=rtl] .list.deletable li > .move-down {\n\
  float: left !important;\n\
  -webkit-transform: translate3d(-140px, 0, 0) rotate(180deg);\n\
  -moz-transform: translate3d(-140px, 0, 0) rotate(180deg);\n\
  transform: translate3d(-140px, 0, 0) rotate(180deg);\n\
}\n\
html[dir=rtl] .list.editable.showIndicators .deletion-indicator,\n\
html[dir=rtl] .list.deletable.showIndicators .deletion-indicator {\n\
  margin-left: auto;\n\
  margin-right: 50px;\n\
}\n\
html[dir=rtl] .list.editable.showIndicators li,\n\
html[dir=rtl] .list.deletable.showIndicators li {\n\
  padding-left: 0;\n\
  padding-right: 40px;\n\
}\n\
html[dir=rtl] .list.editable.showIndicators li > button.delete,\n\
html[dir=rtl] .list.deletable.showIndicators li > button.delete {\n\
  float: left !important;\n\
  left: 0;\n\
  right: auto;\n\
  -webkit-transform: translate3d(-60px, 0, 0);\n\
  -moz-transform: translate3d(-60px, 0, 0);\n\
  transform: translate3d(-60px, 0, 0);\n\
  border-right: none;\n\
  border-left: 1px solid gba(51, 51, 51, 0.2) !important;\n\
  box-shadow: inset -2px 2px 2px gba(51, 51, 51, 0.2)\n\
}\n\
html[dir=rtl] .list.editable.showIndicators li.selected > button.delete,\n\
html[dir=rtl] .list.deletable.showIndicators li.selected > button.delete {\n\
  -webkit-transform: translate3d(-10px, 0, 0);\n\
  -moz-transform: translate3d(-10px, 0, 0);\n\
  transform: translate3d(-10px, 0, 0);\n\
}\n\
html[dir=rtl] .list.editable.showIndicators li > .move-up,\n\
html[dir=rtl] .list.deletable.showIndicators li > .move-up {\n\
  -webkit-transform: translate3d(10px, 0, 0) !important;\n\
  -moz-transform: translate3d(10px, 0, 0) !important;\n\
  transform: translate3d(10px, 0, 0) !important;\n\
}\n\
html[dir=rtl] .list.editable.showIndicators li > .move-down,\n\
html[dir=rtl] .list.deletable.showIndicators li > .move-down {\n\
  -webkit-transform: translate3d(20px, 0, 0) rotate(180deg) !important;\n\
  -moz-transform: translate3d(20px, 0, 0) rotate(180deg) !important;\n\
  transform: translate3d(20px, 0, 0) rotate(180deg) !important;\n\
}\n\
html[dir=rtl] .list.editable.showIndicators li.selected > .move-up,\n\
html[dir=rtl] .list.deletable.showIndicators li.selected > .move-up {\n\
  -webkit-transform: translate3d(90px, 0, 0) !important;\n\
  -moz-transform: translate3d(90px, 0, 0) !important;\n\
  transform: translate3d(90px, 0, 0) !important;\n\
}\n\
html[dir=rtl] .list.editable.showIndicators li.selected > .move-down,\n\
html[dir=rtl] .list.deletable.showIndicators li.selected > .move-down {\n\
  -webkit-transform: translate3d(45px, 0, 0) rotate(180deg) !important;\n\
  -moz-transform: translate3d(45px, 0, 0) rotate(180deg) !important;\n\
  transform: translate3d(45px, 0, 0) rotate(180deg) !important;\n\
}\n\
html[dir=rtl] .deletion-indicator {\n\
  right: -40px;\n\
  left: auto;\n\
}\n\
input[type=text],\n\
input[type=email],\n\
input[type=password],\n\
input[type=text],\n\
input[type=url],\n\
input[type=number],\n\
textarea {\n\
  -webkit-appearance: none;\n\
  border: none;\n\
  background-color: transparent;\n\
  background-image: -webkit-linear-gradient(left, #888888, #888888);\n\
  background-image: linear-gradient(left, #888888, #888888);\n\
  background-size: 100% 1px;\n\
  background-position: bottom left;\n\
  background-repeat: no-repeat;\n\
  margin: 0;\n\
  padding: 0 0 2px 5px;\n\
  color: #888888;\n\
  -webkit-user-modify: read-write-plaintext-only;\n\
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\
  outline-style: none;\n\
}\n\
input:focus,\n\
textarea:focus {\n\
  outline: none !important;\n\
  /* Create the bracket around inputs: */\n\
  background-image: -webkit-linear-gradient(left, ' + $._color + ', ' + $._color + ');\n\
  background-image: linear-gradient(left, ' + $._color + ', ' + $._color + ');\n\
  background-size: 100% 2px;\n\
}\n\
.isAndroid:not(.isDesktop) .select-box > select {\n\
  opacity: 1;\n\
  position: absolute;\n\
  left: -100000px;\n\
  -wekbit-appearance: none;\n\
}\n\
.isDesktop .select-box > select {\n\
  max-width: 120px;\n\
}\n\
.select-box-label {\n\
  border: solid 1px #888888;\n\
  padding: 2px 30px 2px 10px;\n\
  font-size: 11px;\n\
  background-image: -webkit-linear-gradient(top, #888888, #888888);\n\
  background-position: top right;\n\
  background-size: 20px 100%;\n\
  background-repeat: no-repeat;\n\
  height: 20px;\n\
  box-sizing: border-box;\n\
  min-width: 100px;\n\
  max-width: 160px;\n\
  width: auto;\n\
  cursor: pointer;\n\
  display: inline-block;\n\
  overflow-x: hidden;\n\
  text-overflow: ellipsis;\n\
  white-space: nowrap;\n\
  position: relative;\n\
}\n\
.select-box-label::after {\n\
  content: "";\n\
  display: block;\n\
  height: 10px;\n\
  width: 1px;\n\
  border-top: solid 7px #fff;\n\
  border-left: solid 5px transparent;\n\
  border-right: solid 5px transparent;\n\
  position: absolute;\n\
  top: 6px;\n\
  right: 5px;\n\
}\n\
.isDesktop .select-box-label {\n\
  display: none !important;\n\
}\n\
section > div.searchBar {\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  background-color: transparent;\n\
  padding: 5px 10px;\n\
}\n\
input[type="search"] {\n\
  display: block;\n\
  padding: 7px 0 7px 5px;\n\
  -webkit-appearance: none;\n\
  border: none;\n\
  background-color: transparent;\n\
  /* Create the bracket around inputs: */\n\
  background-image: -webkit-linear-gradient(left, #888888, #888888);\n\
  background-image: linear-gradient(left, #888888, #888888);\n\
  background-size: 100% 1px;\n\
  background-position: bottom left;\n\
  background-repeat: no-repeat;\n\
  margin: 0;\n\
  padding: 0 0 2px 5px;\n\
  color: #888888;\n\
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\
  outline-style: none;\n\
}\n\
input[type="search"]:focus {\n\
  text-align: left;\n\
  outline: none;\n\
  outline: none !important;\n\
  /* Create the bracket around inputs: */\n\
  background-image: -webkit-linear-gradient(left, #81cfeb, #81cfeb), -webkit-linear-gradient(left, #81cfeb, #81cfeb), -webkit-linear-gradient(left, #81cfeb, #81cfeb);\n\
  background-image: linear-gradient(left, #81cfeb, #81cfeb), linear-gradient(left, #81cfeb, #81cfeb), linear-gradient(left, #81cfeb, #81cfeb);\n\
}\n\
.icon {\n\
  width: 40px;\n\
  height: 40px;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  background-size: auto 70%;\n\
  border-radius: 50%;\n\
}\n\
li > aside > span.icon {\n\
  margin-left: 0;\n\
}\n\
input[type="range"] {\n\
  -webkit-appearance: none !important;\n\
  outline: none;\n\
  display: block;\n\
  margin-top: 20px;\n\
  margin-bottom: 20px;\n\
  width: auto;\n\
  height: 4px;\n\
  border-radius: 2px;\n\
  background-color: transparent;\n\
  background-image: -webkit-linear-gradient(top, ' + $._color + ', ' + $._color + '), -webkit-linear-gradient(top, #cccccc, #cccccc);\n\
  background-size: 0px 3px, 0 2px;\n\
  background-position: left center;\n\
  background-repeat: no-repeat;\n\
  padding: 0;\n\
}\n\
input[type="range"]::-webkit-slider-thumb {\n\
  -webkit-appearance: none;\n\
  display: block;\n\
  width: 16px;\n\
  height: 16px;\n\
  border-radius: 18px;\n\
  margin: 0;\n\
  background-color: ' + $._color + ';\n\
  border: solid 1px transparent;\n\
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n\
  -webkit-transition: all 0.5s ease-in-out;\n\
  -moz-transition: all 0.5s ease-in-out;\n\
  transition: all 0.5s ease-in-out;\n\
}\n\
input[type="range"]:focus::-webkit-slider-thumb,\n\
.isDesktop input[type="range"]::-webkit-slider-thumb:hover {\n\
  box-shadow: 0 0 0 2px ' + $._color + ', 0 0 0 11px rgba(0, 0, 0, 0.08);\n\
}\n\
.isDesktop input[type="range"]::-webkit-slider-thumb:hover::before {\n\
  content: "";\n\
  display: block;\n\
  background-color: ' + $._color + ';\n\
  border-radius: 50%;\n\
  position: absolute;\n\
  top: 0;\n\
  left: 0;\n\
}\n\
.isNativeAndroidBrowser input[type="range"] {\n\
  -webkit-appearance: none !important;\n\
  outline: none;\n\
  display: block;\n\
  margin-top: 20px;\n\
  margin-bottom: 20px;\n\
  width: auto;\n\
  height: 2px;\n\
  border-radius: 2px;\n\
  background-color: #cccccc;\n\
  background-image: -webkit-linear-gradient(top, ' + $._color + ', ' + $._color + ');\n\
  background-size: 0px 2px;\n\
  background-position: left center;\n\
  background-repeat: no-repeat;\n\
  padding: 0;\n\
}\n\
.isNativeAndroidBrowser input[type="range"]::-webkit-slider-thumb {\n\
  -webkit-appearance: none;\n\
  display: block;\n\
}\n\
html[dir=rtl] input[type="range"] {\n\
  background-position: right center;\n\
}\n\
html[dir=rtl] body.isNativeAndroidBrowser input[type="range"] {\n\
  background-position: left center;\n\
}\n\
.list.select li {\n\
  background-image: -webkit-radial-gradient(circle, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.065) 20%);\n\
  background-size: 1000% 1000%;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  -webkit-animation-timing-function: ease-out;\n\
  animation-timing-function: ease-out;\n\
  -webkit-animation-duration: .2s;\n\
  animation-duration: .2s;\n\
  -webkit-animation-fill-mode: forwards;\n\
  animation-fill-mode: forwards;\n\
}\n\
.list.select li.selected {\n\
  -webkit-animation-name: listRipple;\n\
  animation-name: listRipple;\n\
}\n\
.list.select li:hover::after,\n\
.list.select li.selected::after {\n\
  background-color: ' + $._secondaryColor + ';\n\
  -webkit-transition: all 0.125s ease-in-out;\n\
  -moz-transition: all 0.125s ease-in-out;\n\
  transition: all 0.125s ease-in-out;\n\
  opacity: 1;\n\
  box-shadow: inset 0 0px 0px 3px #fff;\n\
  border: solid 2px ' + $._secondaryColor + ';\n\
}\n\
.list.select li::after {\n\
  content: "";\n\
  display: block;\n\
  float: right;\n\
  margin-top: -25px;\n\
  width: 16px;\n\
  height: 16px;\n\
  -webkit-transition: all 0.125s ease-in-out;\n\
  -moz-transition: all 0.125s ease-in-out;\n\
  transition: all 0.125s ease-in-out;\n\
  opacity: 1;\n\
  border: solid 2px #525252;\n\
  border-radius: 15px;\n\
}\n\
.list.select li > input {\n\
  display: none;\n\
}\n\
html[dir=rtl] .list.select li::after {\n\
  float: left;\n\
}\n\
.sheet {\n\
  position: absolute;\n\
  top: 0;\n\
  left: 0;\n\
  bottom: 0;\n\
  right: 0;\n\
  background-color: rgba(240, 240, 240, 0.9);\n\
  -webkit-transition: all 0.25s ease-in;\n\
  -moz-transition: all 0.25s ease-in;\n\
  transition: all 0.25s ease-in;\n\
  -webkit-transform: translate3d(0, -100%, 0);\n\
  -moz-transform: translate3d(0, -100%, 0);\n\
  transform: translate3d(0, -100%, 0);\n\
  display: none;\n\
  z-index: 11111111111;\n\
}\n\
.sheet.opened {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.sheet.opened > section.scroller-vertical {\n\
  top: 36px;\n\
  padding: 10px 0 100px 0 !important;\n\
}\n\
.sheet.opened .handle.selected {\n\
  -webkit-animation-name: listRipple;\n\
  animation-name: listRipple;\n\
}\n\
.sheet > section.scroller-vertical {\n\
  position: absolute;\n\
  top: 0;\n\
  left: 0;\n\
  bottom: 0;\n\
  height: auto;\n\
  right: 0;\n\
  padding: 0 !important;\n\
}\n\
.sheet > section > .list {\n\
  border: none;\n\
  background-color: transparent !important;\n\
}\n\
.sheet > section > .list > li {\n\
  background-color: transparent !important;\n\
  border-bottom: solid 1px #cbcbcb;\n\
}\n\
.sheet > section > .list > li::before {\n\
  content: none;\n\
}\n\
.sheet button {\n\
  display: block;\n\
  margin: 0 auto;\n\
  padding: 10px 20px !important;\n\
  width: auto;\n\
  height: auto;\n\
}\n\
.sheet div.handle {\n\
  display: block;\n\
  text-align: center;\n\
  margin: 0 auto;\n\
  cursor: pointer;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
  height: 29pt;\n\
  margin: 10px auto 0;\n\
  background-image: -webkit-radial-gradient(circle, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.065) 20%);\n\
  background-size: 1000% 1000%;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  -webkit-animation-timing-function: ease-out;\n\
  animation-timing-function: ease-out;\n\
  -webkit-animation-duration: .2s;\n\
  animation-duration: .2s;\n\
  -webkit-animation-fill-mode: forwards;\n\
  animation-fill-mode: forwards;\n\
}\n\
.sheet div.handle > span {\n\
  display: block;\n\
  width: 20px;\n\
  height: 20px;\n\
  border-left: solid 3px #888;\n\
  border-top: solid 3px #888;\n\
  position: absolute;\n\
  left: 50%;\n\
  margin-left: -10px;\n\
  transform: rotate(-135deg) skewX(-10deg) skewY(-10deg);\n\
}\n\
html[dir=rtl] .sheet > section > h2 {\n\
  font-weight: bold !important;\n\
  font-size: 16pt !important;\n\
  line-height: 20pt !important;\n\
}\n\
body.isNativeAndroidBrowser .slide-out {\n\
  visibility: visible;\n\
}\n\
.slide-out {\n\
  position: absolute;\n\
  top: 52px;\n\
  left: 0;\n\
  bottom: 0;\n\
  background-color: #fafafa;\n\
  z-index: 111111111;\n\
  width: 100%;\n\
  visibility: hidden;\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  -moz-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
  -webkit-transition: all 0.25s ease-out;\n\
  -moz-transition: all 0.25s ease-out;\n\
  transition: all 0.25s ease-out;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -webkit-overflow-scrolling: touch;\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -moz-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: start;\n\
  -moz-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
}\n\
.slide-out.open {\n\
  visibility: visible;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  -moz-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.slide-out > section {\n\
  -webkit-box-flex: 1 !important;\n\
  -moz-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  padding-bottom: 100px;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  width: 100%;\n\
}\n\
.slide-out > section .list > li {\n\
  -webkit-animation-timing-function: ease-out;\n\
  animation-timing-function: ease-out;\n\
  -webkit-animation-duration: .5s;\n\
  animation-duration: .5s;\n\
  -webkit-animation-fill-mode: forwards;\n\
  animation-fill-mode: forwards;\n\
  background-image: -webkit-radial-gradient(circle, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.045) 20%);\n\
  background-size: 1000% 1000%;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
}\n\
.slide-out > section .list > li.selected {\n\
  -webkit-animation-name: listRipple;\n\
  animation-name: listRipple;\n\
}\n\
nav > button.slide-out-button {\n\
  background-color: transparent;\n\
  position: absolute;\n\
  z-index: 1111111;\n\
  top: 8px;\n\
  left: 10px;\n\
  width: 35px;\n\
  height: 35px;\n\
  background-image: -webkit-linear-gradient(left, #000000, #000000) !important;\n\
  background-image: linear-gradient(left, #000000, #000000) !important;\n\
  background-size: 20px 2px !important;\n\
  background-repeat: no-repeat;\n\
  background-position: 8px center;\n\
  box-sizing: border-box;\n\
  padding: 0 !important;\n\
  margin-left: 0;\n\
  -webkit-transform-origin: center center;\n\
  transform-origin: center center;\n\
  border-radius: 50%;\n\
  -webkit-animation-duration: 0.5s;\n\
  -webkit-animation-timing-function: ease-out;\n\
  -webkit-animation-fill-mode: forwards;\n\
  animation-duration: .5s;\n\
  animation-timing-function: ease-out;\n\
  animation-fill-mode: forwards;\n\
  box-shadow: none;\n\
}\n\
nav > button.slide-out-button:hover {\n\
  -webkit-animation-name: "";\n\
  animation-name: "";\n\
  -webkit-animation-name: backButtonRipple;\n\
  animation-name: backButtonRipple;\n\
  background-color: transparent !important;\n\
}\n\
nav > button.slide-out-button.focused {\n\
  background-color: transparent !important;\n\
  background-size: 20px 2px;\n\
  background-image: -webkit-linear-gradient(left, #000000, #000000);\n\
  background-image: linear-gradient(left, #000000, #000000);\n\
  background-repeat: no-repeat;\n\
  -webkit-animation-name: "";\n\
  -webkit-transform: rotate(360deg);\n\
  animation-name: "";\n\
  transform: rotate(360deg);\n\
  background-position: 9px center;\n\
}\n\
nav > button.slide-out-button.focused::before {\n\
  -webkit-transform: rotate(-45deg);\n\
  transform: rotate(-45deg);\n\
  width: 14px;\n\
  top: 12px;\n\
  left: 6px;\n\
}\n\
nav > button.slide-out-button.focused::after {\n\
  -webkit-transform: rotate(45deg);\n\
  transform: rotate(45deg);\n\
  width: 14px;\n\
  top: 22px !important;\n\
  left: 6px;\n\
}\n\
nav > button.slide-out-button::before {\n\
  content: "";\n\
  display: block;\n\
  height: 2px;\n\
  width: 20px;\n\
  background-color: ' + $._contrast + ';\n\
  position: absolute;\n\
  top: 10px;\n\
  left: 8px;\n\
  transition: all 0.25s ease-out;\n\
  -webkit-trasform-origin: left 60px;\n\
  trasform-origin: left 60px;\n\
}\n\
nav > button.slide-out-button::after {\n\
  display: block;\n\
  content: "";\n\
  width: 20px;\n\
  height: 2px;\n\
  background-color: ' + $._contrast + ';\n\
  position: absolute;\n\
  top: 24px;\n\
  left: 8px;\n\
  transition: all 0.25s ease-out;\n\
}\n\
body.slide-out-app > article {\n\
  display: none !important;\n\
}\n\
body.slide-out-app > article.show {\n\
  display: block !important;\n\
  z-index: 100;\n\
}\n\
body.slide-out-app > #global-nav {\n\
  box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.2) !important;\n\
}\n\
body.slide-out-app > nav.show:not(:first-of-type) {\n\
  display: block !important;\n\
  z-index: 1111111111;\n\
  left: 200px;\n\
  right: 200px;\n\
}\n\
body.slide-out-app > nav:not(:first-of-type) {\n\
  display: none !important;\n\
}\n\
.slideout-header {\n\
  background-color: #fafafa !important;\n\
  border-bottom: none !important;\n\
}\n\
.slideout-header h2 {\n\
  margin-left: 0;\n\
  color: #4d4d4d !important;\n\
}\n\
html[dir=rtl] button.slide-out-button {\n\
  right: 5px !important;\n\
  left: auto !important;\n\
}\n\
html[dir=rtl] .slide-out {\n\
  -webkit-transform: translate3d(100%, 0, 0);\n\
  transform: translate3d(100%, 0, 0);\n\
}\n\
html[dir=rtl] .slide-out.open {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.stepper {\n\
  display: -moz-box;\n\
  display: inline-flex;\n\
  display: -webkit-inline-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: start;\n\
  -moz-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
  padding: 1px;\n\
}\n\
.stepper > input {\n\
  margin: 0;\n\
  display: none;\n\
}\n\
.stepper > label {\n\
  display: block;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  border: solid 1px #cbcbcb;\n\
  width: 40px;\n\
  height: 30px;\n\
  font: bold 16px/30px Helvetica;\n\
  text-align: center;\n\
  background-color: #ffffff;\n\
}\n\
.stepper > button {\n\
  background-color: #f5f5f5 !important;\n\
  background-image: -webkit-radial-gradient(circle, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.05) 10%) !important;\n\
  display: inline-box;\n\
  width: 30px;\n\
  height: 30px;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  text-align: center;\n\
  font-weight: bold;\n\
  font-size: 16pt;\n\
  cursor: pointer !important;\n\
  margin: 0;\n\
  box-shadow: none;\n\
  border: solid 1px #cbcbcb;\n\
  padding: 0 !important;\n\
  border-radius: 0;\n\
  box-shadow: none !important;\n\
}\n\
.stepper > button > span {\n\
  font-size: inherit;\n\
  font-weight: inherit;\n\
}\n\
.isDesktop .stepper > button:hover {\n\
  box-shadow: none !important;\n\
}\n\
.stepper > button:first-of-type {\n\
  border-right: none;\n\
  border-top-left-radius: 2px;\n\
  border-bottom-left-radius: 2px;\n\
}\n\
.stepper > button:last-of-type {\n\
  border-left: none;\n\
  border-top-right-radius: 2px;\n\
  border-bottom-right-radius: 2px;\n\
}\n\
body:not(.isDesktop) .stepper > button:last-of-type {\n\
  padding-top: 4px !important;\n\
}\n\
body.isDesktopChrome .stepper > button:last-of-type > span {\n\
  margin-top: -4px !important;\n\
}\n\
html[dir=rtl] .stepper > button:first-of-type {\n\
  border-left: none;\n\
  border-right: solid 1px #cbcbcb;\n\
  border-radius: 0;\n\
  border-top-right-radius: 2px;\n\
  border-bottom-right-radius: 2px;\n\
}\n\
html[dir=rtl] .stepper > button:last-of-type {\n\
  border-right: none;\n\
  border-left: solid 1px #cbcbcb;\n\
  border-radius: 0;\n\
  border-top-left-radius: 2px;\n\
  border-bottom-left-radius: 2px;\n\
}\n\
html[dir=rtl] body.isNativeAndroidBrowser .stepper > button > span {\n\
  padding-right: 8px;\n\
}\n\
li.switched {\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-box-direction: reverse;\n\
  box-direction: reverse;\n\
}\n\
li.switched h3 {\n\
  width: auto;\n\
  font-size: 13pt;\n\
  line-height: 24pt;\n\
  color: ' + $._secondaryColor + ';\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
}\n\
li.switched h4 {\n\
  width: 48%;\n\
  text-align: right;\n\
  margin-right: 10px;\n\
  font-size: 14pt;\n\
  line-height: 24pt;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  max-width: 50%;\n\
}\n\
html[dir=rtl] li.switched h3 {\n\
  text-align: right;\n\
  width: 50%;\n\
}\n\
html[dir=rtl] li.switched h4 {\n\
  text-align: left;\n\
  margin-left: 10px;\n\
}\n\
@keyframes switchRipple {\n\
  0% {\n\
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.35);\n\
  }\n\
  40% {\n\
    box-shadow: 0px 0 5px 8px rgba(0, 0, 0, 0.1);\n\
  }\n\
  100% {\n\
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.35);\n\
  }\n\
}\n\
@keyframes switchRippleReverse {\n\
  0% {\n\
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.35);\n\
  }\n\
  40% {\n\
    box-shadow: 0px 0 5px 8px rgba(0, 0, 0, 0.1);\n\
  }\n\
  100% {\n\
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.35);\n\
  }\n\
}\n\
.switch {\n\
  display: inline-block;\n\
  width: 40px;\n\
  height: 20px;\n\
  display: -moz-box;\n\
  display: inline-flex;\n\
  display: -webkit-inline-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: justify;\n\
  -webkit-justify-content: distribute;\n\
  justify-content: space-around;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  background-image: -webkit-linear-gradient(left, ' + $._androidSwitchTrackColor + ', ' + $._androidSwitchTrackColor + '), -webkit-linear-gradient(left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n\
  background-image: linear-gradient(to left, ' + $._androidSwitchTrackColor + ', ' + $._androidSwitchTrackColor + '), linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n\
  background-position: left 3px, left 3px;\n\
  background-size: 0% 14px, 100% 14px;\n\
  background-repeat: no-repeat, no-repeat;\n\
  -webkit-tap-highlight-color: transparent;\n\
  overflow: visible;\n\
  cursor: pointer;\n\
  border-radius: 50% !important;\n\
  -webkit-user-select: none;\n\
  -webkit-animation-duration: .65s;\n\
  -webkit-animation-timing-function: ease-in-out;\n\
  -webkit-animation-fill-mode: forwards;\n\
  -webkit-animation-name: switchAnimationOff;\n\
  user-select: none;\n\
  animation-duration: .65s;\n\
  animation-timing-function: ease-in-out;\n\
  animation-fill-mode: forwards;\n\
  -webkit-transition: all 0.1s ease-out;\n\
  -moz-transition: all 0.1s ease-out;\n\
  transition: all 0.1s ease-out;\n\
}\n\
.switch.traditional {\n\
  width: 70px;\n\
  height: 24px;\n\
  border: 1px solid #979797;\n\
  background-color: #fafafa;\n\
  background-image: none;\n\
  border-radius: 2px;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  overflow: hidden;\n\
}\n\
.switch.traditional > em {\n\
  width: 30px;\n\
  height: 22px;\n\
  top: -1px;\n\
  border-radius: 0;\n\
  border: solid 1px #919191;\n\
  border-top: solid 1px #e5e5e5;\n\
  background-color: #cecece;\n\
}\n\
.isDesktop .switch.traditional:hover {\n\
  box-shadow: 0 0 2px 2px ' + $._secondaryColor + ';\n\
}\n\
.switch > em {\n\
  display: block;\n\
  position: relative;\n\
  z-index: 30;\n\
  top: 0;\n\
  width: 18px;\n\
  height: 18px;\n\
  border-radius: 50%;\n\
  background-color: #fff;\n\
  pointer-events: none;\n\
  -webkit-transform: translate3d(-1px, 0, 0);\n\
  -moz-transform: translate3d(-1px, 0, 0);\n\
  transform: translate3d(-1px, 0, 0);\n\
  -webkit-transition: all 0.1s ease-in-out;\n\
  -moz-transition: all 0.1s ease-in-out;\n\
  transition: all 0.1s ease-in-out;\n\
  animation-duration: .65s;\n\
  animation-timing-function: ease-in-out;\n\
  animation-fill-mode: forwards;\n\
  animation-name: switchRippleReverse;\n\
}\n\
.switch.on {\n\
  background-size: 100% 14px, 100% 14px;\n\
}\n\
.switch.on > em {\n\
  -webkit-transform: translate3d(22px, 0, 0);\n\
  -moz-transform: translate3d(22px, 0, 0);\n\
  transform: translate3d(22px, 0, 0);\n\
  background-color: ' + $._secondaryColor + ';\n\
  animation-name: switchRipple;\n\
}\n\
.switch.traditional.on {\n\
  border-color: #003166;\n\
  background-size: 100% 100%;\n\
}\n\
.switch.traditional.on > em {\n\
  -webkit-transform: translate3d(36px, 0, 0);\n\
  -moz-transform: translate3d(36px, 0, 0);\n\
  transform: translate3d(36px, 0, 0);\n\
  background-color: ' + $._secondaryColor + ';\n\
  border: solid 1px ' + $._secondaryColor + ';\n\
  border-top: solid 1px #3d9aff;\n\
  border-left-color: #003166;\n\
  animation-name: "";\n\
}\n\
.switch > input {\n\
  display: none;\n\
}\n\
html[dir=rtl] .switch {\n\
  margin-left: 0;\n\
}\n\
html[dir=rtl] .switch.on > em {\n\
  -webkit-transform: translate3d(-20px, 0, 0);\n\
  -moz-transform: translate3d(-20px, 0, 0);\n\
  transform: translate3d(-20px, 0, 0);\n\
}\n\
html[dir=rtl] .switch.on > em.traditional {\n\
  border-left-color: ' + $._secondaryColor + ';\n\
  border-right-color: #003166;\n\
}\n\
html[dir=rtl] .switch > em {\n\
  -webkit-transform: translate3d(2px, 0, 0);\n\
  -moz-transform: translate3d(2px, 0, 0);\n\
  transform: translate3d(2px, 0, 0);\n\
}\n\
body.hasTabBar article {\n\
  top: 97px !important;\n\
}\n\
body.hasTabBar article > section > .list:first-of-type {\n\
  margin-top: 0 !important;\n\
}\n\
body.hasTabBar article .previous:not(.navigable),\n\
body.hasTabBar article .next:not(.navigable) {\n\
  display: none;\n\
  -webkit-transform: none;\n\
}\n\
.tabbar {\n\
  /* Old syntax */\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-box-align: center;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  height: 30px;\n\
  position: absolute;\n\
  left: 0;\n\
  top: 47px;\n\
  right: 0;\n\
}\n\
.tabbar > button {\n\
  -webkit-appearance: none;\n\
  background-color: transparent !important;\n\
  position: relative;\n\
  display: block !important;\n\
  -webkit-box-flex: 1 !important;\n\
  -moz-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  margin: 0;\n\
  height: 100%;\n\
  text-align: center;\n\
  line-height: 17px;\n\
  padding: 6px 10px 4px;\n\
  border: none;\n\
  border-bottom: solid 1px #cecece;\n\
  box-shadow: none !important;\n\
  border-radius: 0 !important;\n\
  background-size: 1100% 1100%;\n\
}\n\
.tabbar > button > label {\n\
  font-size: 12px !important;\n\
}\n\
.tabbar > button:focus {\n\
  outline: none !important;\n\
}\n\
.isDesktop .tabbar > button:hover,\n\
.tabbar > button.selected {\n\
  opacity: 1 !important;\n\
  box-shadow: none !important;\n\
  border-bottom: solid 3px ' + $._color + ';\n\
  padding: 6px 10px 3px;\n\
}\n\
.tabbar > button.more {\n\
  font-size: 0;\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -moz-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -moz-box-pack: center;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: center;\n\
  -moz-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  padding: 8px 10px 3px;\n\
}\n\
.tabbar > button.more.selected,\n\
.tabbar > button.more:hover {\n\
  padding: 8px 10px 3px;\n\
}\n\
.tabbar > button.more > label {\n\
  display: none;\n\
}\n\
.tabbar > button.more::before {\n\
  content: "";\n\
  display: block;\n\
  height: 20px;\n\
  width: 40px;\n\
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_2%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2248px%22%20height%3D%2248px%22%20viewBox%3D%220%200%2048%2048%22%20enable-background%3D%22new%200%200%2048%2048%22%20xml%3Aspace%3D%22preserve%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2223%22%20r%3D%225.172%22%2F%3E%3Ccircle%20cx%3D%2224%22%20cy%3D%2223%22%20r%3D%225.172%22%2F%3E%3Ccircle%20cx%3D%2238%22%20cy%3D%2223%22%20r%3D%225.172%22%2F%3E%3C%2Fsvg%3E");\n\
  background-position: 50% 50%;\n\
  background-size: 100% 100%;\n\
  background-repeat: no-repeat;\n\
}\n\
.tabbar > button > span,\n\
.tabbar > button > .icon {\n\
  display: block;\n\
  -webkit-box-flex: 1 !important;\n\
  -moz-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
}\n\
html[dir=rtl] .tabbar > button:first-child {\n\
  border-right: none !important;\n\
}\n\
html[dir=rtl] .tabbar > button:last-child {\n\
  border-right: solid 1px #666666 !important;\n\
}\n\
#carousel {\n\
  width: 100%;\n\
  height: 100%;\n\
  margin: 10px auto;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  background-color: #ccc;\n\
}\n\
.carousel-track {\n\
  margin: 0;\n\
  padding: 0;\n\
}\n\
.carousel-track > li {\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  list-style: none;\n\
  margin: 0;\n\
  padding: 1px !important;\n\
  position: relative;\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -moz-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -moz-box-pack: start;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: center;\n\
  -moz-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  overflow: hidden;\n\
  border-left: solid 1px #999;\n\
  padding-bottom: 10px;\n\
  -webkit-user-select: none;\n\
}\n\
.carousel-track > li.carousel-panel-active {\n\
  border: none;\n\
}\n\
.carousel-track > li h2 {\n\
  width: 100%;\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
}\n\
.pagination {\n\
  list-style: none;\n\
  height: 10px;\n\
  padding: 0;\n\
  margin: 0 auto;\n\
  display: -moz-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -moz-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -moz-box-pack: justify;\n\
  -webkit-justify-content: distribute;\n\
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
  background-color: #666;\n\
  margin-right: 5px;\n\
  border-radius: 50%;\n\
}\n\
.pagination > li.selected {\n\
  background-color: ' + $._color + ';\n\
  cursor: pointer;\n\
}\n\
.pagination > li:last-of-type {\n\
  margin-right: 0;\n\
}\n\
.isDesktop .pagination > li:hover {\n\
  background-color: ' + $._color + ';\n\
  cursor: pointer;\n\
}\n\
html[dir=rtl] .pagination > li {\n\
  margin-right: 0;\n\
  margin-left: 5px;\n\
  padding: 0 !important;\n\
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