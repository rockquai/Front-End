/**
 * ------------------------------------------------------------------------------------------
 * class 속성 제어 방법 - class로 제어
 * .hasClass(): 해당 클래스 속성을 소유했는가? Boolean
 * .addClass(): 해당 클래스가 없다면 추가한다. jQuery Object
 * .removeClass(): 해당 클래스가 있다면 제거한다. jQuery Object | 인자 값이 없다면 모든 클래스 속성을 제거한다.
 * .toggleClass(): 해당 클래스 속성을 토글한다. (해당 클래스 속성을 소유했다면 제거, 소유하지 않았다면 추가) 
 * ------------------------------------------------------------------------------------------
 */

/**
 * --------------------------------
 * ex1. addClass()
 * --------------------------------
 */
// (function(global, $) {
//  'use strict';
//   function init() {
//     console.log( $('.addClass_look') );
//     var $button_controls = $('.button-controls');
//     var $addClass_look = $('.addClass_look', $button_controls);
//     var $removeClass_look = $('.removeClass_look', $button_controls);
//     var $toggleClass_look = $('.toggleClass_look', $button_controls);

//     $addClass_look.addClass('add');
//   };
//   // 문서 객체 모델이 준비가 되면 init 함수 실행
//   $(init);
// }(this, this.jQuery));


/**
 * --------------------------------
 * ex2. 이벤트 위임 : 부모에게 이벤트 설정
 * --------------------------------
 */
// (function(global, $) {
//   'use strict'; 
//   function init() {
//     $('.button-controls').on('click', function(){
//       console.log(this); // <div role="group" class="button-controls">
//     });
//   };
//   // 문서 객체 모델이 준비가 되면 init 함수 실행
//   $(init);
// }(this, this.jQuery));

/**
 * --------------------------------------------
 * ex3. [문제발생!] 클릭할 때마다 객체 생성한다. 
 * --------------------------------------------
 */
//  (function(global, $) {
//   'use strict';
// function init() {
//       var $demo_box = $('.demo-box');
//       $('.button-controls').on('click', 'button', function() {
//         switch(this.getAttribute('class')) {
//           case 'addClass_look':
//             // console.log('addClass_look');
//             // $demo_box.addClass(); // 클래스 값이 없으면 오류
//             $demo_box.addClass('look');
//           break;
//           case 'removeClass_look':
//             // console.log('removeClass_look');
//             // $demo_box.removeClass();// 클래스 값이 모두 지워버린다.
//             $demo_box.removeClass('look');
//           break;
//           case 'toggleClass_look':
//             // console.log('toggleClass_look');
//             $demo_box.toggleClass('look');
//           break;
//         }
//       });
// };
// // 문서 객체 모델이 준비가 되면 init 함수 실행
// $(init);
// }(this, this.jQuery));


/**
 * -----------------------------------------------------------------------
 * ex4. 매번 클릭할 마다 객체를 생성하는건 비용 발생. --> 객체 합성을 통해서 한번만.
 * {'$index': 0} : 이벤트 객체, 'event'에 합성
 * -----------------------------------------------------------------------
 */
(function(global, $) {
  'use strict';
  function init() {
      var $demo_box = $('.demo-box');
      // 이벤트 위임
      $('.button-controls').on('click', 'button', {'$index': 0}, function(event) {
        switch(this.getAttribute('class')) {
          case 'addClass_look':
            // console.log('addClass_look');
            $demo_box.addClass('look');
            // $demo_box.addClass(function(index, current_class) {
            //   return '~' + current_class + '~';
            // });
          break;
          case 'removeClass_look':
            // console.log('removeClass_look');
            $demo_box.removeClass('look');
            // $demo_box.removeClass();
          break;
          case 'toggleClass_look':
            // console.log('toggleClass_look');
            // console.log(event.data.$index++ % 5 === 0);
            $demo_box.toggleClass('look');
            // $demo_box.toggleClass('look', event.data.$index++ % 5 === 0);
            // $demo_box.toggleClass( (event.data.$index += 3) % 6 === 0 ); // 나머지값이 '0'이 될때 실행
          break;
        }
      });
  };
  // 문서 객체 모델이 준비가 되면 init 함수 실행
  $(init);
}(this, this.jQuery));
