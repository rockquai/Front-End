/**
 * --------------------------------
 * 스타일 제어 
 * .css() 사용 방법
 * --------------------------------
 */

/**
 * --------------------------------
 * ex1. 속성 값을 가져오기
 * --------------------------------
 */

// (function(global, $) {
// 	'use strict';
// 	var $body = $('body'); 
// 	var body_margin = $body.css('margin');
// 	console.log(body_margin);
// })(this, this.jQuery);

/**
 * --------------------------------
 * ex2. 속성 값을 설정하기
 * --------------------------------
 */

// (function(global, $) {
// 	'use strict';
// 	var $body = $('body'); 
// 	var body_margin = $body.css('margin');
// 	// console.log(body_margin);

// 	$body
// 		.css('margin-left', '2rem')
// 		.css('margin-right', '2rem');
// 	body_margin = $body.css('margin');
// 	console.log(body_margin);
// })(this, this.jQuery);

/**
 * --------------------------------
 * ex3. CSS 맵(객체)를 전달해서 설정하기
 * --------------------------------
 */

// (function(global, $) {
// 	'use strict';
// 	var $body = $('body'); 
// 	var body_margin = $body.css('margin');
// 	// console.log(body_margin);

// 	$body
// 		.css('margin-left', '2rem')
// 		.css('margin-right', '2rem');
// 	body_margin = $body.css('margin');

// 	var css_map = {
// 		'background': '#CC1AC0', 
// 		'color': '#fff',
// 		'font-size': '+=22' // 16px + 22 = 38px (font-size: 38px)
// 	};

// 	$body.css(css_map);
// 	var body_font_size = $body.css('font-size');
// 	console.log(body_font_size); // 38px
// })(this, this.jQuery);

/**
 * --------------------------------
 * ex4. 각 속성에 콜백 함수 설정
 * --------------------------------
 */

// (function(global, $){
// 	'use strict';
// 	var $body = $('body'); 
// 	var body_margin = $body.css('margin');
// 	// console.log(body_margin);
// 	$body
// 		.css('margin-left', '4rem')
// 		.css('margin-right', '4rem');
// 	body_margin = $body.css('margin');
// 	// console.log(body_margin);

// 	var css_map = {
// 		'background': '#CC1AC0', 
// 		'color': '#fff',
// 		'font-size': '+=22' // 16px + 22 = 38px (font-size: 38px)
// 	};

// 	$body.css(css_map);
// 	var body_font_size = $body.css('font-size');
// 	console.log(body_font_size); // 38px

// 	var fn_map = {
// 		'width': function(index, value) {
// 			// console.log('original width value', value);
// 			return global.parseFloat(value, 10)/2 + 70;
// 		},
// 		'height': function(index, value) {
// 			if(global.parseFloat(value, 10) < 300) {
// 				return '100vh'; 
// 			} else {
// 				return value * 2;
// 			}
// 		}
// 	};
// 	$body.css(fn_map);
// 	console.log('#1 - width', $body.css('width'));
// 	console.log('#2 - height', $body.css('height'));
// })(this, this.jQuery);

/**
 * --------------------------------
 * ex5
 * --------------------------------
 */

(function(global, $){
	'use strict';
	var $body = $('body'); 
	var body_margin = $body.css('margin');
	// console.log(body_margin);
	$body
		.css('margin-left', '4rem')
		.css('margin-right', '4rem');
	body_margin = $body.css('margin');
	// console.log(body_margin);

	var css_map = {
		'background': '#CC1AC0', 
		'color': '#fff',
		'font-size': '+=22' // 16px + 22 = 38px (font-size: 38px)
	};

	$body.css(css_map);
	var body_font_size = $body.css('font-size');
	console.log(body_font_size); // 38px

	var fn_map = {
		'width': function(index, value) {
			// console.log('original width value', value);
			return global.parseFloat(value, 10)/2 + 70;
		},
		'height': function(index, value) {
			if(global.parseFloat(value, 10) < 300) {
				return '100vh'; 
			} else {
				return value * 2;
			}
		}
	};
	$body.css(fn_map);
	console.log('#1 - width', $body.css('width'));
	console.log('#2 - height', $body.css('height'));
});
// (this, this.jQuery);

