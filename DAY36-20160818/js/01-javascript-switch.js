/**
 * ----------------------------------------------------------
 * [DAY35] review
 * 1. Hoist
 * 2. Callback pattern
 * 3. Closure
 * 4. Loop + Closure
 * 5. IIFE --> Module Pattern (Client-Side, Front-End)
 * ----------------------------------------------------------
 */


 /**
  * ----------------------------------------
  * 코드를 작성하기 위한 공간을 생성 : IIFE 패턴
  * ----------------------------------------
  */
 
// 맨앞에 ';'(세미콜론)을 붙이는것은 충돌 방지 
// ;(function(global) {
// 	..........	
// }(this));

// ex1.
// (function(global){
//     'use strict';
//     var claire = 'hi'; // 지역변수
// })(this);
// console.log(claire); // claire is not defined

// ex2. 
// (function(global) {
// 	'use strict';
// 	var claire; // 지역 변수 (전역과 충돌이 안된다.)
// 	console.log(claire); //undefined

// 	// 전역으로 공개할 경우 (노출 패턴 = 외부에 공개)
// 	global.claire = claire; 

// }(this));
// console.log(claire); // undefined

//------------------------------------------------------------------

(function(global){
  'use strict';

/**
 * --------------------------------
 * 요일 출력하기!
 * 임의로 요일을 조정할 수 있다 [프로그래밍 할 것]
 * 주중, 주말인지 구분하여 콘솔에 출력한다.
 * --------------------------------
 */
  // 스크립트를 사용해 오늘이 무슨 요일인지 알 수 있다.
  var today = (new Date()).getDay();
  // var today = 6; // 0 ~ 6
  console.log(today);
  // 주중, 주말인지를 구분하여 콘솔에 출력한다.
  switch(today) {
    // 주말이면... "주말이다. 놀자!"라고 출력.
    case 0:
    case 6:
      console.log("주말이다. 놀자!");
    break;
    // 주중이라면... "아... 출근이여.." 라고 출력.
    default:
      console.log("아... 출근이여..");
  }
}(this));