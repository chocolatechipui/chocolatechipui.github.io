var stylesheet = '/*\n\
ChocolateChip-UI\n\
ChUI-iOS.css\n\
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
.ellipsis {\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  white-space: nowrap;\n\
}\n\
html,body,h1,h2,h3,h4,h5,p,div,span,ul,ol,li,pre,blockquote,article,section,nav,aside,header,footer,address,dl,tdt,dd,figure,figcaption,a,em,strong,abbr,time,code,sup,sub,i,b,u,ruby,table,thead,tbody,th,tr,td,label,input,button,select,option,textarea,menu,body {\n\
  font-family: -apple-system-font;\n\
  -webkit-font-smoothing: antialiased;\n\
}\n\
html,body {\n\
  padding: 0;\n\
  margin: 0;\n\
  position: absolute;\n\
  top: 0;\n\
  right: 0;\n\
  bottom: 0;\n\
  left: 0;\n\
  overflow: hidden;\n\
}\n\
body {\n\
  background-color: #efeff4;\n\
  -webkit-font-smoothing: antialiased;\n\
  -webkit-user-select: none;\n\
  -webkit-tap-highlight-color: transparent;\n\
  font-size: 1em;\n\
  line-height: 1.5;\n\
}\n\
body.isDesktop {\n\
  font-family: "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif;\n\
}\n\
body.isDesktop h1,body.isDesktop h2,body.isDesktop h3,body.isDesktop h4,body.isDesktop h5,body.isDesktop p {\n\
  font-family: "Helvetica Neue", HelveticaNeue;\n\
}\n\
h1 {\n\
  font: -apple-system-headline1 !important;\n\
  font-weight: 100;\n\
  font-size: 1.25em;\n\
}\n\
h2 {\n\
  font: -apple-system-headline2 !important;\n\
  font-size: 1em;\n\
  font-weight: normal;\n\
  text-transform: uppercase;\n\
}\n\
h3 {\n\
  font: -apple-system-subheadline1 !important;\n\
  font-size: 1em;\n\
  font-weight: 400 !important;\n\
}\n\
h4 {\n\
  font: -apple-system-subheadline2 !important;\n\
  font-size: 1em;\n\
  font-weight: 400 !important;\n\
}\n\
h5 {\n\
  font: -apple-system-subheadline2 !important;\n\
  font-size: 1em;\n\
  font-weight: 400 !important;\n\
}\n\
p {\n\
  font: -apple-system-footnote !important;\n\
}\n\
cite {\n\
  font: -apple-system-caption1;\n\
}\n\
figure {\n\
  font: -apple-system-figure;\n\
}\n\
article {\n\
  position: absolute;\n\
  top: 45px;\n\
  right: 0;\n\
  bottom: 0;\n\
  left: 0;\n\
  -webkit-transition: all 0.15s;\n\
  transition: all 0.15s;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -webkit-overflow-scrolling: touch;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
}\n\
.hide-navbars article {\n\
  top: 0;\n\
}\n\
.isStandalone article {\n\
  top: 65px;\n\
}\n\
.isStandalone .hide-navbars article {\n\
  top: 20px;\n\
}\n\
@media only screen and (min-width: 768px) {\n\
  article {\n\
    -webkit-transition: all 0.25s ease-out;\n\
    transition: all 0.25s ease-out;\n\
  }\n\
}\n\
.current {\n\
  opacity: 1;\n\
  visibility: visible;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.next {\n\
  -webkit-transform: translate3d(105%, 0, 0);\n\
  transform: translate3d(105%, 0, 0);\n\
  opacity: 1;\n\
  visibility: visible;\n\
}\n\
.previous {\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
  opacity: 1;\n\
  visibility: visible;\n\
}\n\
html[dir=rtl] .current {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
html[dir=rtl] .next {\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
html[dir=rtl] .previous {\n\
  -webkit-transform: translate3d(105%, 0, 0);\n\
  transform: translate3d(105%, 0, 0);\n\
}\n\
.scroller-vertical,\n\
.scroller-horizontal {\n\
  -webkit-box-flex: 1;\n\
  -webkit-flex: 1;\n\
  flex: 1;\n\
  padding-bottom: 100px;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -webkit-overflow-scrolling: touch;\n\
}\n\
.scroller-horizontal {\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
}\n\
article > section,\n\
.slide-out > section {\n\
  padding-top: 20px;\n\
  padding-bottom: 100px;\n\
  -webkit-box-flex: 1;\n\
  -webkit-flex: 1;\n\
  flex: 1;\n\
  position: absolute;\n\
  top: 0;\n\
  left: 0;\n\
  width: 100%;\n\
  min-height: 100% !important;\n\
}\n\
.vertical,\n\
li.comp > aside.vertical {\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
}\n\
.horizontal {\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
}\n\
.horizontal.centered {\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
}\n\
button {\n\
  border: none;\n\
  background: none;\n\
  display: block;\n\
  cursor: pointer;\n\
  text-decoration: none;\n\
  font: -apple-system-caption1;\n\
  font-size: 13pt;\n\
  -webkit-transition: all 0.35s ease-out;\n\
  transition: all 0.35s ease-out;\n\
  -webkit-box-sizing: auto;\n\
  box-sizing: auto;\n\
  padding: 8px 0px;\n\
  position: relative;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  vertical-align: middle;\n\
  text-align: center;\n\
  color: ' + $._color + ';\n\
  border-color: ' + $._color + ';\n\
  background-color: rgba(255, 255, 255, 0.01);\n\
  -webkit-font-smoothing: antialiased;\n\
}\n\
.isDesktop button:hover {\n\
  cursor: pointer;\n\
  opacity: .5 !important;\n\
}\n\
button.back,\n\
button.backTo {\n\
  margin: 0;\n\
  text-align: left;\n\
  padding: 0 0 0 20px !important;\n\
  line-height: 28px;\n\
  color: ' + $._navbarColor + ';\n\
  border: none;\n\
  position: relative;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  display: inline-block !important;\n\
  height: 30px;\n\
}\n\
button.back::before,\n\
button.backTo::before {\n\
  display: block;\n\
}\n\
button.back::before,\n\
button.backTo::before {\n\
  display: block;\n\
  content: "";\n\
  border: solid 1px transparent;\n\
  background-color: ' + $._navbarColor + ';\n\
  -webkit-mask-position: 50% 50%;\n\
  -webkit-mask-size: 90% 90%;\n\
  -webkit-mask-repeat: no-repeat;\n\
  -webkit-mask-image: url(\'data:image/svg+xml;utf8,%3Csvg%20xmlns%3Asvg%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20version%3D"1.1"%20width%3D"21"%20height%3D"35"%20viewBox%3D"0%200%2021%2035"%20id%3D"svg2"%3E%3Cdefs%20id%3D"defs8"%20/%3E%3Cg%20transform%3D"translate%28-2.1355929,0.0677963%29"%20id%3D"Page-1"%20style%3D"fill%3Anone%3Bstroke%3Anone"%3E%3Cpath%20d%3D"M%2021.353814,1.2365445%205.0903576,17.5%2021.353814,33.763456"%20id%3D"Rectangle-1"%20style%3D"stroke%3A%23000%3Bstroke-width%3A3"%20/%3E%3C/g%3E%3C/svg%3E\');\n\
  -webkit-mask-position: left center;\n\
  width: 20px;\n\
  height: 20px;\n\
  margin-right: 7px;\n\
  position: absolute;\n\
  left: -4px;\n\
  top: 4px;\n\
}\n\
button.action {\n\
  color: #585d63;\n\
  border: solid 1px #585d63;\n\
  border-radius: 20px;\n\
  display: block;\n\
  margin: 0 auto;\n\
  padding: 10px 20px;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  width: auto;\n\
  height: auto;\n\
  min-width: 200px;\n\
  max-width: 300px;\n\
}\n\
nav > button {\n\
  max-width: 100px;\n\
}\n\
button.align-flush,\n\
.toolbar > button.align-flush {\n\
  position: absolute;\n\
  right: 15px;\n\
  margin-right: 0 !important;\n\
  z-index: 100;\n\
  top: 3px;\n\
}\n\
.isDesktopSafari button.back {\n\
  margin-top: 2px !important;\n\
}\n\
.isDesktopSafari button.back::before {\n\
  top: 3px;\n\
}\n\
.isDesktop button {\n\
  font: "Helvetica Neue", HelveticaNeue, sans-serif;\n\
}\n\
.isiOS button.back,\n\
.isiOS button.backTo .isSafari6 button.back,\n\
.isSafari6 button.backTo {\n\
  display: -webkit-box;\n\
  margin-top: 0;\n\
}\n\
html[dir=rtl] button.align-flush {\n\
  right: auto;\n\
  left: 15px;\n\
}\n\
html[dir=rtl] button.back,\n\
html[dir=rtl] button.backTo {\n\
  padding: 0 20px 0 0 !important;\n\
}\n\
html[dir=rtl] button.back::before,\n\
html[dir=rtl] button.backTo::before {\n\
  -webkit-transform: rotate(180deg);\n\
  right: -4px;\n\
  left: auto;\n\
}\n\
html[dir=rtl] .toolbar > button.align-flush {\n\
  right: auto;\n\
  left: 15px;\n\
}\n\
#global-nav {\n\
  background-color: '+ $._bkgdColor +';\n\
  border-bottom: solid 1px #a7a7aa;\n\
  overflow: hidden;\n\
}\n\
nav {\n\
  height: 45px;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  display: flex;\n\
  display: -webkit-box;\n\
  display: -webkit-flex;\n\
  -webkit-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
  text-align: center;\n\
  position: absolute;\n\
  top: 0;\n\
  left: 0;\n\
  right: 0;\n\
  -webkit-transition: all 0.15s ease-out;\n\
  transition: all 0.15s ease-out;\n\
  padding: 0 15px;\n\
  vertical-align: middle;\n\
}\n\
nav > button,\n\
nav > div > button {\n\
  color: ' + $._navbarColor + ';\n\
}\n\
nav > h1 {\n\
  text-align: center;\n\
  display: inline-block;\n\
  -webkit-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  font: normal 12pt/14pt HelveticaNeue, Sans-serif;\n\
  position: absolute;\n\
  top: 0;\n\
  left: 100px;\n\
  right: 100px;\n\
  z-index: -1;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  color: ' + $._navbarColor + ';\n\
}\n\
nav > h1 + button {\n\
  margin: 0;\n\
  position: absolute;\n\
  right: 15px;\n\
  top: 3px;\n\
  color: ' + $._navbarColor + ';\n\
}\n\
nav > button + h1 {\n\
  left: 120px;\n\
  right: 120px;\n\
}\n\
.isStandalone nav {\n\
  top: 20px;\n\
}\n\
.isStandalone #global-nav {\n\
  height: 65px;\n\
  top: 0;\n\
}\n\
@media only screen and (max-device-width: 320px) and (orientation: portrait) {\n\
  nav > button + h1 {\n\
    left: 115px;\n\
    right: 115px;\n\
  }\n\
}\n\
@media only screen and (max-device-width: 320px) and (orientation: landscape) {\n\
  nav > button + h1 {\n\
    left: 150px;\n\
    right: 150px;\n\
  }\n\
}\n\
.list {\n\
  list-style: none;\n\
  margin: 0 0 10px 0;\n\
  padding: 0;\n\
  border-top: solid 1px #c8c8c8;\n\
  border-bottom: solid 1px #c8c8c8;\n\
  background-color: #ffffff;\n\
  overflow: hidden;\n\
  width: 100%;\n\
}\n\
.list > li {\n\
  padding: 13px 15px 13px 15px;\n\
  -webkit-transition: all 0.3s ease-out;\n\
  transition: all 0.3s ease-out;\n\
  position: relative;\n\
  background-color: #ffffff;\n\
  font-size: 12pt;\n\
}\n\
.list > li::before {\n\
  display: block;\n\
  content: "";\n\
  position: absolute;\n\
  bottom: 0px;\n\
  left: 15px;\n\
  right: 0px;\n\
  border-bottom: solid 1px #c8c8c8;\n\
}\n\
.list > li:last-of-type::before {\n\
  border-bottom: none;\n\
}\n\
.list > li.nav::after {\n\
  display: block;\n\
  content: "";\n\
  width: 6px;\n\
  height: 6px;\n\
  border-right: solid 2px ' + $._secondaryColor + ';\n\
  border-top: solid 2px ' + $._secondaryColor + ';\n\
  -webkit-transform: rotate(45deg);\n\
  transform: rotate(45deg);\n\
  float: right;\n\
  position: absolute;\n\
  top: 16px;\n\
  right: 15px;\n\
  -webkit-transition: all 0.4s ease-out;\n\
  transition: all 0.4s ease-out;\n\
}\n\
.list > li.show-detail::after {\n\
  display: block;\n\
  content: "i";\n\
  width: 22px;\n\
  height: 20px;\n\
  border-radius: 20px;\n\
  border: solid 1px ' + $._secondaryColor + ';\n\
  color: ' + $._secondaryColor + ';\n\
  font: bold 14px/0 "Times", serif;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  padding: 10px 8px;\n\
  position: absolute;\n\
  top: 10px;\n\
  right: 15px;\n\
}\n\
.list + p,\n\
.list + p + p {\n\
  color: #7f7f7f;\n\
}\n\
.list ~ p {\n\
  margin: 0 15px;\n\
}\n\
.list ~ p + p {\n\
  margin-top: 5pt;\n\
}\n\
.list + p,\n\
.list + p + p {\n\
  color: #7f7f7f;\n\
}\n\
.list ~ p {\n\
  margin: 0 15px;\n\
}\n\
.list ~ p + p {\n\
  margin-top: 5pt;\n\
}\n\
.isDesktop .list > li[data-goto]:hover,\n\
.isDesktop .list > li[data-show-article]:hover,\n\
.isDesktop .list.select > li:hover,\n\
.list > li.selected {\n\
  background-color: #d9d9d9;\n\
  cursor: pointer;\n\
}\n\
.list > li > h3,\n\
.list > li > h4 {\n\
  width: 80%;\n\
  font-weight: 200;\n\
  margin: 0;\n\
}\n\
.list > li h4 {\n\
  line-height: 14pt;\n\
  color: #7f7f7f;\n\
}\n\
.list > li > h4,\n\
.list > li > div > h4 {\n\
  margin: 0;\n\
}\n\
.list > li > aside > h4 {\n\
  margin: 0;\n\
  font-weight: normal;\n\
  color: #7f7f7f;\n\
}\n\
.list h3,\n\
.list h4,\n\
.list p {\n\
  pointer-events: none;\n\
}\n\
.list > li > p {\n\
  margin: 6px 0px;\n\
  color: #7f7f7f;\n\
}\n\
.list > li > p + p {\n\
  margin-top: 6px;\n\
}\n\
.list > li.comp > div > p {\n\
  margin: 0;\n\
  color: #7f7f7f;\n\
}\n\
section h2 {\n\
  font-weight: normal;\n\
  font-size: 11pt;\n\
  line-height: 12pt;\n\
  color: #4d4d4d;\n\
  margin: 10px 0 6px 15px;\n\
  text-transform: uppercase;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  color: #7f7f7f;\n\
}\n\
section h2.normal-case {\n\
  text-transform: none;\n\
}\n\
section h2.wrap {\n\
  white-space: normal;\n\
}\n\
html[dir=rtl] section h2 {\n\
  margin: 26px 15px 6px 0;\n\
}\n\
html[dir=rtl] .list li {\n\
  padding: 13px 15px 13px 5px;\n\
}\n\
html[dir=rtl] .list li::before {\n\
  left: 0px;\n\
  right: 15px;\n\
}\n\
html[dir=rtl] .list li.nav::after {\n\
  right: auto;\n\
  top: 20px;\n\
  left: 15px;\n\
  -webkit-transform: rotate(-135deg);\n\
  transform: rotate(-135deg);\n\
}\n\
html[dir=rtl] .list li.show-detail::after {\n\
  left: 10px;\n\
  right: auto;\n\
}\n\
html[dir=rtl] .list li.nav::after {\n\
  left: 15px;\n\
  right: auto;\n\
}\n\
.list > li.comp::before {\n\
  content: none;\n\
}\n\
li.comp {\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -webkit-box-align: stretch;\n\
  -webkit-align-items: stretch;\n\
  align-items: stretch;\n\
  padding-bottom: 0;\n\
}\n\
li.comp > div {\n\
  -webkit-box-flex: 1;\n\
  -webkit-flex: 1;\n\
  flex: 1;\n\
  border-bottom: solid 1px #c8c8c8;\n\
  padding: 0 0 10px 0;\n\
  margin-left: 0;\n\
}\n\
li.comp > div > h3,\n\
li.comp > div > h4 {\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  font-weight: 200;\n\
  margin: 0;\n\
  color: #2d2d2d;\n\
}\n\
li.comp > div + aside {\n\
  margin-right: -15px;\n\
}\n\
li.comp > aside {\n\
  display: -webkit-box;\n\
  -webkit-box-pack: center;\n\
  -webkit-box-align: center;\n\
  -webkit-justify-content: center;\n\
  -webkit-align-items: center;\n\
  justify-content: center;\n\
  align-items: center;\n\
  padding: 0 0 10px 0;\n\
}\n\
li.comp > aside:first-child {\n\
  -webkit-box-align: start;\n\
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
  width: 6px;\n\
  height: 6px;\n\
  border-right: solid 2px ' + $._secondaryColor + ';\n\
  border-top: solid 2px ' + $._secondaryColor + ';\n\
  -webkit-transform: rotate(45deg) translate3d(4px, 0, 0);\n\
  transform: rotate(45deg) translate3d(4px, 0, 0);\n\
}\n\
li.comp > aside > .show-detail {\n\
  display: inline-block;\n\
  margin-bottom: -4px;\n\
}\n\
li.comp > aside > .show-detail::after {\n\
  display: block;\n\
  content: "i";\n\
  width: 22px;\n\
  height: 20px;\n\
  border-radius: 20px;\n\
  border: solid 1px ' + $._secondaryColor + ';\n\
  color: ' + $._secondaryColor + ';\n\
  font: bold 14px/0 "Times", serif;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  padding: 10px 8px;\n\
  float: right;\n\
  margin: 0px 10px 0 0 !important;\n\
}\n\
li.comp > aside:first-child {\n\
  margin-right: 10px;\n\
}\n\
li.comp > aside:last-child {\n\
  padding: 0 10px 10px 10px;\n\
  border-bottom: solid 1px #c8c8c8;\n\
}\n\
li.comp > aside > span.counter,\n\
li.comp > aside > span.date-time {\n\
  font-weight: normal;\n\
  color: #2d2d2d;\n\
  font-size: 1em;\n\
}\n\
li.comp:last-of-type > aside:last-child {\n\
  border: none;\n\
}\n\
li.comp:last-of-type > div {\n\
  border: none;\n\
}\n\
li.comp.wrap > div > h3,\n\
li.comp.wrap > div > h4 {\n\
  white-space: wrap;\n\
  overflow: visible;\n\
}\n\
html[dir=rtl] li.comp {\n\
  padding-bottom: 0 !important;\n\
}\n\
html[dir=rtl] li.comp > aside > .nav::after {\n\
  -webkit-transform: rotate(-135deg);\n\
  transform: rotate(-135deg);\n\
}\n\
html[dir=rtl] li.comp > aside:first-child {\n\
  margin-left: 10px;\n\
  margin-right: 0;\n\
}\n\
html[dir=rtl] li.comp > aside:last-child {\n\
  padding: 0 10px 0 0;\n\
}\n\
html[dir=rtl] li.comp > aside:last-child > .nav::after {\n\
  margin-left: -10px !important;\n\
}\n\
html[dir=rtl] li.comp > aside > span.counter,\n\
html[dir=rtl] li.comp > aside > span.date-time {\n\
  margin-right: 5px;\n\
  margin-left: 0px;\n\
}\n\
html[dir=rtl] li.comp > aside > h4 {\n\
  padding-bottom: 4px;\n\
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
  -webkit-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
}\n\
.segmented:not(.paging) > button {\n\
  display: block;\n\
  border: solid 1px ' + $._color + ';\n\
  padding: 4px 15px;\n\
  margin: 0;\n\
  border-left: none;\n\
  background-color: rgba(255, 255, 255, 0.65);\n\
  width: auto;\n\
  overflow-x: hidden;\n\
  -webkit-transition: none;\n\
  transition: none;\n\
  font-size: 10pt;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  -webkit-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  text-align: center;\n\
  color: ' + $._color + ';\n\
}\n\
.segmented:not(.paging) > button:first-of-type {\n\
  border-left: solid 1px ' + $._color + ';\n\
  border-top-left-radius: 4px;\n\
  border-bottom-left-radius: 4px;\n\
}\n\
.segmented:not(.paging) > button:last-of-type {\n\
  border-top-right-radius: 4px;\n\
  border-bottom-right-radius: 4px;\n\
}\n\
.isDesktop .segmented:not(.paging) > button:hover,\n\
.segmented:not(.paging) > button.selected {\n\
  color: ' + $._bkgdContrastColor + ';\n\
  background-color: ' + $._color + ';\n\
  opacity: 1 !important;\n\
}\n\
div.horizontal.centered > .segmented {\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-flex: 1;\n\
  -webkit-flex: 1;\n\
  flex: 1;\n\
  margin: 10px 15px;\n\
}\n\
.segmented.align-flush {\n\
  position: absolute;\n\
  right: 15px;\n\
  top: 6px;\n\
}\n\
html[dir=rtl] .segmented.align-flush {\n\
  position: absolute;\n\
  right: auto;\n\
  left: 15px;\n\
  top: 6px;\n\
}\n\
html[dir=rtl] .segmented button:first-of-type {\n\
  border-left: none;\n\
  border-top-left-radius: 0;\n\
  border-bottom-left-radius: 0;\n\
  border-top-right-radius: 4px;\n\
  border-bottom-right-radius: 4px;\n\
}\n\
html[dir=rtl] .segmented button:last-of-type {\n\
  border-left: solid 1px ' + $._color + ';\n\
  border-top-right-radius: 0;\n\
  border-bottom-right-radius: 0;\n\
  border-top-left-radius: 4px;\n\
  border-bottom-left-radius: 4px;\n\
}\n\
.segmented.paging,\n\
.segmented.paging.vertical {\n\
  -webkit-box-orient: horizontal !important;\n\
  -webkit-flex-direction: row !important;\n\
  flex-direction: row !important;\n\
}\n\
.segmented.paging > button,\n\
.segmented.paging.vertical > button {\n\
  border: none;\n\
  background: none !important;\n\
  color: ' + $._navbarColor + ';\n\
  width: 30px;\n\
  height: 40px;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  position: relative;\n\
  border-radius: 0 !important;\n\
  border: none !important;\n\
}\n\
.isDesktop .segmented.paging > button:hover,\n\
.isDesktop .segmented.paging.vertical > button:hover,\n\
.segmented.paging > button.selected,\n\
.segmented.paging.vertical > button.selected {\n\
  opacity: .5 !important;\n\
  color: ' + $._navbarColor + ';\n\
  background-color: transparent !important;\n\
}\n\
.segmented.paging > button::before,\n\
.segmented.paging.vertical > button::before {\n\
  display: block;\n\
  content: "";\n\
  width: 35px;\n\
  height: 35px;\n\
  position: absolute;\n\
  top: 0;\n\
  left: 0;\n\
  -webkit-mask-repeat: no-repeat;\n\
  -webkit-mask-position: 50% 50%;\n\
  background-color: ' + $._navbarColor + ';\n\
}\n\
.segmented.paging.horizontal > .button:first-of-type::before,\n\
.segmented.paging.horizontal > button:first-of-type::before {\n\
  -webkit-mask-image: url(\'data:image/svg+xml;utf8,%3Csvg%20version%3D"1.1"%20id%3D"svg2"%20xmlns%3Asvg%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3Axlink%3D"http%3A//www.w3.org/1999/xlink"%20x%3D"0px"%20y%3D"0px"%20width%3D"48px"%20height%3D"48px"%20viewBox%3D"0%200%2048%2048"%20enable-background%3D"new%200%200%2048%2048"%20xml%3Aspace%3D"preserve"%3E%3Cg%20id%3D"g4"%3E%3C/g%3E%3Cg%20id%3D"layer2"%3E%3Cpath%20id%3D"path7"%20d%3D"M28.038,8.381l2.674,2.599L18.545,23.146l12.086,12.086l-2.593,2.679L17.909,27.782l-4.636-4.636l4.636-4.636%20L28.038,8.381z"/%3E%3C/g%3E%3C/svg%3E\');\n\
}\n\
.segmented.paging.horizontal > .button:last-of-type::before,\n\
.segmented.paging.horizontal > button:last-of-type::before {\n\
  -webkit-mask-image: url(\'data:image/svg+xml;utf8,%3Csvg%20version%3D"1.1"%20id%3D"svg2"%20xmlns%3Asvg%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3Axlink%3D"http%3A//www.w3.org/1999/xlink"%20x%3D"0px"%20y%3D"0px"%20width%3D"48px"%20height%3D"48px"%20viewBox%3D"0%200%2048%2048"%20enable-background%3D"new%200%200%2048%2048"%20xml%3Aspace%3D"preserve"%3E%3Cg%20id%3D"g4"%3E%3C/g%3E%3Cg%20id%3D"layer2"%3E%3Cpath%20id%3D"path7"%20d%3D"M15.946,37.911l-2.674-2.599l12.167-12.167L13.354,11.06l2.593-2.679L26.075,18.51l4.636,4.636l-4.636,4.636L15.946,37.911z"/%3E%3C/g%3E%3C/svg%3E\');\n\
}\n\
.segmented.paging.vertical > .button:first-of-type::before,\n\
html[dir=rtl] .segmented.paging.vertical > .button:last-of-type::before,\n\
.segmented.paging.vertical > button:first-of-type::before,\n\
html[dir=rtl] .segmented.paging.vertical > button:last-of-type::before {\n\
  -webkit-mask-image: url(\'data:image/svg+xml;utf8,%3Csvg%20version%3D"1.1"%20id%3D"svg2"%20xmlns%3Asvg%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3Axlink%3D"http%3A//www.w3.org/1999/xlink"%20x%3D"0px"%20y%3D"0px"%20width%3D"48px"%20height%3D"48px"%20viewBox%3D"0%200%2048%2048"%20enable-background%3D"new%200%200%2048%2048"%20xml%3Aspace%3D"preserve"%3E%3Cg%20id%3D"g4"%3E%3C/g%3E%3Cg%20id%3D"layer2"%3E%3Cpath%20id%3D"path7"%20d%3D"M7.227,17.101l2.599-2.674l12.167,12.167l12.086-12.086l2.679,2.593L26.628,27.229l-4.636,4.636l-4.636-4.636%20L7.227,17.101z"/%3E%3C/g%3E%3C/svg%3E\');\n\
}\n\
.segmented.paging.vertical > .button:last-of-type::before,\n\
html[dir=rtl] .segmented.paging.vertical > .button:first-of-type::before,\n\
.segmented.paging.vertical > button:last-of-type::before,\n\
html[dir=rtl] .segmented.paging.vertical > button:first-of-type::before {\n\
  -webkit-mask-image: url(\'data:image/svg+xml;utf8,%3Csvg%20version%3D"1.1"%20id%3D"svg2"%20xmlns%3Asvg%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3Axlink%3D"http%3A//www.w3.org/1999/xlink"%20x%3D"0px"%20y%3D"0px"%20width%3D"48px"%20height%3D"48px"%20viewBox%3D"0%200%2048%2048"%20enable-background%3D"new%200%200%2048%2048"%20xml%3Aspace%3D"preserve"%3E%3Cg%20id%3D"g4"%3E%3C/g%3E%3Cg%20id%3D"layer2"%3E%3Cpath%20id%3D"path7"%20d%3D"M36.757,29.191l-2.599,2.674L21.992,19.698L9.905,31.784l-2.679-2.593l10.129-10.129l4.636-4.636l4.636,4.636%20L36.757,29.191z"/%3E%3C/g%3E%3C/svg%3E\');\n\
}\n\
article.paging {\n\
  overflow: hidden !important;\n\
  overflow-y: scroll !important;\n\
  -webkit-box-orient: vertical !important;\n\
  -webkit-direction: column !important;\n\
  box-orient: vertical !important;\n\
  direction: column !important;\n\
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
  overflow-x: hidden;\n\
  overflow-y: scroll;\n\
  -webkit-transition: all 0.15s ease-out;\n\
  transition: all 0.15s ease-out;\n\
}\n\
article.paging.horizontal > section.previous {\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
article.paging.horizontal > section.current {\n\
  -webkit-transform: translate3d(0, 0, 0) scale(1, 1);\n\
  transform: translate3d(0, 0, 0) scale(1, 1);\n\
}\n\
article.paging.horizontal > section.next {\n\
  -webkit-transform: translate3d(100%, 0, 0) scale(0, 1);\n\
  transform: translate3d(100%, 0, 0) scale(0, 1);\n\
}\n\
article.paging.vertical > section.previous {\n\
  -webkit-transform: translate3d(0, -100%, 0);\n\
  transform: translate3d(0, -100%, 0);\n\
}\n\
article.paging.vertical > section.current {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
article.paging.vertical > section.next {\n\
  -webkit-transform: translate3d(0, -100%, 0);\n\
  transform: translate3d(0, -100%, 0);\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal {\n\
  -webkit-flex-direction: row-reverse;\n\
  flex-direction: row-reverse;\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal button:first-child {\n\
  border: none !important;\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal button:first-child::before {\n\
  left: -10px;\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal button:last-child {\n\
  border: none !important;\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal button:last-child::before {\n\
  left: -10px;\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal > button::before {\n\
  top: -2px;\n\
}\n\
html[dir=rtl] article.paging.horizontal > section.previous {\n\
  -webkit-transform: translate3d(100%, 0, 0);\n\
  transform: translate3d(100%, 0, 0);\n\
}\n\
html[dir=rtl] article.paging.horizontal > section.current {\n\
  -webkit-transform: translate3d(0, 0, 0) scale(1, 1);\n\
  transform: translate3d(0, 0, 0) scale(1, 1);\n\
}\n\
html[dir=rtl] article.paging.horizontal > section.next {\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
}\n\
html[dir=rtl] .segmented.paging.horizontal > button::before {\n\
  -webkit-transform: rotate(180deg);\n\
}\n\
.toolbar {\n\
  position: fixed;\n\
  bottom: 0;\n\
  left: 0;\n\
  right: 0;\n\
  height: 45px;\n\
  padding: 0 15px;\n\
  background-color: ' + $._bkgdColor + ';\n\
  border-top: solid 1px #a7a7aa;\n\
  overflow: hidden;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  -webkit-transition: all 0.15s ease-out;\n\
  transition: all 0.15s ease-out;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.toolbar > button {\n\
  margin-right: 20px;\n\
  color: ' + $._navbarColor + ';\n\
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
  bottom: 45px !important;\n\
}\n\
div.toolbar.current {\n\
  -webkit-transform: translate3d(0, 0, 0) !important;\n\
  transform: translate3d(0, 0, 0) !important;\n\
}\n\
div.toolbar.next {\n\
  -webkit-transform: translate3d(101%, 0, 0) !important;\n\
  transform: translate3d(101%, 0, 0) !important;\n\
}\n\
div.toolbar.previous {\n\
  -webkit-transform: translate3d(-101%, 0, 0) !important;\n\
  transform: translate3d(-101%, 0, 0) !important;\n\
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
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: stretch;\n\
  -webkit-align-items: stretch;\n\
  align-items: stretch;\n\
}\n\
body.splitlayout > nav {\n\
  background-color: #f7f7f7;\n\
  border-bottom: solid 1px #a7a7aa;\n\
}\n\
body.splitlayout > nav:first-of-type {\n\
  width: 320px;\n\
  right: auto;\n\
  border-right: solid 1px #c8c8c7 !important;\n\
}\n\
body.splitlayout > nav:last-of-type {\n\
  left: 320px;\n\
}\n\
body.splitlayout > nav h1 {\n\
  z-index: auto;\n\
  text-align: center;\n\
}\n\
body.splitlayout > .master + nav:not(:last-of-type) {\n\
  right: auto;\n\
  width: 320px;\n\
  left: 0 !important;\n\
  border-right: solid 1px #c8c8c7 !important;\n\
}\n\
body.splitlayout > article.master {\n\
  top: 45px;\n\
  left: 0;\n\
  bottom: 0;\n\
  right: 320px;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  width: 320px;\n\
  border-right: solid 1px #c8c8c7 !important;\n\
}\n\
body.splitlayout > article.master + nav:not(:last-of-type) {\n\
  right: 0;\n\
  border-right: none;\n\
  border-left: solid 1px #c8c8c7 !important;\n\
}\n\
body.splitlayout > article.detail {\n\
  top: 45px;\n\
  left: 320px !important;\n\
  bottom: 0;\n\
  left: 0;\n\
  -webkit-box-flex: 1;\n\
  -webkit-flex: 1;\n\
  flex: 1;\n\
  z-index: 1000000;\n\
  background-color: #efeff4;\n\
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
    width: 260px;\n\
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
  width: 100%;\n\
  height: 100%;\n\
  z-index: 9999;\n\
  cursor: pointer;\n\
}\n\
@-webkit-keyframes busyAnim {\n\
  0% {\n\
    -webkit-transform: rotate(0deg);\n\
  }\n\
  100% {\n\
    -webkit-transform: rotate(360deg);\n\
  }\n\
}\n\
@keyframes busyAnim {\n\
  0% {\n\
    transform: rotate(0deg);\n\
  }\n\
  100% {\n\
    transform: rotate(360deg);\n\
  }\n\
}\n\
.busy {\n\
  display: block;\n\
  position: relative;\n\
  width: 20px;\n\
  height: 20px;\n\
  -webkit-animation: busyAnim 100s linear infinite;\n\
  animation: busyAnim 2s linear infinite;\n\
  margin-left: auto;\n\
  margin-right: auto;\n\
  background-color: #000000;\n\
  -webkit-mask-position: 50% 50%;\n\
  -webkit-mask-size: 90% 90%;\n\
  -webkit-mask-repeat: no-repeat;\n\
  -webkit-mask-image: url(\'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20viewBox%3D"0%200%2042%2042"%3E%3Cg%20transform%3D"translate%2821,21%29"%3E%3Cg%20stroke-width%3D"4"%20stroke-linecap%3D"round"%20stroke%3D"rgb%280,%200,%200%29"%3E%3Cline%20id%3D"tine1"%20x1%3D"0"%20y1%3D"11"%20x2%3D"0"%20y2%3D"18"%20transform%3D"rotate%280,%200,%200%29"%20opacity%3D"1"%3E%3C/line%3E%3Cline%20id%3D"tine2"%20x1%3D"0"%20y1%3D"11"%20x2%3D"0"%20y2%3D"18"%20transform%3D"rotate%28-36,%200,%200%29"%20opacity%3D".9"%3E%3C/line%3E%3Cline%20id%3D"tine3"%20x1%3D"0"%20y1%3D"11"%20x2%3D"0"%20y2%3D"18"%20transform%3D"rotate%28-72,%200,%200%29"%20opacity%3D".8"%3E%3C/line%3E%3Cline%20id%3D"tine4"%20x1%3D"0"%20y1%3D"11"%20x2%3D"0"%20y2%3D"18"%20transform%3D"rotate%28-108,%200,%200%29"%20opacity%3D".7"%3E%3C/line%3E%3Cline%20id%3D"tine5"%20x1%3D"0"%20y1%3D"11"%20x2%3D"0"%20y2%3D"18"%20transform%3D"rotate%28-144,%200,%200%29"%20opacity%3D".6"%3E%3C/line%3E%3Cline%20id%3D"tine6"%20x1%3D"0"%20y1%3D"11"%20x2%3D"0"%20y2%3D"18"%20transform%3D"rotate%28-180,%200,%200%29"%20opacity%3D".5"%3E%3C/line%3E%3Cline%20id%3D"tine7"%20x1%3D"0"%20y1%3D"11"%20x2%3D"0"%20y2%3D"18"%20transform%3D"rotate%28-216,%200,%200%29"%20opacity%3D".4"%3E%3C/line%3E%3Cline%20id%3D"tine8"%20x1%3D"0"%20y1%3D"11"%20x2%3D"0"%20y2%3D"18"%20transform%3D"rotate%28-252,%200,%200%29"%20opacity%3D"1"%3E%3C/line%3E%3Cline%20id%3D"tine9"%20x1%3D"0"%20y1%3D"11"%20x2%3D"0"%20y2%3D"18"%20transform%3D"rotate%28-288,%200,%200%29"%20opacity%3D"1"%3E%3C/line%3E%3Cline%20id%3D"tine10"%20x1%3D"0"%20y1%3D"11"%20x2%3D"0"%20y2%3D"18"%20transform%3D"rotate%28-324,%200,%200%29"%20opacity%3D"1"%3E%3C/line%3E%3C/g%3E%3C/g%3E%3C/svg%3E\');\n\
}\n\
.busy.align-flush {\n\
  position: absolute;\n\
  right: 15px;\n\
}\n\
.popover {\n\
  width: 280px;\n\
  background-color: #e7e9ee;\n\
  border-radius: 10px;\n\
  height: 250px;\n\
  max-height: 300px;\n\
  position: absolute;\n\
  padding-bottom: 10px;\n\
  z-index: 111111;\n\
}\n\
.popover::before {\n\
  display: block;\n\
  content: "";\n\
  width: 15px;\n\
  height: 15px;\n\
  background-color: #f5f5f6;\n\
  -webkit-transform: rotate(45deg);\n\
  margin: 0 auto;\n\
  position: absolute;\n\
  top: -7px;\n\
  left: 49%;\n\
  z-index: -1;\n\
}\n\
.popover header {\n\
  background-color: #f5f5f6;\n\
  border-top-left-radius: 10px;\n\
  border-top-right-radius: 10px;\n\
  padding: 1px 10px;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  width: 100%;\n\
}\n\
.popover header h1 {\n\
  font-size: 12pt;\n\
  text-align: center;\n\
}\n\
.popover > section {\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -webkit-overflow-scrolling: touch;\n\
  padding-bottom: 0;\n\
  position: absolute;\n\
  top: 40px;\n\
  bottom: 10px;\n\
  left: 0;\n\
  right: 0;\n\
}\n\
.popup {\n\
  display: block;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  width: 300px;\n\
  border-radius: 10px;\n\
  padding: 0px;\n\
  background-color: #e3e3e3;\n\
  position: absolute;\n\
  z-index: 10000;\n\
  margin-left: auto;\n\
  margin-right: auto;\n\
  -webkit-transition: all 0.25s ease-out;\n\
  transition: all 0.25s ease-out;\n\
  -webkit-trasform-origin: center center;\n\
  trasform-origin: center center;\n\
  min-height: 100px;\n\
}\n\
.popup.closed {\n\
  -webkit-transform: scale(0);\n\
  transform: scale(0);\n\
}\n\
.popup.opened {\n\
  display: block;\n\
  opacity: 1;\n\
  -webkit-transform: scale(1);\n\
  transform: scale(1);\n\
}\n\
.popup.noTitle {\n\
  padding-top: 20px;\n\
}\n\
.popup > .panel {\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
}\n\
.popup > .panel > p {\n\
  padding: 0 15px;\n\
  margin-top: 0;\n\
  text-align: center;\n\
}\n\
.popup header,\n\
.popup footer {\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -webkit-justify-content: distribute;\n\
  justify-content: space-around;\n\
  -webkit-box-align: stretch;\n\
  -webkit-align-items: stretch;\n\
  align-items: stretch;\n\
  width: 100% !important;\n\
  box-sizing: border-box;\n\
}\n\
.popup .panel > header {\n\
  padding: 8px 16px;\n\
}\n\
.popup .panel > header > h1 {\n\
  position: static;\n\
  text-align: center;\n\
  margin: 0;\n\
  width: 100% !important;\n\
  line-height: 32pt;\n\
  font-size: 16pt;\n\
  font-weight: bold;\n\
}\n\
.popup footer {\n\
  width: 100%;\n\
  padding: 0;\n\
}\n\
.popup footer > button {\n\
  display: block !important;\n\
  -webkit-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  margin: 0;\n\
  height: 100%;\n\
  line-height: 30pt;\n\
  max-width: 320px !important;\n\
  font-weight: bold;\n\
  border-top: solid 1px #b5b5b5;\n\
  color: #2d2d2d;\n\
}\n\
.popup footer > button + button {\n\
  border-left: solid 1px #b5b5b5;\n\
}\n\
html[dir=rtl] .popup > .panel > p {\n\
  box-sizing: border-box;\n\
  text-align: center;\n\
  width: 100%;\n\
}\n\
html[dir=rtl] .popup > footer > button + button {\n\
  border-right: solid 1px #b5b5b5;\n\
  border-left: none;\n\
}\n\
.list li > .deletion-indicator {\n\
  display: inline-flex;\n\
  display: -webkit-inline-flex;\n\
  display: -webkit-box;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  color: #ffffff;\n\
  border: solid 1px #ff3b30;\n\
  background-color: #ff3b30;\n\
  border-radius: 50%;\n\
  width: 20px;\n\
  height: 20px;\n\
  float: left;\n\
  margin-right: 6px;\n\
  -webkit-transition: all 0.25s ease-out;\n\
  transition: all 0.25s ease-out;\n\
  margin-left: -40px;\n\
  cursor: pointer;\n\
  position: relative;\n\
  z-index: 100;\n\
}\n\
.list li > .deletion-indicator::before {\n\
  display: block;\n\
  content: "—";\n\
  -webkit-font-smoothing: none;\n\
  font-size: 12pt;\n\
  position: absolute;\n\
  min-width: 20px;\n\
  text-align: center;\n\
  width: 10px;\n\
  height: 10px;\n\
  margin-top: -3px;\n\
}\n\
.list li > .move-up,\n\
.list li > .move-down {\n\
  width: 21px;\n\
  height: 21px;\n\
  display: inline-block;\n\
  position: relative;\n\
  float: right;\n\
  margin-top: -20px;\n\
  -webkit-transition: all 0.25s ease-out;\n\
  transition: all 0.25s ease-out;\n\
  -webkit-transform: translate3d(100px, 0, 0);\n\
  transform: translate3d(100px, 0, 0);\n\
}\n\
.list li > .move-up::before,\n\
.list li > .move-down::before {\n\
  display: block;\n\
  content: "";\n\
  width: 21px;\n\
  height: 21px;\n\
  position: absolute;\n\
  background-image: url(\'data:image/svg+xml;utf8,%3Csvg%20width%3D%22367px%22%20height%3D%22367px%22%20viewBox%3D%220%200%20367%20367%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22Sortable%22%20transform%3D%22translate%2813.000000,%2013.000000%29%22%20stroke%3D%22%23' + $._secondaryColor.split('#')[1] + '%22%20stroke-width%3D%2225%22%3E%3Ccircle%20id%3D%22Oval-1%22%20cx%3D%22170.5%22%20cy%3D%22170.5%22%20r%3D%22170.5%22%3E%3C/circle%3E%3Cpath%20d%3D%22M55.3736267,209.778395%20L172.745285,100.706186%20L286.306656,209.611568%22%20id%3D%22Path-2%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E\');\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  background-size: 100% 100%;\n\
}\n\
.list li > .move-down {\n\
  margin-right: 10px;\n\
  -webkit-transform: translate3d(120px, 0, 0) rotate(180deg);\n\
  transform: translate3d(120px, 0, 0) rotate(180deg);\n\
}\n\
.list li > button.delete {\n\
  float: right;\n\
  background-color: #ff0000;\n\
  color: #ffffff;\n\
  text-align: center;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  width: 80px;\n\
  position: absolute;\n\
  right: 0;\n\
  top: 0;\n\
  bottom: 0;\n\
  margin-top: 0;\n\
  margin-bottom: 0;\n\
  display: flex;\n\
  display: -webkit-box;\n\
  display: -webkit-flex;\n\
  -webkit-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: stretch;\n\
  -webkit-align-items: stretch;\n\
  align-items: stretch;\n\
  -webkit-transition: all 0.25s ease-out;\n\
  transition: all 0.25s ease-out;\n\
  -webkit-transform: translate3d(80px, 0, 0);\n\
  transform: translate3d(80px, 0, 0);\n\
  cursor: pointer;\n\
  font-family: "HelveticaNeue-Light";\n\
  font-weight: 200;\n\
}\n\
.list li > button.delete > label {\n\
  display: block;\n\
  margin: auto;\n\
  font: -apple-system-short-headline;\n\
  font-weight: normal;\n\
}\n\
.list li:first-of-type > .move-up {\n\
  opacity: .35;\n\
}\n\
.list li:last-of-type > .move-down {\n\
  opacity: .35;\n\
}\n\
.list.editable > li,\n\
.list.deletable > li {\n\
  -webkit-transition: all 0.25s ease-out;\n\
  transition: all 0.25s ease-out;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.list.editable > li.selected,\n\
.list.deletable > li.selected {\n\
  margin-right: 80px;\n\
  background-color: #ffffff;\n\
}\n\
.list.editable > li.selected h3,\n\
.list.deletable > li.selected h3,\n\
.list.editable > li.selected h4,\n\
.list.deletable > li.selected h4,\n\
.list.editable > li.selected p,\n\
.list.deletable > li.selected p {\n\
  position: relative;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
  -webkit-transition: all 0.25s ease-out;\n\
  transition: all 0.25s ease-out;\n\
}\n\
.list.editable > li.selected > button.delete,\n\
.list.deletable > li.selected > button.delete {\n\
  -webkit-transform: translate3d(80px, 0, 0);\n\
  transform: translate3d(80px, 0, 0);\n\
}\n\
.list.editable > li.selected > .deletion-indicator,\n\
.list.deletable > li.selected > .deletion-indicator {\n\
  -webkit-transform: rotate(90deg);\n\
}\n\
.list.showIndicators .deletion-indicator {\n\
  margin-left: 0;\n\
}\n\
.list.showIndicators .move-up {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.list.showIndicators .move-down {\n\
  -webkit-transform: translate3d(0, 0, 0) rotate(180deg);\n\
  transform: translate3d(0, 0, 0) rotate(180deg);\n\
}\n\
.list.showIndicators > li[data-goto] {\n\
  padding-left: 40px;\n\
}\n\
.list.showIndicators > li[data-goto] .deletion-indicator {\n\
  left: 10px;\n\
}\n\
.list.showIndicators > li > h3 {\n\
  width: 55%;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
}\n\
.list > li[data-goto] > .deletion-indicator {\n\
  position: absolute;\n\
  left: -40px;\n\
  margin-left: 0px;\n\
}\n\
.list > li[data-goto] > .deletion-indicator + div + aside {\n\
  margin: -20px;\n\
  position: relative;\n\
  right: 15px;\n\
}\n\
html[dir=rtl] .list > li > .deletion-indicator {\n\
  float: right;\n\
  margin-right: auto;\n\
  margin-left: -20px;\n\
  right: -40px;\n\
}\n\
html[dir=rtl] .list > li > .move-up {\n\
  float: left !important;\n\
  -webkit-transform: translate3d(-100px, 0, 0);\n\
  transform: translate3d(-100px, 0, 0);\n\
}\n\
html[dir=rtl] .list > li > .move-down {\n\
  float: left !important;\n\
  -webkit-transform: translate3d(-140px, 0, 0) rotate(180deg);\n\
  transform: translate3d(-140px, 0, 0) rotate(180deg);\n\
}\n\
html[dir=rtl] .list > li > button.delete {\n\
  -webkit-transform: translate3d(-80px, 0, 0);\n\
  transform: translate3d(-80px, 0, 0);\n\
  left: 0;\n\
  right: auto;\n\
}\n\
html[dir=rtl].deletable.showIndicators > li,\n\
html[dir=rtl].editable.showIndicators > li {\n\
  margin-right: 0px;\n\
}\n\
html[dir=rtl] .list.deletable > li.selected,\n\
html[dir=rtl] .list.editable > li.selected {\n\
  margin-right: 0 !important;\n\
}\n\
html[dir=rtl] .list.deletable > li.selected > button.delete,\n\
html[dir=rtl] .list.editable > li.selected > button.delete {\n\
  -webkit-transform: translate3d(0, 0, 0) !important;\n\
  transform: translate3d(0, 0, 0) !important;\n\
}\n\
html[dir=rtl] .list.deletable > li > button.delete,\n\
html[dir=rtl] .list.editable > li > button.delete {\n\
  -webkit-transform: translate3d(-80px, 0, 0) !important;\n\
  transform: translate3d(-80px, 0, 0) !important;\n\
}\n\
html[dir=rtl] .list.showIndicators > li.selected,\n\
html[dir=rtl] .list.deletable.showIndicators > li.selected,\n\
html[dir=rtl] .list.editable.showIndicators > li.selected {\n\
  margin-right: 0;\n\
}\n\
html[dir=rtl] .list.showIndicators > li.selected > button.delete,\n\
html[dir=rtl] .list.deletable.showIndicators > li.selected > button.delete,\n\
html[dir=rtl] .list.editable.showIndicators > li.selected > button.delete {\n\
  -webkit-transform: translate3d(0, 0, 0) !important;\n\
  transform: translate3d(0, 0, 0) !important;\n\
}\n\
html[dir=rtl] .list.showIndicators > li.selected > .move-up,\n\
html[dir=rtl] .list.deletable.showIndicators > li.selected > .move-up,\n\
html[dir=rtl] .list.editable.showIndicators > li.selected > .move-up {\n\
  -webkit-transform: translate3d(90px, 0, 0);\n\
  transform: translate3d(90px, 0, 0);\n\
}\n\
html[dir=rtl] .list.showIndicators > li.selected > .move-down,\n\
html[dir=rtl] .list.deletable.showIndicators > li.selected > .move-down,\n\
html[dir=rtl] .list.editable.showIndicators > li.selected > .move-down {\n\
  -webkit-transform: translate3d(100px, 0, 0) rotate(180deg);\n\
  transform: translate3d(100px, 0, 0) rotate(180deg);\n\
}\n\
html[dir=rtl] .list.showIndicators > li > .deletion-indicator,\n\
html[dir=rtl] .list.deletable.showIndicators > li > .deletion-indicator,\n\
html[dir=rtl] .list.editable.showIndicators > li > .deletion-indicator {\n\
  right: 0px !important;\n\
  margin-left: 10px;\n\
}\n\
html[dir=rtl] .list.showIndicators > li > .move-up,\n\
html[dir=rtl] .list.deletable.showIndicators > li > .move-up,\n\
html[dir=rtl] .list.editable.showIndicators > li > .move-up {\n\
  -webkit-transform: translate3d(10px, 0, 0);\n\
  transform: translate3d(10px, 0, 0);\n\
}\n\
html[dir=rtl] .list.showIndicators > li > .move-down,\n\
html[dir=rtl] .list.deletable.showIndicators > li > .move-down,\n\
html[dir=rtl] .list.editable.showIndicators > li > .move-down {\n\
  -webkit-transform: translate3d(20px, 0, 0) rotate(180deg);\n\
  transform: translate3d(20px, 0, 0) rotate(180deg);\n\
}\n\
html[dir=rtl] .list.showIndicators > li > button.delete,\n\
html[dir=rtl] .list.deletable.showIndicators > li > button.delete,\n\
html[dir=rtl] .list.editable.showIndicators > li > button.delete {\n\
  right: auto;\n\
  left: 0 !important;\n\
}\n\
input[type=text],\n\
input[type=email],\n\
input[type=password],\n\
input[type=text],\n\
input[type=url],\n\
input[type=number],\n\
textarea {\n\
  -webkit-appearance: none;\n\
  box-shadow: none;\n\
  border: none;\n\
}\n\
.isiOS:not(.isDesktop) .select-box > select {\n\
  opacity: .01;\n\
  height: 1px;\n\
  width: 1px;\n\
  -wekbit-appearance: none;\n\
  position: absolute;\n\
}\n\
.isDesktop .select-box > select {\n\
  max-width: 120px;\n\
}\n\
.isDesktop .select-box-label {\n\
  display: none !important;\n\
}\n\
.select-box-label {\n\
  border: solid 1px ' + $._color + ';\n\
  border-radius: 3px;\n\
  padding: 2px 30px 2px 10px;\n\
  font-size: 11px;\n\
  background-image: -webkit-linear-gradient(top, ' + $._color + ', ' + $._color + ');\n\
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
  right: 4px;\n\
}\n\
.searchBar {\n\
  width: 100%;\n\
  -webkit-box-sizing: border-box;\n\
  height: 45px;\n\
  background-color: #c9c9ce;\n\
  padding: 5px 10px;\n\
}\n\
input[type="search"] {\n\
  display: block;\n\
  background-color: #fff;\n\
  padding: 7px 0 7px 10px;\n\
  border-radius: 5px;\n\
  border-color: transparent;\n\
  width: 100%;\n\
  -webkit-appearance: none;\n\
  padding-left: 20px;\n\
  -webkit-transtion: all 0.5s ease-out;\n\
  background-image: url(\'%3Csvg%20version=%221.1%22%20id=%22Layer_2%22%20xmlns=%22http://www.w3.org/2000/svg%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%20x=%220px%22%20y=%220px%22%20width=%2248px%22%20height=%2248px%22%20viewBox=%220%200%2048%2048%22%20enable-background=%22new%200%200%2048%2048%22%20xml:space=%22preserve%22%3E%3Cpath%20d=%22M42.71,38.482L32.478,28.208c1.598-2.385,2.532-5.249,2.532-8.329c0-8.273-6.73-15.004-15.004-15.004%20S5.001,11.606,5.001,19.879c0,8.274,6.731,15.004,15.004,15.004c3.055,0,5.896-0.923,8.27-2.497l10.236,10.279%20c0.858,0.861,2.19,0.927,2.977,0.143l1.354-1.349C43.629,40.678,43.569,39.345,42.71,38.482z%20M10.001,19.879%20%20%20%20c0-5.517,4.488-10.004,10.004-10.004S30.01,14.363,30.01,19.879c0,5.516-4.487,10.004-10.004,10.004S10.001,25.396,10.001,19.879z%22%20fill=%22#bbb%22%20/%3E%3C/svg%3E\');\n\
  background-position: 5px center;\n\
  text-align: left;\n\
  background-size: 14px 14px;\n\
  background-repeat: no-repeat;\n\
  -webkit-user-select: ignore;\n\
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\
}\n\
input[type="search"]:focus {\n\
  outline: none;\n\
}\n\
.icon {\n\
  width: 40px;\n\
  height: 40px;\n\
  background-repeat: no-repeat;\n\
  background-position: center center;\n\
  background-size: auto 70%;\n\
  border-radius: 10px;\n\
}\n\
input[type="range"] {\n\
  -webkit-appearance: none !important;\n\
  outline: none;\n\
  display: block;\n\
  width: auto;\n\
  height: 4px;\n\
  margin-top: 20px;\n\
  margin-bottom: 20px;\n\
  border-radius: 4px;\n\
  background-color: #b3b3b4;\n\
  background-image: -webkit-linear-gradient(top, ' + $._color + ', ' + $._color + ');\n\
  background-size: 0px 4px;\n\
  background-position: left center;\n\
  background-repeat: no-repeat;\n\
}\n\
input[type="range"]::-webkit-slider-thumb {\n\
  -webkit-appearance: none;\n\
  display: block;\n\
  width: 27px;\n\
  height: 27px;\n\
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 5px 6px rgba(0, 0, 0, 0.25);\n\
  background-color: #ffffff;\n\
  border-radius: 50%;\n\
  -webkit-transition: -webkit-transform 0.1s ease-in-out;\n\
  transition: -webkit-transform 0.1s ease-in-out;\n\
}\n\
.isDesktop input[type="range"]::-webkit-slider-thumb:hover {\n\
  background-color: #f9f9f9;\n\
}\n\
html[dir=rtl] input[type="range"] {\n\
  background-position: right center;\n\
}\n\
.list.select li > input {\n\
  display: none;\n\
}\n\
.list.select li.selected::after {\n\
  display: block;\n\
  content: "";\n\
  width: 20px;\n\
  height: 20px;\n\
  -webkit-mask-position: 50% 50%;\n\
  -webkit-mask-size: 90% 90%;\n\
  -webkit-mask-repeat: no-repeat;\n\
  -webkit-mask-image: url(\'data:image/svg+xml;utf8,%3Csvg%20xmlns%3Asvg%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20version%3D"1.1"%20width%3D"32"%20height%3D"26"%20viewBox%3D"0%200%2032%2026"%20id%3D"svg2"%3E%3Cdefs%20id%3D"defs8"%20/%3E%3Cg%20transform%3D"translate%280.13135593,-0.34322034%29"%20id%3D"Page-1"%20style%3D"fill%3Anone%3Bstroke%3Anone"%3E%3Cg%20id%3D"Artboard-1"%20style%3D"stroke%3A%23000000%3Bstroke-width%3A5"%3E%3Cpath%20d%3D"m%2010.500868,22.761362%2011.023688,0%200,-27.9582975"%20transform%3D"matrix%280.70710678,0.70710678,-0.70710678,0.70710678,10.899977,-8.7504466%29"%20id%3D"Rectangle-1"%20/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\');\n\
  float: right;\n\
  margin-top: -20px;\n\
  background-color: ' + $._secondaryColor +';\n\
}\n\
.isDesktop .list.select li.selected:hover {\n\
  background-color: #d9d9d9;\n\
}\n\
html[dir=rtl] .list.select li.selected::after {\n\
  float: left;\n\
}\n\
.sheet {\n\
  position: absolute;\n\
  top: 45px;\n\
  left: 0;\n\
  bottom: 0;\n\
  right: 0;\n\
  background-color: rgba(156, 159, 164, 0.5);\n\
  -webkit-transition: all 0.25s ease-in;\n\
  transition: all 0.25s ease-in;\n\
  -webkit-transform: translate3d(0, 100%, 0);\n\
  transform: translate3d(0, 100%, 0);\n\
  visibility: hidden;\n\
}\n\
.sheet div.handle {\n\
  display: block;\n\
  text-align: center;\n\
  margin: 0 auto;\n\
  color: #ffffff;\n\
  cursor: pointer;\n\
  height: 20pt;\n\
  background-color: #ffffff;\n\
  -webkit-mask-position: 50% 50%;\n\
  -webkit-mask-size: 90% 90%;\n\
  -webkit-mask-repeat: no-repeat;\n\
  -webkit-mask-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3Asvg%3D\'http%3A//www.w3.org/2000/svg\'%20xmlns%3D\'http%3A//www.w3.org/2000/svg\'%20version%3D\'1.1\'%20width%3D\'76\'%20height%3D\'27\'%20viewBox%3D\'0%200%2076%2027\'%20id%3D\'svg2\'%3E%3Cdefs%20id%3D\'defs8\'%20/%3E%3Cg%20transform%3D\'translate%28-283.79661,-123.77966%29\'%20id%3D\'Page-1\'%20style%3D\'fill%3Anone%3Bstroke%3Anone\'%3E%3Cg%20transform%3D\'translate%28254,108%29\'%20id%3D\'Artboard-1\'%20style%3D\'stroke%3A%23000%3Bstroke-width%3A12%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around\'%3E%3Cpath%20d%3D\'m%2036.25,26.242187%2031.394531,0%2030.53125,0\'%20id%3D\'Path-1\'%20/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");\n\
  margin: 10px auto 0;\n\
}\n\
.sheet.opened {\n\
  visibility: visible;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.sheet.opened div.handle {\n\
  background-color: #ffffff;\n\
  -webkit-mask-position: 50% 50%;\n\
  -webkit-mask-size: 90% 90%;\n\
  -webkit-mask-repeat: no-repeat;\n\
  -webkit-mask-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3Asvg%3D\'http%3A//www.w3.org/2000/svg\'%20xmlns%3D\'http%3A//www.w3.org/2000/svg\'%20version%3D\'1.1\'%20width%3D\'76\'%20height%3D\'27\'%20viewBox%3D\'0%200%2076%2027\'%20id%3D\'svg2\'%3E%3Cdefs%20id%3D\'defs8\'%20/%3E%3Cg%20transform%3D\'translate%28-283.79661,-123.77966%29\'%20id%3D\'Page-1\'%20style%3D\'fill%3Anone%3Bstroke%3Anone\'%3E%3Cg%20transform%3D\'translate%28254,108%29\'%20id%3D\'Artboard-1\'%20style%3D\'stroke%3A%23000%3Bstroke-width%3A12%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around\'%3E%3Cpath%20d%3D\'m%2036.25,26.242187%2031.394531,7.972657%2030.53125,-8.425782\'%20id%3D\'Path-1\'%20/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");\n\
}\n\
.sheet .button {\n\
  color: #585d63;\n\
  border: solid 1px #585d63;\n\
  border-radius: 20px;\n\
  width: auto;\n\
  height: auto;\n\
  margin: 0 auto;\n\
  padding: 10px 20px;\n\
}\n\
.isDesktop .sheet .button:hover,\n\
.sheet .button.selected {\n\
  color: #ffffff;\n\
  border-color: #ffffff;\n\
  opacity: 1 !important;\n\
  -webkit-transition: none;\n\
  transition: none;\n\
}\n\
.sheet > section {\n\
  position: absolute;\n\
  top: 36px;\n\
  left: 0;\n\
  bottom: 0;\n\
  height: auto;\n\
  right: 0;\n\
}\n\
.sheet > section > h2 {\n\
  text-align: center;\n\
}\n\
.sheet > section > .list {\n\
  border: none;\n\
  background-color: transparent !important;\n\
}\n\
.sheet > section > .list > li {\n\
  border-bottom: solid 1px #585d63;\n\
  background-color: transparent !important;\n\
}\n\
.sheet > section > .list > li::before {\n\
  content: none;\n\
}\n\
article.current.blurred {\n\
  -webkit-filter: blur(20px);\n\
  -webkit-transition-duration: .15s;\n\
  filter: blur(20px);\n\
  transition-duration: .15s;\n\
}\n\
article.current.blurred.removeBlurSlow {\n\
  -webkit-filter: blur(0px);\n\
  -webkit-transition-duration: .35s;\n\
  filter: blur(0px);\n\
  transition-duration: .35s;\n\
}\n\
.slide-out {\n\
  position: absolute;\n\
  top: 45px;\n\
  left: 0;\n\
  bottom: 0;\n\
  background-color: #ffffff;\n\
  z-index: 111111111;\n\
  width: 100%;\n\
  visibility: hidden;\n\
  -webkit-transform: translate3d(-100%, 0, 0);\n\
  transform: translate3d(-100%, 0, 0);\n\
  -webkit-transition: all 0.25s ease-out;\n\
  transition: all 0.25s ease-out;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
  -webkit-overflow-scrolling: touch;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: start;\n\
  -webkit-align-items: flex-start;\n\
  align-items: flex-start;\n\
}\n\
.slide-out.open {\n\
  visibility: visible;\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
.slide-out > section {\n\
  -webkit-box-flex: 1;\n\
  -webkit-flex: 1;\n\
  flex: 1;\n\
  padding-bottom: 100px;\n\
  overflow-x: hidden;\n\
  overflow-y: auto;\n\
}\n\
button.slide-out-button {\n\
  position: absolute;\n\
  z-index: 1111111;\n\
  top: 5px;\n\
  left: 15px;\n\
  width: 35px;\n\
  height: 35px;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  padding: 0;\n\
}\n\
button.slide-out-button::before {\n\
  display: block;\n\
  content: "";\n\
  width: 35px;\n\
  height: 35px;\n\
  background-color: ' + $._navbarColor + ';\n\
  -webkit-mask-position: 50% 50%;\n\
  -webkit-mask-size: 90% 90%;\n\
  -webkit-mask-repeat: no-repeat;\n\
  -webkit-mask-image: url("data:image/svg+xml;utf8,%3Csvg%20width%3D%2281px%22%20height%3D%2260px%22%20viewBox%3D%220%200%2081%2060%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22slideout%22%20fill%3D%22%23000000%22%3E%3Crect%20id%3D%22Rectangle%22%20x%3D%228%22%20y%3D%220%22%20width%3D%2264.167%22%20height%3D%227.666%22%3E%3C/rect%3E%3Crect%20id%3D%22Rectangle%22%20x%3D%228%22%20y%3D%2226%22%20width%3D%2264.167%22%20height%3D%227.667%22%3E%3C/rect%3E%3Crect%20id%3D%22Rectangle%22%20x%3D%228%22%20y%3D%2252%22%20width%3D%2264.167%22%20height%3D%227.666%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E");\n\
}\n\
body.slide-out-app > article {\n\
  display: none !important;\n\
}\n\
body.slide-out-app > article.show {\n\
  display: block !important;\n\
  /*margin-top: 20px !important;*/\n\
}\n\
body.slide-out-app > nav:not(:first-of-type) {\n\
  display: none !important;\n\
}\n\
body.slide-out-app > nav:not(:first-of-type).show {\n\
  display: block !important;\n\
  z-index: 10000;\n\
}\n\
html[dir=rtl] button.slide-out-button {\n\
  right: 15px;\n\
  left: auto;\n\
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
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: start;\n\
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
  box-sizing: border-box;\n\
  border: solid 1px ' + $._color + ';\n\
  width: 40px;\n\
  height: 30px;\n\
  font: bold 16px/30px Helvetica;\n\
  text-align: center;\n\
  background-color: #ffffff;\n\
}\n\
.stepper > button {\n\
  display: inline-block;\n\
  background-color: rgba(255, 255, 255, 0.35);\n\
  width: 33px;\n\
  height: 30px;\n\
  border: solid 1px ' + $._color + ';\n\
  border-radius: 4px;\n\
  text-align: center;\n\
  font-weight: bold;\n\
  font-size: 20pt;\n\
  line-height: 16pt;\n\
  cursor: pointer !important;\n\
  overflow: hidden;\n\
  padding: 0;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  color: #2d2d2d;\n\
}\n\
.stepper > button > span {\n\
  display: block;\n\
  margin: -4px auto auto auto;\n\
}\n\
.stepper > button:first-of-type {\n\
  border-top-right-radius: 0;\n\
  border-bottom-right-radius: 0;\n\
  border-right: none;\n\
}\n\
.stepper > button:last-of-type {\n\
  border-top-left-radius: 0;\n\
  border-bottom-left-radius: 0;\n\
  border-left: none;\n\
}\n\
html[dir=rtl] .stepper > button:first-of-type {\n\
  border-radius: 4px;\n\
  border-top-left-radius: 0;\n\
  border-bottom-left-radius: 0;\n\
  border-right: solid 1px ' + $._color + ';\n\
  border-left: none;\n\
}\n\
html[dir=rtl] .stepper > button:last-of-type {\n\
  border-radius: 4px;\n\
  border-top-right-radius: 0;\n\
  border-bottom-right-radius: 0;\n\
  border-left: solid 1px ' + $._color + ';\n\
  border-right: none;\n\
}\n\
.list > li.switched {\n\
  -webkit-box-direction: reverse;\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-flex-direction: row-reverse;\n\
  flex-direction: row-reverse;\n\
}\n\
.list > li.switched h3 {\n\
  width: auto;\n\
  font-size: 1em;\n\
  line-height: 1.2;\n\
  color: ' + $._secondaryColor +';\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
}\n\
.list > li.switched > h4 {\n\
  width: 48%;\n\
  text-align: right;\n\
  margin-right: 10px;\n\
  font-size: 1.13em;\n\
  white-space: nowrap;\n\
  overflow: hidden;\n\
  text-overflow: ellipsis;\n\
  max-width: 50%;\n\
  color: #000000 !important;\n\
}\n\
.switch {\n\
  display: inline-block;\n\
  width: 54px;\n\
  height: 32px;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  border: solid 2px #e6e6e6;\n\
  border-radius: 20px;\n\
  position: relative;\n\
  box-shadow: inset 0 0 0 15px #ffffff;\n\
  cursor: pointer;\n\
  -webkit-animation-duration: .65s;\n\
  -webkit-animation-timing-function: ease-in-out;\n\
  -webkit-animation-fill-mode: forwards;\n\
  -webkit-animation-name: switchAnimationOff;\n\
  animation-duration: .65s;\n\
  animation-timing-function: ease-in-out;\n\
  animation-fill-mode: forwards;\n\
  animation-name: switchAnimationOff;\n\
}\n\
.switch > em {\n\
  display: block;\n\
  width: 27px;\n\
  height: 27px;\n\
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 5px 6px rgba(0, 0, 0, 0.25);\n\
  background-color: #ffffff;\n\
  border-radius: 50%;\n\
  -webkit-transition: -webkit-transform 0.1s ease-in-out;\n\
  -webkit-animation-duration: .45s;\n\
  -webkit-animation-timing-function: ease-in-out;\n\
  -webkit-animation-fill-mode: forwards;\n\
  -webkit-animation-name: switchThumbAnimationOff;\n\
  transition: -webkit-transform 0.1s ease-in-out;\n\
  animation-duration: .45s;\n\
  animation-timing-function: ease-in-out;\n\
  animation-fill-mode: forwards;\n\
  animation-name: switchThumbAnimationOff;\n\
  pointer-events: none;\n\
}\n\
.switch > input {\n\
  display: none;\n\
}\n\
.switch.on {\n\
  border-color: ' + $._secondaryColor + ';\n\
  box-shadow: inset 0 0 0 15px ' + $._secondaryColor + ';\n\
  -webkit-animation-name: none;\n\
  animation-name: none;\n\
}\n\
.switch.on > em {\n\
  -webkit-transform: translate3d(23px, 0, 0);\n\
  -webkit-transition-duration: .2s;\n\
  -webkit-animation-duration: .45s;\n\
  -webkit-animation-timing-function: ease-in-out;\n\
  -webkit-animation-fill-mode: forwards;\n\
  -webkit-animation-name: switchThumbAnimation;\n\
  transform: translate3d(23px, 0, 0);\n\
  transition-duration: .2s;\n\
  animation-duration: .45s;\n\
  animation-timing-function: ease-in-out;\n\
  animation-fill-mode: forwards;\n\
  animation-name: switchThumbAnimation;\n\
}\n\
@-webkit-keyframes switchAnimationOff {\n\
  0% {\n\
    box-shadow: inset 0 0 0 15px #e6e6e6;\n\
  }\n\
  49.999% {\n\
    box-shadow: inset 0 0 0 0 #e6e6e6;\n\
  }\n\
  50% {\n\
    box-shadow: inset 0 0 0 0 #fff;\n\
  }\n\
  100% {\n\
    box-shadow: inset 0 0 0 15px #fff;\n\
  }\n\
}\n\
@-webkit-keyframes switchThumbAnimation {\n\
  0% {\n\
    width: 27px;\n\
  }\n\
  1% {\n\
    width: 40px;\n\
  }\n\
  50% {\n\
    width: 27px;\n\
  }\n\
  100% {\n\
    width: 27px;\n\
  }\n\
}\n\
@-webkit-keyframes switchThumbAnimationOff {\n\
  0% {\n\
    width: 27px;\n\
  }\n\
  5% {\n\
    width: 45px;\n\
  }\n\
  50% {\n\
    width: 27px;\n\
  }\n\
  100% {\n\
    width: 27px;\n\
  }\n\
}\n\
@keyframes switchAnimationOff {\n\
  0% {\n\
    box-shadow: inset 0 0 0 15px #e6e6e6;\n\
  }\n\
  49.999% {\n\
    box-shadow: inset 0 0 0 0 #e6e6e6;\n\
  }\n\
  50% {\n\
    box-shadow: inset 0 0 0 0 #fff;\n\
  }\n\
  100% {\n\
    box-shadow: inset 0 0 0 15px #fff;\n\
  }\n\
}\n\
@keyframes switchThumbAnimation {\n\
  0% {\n\
    width: 27px;\n\
  }\n\
  1% {\n\
    width: 40px;\n\
  }\n\
  50% {\n\
    width: 27px;\n\
  }\n\
  100% {\n\
    width: 27px;\n\
  }\n\
}\n\
@keyframes switchThumbAnimationOff {\n\
  0% {\n\
    width: 27px;\n\
  }\n\
  5% {\n\
    width: 45px;\n\
  }\n\
  50% {\n\
    width: 27px;\n\
  }\n\
  100% {\n\
    width: 27px;\n\
  }\n\
}\n\
html[dir=rtl] .switch > em {\n\
  -webkit-transform: translate3d(-23px, 0, 0);\n\
  transform: translate3d(-23px, 0, 0);\n\
}\n\
html[dir=rtl] .switch.on > em {\n\
  -webkit-transform: translate3d(0, 0, 0);\n\
  transform: translate3d(0, 0, 0);\n\
}\n\
body.hasTabBar article {\n\
  bottom: 50px;\n\
}\n\
body.hasTabBar .previous:not(.navigable),\n\
body.hasTabBar .next:not(.navigable) {\n\
  display: none;\n\
  -webkiit-transform: none;\n\
}\n\
.tabbar {\n\
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-flex-direction: row;\n\
  flex-direction: row;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  height: 50px;\n\
  position: absolute;\n\
  left: 0;\n\
  bottom: 0;\n\
  right: 0;\n\
  -webkit-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  border-top: solid 1px #929292;\n\
  background-color: #f7f7f7;\n\
}\n\
.tabbar > button {\n\
  height: 100%;\n\
  position: relative;\n\
  padding: 0;\n\
  display: flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -webkit-justify-content: center;\n\
  justify-content: center;\n\
  -webkit-box-align: center;\n\
  -webkit-align-items: center;\n\
  align-items: center;\n\
  -webkit-box-flex: 1 !important;\n\
  -webkit-flex: 1 !important;\n\
  flex: 1 !important;\n\
  display: -webkit-flex;\n\
  color: #929292;\n\
  font-size: 9pt;\n\
  padding: 1px;\n\
}\n\
.isDesktop .tabbar > button:hover,\n\
.tabbar > button.selected {\n\
  color: ' + $._color + ' !important;\n\
  opacity: 1 !important;\n\
}\n\
.isDesktop .tabbar > button:hover > .icon,\n\
.tabbar > button.selected > .icon {\n\
  background-color: ' + $._color + ' !important;\n\
}\n\
.tabbar > button > .icon {\n\
  margin: 0 auto;\n\
  background-color: #929292;\n\
  content: "";\n\
  display: block;\n\
  height: 30px;\n\
  width: 30px;\n\
}\n\
.tabbar > button.more > .icon {\n\
  background-color: #929292;\n\
  -webkit-mask-position: 50% 50%;\n\
  -webkit-mask-size: 90% 90%;\n\
  -webkit-mask-repeat: no-repeat;\n\
  -webkit-mask-image: url(\'data:image/svg+xml;utf8,%3Csvg%20version%3D"1.1"%20id%3D"Layer_2"%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3Axlink%3D"http%3A//www.w3.org/1999/xlink"%20x%3D"0px"%20y%3D"0px"%20width%3D"48px"%20height%3D"48px"%20viewBox%3D"0%200%2048%2048"%20enable-background%3D"new%200%200%2048%2048"%20xml%3Aspace%3D"preserve"%3E%3Ccircle%20cx%3D"10"%20cy%3D"23"%20r%3D"5.172"/%3E%3Ccircle%20cx%3D"24"%20cy%3D"23"%20r%3D"5.172"/%3E%3Ccircle%20cx%3D"38"%20cy%3D"23"%20r%3D"5.172"/%3E%3C/svg%3E\');\n\
}\n\
#carousel {\n\
  width: 100%;\n\
  height: 100%;\n\
  margin: 10px auto;\n\
  box-sizing: border-box;\n\
  background-color: #ccc;\n\
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
  display: flex;\n\
  display: -webkit-flex;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: vertical;\n\
  -webkit-flex-direction: column;\n\
  flex-direction: column;\n\
  -webkit-justify-content: start;\n\
  justify-content: flex-start;\n\
  -webkit-box-align: center;\n\
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
.pagination {\n\
  list-style: none;\n\
  padding: 0;\n\
  margin: 0 auto;\n\
  display: -webkit-box;\n\
  -webkit-box-orient: horizontal;\n\
  -webkit-box-pack: justify;\n\
  display: -webkit-flex;\n\
  -webkit-flex-direction: row;\n\
  -webkit-justify-content: space-around;\n\
  display: flex;\n\
  flex-direction: row;\n\
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
  border-radius: 5px;\n\
  margin-right: 5px;\n\
}\n\
.pagination > li.selected {\n\
  background-color: ' + $._color + ';\n\
  cursor: pointer;\n\
}\n\
.isDesktop .pagination > li:hover {\n\
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