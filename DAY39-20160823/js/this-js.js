/**
 * ----------------------------------------------------------------------------------
 * HTML5 문서에서 <h1>은 여러 번 사용 가능한가?
 * ----------------------------------------------------------------------------------
 * HTML5 문서부터는 <h1> 요소를 기존처럼 사용할 수도 있고,
 * sectioning content element 내부에서는 다수 사용 가능하다.
 * https://www.w3.org/TR/html5/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
 * ---------------------------------------------------------------------------------- */

/**
 * ----------------------------------------------------------------------------------
 * this 컨텍스트 참조 변수
 * ----------------------------------------------------------------------------------
 * 자바스크립트 언어는 영역(Scope)을 가진다.
 * 영역으로 구분되는 공간은 크게 전역(Global Scope)과 지역(Local Scope)이 있다.
 * 자바스크립트에서는 if, while, do ~ while, for 문 같은 블록문(`{}`) 내부는 영역이 아니다.
 * 함수 데이터 유형의 블록문(`{}`) 내부에서는 공간이 형성된다.
 * ---------------------------------------------------------------------------------- */

/**
 * ----------------------------------------
 * ex1. this => 전역 콘텐스트 객체를 가르킨다. 
 * ----------------------------------------
 */

console.log('1. 전역에서 실행한 this:', this); // window objcet

/**
 * --------------------------------
 * ex2. if, while, do ~ while, for문
 * --------------------------------
 */

if(true) {
	console.log('2. if 블록문 내부에서 실행한 this:', this); // window objcet
}

/**
 * --------------------------------
 * ex3. 함수 myFn() 내부에서 실행한 this
 * --------------------------------
 */

function myFn() {
	console.log('3. 함수 myFn() 내부에서 실행한 this:', this); // window objcet
}

myFn() // 결과: window objcet, 
// myFn()  === window.myFn(), 결과: window objcet

/**
 * -------------------------------------------------------------------
 * ex4. 엄격 모드로 함수 meFn() 내부에서 실행한 this
 * 이유: 엄격 모드(strict mode)에서는 기존의 설계 오류를 해결하기 위해
 * 더 이상 암묵적으로 전역 콘텍스트 객체인 window에서 실행한 것처럼 처리하지 않기 때문
 * -------------------------------------------------------------------
 */
 
function meFn() {
	'use strict';
	console.log('4. 엄격모드로 함수 meFn() 내부에서 실행한 this:', this);
}
meFn(); // 결과: undefined

/**
 * --------------------------------------------------------------------
 * ex5. 엄격 모드(strict mode)
 * 이유: 엄격 모드(strict mode)에서 실행 시, 명시적으로 실행 콘텍스트 객체를 설정하면
 * this는 명시적으로 설정된 실행 콘텍스트 객체를 가리키기 때문
 * --------------------------------------------------------------------
 */

function meFn() {
	'use strict';
	console.log('5. use strict 모드로 함수 window.meFn() 내부에서 실행한 this:', this);
}
window.meFn(); // 결과: window objcet === this.meFn();


/**
 * --------------------------------
 * function
 * --------------------------------
 */
var demo1 = document.querySelector('.demo1');
var demo2 = document.querySelector('.demo2');

demo1.onmouseenter = myFn; // 결과: this === demo1

demo1.onclick = function() {
  // Function.prototype.call 메소드를 사용하여 함수를 빌려쓰기 패턴 - 컨텍스트 바꿀 수 있다.
  // Function.prototype : 원형객체 
  // 능력중에 call를 사용.
  myFn();          // 결과: this === window object
  myFn.call(this); // 결과: this === demo1, (this -> 객체) this는 myFn()를 빌려쓴다.
};

demo2.onmouseenter = meFn; // 결과: this === demo2

demo2.onclick = function() {
  meFn();          // 결과: this === undefined 
  window.meFn();   // 결과: this === window object
  meFn.call(this); // 결과: this === demo2
};