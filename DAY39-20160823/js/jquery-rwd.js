  (function($){
    'use strict';
    // Object.keys 사용자의 웹 브라우저가 지원하지 않을 수 있으니...
    // 그것을 추상화하여 jQuery 함수의 속성으로 동일한 일을 수행하는 메소드를 추가해보자.
    if (!$.keys) {
      $.keys = function(obj) {
        if ( $.type(obj) !== 'object' ) { throw new Error('객체를 전달해야 합니다.') }
        var keys = [];
        for ( var prop in obj ) {
          if ( obj.hasOwnProperty(prop) ) {
            keys.push(prop);
          }
        }
        return keys;
      }
    }
  })(this.jQuery);


  (function(global, $){
    'use strict';
    // -----------------------------------------------------------------
    // STEP 1
    // 페이지가 로드될 때 다음의 기기인지를 확인한다.
    // 아래 조건을 확인하여 <html> 요소 또는 <body> 요소에 class 속성 값으로 추가한다.
    // Mobile: 0 - 767
    // Tablet: 768 - 1024
    // Desktop: 1025 - 1366
    // Wide-Screen: 1367 -
    // -----------------------------------------------------------------
    var $html = $('html'), breakpoints;
    breakpoints = {
      'xs': [767],
      'md': [768, 1024],
      'lg': [1025, 1366]
    };
    // ES5
    // console.log( Object.keys(breakpoints) );
    // var breakpoints_keys = [];
    // for ( var prop in breakpoints ) {
    //   breakpoints_keys.push(prop);
    // }
    // console.log(breakpoints_keys);

    // jQuery 정적 메소드 확장 $.keys()
    var breakpoints_keys = $.keys(breakpoints);
    // console.log(breakpoints_keys);
    
    function changeDeviceMode(screen, first_exe) {
      var screen_width = screen.width();
      screen.removeClass(function(index, current_class) {
        if ( first_exe ) {
          // 초기 실행이될 때 <html> 요소의 class 속성 값을 가져와 메모리 한다.
          screen.data('original-class', current_class);
        }
        return breakpoints_keys.join(' ');
      });
      if ( !screen.hasClass( screen.data('original-class') ) ) {
        screen.addClass( screen.data('original-class') );
      }
      if ( screen_width < breakpoints[breakpoints_keys[0]][0]+1 ) {
        // console.log('mobile');
        screen.addClass(breakpoints_keys[0]);
      } else if ( screen_width >= breakpoints[breakpoints_keys[1]][0] && screen_width < breakpoints[breakpoints_keys[1]][1]+1 ) {
        // console.log('tablet');
        screen.addClass(breakpoints_keys[1]);
      } else if ( screen_width >= breakpoints[breakpoints_keys[2]][0] && screen_width < breakpoints[breakpoints_keys[2]][1]+1 ) {
        // console.log('desktop');
        screen.addClass(breakpoints_keys[2]);
      } else {
        // console.log('wide-screen');
        screen.addClass('wide-screen');
      }
    }
    // changeDeviceMode($html);
    // -----------------------------------------------------------------
    // STEP 2
    // 창 크기를 조정하면 STEP 1에서 수행했던 결과를 다시 실행하여 class 속성 처리를 변경한다.
    // -----------------------------------------------------------------
    $(window).on('load resize', {'i': 0}, function(event) {
      changeDeviceMode($html, event.data.i++ === 0 ? true : false);
    });
  })(this, this.jQuery);