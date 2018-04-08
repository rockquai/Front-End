// IIFE를 사용한 모던 모듈 패턴 활용 - dom-helper 함수 
// 클라이언트 환경
// 프론트엔드 개발 환경
// 모던 자바스크립트 모듈 패턴
var test;


(function(global){
	'use strict';

	function isType(data) {
		// Object.prototype.toString 메소드 빌려쓰기
		return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
	}

	function queryAll(selector_str, context) {
		if (typeof selector_str !== 'string') {
			throw new Error ('첫번째 전달인자는 문자 유형이어야 합니다.');
		} 
		if ( !context ) {
			context = document;
		}
		return context.querySelectorAll(selector_str);
	}

	function query(selector, context) {
		return queryAll(selector, context)[0];
	}

	function queryItem(selector, idx, context) {
		if ( !idx ) {
			idx = 0;
		}
		return queryAll(selector, context)[idx];
	}

	function $q(selector, hook, context) {
		var method;
		if ( hook === 1 ) {
			method = 'query';
		}
		else {
			method = 'queryAll';
		}
		return window[method](selector, context);
	}

	function getStyle(el, property, pseudo) {
		var value, el_style;
			if (el.nodeType !== 1) {
		console.error('첫번째 인자 el은 요소노드여야 합니다.');
		}
			if (typeof property !== 'string') {
		console.error('두번째 인자 property는 문자열이야 합니다.');
		}
			if (pseudo && typeof pseudo !== 'string') {
		console.error('세번째 인자 pseudo는 문자열이야 합니다.');
	}

		property = camelCase(property);

		if (window.getComputedStyle) {
			el_style = window.getComputedStyle(el, pseudo);
		if (pseudo && el_style.content === '') {
			return null;
		}
			value = el_style[property];
		} else {
			value = el.currentStyle[property];
		}
			return value;
	}

	function setStyle(elNode, property, value) {
		if ( isntElNode(elNode) ) {
			errorMsg('요소노드가 전달되어야 합니다.');
		}
		if (isType(property) !== 'string') {
			errorMsg('두번째 전달인자는 문자열이어야 합니다.');
		}
		elNode.style[property] = value;
	}

	function css(elNode, prop, value) {
		if ( !value ) {
			return getStyle(elNode, prop);
		} else {
			setStyle(elNode, prop, value);
		}
	}

	/**
	 * --------------------------------
	 * 외부에 공개하는 API
	 * 함수를 개별 반환 (위험....)
	 * --------------------------------
	 */
	// global.type = isType; 

	/**
	 * --------------------------------
	 * 네임스페이스 패턴
	 * 네임스페이스 객체를 생성하여 외부에 공개한다.
	 * --------------------------------
	 */

	global.object_name = {
		'type'	   : isType,
		'query'	   : query,
		'queryAll' : queryAll,
		'css'      : css
	}
})(this); // this === window object