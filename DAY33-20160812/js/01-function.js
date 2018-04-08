/**
 * -----------------------------------------------------------------
 * 함수 정의
 * 1. 함수선언식(Function declaration)
 * 2. 함수표현식(Function expression)
 * 3. Function() 생성자 함수
 * -----------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------
 * 1. Function Declaration(함수 선언문) - 권장하지 않지만 사용하려 주위 요망.
 * 함수를 모아서 위에 선언. 
 * 함수 블록문 뒤에 세미콜론(;)을 사용하면 안됨.
 * ㄴ> function 함수이름(){}
 * ㄴ> if() {}, while() {}, for() {} ==> 세미콜론(;)을 사용하면 안됨.
 * function( ) { }; ==> 함수 리터럴 표현식  
 * ------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------
 * 2. Function Expression(함수 표현식) - 권장!
 * 변수에 참조하지 않고 이름이 있는 함수로 선언
 * 함수의 일급객체 특성을 이용하여 함수 리터럴 방식으로 함수를 정의하고 변수에 할당할 수 있는데 이러한 방식을 함수표현식(Function expression)이라 한다.
 * 함수 블록문 뒤에 세미콜론(;)을 사용해야 한다.
 * ㄴ> var 변수(함수이름) = function(){};
 * ------------------------------------------------------------------
 */


/**
 * ------------------------------------------------------------------
 * 3. 『함수』 생성자 함수를 사용하여 함수를 생성하는 방법 - 사용 지양!
 * ------------------------------------------------------------------
 */

var logIdentity = new Function('console.log("this is function object");');

// 함수를 참조하고 있는 변수 이름을 통해서 호출 (실행 연산자 `()` 사용)
logIdentity();

// 함수 호출시, 세미콜론(;)를 쓰지 않게 되면.. IIFE 패턴 
// (function(){});

// ---------------------------------------------------------------------
// 변수의 특징
// 하나의 변수에는 하나의 데이터 값만 담을 수 있다.
var favorite_item_01 = '커피';
var favorite_item_02 = '에어컨';
var favorite_item_03 = '선풍기';
var favorite_item_04 = '깐풍기';

// 배열 <- 자료형
// 배열의 특징
// 집합 (데이터들을 묶을 수 있다)
// 여러 개의 변수를 만들지 않고도
// 하나의 변수에 배열 데이터를 참조함으로서
// 다수의 데이터를 관리할 수 있다.
// var favorite_items = ['커피', '에어컨', '선풍기', '깐풍기'];
var favorite_items = new Array(); // []
favorite_items[0] = '커피';
favorite_items[1] = '에어컨';
favorite_items[2] = '선풍기';
favorite_items[3] = '깐풍기';

/**
 * --------------------------------
 * 방법2.
 * --------------------------------
 */
// var favorite_items = ['커피', '에어컨', '선풍기', '깐풍기'];
// console.log();

// 연관 배열: 배열 원소로 추가된 아이템이 아니라, 객체의 속성임.
favorite_items['true-or-false'] = '깐풍기는 참 맛있다.';
// favorite_items.true-or-false [X]

// console.log(favorite_items);
// console.dir(favorite_items);


/**
 * --------------------------------
 * 데이터 유형별 변수 선언 및 값(리터럴) 할당
 * --------------------------------
 */

// 변수 산언
var num, str, boo, fnc, arr, obj;

// 선언된 변수에 각각 데이터를 리터럴  표현식으로 복사/참조
// 원시 데이터 유형 (복사)
num = 1203;
str = 'hey, jude';
boo = !0;

// 자료형 데이터 (참조)
fnc = function() {};
arr = [];
obj = {};

// var 키워드를 한 번만 사용하는 패턴
// (var singleton pattern)
// var num = 9,
//     str = '',
//     boo = true,
//     fnc = function(){},
//     arr = [],
//     obj = {};

/**
 * --------------------------------
 * 자바스크립트 데이터 유형 체크 
 * 1. typeof 키워드를 사용하는 방법
 * --------------------------------
 */

typeof num;        // 'number'
typeof str;        // 'string'
typeof boo;        // 'boolean'
typeof fnc;        // 'function'
typeof obj;        // 'object'
typeof arr;        // [기대] "array" [결과]'object': 문제 발생! 설계 오류!!!!
typeof null;       // [기대] "null"  [결과]'object': 문제 발생! 설계 오류!!!!
typeof undefiend;  // 'undefined'

typeof RegExp;     // 'function'
typeof new RegExp; // 'object'
typeof Math;       // 'object'

/**
 * ------------------------------------------------------------
 * 자바스크립트 데이터 유형 체크 
 * 2. instanceof 키워드를 사용하는 방법
 * ㄴ> 원시 데이터 유형(리터럴 방식)의 경우는 올바른 대답을 해주지 않는다.
 * ------------------------------------------------------------
 */

// 역할: 생성자 함수(객체를 생성하는 자)를 통해 생성된 객체(인스턴스)인가?
// 객체 instanceof 생성자

