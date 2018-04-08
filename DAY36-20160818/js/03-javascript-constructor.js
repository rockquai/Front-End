(function(global) {
	'use strict';

/**
 * --------------------------------------------------------------------
 * 생성자 역할 수행하는 함수
 * 이름 짓는 관례 상 첫글자가 대문자로 작성된다.
 * 함수의 2가지
 * ㄴ> 일반함수로 실행
 * ㄴ> 생성자 함수 : 하나의 객체로 여러개 인스턴스(gnb, lnb, unb)를 생성
 * --------------------------------------------------------------------
 */

function Navigation(name) {
    this.name = name; // this: 생성된 객체를 가르킨다
    // return 객체를 생성해서 반환하다.
}

var gnb = new Navigation('글로벌 내비게이션 바'); 
var lnb = new Navigation('로컬  내비게이션 바');
var unb = new Navigation('글로벌 내비게이션 바');

//===> new를 붙이지 않으면 객체를 생성되지 않는다. new를 붙이지 않으면  undefined. 
//===> new가 필요없는건 math()객체


/**
 * --------------------------------
 * ES2015
 * class
 * --------------------------------
 */

// class Coffee {
// 	constructor() {}
// 	drink() {}
// 	addShot(){}
// }

}(this));


(function(global) {
	'use strict';

/**
 * --------------------------------------------------------------------
 * 숫자 객체 생성자를 사용하여 숫자 1부터 10까지를 변수 num1 ~ num10에 생성하라.
 * 단, num1 ~ num10에는 숫자 값이 담겨야 한다.
 * --------------------------------------------------------------------
 */

global.num1 = (new Number(1)).valueOf();
global.num2 = (new Number(2)).valueOf();
global.num3 = (new Number(3)).valueOf();
global.num4 = (new Number(4)).valueOf();
global.num5 = (new Number(5)).valueOf();
global.num6 = (new Number(6)).valueOf();
global.num7 = (new Number(7)).valueOf();
global.num8 = (new Number(8)).valueOf();
global.num9 = (new Number(9)).valueOf();
global.num10 = (new Number(10)).valueOf();



/**
 * --------------------------------------------------------------------
 * 블리언 객체 생성자를 사용하여 불리언 true, false로 연속되는 변수 boo1 ~ boo10에 생성하라.
 * 단, boo1 ~ boo10에는 불리언 값이 담겨야 한다.
 * --------------------------------------------------------------------
 */

global.boo1 = (new Boolean(true)).valueOf();
global.boo2 = (new Boolean(false)).valueOf();
global.boo3 = (new Boolean(true)).valueOf();
global.boo4 = (new Boolean(false)).valueOf();
global.boo5 = (new Boolean(true)).valueOf();
global.boo6 = (new Boolean(false)).valueOf();
global.boo7 = (new Boolean(true)).valueOf();
global.boo8 = (new Boolean(false)).valueOf();
global.boo9 = (new Boolean(true)).valueOf();
global.boo10 = (new Boolean(false)).valueOf();

}(this));