/**
 * ---------------------------------------
 * <h1> 요소 내부의 텍스트 글자를 쪼개서
 * 각각의 글자를 <span> 요소로 감싸도록 구성한다.
 * 각각의 <span> 요소에 마우스 엔터 이벤트를 설정하여
 * 글자의 색상을 변경한다.
 * ---------------------------------------
 */

/**
 * --------------------------------
 * ex1. 좋지 않는 코드
 * 이벤트 생성시 마다 this 문서 객체를
 * jQuery() 팩토리 함수로 감싸 jQuery
 * 생성자 함수를 사용하지 말아야 한다.
 * --------------------------------
 */

// (function(global, $){
// 	'use strict';

// 	var $h1 = $('.container h1');
// 	var h1_text = $h1.text();
// 	// console.log(h1_text); // jQuery Method

// 	// 문자 -> 배열화
// 	var h1_text = h1_text.split('');
// 	// console.log(h1_text); // ['j','Q',...,'d']
// 	// jQuery.map() 유틸리티 메소드(Static Method, Class Method)
// 	console.log(h1_text);

// 	$.map(h1_text, function(item, index) {
// 		// console.log($.trim(item));
// 		if( $.trim(item) ) {
// 			// console.log('<span>'+item+'</span>');
// 			return '<span>'+item+'</span>';
// 		} 
// 		// 빈 공백일 경우
// 		else {
// 			// 공백을 반환한다.
// 			return item;
// 		}
// 	});

// 	h1_text = h1_text.join('');
// 	$h1.html(h1_text); // Setter

// 	var $leftters = $('span', $h1); 
// 	// var $leftters = $h1.find('span'); 

// 	// 좋지 않는 코드
// 	$leftters.on('mouseenter', function() {
// 		$(this).css('background', '#ff0');
// 	});
// })(this, this.jQuery);

/**
 * --------------------------------
 * ex2. 쉬운 코드 하지만 좋지 않은 코드
 * --------------------------------
 */

// (function(global, $){
// 	'use strict';

// 	var $h1 = $('.container h1');
// 	var h1_text = $h1.text();
// 	// console.log(h1_text); // 'jQuery Method'
// 	// 문자 -> 배열화
// 	h1_text = h1_text.split('');
// 	// console.log(h1_text); // ['j','Q',...,'d']
// 	// jQuery.map() 유틸리티 메소드(Static Method, Class Method)
// 	h1_text = $.map(h1_text, function(item, index) {
// 		if($.trim(item)) {
// 		// console.log('<span>'+item+'</span>');
// 			return '<span>'+item+'</span>';
// 		} else {
// 			return item;
// 		}
// 	});

// 	h1_text = h1_text.join('');
// 	$h1.html(h1_text); //setter
// 	console.log($h1.html()); // getter

// 	// 쉬운 코드. 하지만 좋지 않은 코드
// 	var $letters = $('span', $h1); // $h1에서 span을 찾아와라
// 	// var $letters = $h1.find('span'); // 위와 같은 결과
// 	// $letters가 배열. jquery내부에 each문이 자동으로 해줌
// 	// 이 방법은 쉬우나 성능엔 좋지 않은 방법
// 	// 이벤트발생시마다 this 문서 객체를 jquery() 팩토리 함수로 감싸 jquery객체를 생성해야하기 때문
// 	$letters.on('mouseenter', function(){
// 		$(this).css('background', '#ff0');
// 	});
// })(this, this.jQuery);

/**
 * -----------------------------------------
 * ex3. 쉬운 코드. 하지만 좋지 않은 코드
 * 이렇게 함수 분리해서 코딩 가능
 * $(this) 팩토리함수를 쓰기 때문에 성능 이슈 발생!
 * -----------------------------------------
 */
// (function(global, $){
// 	'use strict';

