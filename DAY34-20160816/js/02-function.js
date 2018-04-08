/**
 * ----------------------------------------------------
 * ex1. 공백 제거 함수 
 * ----------------------------------------------------
 */

// ECMAScript 3rd Edition
function cleanWhilteSpace(el) {
	el = el || document;
	var current_node = el.firstChild;
	while( current_node ) {
		if ( current_node.nodeType === 3 && !/\S/.test(current_node.nodeValue) ) {
		removeNode(current_node);
	} else if ( current_node.nodeType === 1 ) {
		cleanWhiteSpace(current_node);
	}
		current_node = current_node.nextSibling;
	}
}

/**
 * ---------------------------------------
 * ex2. 공백 제거 함수 
 * ECMAScript 2015 Syntax (ES6)
 * function cleanWhilteSpace(el) {...}
 * ---------------------------------------
 */
var cleanWhiteSpace = (element=document) => {
    // element = element || document; 기존 ES5 의 초기화
    var current_node = element.firstChild;
    while (cur != null){
        // text 노드이고, 공백이 존재하다면
        if (current_node.nodeType === 3 && !/\S/.test(current_node.nodeValue)){
            // element.removeChild(current_node);
            remove(current_node);
        } else if (current_node.nodeType === 1){
            cleanWhiteSpace(cur);
        }
        current_node = current_node.nextSibling;
    }
}

/**
 * --------------------------------
 * Javascript 함수를 작성하는 3가지 방법
 * --------------------------------
 */

/**
 * --------------------------------
 * 0. 사용하지 말아야 할 방법 
 * --------------------------------
 */

// var fn0 = new Function('console.log("%c 쓰지 말자!", \'font-weight: 900; color: hsl(171, 61%, 37%)\'); return "쓰지 말자!";');
// console.log('fn0():', fn0()); // 함수 실행

/**
 * --------------------------------
 * 1. 함수 선언문 
 * --------------------------------
 */

function fn1() {
	console.log('%c 선언된 함수가 실행되었다.', 'font-weight: 900; color: hsl(171, 61%, 37%)');
	return '선언된 함수가 실행되었다.';;
}
console.log('fn1():', fn1());

/**
 * ---------------------------------------------
 * 2. 함수 표현식
 * 표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행.
 * ---------------------------------------------
 */

var fn2 = function() {
	console.log('%c 표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.', 'font-weight: 900; color: hsl(171, 61%, 37%)');
	return '표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.';
};
console.log('fn2():', fn2());


/**
 * ------------------------------------------------------------------------
 * 자바스크립트 호이스팅(Hoist: 끌어 올려진다) 현상 발생
 * 모든 변수(var)는 해당 영역(Scope)의 맨 윗부분으로 끌어올려(Hoist)진다. 
 * 함수 또한 변수에 할당되는 객체이기 때문에 동일한 방식으로 처리된다. 
 * 함수 선언문을 사용하면 함수 자체가 호이스팅되기 때문에 오류가 발생할 가능성이 농후하다.
 * ------------------------------------------------------------------------
 */

// 

/**
 * --------------------------------
 * 함수 선언문, 표현식 호이스팅 된 경우
 * --------------------------------
 */

// 1. 함수 선언문
console.log('fn1():', fn1());
function fn1() {
  console.log('%c 선언된 함수가 실행되었다.', 'font-weight: 900; color: hsl(171, 61%, 37%)');
  return '선언된 함수가 실행되었다.';
}

// 2. 함수 표현식
console.log('fn2():', fn2());
var fn2 = function() {
  console.log('%c 표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.', 'font-weight: 900; color: hsl(171, 61%, 37%)');
  return '표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.';
};

/**
 * --------------------------------
 * 스코프
 * --------------------------------
 */

//ex1.
var king = '전역의 왕';
function king_type1(king) {
	function king_type2(king) {
		console.log(king);
	}
	king_type2();
}
king_type1('the king of fighiters 2016'); 


// 지역변수 : 함수 
// for, if, while
var king = '전역의 왕';
function king_type1(king) {
	function king_type2() {
		console.log(king);
	}
	king_type2();
}
king_type1(); 