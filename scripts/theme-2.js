$(function() {
  $._navbarBkgdColor = false;
  $._contrast = '#333';
  $._bkgdContrastColor = '#fff';
  $._newStyle = '';
  $._currentOS = 'ios';
  $._color = '';
  $._secondaryColor = '';
  $._bkgdColor = '#f7f7f7';
  $._navbarColor = $._color;
  // Windows colors:
  $._windowsBorderColor = '#fff';
  $._windowsButtonContrast = '#fff';
  $._windowsNavBtnBkgd = 'transparent';
  $._windowsButtonColor = '#fff'
  $._windowsListColor = '#fff';
  var stylesheet;

  //===========================
  // Toggle the UI based on OS:
  //===========================
  $('.menu').on('click', 'button', function() {
    resetUI();
    switch (this.id) {
      case 'iosTheme':
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#os-theme').attr('href', './css/theme-ios.css');
        $._currentOS = 'ios';
        $('textarea').val('');
      break;
      case 'androidTheme':
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#os-theme').attr('href', './css/theme-android.css');
        $._currentOS = 'android';
        $('textarea').val('');
      break;
      case 'windowsTheme':
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#os-theme').attr('href', './css/theme-win.css');
        $._currentOS = 'windows'
        $('textarea').val('');
      break;
    }
  });

  //============================================
  // Choose text only color or background color:
  //============================================
  $('#chooseMode').on('click', 'input', function() {
    if ($(this).val() === 'text_only') {
      $._navbarBkgdColor = false;
      $._bkgdColor = '#f7f7f7'
      $._navbarColor = $._color;
      if ($._color) $.publish('chosen-color', {color: $._color, secondaryColor: $._color});
    } else if ($(this).val() === 'navbar_toolbar') {
      $._navbarBkgdColor = true;
      if ($._color) {
        $._bkgdColor = $._color;
        $._navbarColor = $._contrast;
        $.publish('chosen-color', {color: $._color});
        calculateSegmentedColor($._color);
      }
    }
    $('#colors-secondary li').removeClass('selected');
  });

  //======================
  // Choose primary color:
  //======================
  $('#colors').on('click', 'li', function() {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $._color = $(this).attr('data-color');
    $._secondaryColor = $._color;
    if ($._navbarBkgdColor) $._navbarColor = $._contrast;
    else $._navbarColor = $._color;
    $.publish('chosen-color', {color: $._color, secondaryColor: $._secondaryColor});
    calculateSegmentedColor($._color);
    $('#colors-secondary li').removeClass('selected');
  });

  //========================
  // Choose secondary color:
  //========================
  $('#colors-secondary').on('click', 'li', function() {
    if (!$._color) return;
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $._secondaryColor = $(this).attr('data-color');
    $.publish('chosen-color', {color: $._color, secondaryColor: $._secondaryColor});
  });

  //============================================
  // Calculate text color for segmented control:
  //============================================
  var calculateSegmentedColor = function(color) {
    if ($._navbarBkgdColor === false) {
      var brightness = calculateContrast(color);
      $._bkgdContrastColor = (brightness < 150) ? "#fff" : "#333";
    }
  }

  //===========================================
  // Define method to calculate color contrast:
  //===========================================
  var calculateContrast = function(color) {
    var colour = new $.RGBColor(color);
    return $.calcBrightness(colour);
  };

  //======================================================
  // Define a mediator to handle publishing color choices,
  // and updating the stylessheets and UI:
  //======================================================
  var colorMediator = $.subscribe('chosen-color', function(event, obj) {
    var brightness = calculateContrast(obj.color);
    color = obj.color;
    if (obj.secondaryColor && obj.color !== obj.secondaryColor) $._secondaryColor = obj.secondaryColor;
    else $._secondaryColor = obj.color;
    if ($._navbarBkgdColor) {
      $._bkgdColor = $._color;
      $._bkgdContrastColor = $._contrast = (brightness < 150) ? "#fff" : "#333";
      $._navbarColor = $._bkgdContrastColor;
      $._windowsButtonContrast = '#000';
      $._windowsBorderColor = (brightness < 150) ? '#fff' : "#000";
    } else {
      $._contrast = '#333';
      $._windowsButtonContrast = "#fff";
      $._windowsBorderColor = '#fff';
    }
    if ($._secondaryColor !== $._color) {
      var secondaryColorBrightness = calculateContrast(obj.secondaryColor);
      $._windowsButtonColor = (secondaryColorBrightness < 150) ? "#fff" : "#000";
      $._windowsListColor = (secondaryColorBrightness < 150) ? '#fff' : "#000";
    } else {
        $._windowsListColor = (brightness < 150) ? '#fff' : "#000";
    }
    
    switch ($._currentOS) {
      case 'ios':
      if (!$._navbarBkgdColor) $._bkgdColor = '#f7f7f7';
      else $._contrast = $._color;

      $._newStyle = 
'#theme h1 {\
  font-family: HelveticaNeue, "Helvetica Neue", Helvetica, SegoeUI, Arial, Sans-serif;\
}\
#theme nav {\
background-color: '+ $._bkgdColor +';\
}\
#theme nav > h1 {\
color: ' + $._bkgdContrastColor + ' !important;\
}\
#theme nav > button {\
 color: ' + $._navbarColor + ' !important;\
}\
#theme button.action {\
color: ' + $._secondaryColor + ';\
border-color: ' + $._secondaryColor + ';\
}\
#theme .nav::after {\
border-color:' + $._secondaryColor + ';\
}\
#theme .list>li[data-goto]:hover {\
background-color: ' + $._color + ';\
}\
#theme .list>li:hover::after {\
border-color: ' + $._contrast + '!important;\
}\
#theme .list > li[data-goto]:hover > h3,\
#theme .list > li[data-goto]:hover > div > h3,\
#theme .list > li[data-goto]:hover > div > h4,\
#theme .list > li[data-goto]:hover > div > p,\
#theme .list > li[data-goto]:hover > aside > h4 {\
color: ' + $._bkgdContrastColor + ' !important;\
}\
.list > li[data-goto]:hover > aside > .counter {\
color: ' + $._bkgdContrastColor + ';\
}\
.show-detail::after {\
color:' + $._secondaryColor +' !important;\
border-color:' + $._secondaryColor +' !important;\
}\
.list > li[data-goto]:hover > aside > .nav::after {\
border-color:' + $._bkgdContrastColor +' !important;\
}\
.list > li[data-goto]:hover > aside > .show-detail::after {\
color:' + $._bkgdContrastColor +' !important;\
border-color:' + $._bkgdContrastColor +' !important;\
}\
.segmented > button {\
color:' + $._color + ' !important;\
border-color:' + $._color + ' !important;\
}\
.segmented > button:hover,\
.segmented > button.selected {\
border-color:' + $._color + ' !important;\
background-color:' + $._color + ' !important;\
color:' + $._bkgdContrastColor + ' !important;\
}\
.toolbar {\
background-color: ' + $._bkgdColor + ';\
}\
.toolbar button {\
color: ' + $._navbarColor + ';\
}\
.list.select li.selected::after {\
background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3Asvg%3D\'http%3A//www.w3.org/2000/svg\'%20xmlns%3D\'http%3A//www.w3.org/2000/svg\'%20version%3D\'1.1\'%20width%3D\'32\'%20height%3D\'26\'%20viewBox%3D\'0%200%2032%2026\'%20id%3D\'svg2\'%3E%3Cdefs%20id%3D\'defs8\'%20/%3E%3Cg%20transform%3D\'translate%280.13135593,-0.34322034%29\'%20id%3D\'Page-1\'%20style%3D\'fill%3Anone%3Bstroke%3Anone\'%3E%3Cg%20id%3D\'Artboard-1\'%20style%3D\'stroke%3A%23' + $._secondaryColor.split('#')[1] + '%3Bstroke-width%3A5\'%3E%3Cpath%20d%3D\'m%2010.500868,22.761362%2011.023688,0%200,-27.9582975\'%20transform%3D\'matrix%280.70710678,0.70710678,-0.70710678,0.70710678,10.899977,-8.7504466%29\'%20id%3D\'Rectangle-1\'%20/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");\
}\
.switch.on {\
border-color: ' + $._secondaryColor + ';\
box-shadow: inset 0 0 0 15px ' + $._secondaryColor + ';\
-webkit-animation-name: none;\
animation-name: none;\
}\
#theme nav > button.back::before {\
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3Asvg%3D\'http%3A//www.w3.org/2000/svg\'%20xmlns%3D\'http%3A//www.w3.org/2000/svg\'%20version%3D\'1.1\'%20width%3D\'21\'%20height%3D\'35\'%20viewBox%3D\'0%200%2021%2035\'%20id%3D\'svg2\'%3E%3Cdefs%20id%3D\'defs8\'%20/%3E%3Cg%20transform%3D\'translate%28-2.1355929,0.0677963%29\'%20id%3D\'Page-1\'%20style%3D\'fill%3Anone%3Bstroke%3Anone\'%3E%3Cpath%20d%3D\'M%2021.353814,1.2365445%205.0903576,17.5%2021.353814,33.763456\'%20id%3D\'Rectangle-1\'%20style%3D\'stroke%3A%23' + $._navbarColor.split('#')[1] + '%3Bstroke-width%3A3\'%20/%3E%3C/g%3E%3C/svg%3E") !important;\
}';
      $('#customStylesheet').html($._newStyle);

      $.get('./data/ios.js', function(data) {
        $('#stylesheetTemplate').html(data);
      });
      // $('textarea').val($.stylesheet);
      
      break;

      case 'android':
          if (!$._navbarBkgdColor) $._bkgdColor = '#eaeaea';
      // $('#stylesheetTemplate').src = './data/android.js';
      $._newStyle = 
'#theme h1 {\
  font-family: HelveticaNeue, "Helvetica Neue", Helvetica, SegoeUI, Arial, Sans-serif;\
}\
#theme nav {\
  background-color: '+ $._bkgdColor +';\
}\
#theme nav > h1 {\
  color: ' + $._contrast + ' !important;\
}\
#theme nav > button {\
 color: ' + $._contrast + ' !important;\
}\
#theme button.action {\
  color: ' + $._bkgdContrastColor + ';\
  border-color: ' + $._secondaryColor + ' !important;\
  background-color: ' + $._secondaryColor + ' !important;\
}\
#theme button.action:hover {\
  box-shadow: 0 3px 7px #666666;\
  color: ' + $._bkgdContrastColor + ';\
}\
#theme .nav::after {\
  border-color:' + $._secondaryColor + ' !important;\
}\
#theme .list>li[data-goto]:hover {\
  background-color: ' + $._color + ';\
}\
#theme .list>li:hover::after {\
  border-color: ' + $._contrast + '!important;\
}\
#theme .list > li[data-goto]:hover > h3,\
#theme .list > li[data-goto]:hover > div > h3,\
#theme .list > li[data-goto]:hover > div > h4,\
#theme .list > li[data-goto]:hover > div > p,\
#theme .list > li[data-goto]:hover > aside > h4,\
#theme .list > li[data-goto]:hover > aside > .counter {\
  color: ' + $._bkgdContrastColor + ';\
}\
#theme .show-detail::after {\
  color:' + $._secondaryColor +' !important;\
  border-color:' + $._secondaryColor +' !important;\
}\
#theme .list > li[data-goto]:hover > aside > .nav::after {\
  border-color:' + $._bkgdContrastColor +' !important;\
}\
#theme .list > li[data-goto]:hover > aside > .show-detail::after {\
  color:' + $._bkgdContrastColor +' !important;\
  border-color:' + $._bkgdContrastColor +' !important;\
}\
#theme .segmented > button {\
  color:' + $._color + ' !important;\
  border-color:' + $._color + ' !important;\
}\
#theme .segmented > button:hover,\
#theme .segmented > button.selected {\
  border-color:' + $._color + ' !important;\
  background-color:' + $._color + ' !important;\
  color:' + $._bkgdContrastColor + ' !important;\
}\
#theme .toolbar {\
  background-color: ' + $._bkgdColor + ' !important;\
}\
#theme .toolbar button {\
  color: ' + $._contrast + ';\
}\
#theme .list.select li:hover {\
  background-color: ' + $._secondaryColor + ';\
}\
#theme .list.select li:hover > h3 {\
  color: ' + $._bkgdContrastColor + ';\
}\
#theme .list.select li.selected::after {\
  background-color: ' + $._secondaryColor + ';\
  box-shadow: 0 0 0 3px ' + $._secondaryColor + ', inset 0 0px 0px 3px #ffffff;\
}\
#theme .list.select li:hover::after {\
  background-color: ' + $._secondaryColor + ';\
  box-shadow: 0 0 0 3px ' + $._secondaryColor + ', inset 0 0px 0px 3px #ffffff;\
}\
#theme .list.select li:hover {\
  background-color: ' + $._secondaryColor + ' !important;\
}\
#theme .switch {\
  background-image: -webkit-linear-gradient(left, ' + $._secondaryColor + ', ' + $._secondaryColor + '), -webkit-linear-gradient(left, #888888, #888888);\
  background-image: linear-gradient(to left, ' + $._secondaryColor + ', ' + $._secondaryColor + '), linear-gradient(to left, #888888, #888888);\
}\
#theme .switch.on {\
-webkit-animation-name: none;\
animation-name: none;\
}\
#theme .switch.on > em {\
  background-color: ' + $._secondaryColor + ';\
  border: solid 2px ' + $._secondaryColor + ';\
}\
#theme nav > button.back::before {\
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22120px%22%20height%3D%22120px%22%20viewBox%3D%220%200%20120%20120%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22BackButton%22%20stroke-linecap%3D%22square%22%20stroke%3D%22%23' + $._contrast.split('#')[1] + '%22%20stroke-width%3D%228%22%3E%3Cg%20id%3D%22Line-2-+-Line-+-Line%22%20transform%3D%22translate%2815.000000,%2022.000000%29%22%3E%3Cpath%20d%3D%22M0.62909796,38.5%20L37.1384668,76.3699524%22%20id%3D%22Line-2%22%3E%3C/path%3E%3Cpath%20d%3D%22M89.3478261,39%20L3.2313744,39%22%20id%3D%22Line%22%3E%3C/path%3E%3Cpath%20d%3D%22M0.62909796,38.5%20L37.1384668,0.63004759%22%20id%3D%22Line%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;\
}\
#theme nav > button.back:hover::before {\
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22120px%22%20height%3D%22120px%22%20viewBox%3D%220%200%20120%20120%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22BackButton%22%20stroke-linecap%3D%22square%22%20stroke%3D%22%23' + $._bkgdContrastColor.split('#')[1] + '%22%20stroke-width%3D%228%22%3E%3Cg%20id%3D%22Line-2-+-Line-+-Line%22%20transform%3D%22translate%2815.000000,%2022.000000%29%22%3E%3Cpath%20d%3D%22M0.62909796,38.5%20L37.1384668,76.3699524%22%20id%3D%22Line-2%22%3E%3C/path%3E%3Cpath%20d%3D%22M89.3478261,39%20L3.2313744,39%22%20id%3D%22Line%22%3E%3C/path%3E%3Cpath%20d%3D%22M0.62909796,38.5%20L37.1384668,0.63004759%22%20id%3D%22Line%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;\
}';
      $('#customStylesheet').html($._newStyle);

      $.get('./data/android.js', function(data) {
        $('#stylesheetTemplate').html(data);
      });
      // $('#stylesheetTemplate').src = './data/android.js';
      
      // $.getJSON('./data/android.js', function(data) {
      //   $('textarea').val(data.stylesheet);
      //   console.log(data.stylesheet)
      // }, 1000)
      

      break

      case 'windows':
      if (!$._navbarBkgdColor) {
          $._bkgdColor = '#000000';
          $._contrast = "#000";
      } else {
          $._windowsNavBtnBkgd = '#000';
          $._contrast = "#fff";
      }
      $._newStyle = 
'#theme h1 {\
  font-family: SegoeUI, HelveticaNeue, "Helvetica Neue", Helvetica, Arial, Sans-serif;\
}\
#theme button {\
  border-color: #fff;\
}\
#theme button.back {\
  border-color: ' + $._windowsBorderColor + ' !important;\
}\
#theme nav {\
  background-color: '+ $._bkgdColor +';\
}\
#theme nav > h1 {\
  color: ' + $._windowsBorderColor + ';\
}\
#theme nav > button,\
#theme .toolbar > button {\
 color: ' + $._bkgdContrastColor + ' !important;\
 background-color: ' + $._color + ' !important;\
 border-color: ' + $._windowsBorderColor + ';\
}\
#theme nav > button:hover,\
#theme .toolbar > button:hover {\
 background-color: ' + $._windowsNavBtnBkgd + ' !important;\
 color: #fff !important;\
 border-color: ' + $._windowsButtonContrast + ' !important;\
}\
#theme button.action:hover {\
 background-color: ' + $._secondaryColor + '; !important;\
 color: ' + $._windowsListColor + ' !important;\
 border-color: ' + $._secondaryColor + ' !important;\
}\
#theme .nav::after {\
  border-color:' + $._secondaryColor +' !important;\
}\
#theme .list>li[data-goto]:hover {\
  background-color: ' + $._color + ';\
}\
#theme .list>li[data-goto]:hover h3,\
#theme .list>li[data-goto]:hover h4,\
#theme .list>li[data-goto]:hover p {\
  color: ' + $._bkgdContrastColor +'; !important\
}\
.list>li:hover::after {\
  border-color: ' + $._contrast + '!important;\
}\
#theme .list > li[data-goto]:hover > h3,\
#theme .list > li[data-goto]:hover > div > h3,\
#theme .list > li[data-goto]:hover > div > h4,\
#theme .list > li[data-goto]:hover > div > p,\
#theme .list > li[data-goto]:hover > aside > h4,\
#theme .list > li[data-goto]:hover > aside > .counter {\
  color: ' + $._bkgdContrastColor + ';\
}\
#theme .list > li[data-goto]:hover > aside > .nav::after {\
  border-color:' + $._contrast +' !important;\
}\
#theme .list > li[data-goto]:hover > aside > .counter,\
#theme .list > li[data-goto]:hover > aside > .show-detail::after {\
  color:' + $._bkgdContrastColor +' !important;\
  border-color:' + $._bkgdContrastColor +' !important;\
}\
#theme .segmented > button:hover,\
#theme .segmented > button.selected {\
  background-color:' + $._color + ' !important;\
  color:' + $._bkgdContrastColor + ' !important;\
}\
#theme div.toolbar {\
  background-color: ' + $._bkgdColor + ';\
}\
#theme .toolbar button {\
color: ' + $._contrast + ';\
}\
#theme .list.select li:hover::before,\
#theme .list.select li.selected::before {\
  background-color: ' + $._secondaryColor + ';\
}\
#theme .switch:before {\
  background-color: ' + $._secondaryColor + ';\
}\
#theme nav > button.back::before {\
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20width=\'30px\'%20height=%2230px%22%20viewBox=%220%200%2030%2030%22%20version=%221.1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%3E%3Cg%20id=%22Page-1%22%20stroke=%22none%22%20stroke-width=%221%22%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20id=%22Artboard-1%22%20fill=%22' + $._bkgdContrastColor + '%22%3E%3Cpath%20d=%22M11.4020124,18.2741603%20L28.8288961,18.2741603%20L28.8288961,11.7154319%20L11.4344601,11.7154319%20L19.1074316,2.81005859%20L10.63796,2.81005859%20L8.70019016e-18,15%20L10.3110338,27.1899414%20L19.1074316,27.1899414%20L11.4020124,18.2741603%20Z%22%20id=%22Path-1%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");\
}\
#theme nav > button.back:hover::before {\
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20width=%2230px%22%20height=%2230px%22%20viewBox=%220%200%2030%2030%22%20version=%221.1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%3E%3Cg%20id=%22Page-1%22%20stroke=%22none%22%20stroke-width=%221%22%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20id=%22Artboard-1%22%20fill=%22#fff%22%3E%3Cpath%20d=%22M11.4020124,18.2741603%20L28.8288961,18.2741603%20L28.8288961,11.7154319%20L11.4344601,11.7154319%20L19.1074316,2.81005859%20L10.63796,2.81005859%20L8.70019016e-18,15%20L10.3110338,27.1899414%20L19.1074316,27.1899414%20L11.4020124,18.2741603%20Z%22%20id=%22Path-1%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");\
}';
      
      $('#customStylesheet').html($._newStyle);
      $.get('./data/windows.js', function(data) {
        $('#stylesheetTemplate').html(data);
      });
      break;
    }
  });

  //==========================
  // Reset the UI to defaults:
  //==========================
  var resetUI = function() {
    $('#customStylesheet').empty();
    $('textarea').val('');
    $.getStylesheet = false;
    $._color = null;
    $._secondaryColor = null;
    navbarBkgdColor = null;
    $._bkgdContrastColor = '#ffffff';
    newStyle = '';
    $('#colors li').removeClass('selected');
    $('#colors-secondary li').removeClass('selected');
  };
  $('#resetBtn').on('click', function() {
    resetUI();
  });

  //========================
  // Initialize UI elements:
  //========================
  $('#testSegmentedControl').UISegmented({selected: 0});
  $('#selectList').UISelectList({
      selected: 0,
      callback: $.noop
    });
});