// 	var $h1 = $('.container h1');
// 	var h1_text = $h1.text();
// 	// console.log(h1_text); // 'jQuery Method'
// 	// 문자 -> 배열화
// 	h1_text = h1_text.split('');
// 	// console.log(h1_text); // ['j','Q',...,'d']
// 	// jQuery.map() 유틸리티 메소드(Static Method, Class Method)
// 	h1_text = $.map(h1_text, function(item, index) {
// 		if($.trim(item)) {
// 		// console.log('<span>'+item+'</span>');
// 			return '<span>'+item+'</span>';
// 		} else {
// 			return item;
// 		}
// 	});

// 	h1_text = h1_text.join('');
// 	$h1.html(h1_text); //setter
// 	console.log($h1.html()); // getter

// 	// 함수 분리해서 코딩 가능
// 	var $letters = $('span', $h1);
// 	$letters.on('mouseenter', letterOver);
// 	function letterOver() {
// 		// $(this) 팩토리함수를 쓰기 때문에 성능 이슈 발생!
// 		$(this).css('background', '#ff0'); 
// 	}
// })(this, this.jQuery);

/**
 * --------------------------------------------------
 * ex4. 불필요한 처리를 하지 않는 코드를 작성하도록 
 * 코드 리뷰 -> 코드 리펙토링 
 * jquery의 each문 내에서의 this는 각각의 item이다. 
 * 팩토리함수를 사용하지 않고 each() 사용
 * each()는 ES문법의 foreach()는 배열, 유사배열만 가능하나,
 * jquery의 each()는 jquery 객체엔 모두 적용가능하다.
 * --------------------------------------------------
 */

// (function(global, $){
// 	'use strict';

// 	var $h1 = $('.container h1');
// 	var h1_text = $h1.text();
// 	// console.log(h1_text); // 'jQuery Method'
// 	// 문자 -> 배열화
// 	h1_text = h1_text.split('');
// 	// console.log(h1_text); // ['j','Q',...,'d']
// 	// jQuery.map() 유틸리티 메소드(Static Method, Class Method)
// 	h1_text = $.map(h1_text, function(item, index) {
// 		if($.trim(item)) {
// 		// console.log('<span>'+item+'</span>');
// 			return '<span>'+item+'</span>';
// 		} else {
// 			return item;
// 		}
// 	});

// 	h1_text = h1_text.join('');
// 	$h1.html(h1_text); //setter
// 	console.log($h1.html()); // getter

// 	var $letters = $('span', $h1);
// 	$letters.each(function(index, item){
// 		// var $this = $(this); // 팩토리함수. $(this) = item
// 		var $this = $letters.eq(index); // 팩토리함수를 쓰지않은 방법. 한번 캐쉬한 것들 재사용. 성능에 더 좋다.
// 		$this.on('mouseenter', function(){ // 클로저 개념과 비슷하다. 
// 			$this.css('color', '#52c88c ');
// 		});
// 	});
// })(this, this.jQuery);

/**
 * ----------------------------------------------------------------------------------
 * ex5. $.proxy 매소드 사용. 우회해서 사용한다.
 * 함수 분리하면 원래는 mouseenter 함수 내의 $this는 인식 못하지만
 * $.proxy(letterOvers, $this) 를 사용하면 $this가 letterOvers함수의 this와 같아 가능해진다.
 * ----------------------------------------------------------------------------------
 */

// (function(global, $){
// 	'use strict';

// 	var $h1 = $('.container h1');
// 	var h1_text = $h1.text();
// 	// console.log(h1_text); // 'jQuery Method'
// 	// 문자 -> 배열화
// 	h1_text = h1_text.split('');
// 	// console.log(h1_text); // ['j','Q',...,'d']
// 	// jQuery.map() 유틸리티 메소드(Static Method, Class Method)
// 	h1_text = $.map(h1_text, function(item, index) {
// 		if($.trim(item)) {
// 		// console.log('<span>'+item+'</span>');
// 			return '<span>'+item+'</span>';
// 		} else {
// 			return item;
// 		}
// 	});

// 	h1_text = h1_text.join('');
// 	$h1.html(h1_text); //setter
// 	console.log($h1.html()); // getter

// 	var $letters = $('span', $h1);
// 		$letters.each(function(index, item) {
// 			// var $this = $(item);
// 		var $this = $letters.eq(index);
// 		// $this.on('mouseenter', letterOvers);
// 		$this.on('mouseenter', $.proxy(letterOvers, $this));
//  	});

