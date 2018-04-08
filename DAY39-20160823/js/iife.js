/**
 * --------------------------------------------------------------------------------------------------------------------
 * IIFE 패턴 (즉시실행 함수)
 * 함수 표현식을 사용하여 사용자가 이름을 호출하는 과정을 생략하고 즉시 실행되는 함수 패턴을 말한다.
 * 모듈 패턴에 자주 사용되며, 전역과 구분되는 지역을 형성함으로서 공개/비공개 멤버를 설정할 수 있다.
 * IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
 * --------------------------------------------------------------------------------------------------------------------
 */

/**
 * --------------------------------
 * ex1. 함수 표현식, 함수 값(Literal)
 * --------------------------------
 */
// var fn = function() {}; // 
// 	// 메모리 저장공간의 이름 fn을 통해 기억된 데이터(함수)를 실행
// fn();


/**
 * --------------------------------
 * ex2. 즉시 실행함수 패턴 1
 * --------------------------------
 */
// (function() {
// 	console.log('즉시 실행함수 패턴 1');
// })();


/**
 * --------------------------------
 * ex3. 즉시 실행함수 패턴 2
 * --------------------------------
 */
// (function() {
// 	console.log('즉시 실행함수 패턴 2');
// }());


/**
 * --------------------------------
 * ex4. 즉시 실행함수 패턴 1
 * global === window : true
 * --------------------------------
 */
(function(global) {
	console.log('즉시 실행함수 패턴 1'); 
	console.log(global === window); // true
})(this);


/**
 * --------------------------------
 * ex4. 즉시 실행함수 패턴 2
 * $j$ === window.jQuery : true
 * --------------------------------
 */
(function($j$) {
	console.log('즉시 실행함수 패턴 2');
	console.log($j$ === window.jQuery); // true
})(jQuery);


/**
 * --------------------------------
 * ex5. Closure
 * --------------------------------
 */
// var fnWrapper = function() {
// 	var fnInner = function () {};
// 	return fnInner;
// }
// var fnc = fnWrapper();


/**
 * --------------------------------
 * IIFE + Closure
 * --------------------------------
 */

// var fnc_iify = (function() {
// 	var fnInner = function () {};
// 	return fnInner;
// });

// var fnc_iify = (function() {
// 	return = function () {
// 	};
// });

/**
 * --------------------------------
 * 공개와 비공개
 * --------------------------------
 */

/**
 * --------------------------------
 * 모두 공개
 * --------------------------------
 */
// (function(claire){
//   claire.memory = ['a','b','c','d'];
//   console.log(claire.memory); // 
// })((this.claire = this.claire || {}));


/**
 * --------------------------------
 * ex1. 선택적 공개. 비공개
 * --------------------------------
 */
// (function(claire) {
// 	var members = [];
// 	var name = 'hoon';

// 	// 공개
// 	claire.job = 'instructor'; 
// 	claire.getName = function() {
// 		return name;
// 	}; 

// 	console.log(claire.job);
// 	console.log(claire.getName);
// }(this.claire || {}));


/**
 * --------------------------------
 * ex2. 선택적 공개. 비공개
 * --------------------------------
 */
(function(claire) {
	console.log(claire.memory); // undefined
	// 비공개
	var members = [];
	var name = 'hoon';
	var job = 'instructor'; // 비공개.

	// 공개
	claire.getName = function() {
		return name;
	}; 

	console.log(claire.getName);
}(this.claire = this.claire || {}));