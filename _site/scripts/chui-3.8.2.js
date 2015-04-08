/*
ChocolateChip-UI
ChUI.js
Copyright 2015 Sourcebits www.sourcebits.com
License: MIT
Version: 3.8.2
*/
(function() {

  $.extend({
    ///////////////
    // Create Uuid:
    ///////////////
    UuidBit : 1,

    Uuid : function() {
      this.UuidBit++;
      return Date.now().toString(36) + this.UuidBit;
    }
  });

  $.extend({
    isIE10 : navigator.userAgent.match(/msie 10/i),
    isIE11 : (navigator.userAgent.match(/windows nt/i) && navigator.userAgent.match(/trident/i)),
    isIEEdge : (navigator.userAgent.match(/windows nt/i) && navigator.userAgent.match(/edge/i)),
    isWebkit : navigator.userAgent.match(/webkit/),
    isSafari : (!/Chrome/img.test(navigator.userAgent) && /Safari/img.test(navigator.userAgent) && !/android/img.test(navigator.userAgent)),
    isChrome : /Chrome/img.test(navigator.userAgent)
  });
  
  /////////////////////////////
  // Determine browser version:
  /////////////////////////////
  $.extend({
    browserVersion : function ( ) {
      var n = navigator.appName;
      var ua = navigator.userAgent;
      var temp;
      var m = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      if (m && (temp = ua.match(/version\/([\.\d]+)/i))!== null) m[2]= temp[1];
      m = m ? [m[1], m[2]]: [n, navigator.appVersion, '-?'];
      return m[1];
    }
  });

  $.extend({
    subscriptions : {},
    
    subscribe : function (topic, callback) {
      if (!$.subscriptions[topic]) {
        $.subscriptions[topic] = [];
      }
      var token = ($.Uuid());
      $.subscriptions[topic].push({
        token: token,
        callback: callback
      });
      return token;
    },

    unsubscribe : function ( token ) {
      setTimeout(function() {
        for (var m in $.subscriptions) {
          if ($.subscriptions[m]) {
              for (var i = 0, len = $.subscriptions[m].length; i < len; i++) {
                  if ($.subscriptions[m][i].token === token) {
                    $.subscriptions[m].splice(i, 1);
                    return token;
                  }
              }
          }
        }
        return false;
      });
    },

    publish : function ( topic, args ) {
      if (!$.subscriptions[topic]) {
        return false;
      }
      setTimeout(function () {
        var len = $.subscriptions[topic] ? $.subscriptions[topic].length : 0;
        while (len--) {
          $.subscriptions[topic][len].callback(topic, args);
        }
        return true;
      });
      return true;
   }
  });

  $.fn.extend({
    /////////////////////////
    // Initialize Select List
    /////////////////////////
    UISelectList : function (options) {
      var name = (options && options.name) ? options.name : $.Uuid();
      var list = this[0];
      list.classList.add('select');
      $(list).find('li').each(function(idx, ctx) {
        var value = ctx.getAttribute("data-select-value") !== null ? ctx.getAttribute("data-select-value") : "";
        ctx.setAttribute('role', 'radio');
        $(ctx).removeClass('selected').find('input').removeAttr('checked');
        if (options && options.selected === idx) {
          ctx.setAttribute('aria-checked', 'true');
          ctx.classList.add('selected');
          if (!$(ctx).find('input')[0]) {
            $(ctx).append('<input type="radio" checked="checked" name="' + name + '" value="' + value +'">');
          } else {
            $(ctx).find('input').prop('checked',true).attr('value', value);
          }
        } else {
          if (!$(ctx).find('input')[0]) {
            $(ctx).append('<input type="radio" name="' + name + '" value="' + value +'">');
          }
        }
      });
      $(list).on('click', 'li', function() {
        var item = this;
        $(item).siblings('li').removeClass('selected');
        $(item).siblings('li').removeAttr('aria-checked');
        $(item).siblings('li').find('input').removeAttr('checked');
        $(item).addClass('selected');
        item.setAttribute('aria-checked', true);
        $(item).find('input').prop('checked',true);
        if (options && options.callback) {
          options.callback.apply(this, arguments);
        }
      });
    }
  });

  $.fn.extend({
    ///////////////////////////////
    // Initialize Segmented Control
    ///////////////////////////////
    UISegmented : function ( options ) {
      var callback = (options && options.callback) ? options.callback : $.noop;
      var selected = (options && options.selected > 0) ? options.selected : 0;
      this.find('button').each(function(idx, ctx) {
        $(ctx).find('button').attr('role','radio');
        if (idx === selected) {
          ctx.setAttribute('aria-checked', 'true');
          ctx.classList.add('selected');
        }
      });
      this.on('click', 'button', function(e) {
        var $this = $(this);
        if (this.parentNode.classList.contains('paging')) return;
        $this.siblings('button').removeClass('selected');
        $this.siblings('button').removeAttr('aria-checked');
        $this.addClass('selected');
        $this.attr('aria-checked', true);
        callback.call(this, e);
      });
    }
  });

  $.fn.extend({
    ////////////////////////////
    // Initialize Switch Control
    ////////////////////////////
    UISwitch : function ( ) {
      var hasThumb = false;
      this.each(function(idx, ctx) {
        ctx.setAttribute('role','checkbox');
        if ($(ctx).data('ui-setup') === true) return;
        if (!ctx.querySelector('input')) {
          ctx.insertAdjacentHTML('afterBegin', '<input type="checkbox">');
        }
        if (ctx.classList.contains('on')) {
          ctx.querySelector('input').setAttribute('checked', 'checked');
        }
        if (ctx.querySelector('em')) hasThumb = true;
        if (!hasThumb) {
          ctx.insertAdjacentHTML('afterBegin', '<em></em>');
        }
        $(ctx).on('click', function() {
          var checkbox = ctx.querySelector('input');
          if (ctx.classList.contains('on')) {
            ctx.classList.remove('on');
            ctx.removeAttribute('aria-checked');
            checkbox.removeAttribute('checked');
          } else {
            ctx.classList.add('on');
            checkbox.setAttribute('checked', 'checked');
            ctx.setAttribute('aria-checked', true);
          }
        });
        $(ctx).data('ui-setup', true);
      });
    }
  });
  $(function() {
    //////////////////////////
    // Handle Existing Switches:
    //////////////////////////
    $('.switch').UISwitch();    
    $('body').on('click', 'button', function() {
      var $this = $(this);
      if ($this.parent('.segmented')[0] || $this.parent('.tabbar')[0]) return;
      if (this.classList.contains('slide-out-button') || this.classList.contains('back') || this.classList.contains('backTo')) return;
      $this.addClass('selected');
      setTimeout(function() {
        $this.removeClass('selected');
      }, 1000);
    });
  });

})();