//  	function letterOvers() {
// 	 	console.log('this:', this);
// 	 	// $(this).css('color', '#52c88c');
// 	 	// console.log('$this:', $this);
// 	 	this.css('color', '#52c88c');
//  	}
// })(this, this.jQuery);

/**
 * --------------------------------
 * 사운드 입히기
 * --------------------------------
 */

/**
 * --------------------------------
 * ex1. 사운드 입히기
 * --------------------------------
 */

// (function(global, $){
// 	'use strict';

// 	var $h1 = $('.container h1');
// 	var h1_text = $h1.text();
// 	// console.log(h1_text); // 'jQuery Method'
// 	// 문자 -> 배열화
// 	h1_text = h1_text.split('');
// 	// console.log(h1_text); // ['j','Q',...,'d']
// 	// jQuery.map() 유틸리티 메소드(Static Method, Class Method)
// 	h1_text = $.map(h1_text, function(item, index) {
// 		if($.trim(item)) {
// 		// console.log('<span>'+item+'</span>');
// 			return '<span>'+item+'</span>';
// 		} else {
// 			return item;
// 		}
// 	});

// 	h1_text = h1_text.join('');
// 	$h1.html(h1_text); //setter
// 	console.log($h1.html()); // getter

// 	var $letters = $('span', $h1);
// 	$letters.each(function(index, item) {
// 		// var $this = $(item);
// 	var $this = $letters.eq(index);
// 	// $this.on('mouseenter', letterOvers);
// 	$this.on('mouseenter', $.proxy(letterOvers, $this));
// 	});

// 	function letterOvers() {
// 		console.log('this:', this);
// 		// $(this).css('color', '#52c88c');
// 		// console.log('$this:', $this);
// 		this.css({
// 			'transform': 'scale(1.5)',
// 			'color': '#52c88c',
// 			'margin': '0 0 0 10px'
// 		});
// 	}
// })(this, this.jQuery);

/**
 * --------------------------------
 * ex2. 사운드 입히기
 * HTML5 Audio 객체 생성
 * --------------------------------
 */

// (function(global, $){
// 	'use strict';

// 	var $h1 = $('.container h1');
// 	var h1_text = $h1.text();
// 	// console.log(h1_text); // 'jQuery Method'
// 	// 문자 -> 배열화
// 	h1_text = h1_text.split('');
// 	// console.log(h1_text); // ['j','Q',...,'d']
// 	// jQuery.map() 유틸리티 메소드(Static Method, Class Method)
// 	h1_text = $.map(h1_text, function(item, index) {
// 		if($.trim(item)) {
// 		// console.log('<span>'+item+'</span>');
// 			return '<span>'+item+'</span>';
// 		} else {
// 			return item;
// 		}
// 	});

// 	h1_text = h1_text.join('');
// 	$h1.html(h1_text); //setter
// 	console.log($h1.html()); // getter

// 	var $letters = $('span', $h1);
// 	$letters.each(function(index, item) {
// 		// var $this = $(item);
// 	var $this = $letters.eq(index);
// 	// $this.on('mouseenter', letterOvers);
// 	$this.on('mouseenter', $.proxy(letterOvers, $this));
// 	});

// 	function letterOvers() {
// 		console.log('this:', this);
// 		// $(this).css('color', '#52c88c');
// 		// console.log('$this:', $this);
// 		this.css({
// 			'transform': 'scale(1.5)',
// 			'color': '#52c88c',
// 			'margin': '0 0 0 10px'
// 		});
// 	}

// 	var effect_sound = $('<audio>');
// 	effect_sound.attr({
// 		'src': 'resources/media/tic.mp3'
// 	});
// 	effect_sound = effect_sound[0]; // 벗긴 dom객체가 필요할땐 '[0]'
// })(this, this.jQuery);


/**
 * --------------------------------
 * ex3. 사운드 입히기
 * HTML5 Audio 객체 생성
 * --------------------------------
 */

// (function(global, $){
// 	'use strict';

