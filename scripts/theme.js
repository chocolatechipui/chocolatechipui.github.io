$(function() {
  $._editingIsActive = false;
  $._navbarBkgdColor = false;
  $._secondaryColorActive = false;
  $._contrast = '#333';
  $._bkgdContrastColor = '#fff';
  $._newStyle = '';
  $._currentOS = 'ios';
  $._color = '';
  $._secondaryColor = '';
  $._bkgdColor = '#f7f7f7';
  $._navbarColor = $._color;
  $._titleColor = '#333';
  // Windows colors:
  $._windowsBorderColor = '#fff';
  $._windowsButtonContrast = '#fff';
  $._windowsNavBtnBkgd = 'transparent';
  $._windowsButtonColor = '#fff';
  // Android colors:
  $._androidTapColor = '0, 0, 0';
  $._androidSwitchTrackColor = $._secondaryColor;
  $._segmentedTextColor = '#333';
  $._androidBackTap = '';
  var stylesheet;

  // Function to light a hex color:
  //===============================
  $.lightenColor = function(color, percent) {  
    var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
  }
  //===========================
  // Toggle the UI based on OS:
  //===========================
  $('.menu').on('click', 'button', function() {
    switch (this.id) {
      case 'iosTheme':
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#os-theme').attr('href', './css/theme-ios.css');
        $._currentOS = 'ios';
        $('textarea').val('');
        if (!$._editingIsActive) return;
        $.publish('chosen-color', {color: $._color, secondaryColor: $._secondaryColor});
      break;
      case 'androidTheme':
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#os-theme').attr('href', './css/theme-android.css');
        $._currentOS = 'android';
        $('textarea').val('');
        if (!$._editingIsActive) return;
        $.publish('chosen-color', {color: $._color, secondaryColor: $._secondaryColor});
      break;
      case 'windowsTheme':
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#os-theme').attr('href', './css/theme-win.css');
        $._currentOS = 'windows'
        $('textarea').val('');
        if (!$._editingIsActive) return;
        $.publish('chosen-color', {color: $._color, secondaryColor: $._secondaryColor});
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
      if ($._color) $.publish('chosen-color', {color: $._color, secondaryColor: $._secondaryColor});
    } else if ($(this).val() === 'navbar_toolbar') {
      $._navbarBkgdColor = true;
      if ($._color) {
        $._bkgdColor = $._color;
        $._navbarColor = $._contrast;
        $.publish('chosen-color', {color: $._color, secondaryColor: $._secondaryColor});
        calculateSegmentedColor($._secondaryColor);
      }
    }
    $('#colors-secondary li').removeClass('selected');
  });

  //============================================
  // Calculate text color for segmented control:
  //============================================
  var calculateSegmentedColor = function(color) {
    if ($._navbarBkgdColor === false) {
      var brightness = $.calculateContrast(color);
      $._bkgdContrastColor = (brightness < 150) ? "#fff" : "#333";
    }
  }

  //===========================================
  // Define method to calculate color contrast:
  //===========================================
  $.calculateContrast = function(color) {
    if (typeof color === 'object') color = color.toHexString();
    var colour = new $.RGBColor(color);
    return $.calcBrightness(colour);
  };

  //======================================================
  // Define a mediator to handle publishing color choices,
  // and updating the stylessheets and UI:
  //======================================================
  var colorMediator = $.subscribe('chosen-color', function(event, obj) {
    var brightness = $.calculateContrast(obj.color);
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
      var secondaryColorBrightness = $.calculateContrast(obj.secondaryColor);
      $._windowsButtonColor = (secondaryColorBrightness < 150) ? "#fff" : "#000";
      $._windowsListColor = (secondaryColorBrightness < 150) ? '#fff' : "#000";
    } else {
        $._windowsListColor = (brightness < 150) ? '#fff' : "#000";
    }
    
    switch ($._currentOS) {
      case 'ios':
      if (!$._navbarBkgdColor) {
        $._bkgdColor = '#f7f7f7';
        $._titleColor = $._color;
      } else {
        $._contrast = $._color;
        $._titleColor = $._bkgdContrastColor;
    }
      $._newStyle = 
'#theme h1 {\
  font-family: HelveticaNeue, "Helvetica Neue", Helvetica, SegoeUI, Arial, Sans-serif;\
}\
#theme nav {\
background-color: '+ $._bkgdColor +';\
}\
#theme nav > h1 {\
color: ' + $._titleColor + ' !important;\
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
      
      break;

      case 'android':
      if (!$._navbarBkgdColor) $._bkgdColor = '#eaeaea';
      var brightness = $.calculateContrast($._secondaryColor);
      if (brightness > 150) {
        $._androidSwitchTrackColor = $._secondaryColor;
      $._segmentedTextColor = '#333';
      } else {
        $._androidSwitchTrackColor = $.lightenColor($._secondaryColor, 30);
        $._segmentedTextColor = '#fafafa';
      }
      var buttonBrightness = $.calculateContrast($._navbarColor);
      
      var androidBackTapPercentage = 0;
      var androidBackTapPercentage2 = 0;
      if (buttonBrightness < 70) {
        $._androidTapColor = 'rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.05)';
        $._androidBackTap = '0, 0, 0';
        androidBackTapPercentage = 0.15;
        androidBackTapPercentage2 = 0.15;
      } else {
        $._androidTapColor = 'rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0.35)';
        $._androidBackTap = '255, 255, 255';
        androidBackTapPercentage = 0.75;
        androidBackTapPercentage2 = 0.5;
      }
      $._newStyle = 
'@-webkit-keyframes backButtonRipple {\
  0% {\
    box-shadow: inset 0 0 0 rgba(' + $._androidBackTap + ', 0), 0 0 0 rgba(' + $._androidBackTap + ', 0);\
  }\
  50% {\
    box-shadow: inset 0 0 40px rgba(' + $._androidBackTap + ', ' + androidBackTapPercentage + '), 0 0 10px rgba(' + $._androidBackTap + ', ' + androidBackTapPercentage + ');\
  }\
  90% {\
    box-shadow: inset 0 0 40px rgba(' + $._androidBackTap + ', ' + androidBackTapPercentage2 + '), 0 0 3px rgba(' + $._androidBackTap + ', ' + androidBackTapPercentage + ');\
  }\
  100% {\
    box-shadow: inset 0 0 0 rbga(' + $._androidBackTap + ', 0), 0 0 0 rgba(' + $._androidBackTap + ', 0);\
  }\
}\
#theme h1 {\
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
 background-image: -webkit-radial-gradient(circle, ' + $._androidTapColor + ' 10%);\
}\
#theme button.action {\
  color: ' + $._segmentedTextColor + ';\
  border-color: ' + $._secondaryColor + ' !important;\
  background-color: ' + $._secondaryColor + ' !important;\
  background-image: -webkit-radial-gradient(circle, ' + $._androidTapColor + ' 10%);\
}\
#theme button.action:hover {\
  box-shadow: 0 3px 7px #666666;\
}\
#theme .nav::after {\
  border-color:' + $._secondaryColor + ' !important;\
}\
#theme .list>li:hover::after {\
  border-color: ' + $._contrast + '!important;\
}\
#theme .show-detail::after {\
  color:' + $._secondaryColor +' !important;\
  border-color:' + $._secondaryColor +' !important;\
}\
#theme .segmented > button:hover,\
#theme .segmented > button.selected {\
  -webkit-animation-name: tapRipple;\
  animation-name: tapRipple;\
  border-bottom: solid 3px ' + $._color + ';\
}\
#theme .toolbar {\
  background-color: ' + $._bkgdColor + ' !important;\
}\
#theme .toolbar button {\
  color: ' + $._contrast + ';\
  background-image: -webkit-radial-gradient(circle, ' + $._androidTapColor + ' 10%);\
}\
#theme .toolbar button:hover {\
  animation-name: tapRipple;\
  box-shadow: 0 5px 8px 2px rgba(0,0,0,0.25);\
}\
#theme .list.select li.selected::after {\
  background-color: ' + $._secondaryColor + ';\
  box-shadow: inset 0 0px 0px 3px #fff;\
  border: solid 2px ' + $._secondaryColor + ';\
}\
#theme .list.select li:hover::after {\
  background-color: ' + $._secondaryColor + ';\
  opacity: 1;\
  box-shadow: inset 0 0px 0px 3px #fff;\
  border: solid 2px ' + $._secondaryColor + ' !important;\
}\
#theme .switch {\
  background-image: -webkit-linear-gradient(left, ' + $._androidSwitchTrackColor + ',' + $._androidSwitchTrackColor  + '), -webkit-linear-gradient(left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\
  background-image: linear-gradient(to left, ' + $._androidSwitchTrackColor  + ', ' + $._androidSwitchTrackColor  + '), linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\
}\
#theme .switch.on {\
  -webkit-animation-name: none;\
  animation-name: none;\
}\
#theme .switch.on > em {\
  background-color: ' + $._secondaryColor + ';\
}\
#theme nav > button.back {\
  background-image: -webkit-linear-gradient(left, ' + $._contrast + ', ' + $._contrast + ');\
  background-image: linear-gradient(left, ' + $._contrast + ', ' + $._contrast + ');\
}\
#theme nav > button.back::before {\
  background-color: ' + $._contrast + ' !important;\
}\
#theme nav > button.back::after {\
  background-color: ' + $._contrast + ' !important;\
}';
      $('#customStylesheet').html($._newStyle);

      $.get('./data/android.js', function(data) {
        $('#stylesheetTemplate').html(data);
      });
      

      break

      case 'windows':
      if (!$._navbarBkgdColor) {
        $._bkgdColor = '#000000';
      } else {
        $._windowsNavBtnBkgd = '#000';
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


    // Define color palette for color picker:
    var chuiPaletteOld = [["#9d403a", "#c8ac85", "#daa520", "#fad622", "#ffa500", "#fa8072", "#ff0000"], ["#ff69b4", "#ee82ee", "#dda0dd", "#800080", "#9370d8", "#011a99", "#0000ff"], ["#1e90ff", "#87ceeb", "#b0c4de", "#40e0d0", "#008080", "#30c930", "#008000"], ["#6b8e23", "#808000", "#000000", "#708090", "#808080", "#a9a9a9", "#d3d3d3"]];

    var chuiPalette  = [
    ["#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#efefef", "#f3f3f3", "#ffffff"],
    ["#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#9900ff", "#ff00ff"],
    ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
    ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
    ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
    ["#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
    ["#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"]];

  var calculateColors = function(color) {
    if (typeof color === 'string') {
      $._color = color;
    } else { 
      $._color = color.toHexString();
    }
    $._secondaryColor = $._secondaryColorActive ? $._secondaryColor : $._color;
    if ($._navbarBkgdColor) $._navbarColor = $._contrast;
    else $._navbarColor = $._color;
    calculateSegmentedColor($._color);
    $.publish('chosen-color', {color: $._color, secondaryColor: $._secondaryColor});
  };  
  var calculateColorsSecondary = function(color) {
    $._color = $('#primaryColorChooser .sp-container input').val()
    $._secondaryColor = $('#secondaryColorChooser .sp-input-container input').val();
    calculateSegmentedColor($._color);
    $.publish('chosen-color', {color: $._color, secondaryColor: $._secondaryColor});
  }; 
  // Initialize primary color picker:
  var primaryColorInput = $('#colorPicker1');
  var secondaryColorInput = $('#colorPicker2');
  primaryColorInput.spectrum({flat: true, showInput: true, showInitial: true, showButtons: false, preferredFormat: "hex", showPalette: true, palette: chuiPalette, showSelectionPalette: false, color: '#007aff', 
    move : function(color) {
      calculateColors(color);
      $._editingIsActive = true;
    }
  });

  // Handle hiding and showing color picker for secondary color:
  $('#chooseSecondaryColorCheckbox').change(function() {
    var color = $('#primaryColorChooser .sp-container input').val();
    if ($(this).prop('checked')) {
      $._secondaryColorActive = true;
      $._color = $._secondaryColor = $('#primaryColorChooser .sp-container input').val();
      $.publish('chosen-color', {color: $._color, secondaryColor: $._color});
      $("#secondaryColorChooser").show();
    } else {
      $._secondaryColorActive = false;
      $.publish('chosen-color', {color: color, secondaryColor: color});
      $("#secondaryColorChooser").hide();
    }

    // Initialize color picker when showing:
    secondaryColorInput.spectrum({flat: true, showInput: true, showInitial: true, showButtons: false, preferredFormat: "hex", showPalette: true, palette: chuiPalette, showSelectionPalette: false, color: '#007aff',
      move: function(color) {
        $._secondaryColorActive = true;
        $._secondaryColor = color.toHexString();
        $.publish('chosen-color', {color: $._color, secondaryColor: $._secondaryColor});
      }
    });

    $('#secondaryColorChooser .sp-input-container input').change(function() {
      $._secondaryColor = $(this).val();
      $._secondaryColorActive = true;
      calculateColorsSecondary($(this).val());
    });
  }); 

  // Calculate Color from manual entry:
  $('#primaryColorChooser .sp-container input').change(function() {
    calculateColors($(this).val());
  });

});