arr instanceof Array; // true : typeof의 설계 오류 문제점을 해결할 수 있다!
//[] instanceof Array

// 약점: 원시 데이터 유형(리터럴 방식)의 경우는 올바른 대답을 해주지 않는다.
'primitive' instanceof String;             // false
new String('primitive') instanceof String; // true

/**
 * ----------------------------------------------------------
 * 자바스크립트 데이터 유형 체크 
 * 3. constructor 속성을 사용하는 방법
 * ㄴ> 객체 유형의 데이터에서는 완벽한 결과를 반환.
 * ㄴ> 객체가 아닌 유형에서는 오류를 발생시킨다.
 * ----------------------------------------------------------
 */

// ※ 객체 유형의 데이터에서는 완벽한 결과를 반환한다.
'primitive'.constructor === String;               // true
(new String('primitive')).constructor === String; // true

// 단... 객체가 아닌 유형에서는 오류를 발생시킨다.
// Uncaught TypeError: Cannot read property 'constructor' of null(…)
// 이유는... constructor 속성은 객체만이 가지는 속성이기 때문이다.
// (null).constructor; // null, undefined는 객체가 아니기 때문에 속성이 없다.


/**
 * --------------------------------
 * 연산자
 * 산술 연산자 +, -, *, /
 * 나머지 연산자 %
 * 증가(감소) 
 * --------------------------------
 */

var doll_message = ['안녕', '밥 먹었니?', '공부는 잘하고?', '결혼은 언제?', '아이는 몇 명?'];
for (var count = 0, messages = doll_message.length; count < messages; count++ ) {
  // console.log(doll_message[ count % messages ]);
}

// 증가(감소) 연산
var check_fact = 100;
// console.log(check_fact);
// console.log(check_fact++);
// console.log(check_fact);
// console.log(--check_fact);
// console.log(check_fact);
// console.log(check_fact--);
// console.log(check_fact);
// console.log(++check_fact);

/**
 * --------------------------------
 * 오늘은 무슨 요일일까?
 * --------------------------------
 */

// 0, 1, 2, 3, 4, 5, 6

// ex1.
// var today = 8;
// var today_is = today === 0 ? '일요일' :
// 			   today === 1 ? '월요일' :
// 			   today === 2 ? '화요일' :
// 			   today === 3 ? '수요일' :
// 			   today === 4 ? '목요일' :
// 			   today === 5 ? '금요일' :
// 			   today === 6 ? '토요일' : '레알 뭘 먹지?'
// console.log('오늘은 ' + today_is + ' 입나다.');


// ex2. 삼항식
// var today = new Date().getDay();
// var today_is = today === 0 ? '일요일' :
// 			   today === 1 ? '월요일' :
// 			   today === 2 ? '화요일' :
// 			   today === 3 ? '수요일' :
// 			   today === 4 ? '목요일' :
// 			   today === 5 ? '금요일' :
// 			   today === 6 ? '토요일' : false;
// console.log(today_is ? '오늘은 ' + today_is + ' 입나다.' : '레알 뭘 먹을까?');


// ex3. switch, case default
// switch(조건) {
// 	case 값: 코드 실행;
// 	case 값: 코드 실행;
// 	case 값: 코드 실행;
// 	case 값: 코드 실행;
// 	defalut: 
// }

var today_is, today = 5;
switch( today ) {
	case 0: 
		today_is = '일' ;
	break;
	case 1: 
		today_is = '월' ;
	break;
	case 2: 
		today_is = '화' ;
	break;
	case 3: 
		today_is = '수' ;
	break;
	case 4: 
		today_is = '목' ;
	break;
	case 5: 
		today_is = '금' ;
	break;
	case 6: 
		today_is = '토' ;
	break;
	defalut: today_is = false;
}
console.log(today_is ? '오늘은 ' + today_is + '요일입나다.' : '레알 뭘 먹을까?');


/**
 * --------------------------------
 * swtich ~ case 문 응용
 * 이벤트 제어 swtich (특정 케이스)
 * --------------------------------
 */

function init() {
  // 지역 변수
  var event_types = 'click dblclick mouseenter mouseover mouseout mouseleave focus blur'.split(' ');
  var random_count = Math.floor( Math.random() * event_types.length );
  var event_type = event_types[ random_count ];
  // console.log(event_type);
  var callback;
  var dom_el = query('.result');
  dom_el.innerHTML = 'this is dom object.';
  dom_el.setAttribute('tabindex', 0);
  console.log(event_type);

  switch(event_type) {
    case 'click':
    case 'dblclick':
      callback = function() {
        console.log('clicked object');
      };
    break;
    case 'mouseenter':
    case 'mouseover':
      callback = function() {
        console.log('mouse entered object');
      };
    break;
    case 'mouseout':
    case 'mouseleave':
      callback = function() {
        console.log('mouse entered object');
      };
    break;
    case 'focus':
    case 'blur':
      callback = function() {
        console.log('focused or blured object');
      };
  }

  dom_el['on'+event_type] = callback;
}

window.onload = init;