// 	var $h1 = $('.container h1');
// 	var h1_text = $h1.text();
// 	// console.log(h1_text); // 'jQuery Method'
// 	// 문자 -> 배열화
// 	h1_text = h1_text.split('');
// 	// console.log(h1_text); // ['j','Q',...,'d']
// 	// jQuery.map() 유틸리티 메소드(Static Method, Class Method)
// 	h1_text = $.map(h1_text, function(item, index) {
// 		if($.trim(item)) {
// 		// console.log('<span>'+item+'</span>');
// 			return '<span>'+item+'</span>';
// 		} else {
// 			return item;
// 		}
// 	});

// 	h1_text = h1_text.join('');
// 	$h1.html(h1_text); //setter
// 	console.log($h1.html()); // getter

// 	var $letters = $('span');
// 	$letters.each(function(index, item) {
// 		// var $this = $(item);
// 		var $this = $letters.eq(index);
// 		// $this.on('mouseenter', letterOvers);
// 		$this.on('mouseenter', $.proxy(letterOvers, $this));
// 		$this.one('mouseenter', $.proxy(playEffectSound, $this));
// 		// $this.one('mouseenter', playEffectSound.bind($this));
// 	});

// 	function letterOvers() {
// 		console.log('this:', this);
// 		// $(this).css('color', '#52c88c');
// 		// console.log('$this:', $this);
// 		this.css({
// 			'transform': 'scale(1.5)',
// 			'color': '#52c88c',
// 			'margin': '0 0 0 10px'
// 		});
// 	}

// 	var effect_sound = $('<audio>',{
// 		'src': 'resources/media/tong.mp3'
// 	})[0]; // 벗긴 dom객체가 필요할땐 '[0]'

// 	function audioStop(audio) {
// 		audio.pause();
// 		audio.currentTime = 0;
// 	}

// 	function playEffectSound() {
// 		// HTML5 Audio 실행
// 		// console.log('playEffectSound');
// 		// 음원이 플레이 중이라면 중지
// 		audioStop(effect_sound);
// 		effect_sound.play();
// 	}
// })(this, this.jQuery);

/**
 * --------------------------------
 * ex4. 최종 사운드 입히기
 * --------------------------------
 */
(function(global, $){
	'use strict';

	var $h1 = $('.container h1');
	var h1_text = $h1.text();
	// console.log(h1_text); // 'jQuery Method'
	// 문자 -> 배열화
	h1_text = h1_text.split('');
	// console.log(h1_text); // ['j','Q',...,'d']
	// jQuery.map() 유틸리티 메소드(Static Method, Class Method)
	h1_text = $.map(h1_text, function(item, index) {
		if($.trim(item)) {
		// console.log('<span>'+item+'</span>');
			return '<span>'+item+'</span>';
		} else {
			return item;
		}
	});

	h1_text = h1_text.join('');
	$h1.html(h1_text); //setter
	// console.log($h1.html()); // getter

	// var $letters = $('span', $h1);
	var $letters = $('span');
	$letters.each(function(index, item) {
		// var $this = $(item);
		var $this = $letters.eq(index);
		// $this.on('mouseenter', letterOvers);
		$this.on('mouseenter', $.proxy(letterOvers, $this));
		$this.one('mouseenter', $.proxy(playEffectSound, $this));
		// $this.one('mouseenter', playEffectSound.bind($this));
	});

	function letterOvers() {
		console.log('this:', this);
		// $(this).css('color', '#52c88c');
		// console.log('$this:', $this);
		this.css({
			'transform': 'scale(1.5)',
			'color': '#52c88c',
			'margin-right': '10px'
		});
	}

	// HTML5 Audio 객체 생성
	var effect_sound = $('<audio>',{
		'src': 'resources/media/tong.mp3'
	})[0]; // 벗긴 dom객체가 필요할땐 '[0]'

	function audioStop(audio) {
		audio.pause();
		audio.currentTime = 0;
	}

	function playEffectSound() {
		// HTML5 Audio 실행
		// console.log('playEffectSound');
		// 음원이 플레이 중이라면 중지
		audioStop(effect_sound);
		effect_sound.play();
	}
})(this, this.jQuery);