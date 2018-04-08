(function(global, $){
	'use strict';

	// $.dataManager = {
	// 	'support'   : function() { 로컬스토리지 또는 JSON 지원하는지 유무를 객체로 반환 }
	// 	'get' 		: function(key) { return 로컬 스토리로부터 데이터를 반환(문자 -> 객체) },
	// 	'set' 		: function(key, value) { 전달된 value를 문자화 해서 로컬스토리지 객체의 key값으로 저장 },
	// 	'del'		: function(key) { key에 해당하는 데이터를 로컬스토리지로부터 제거한다. },
	// 	'clear'		: function() { 로컬스토리지 데이터가 존재할 경우, 모든 데이터를 제거한다. }
	// };

	/**
	 * -----------------------------------
	 * jQuery 네임스페이스 객체(함수)
	 * 함수 객체의 속성으로 dataManger 객체를 설정
	 * jQuery 유틸리티 메소드라 명한다.
	 * -----------------------------------
	 */
	
	var dataManager = {
		'support' : (function() {
			// 한번만 감지하기 위해서 IIFE 안에 넣어 변수에 참조.
			// !!global.JSON ==> ture, fasle로 값을 반화 받아야 해서 '!!' 붙여서 형변환
			var json = !!global.JSON, localstorage = !!global.localstorage;
			return function(feature) {
				if ( !feature ) {
					return {
						'json' : json,
						'localstorage': localstorage
					};
				}
				// 매개변수 feature를 넣지 않으면 undefined가 되어 아래 구문이 실행이 되지 않는다.
				// feature는 호이스팅 되지않아 그대로 실행된다.
				feature = feature.toLowerCase(); 
				if ( feature == 'json' ) { return json; } // 위에서 '!!global.JSON'형변환 했던걸로  ture, fasle 값을 받을 수 있다.
				if ( feature == 'localstorage' ) { return localstorage; }
			}
		}()),

		// 'get': function(key) { return 로컬스토리지로부터데이터를 반환(문자->객체) },
		'get': function(key) {
			if (!key || $.type(key) !== 'string' || !this.support().json || this.support('localstorage')) {}
			return global.JSON.parse( global.localStorage.getItem(key) );
		},
		// 'set': function(key, value) { 전달된 value를 문자화 해서 로컬스토리지 객체의 key 값으로 저장 },
		'set': function(key, value) {
			if ( !key || !value || $.type(key) !== 'string' || !this.support().json || this.support('localstorage') ) {}
			global.localStorage.setItem(  key, global.JSON.stringify(value));
		},
		// 'del': function(key) { key에 해당하는 데이터를 로컬스토리지로부터 제거한다. },
		'del': function(key) { global.localStorage.removeItem(key); },
		// 'clear': function() { 로컬스토리지 데이터가 존재할 경우, 모든 데이터를 제거한다. }
		'clear': function() { global.localStorage.clear(); }
	};
	$.dataManager = dataManager;
	// 전역에 공개 : 덮어쓸 경우가 있어 위험. 사용 지양.
	// global.dataManager = dataManager;
})( this, this.jQuery );