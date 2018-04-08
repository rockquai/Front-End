/**
 * --------------------------------
 * jQuery 함수 내부에서의 this
 * --------------------------------
 */

/**
 * --------------------------------
 * jQuery ready문
 * --------------------------------
 */

// jQuery(document).ready(function($){});

/**
 * --------------------------------
 * ex1. jQuery this
 * --------------------------------
 */
// jQuery(function($){
// 	'use strict';
// 	console.log('jQuery 팩토리 함수에 전달된 콜백 함수 내부에서의 this:', this); // this === document
// });

/**
 * ----------------------------------------------------------------
 * ex2.
 * 매번 클릭할 마다 객체를 생성하는건 비용 발생. --> 객체 합성을 통해서 한번만.
 * {'$this': $demo1, 'index': 1} : 이벤트 객체, 'evt'에 합성
 * ----------------------------------------------------------------
 */

jQuery(function($){
	'use strict';
	var $demo1 = $('.demo1');
	$demo1.on('mousedown', {'$this': $demo1, 'index': 1}, function(evt){
		// 함수내의 전달 인자를 체크 할 떼 사용하는건 arguments
		// console.log(arguments);
		// 0.data.$this; === evt(첫번째인자).data.$this;
		// console.log('이벤트 객체의 .data.$this 참조 값:', evt.data.$this);
		console.log(evt.data.index++);
		var $this = evt.data.$this;
		$this.css('font-size', '+=20');
		console.log('this:', this); // this === .demo1 문서 객체
		console.log('$(this):', $(this).jquery); // jQuery 객체
	});
});