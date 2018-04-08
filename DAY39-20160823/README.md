###### Front-End Develop SCHOOL

# DAY 39

### this 컨텍스트 참조 변수
- 자바스크립트 언어는 영역(Scope)을 가진다.
- 영역으로 구분되는 공간은 크게 전역(Global Scope)과 지역(Local Scope)이 있다.
- 자바스크립트에서는 if, while, do ~ while, for 문 같은 블록문(`{}`) 내부는 영역이 아니다.
- 함수 데이터 유형의 블록문(`{}`) 내부에서는 공간이 형성된다.

#### this => 전역 콘텐스트 객체를 가르킨다. 
```javascript
console.log('1. 전역에서 실행한 this:', this); // window objcet
```

#### if, while, do ~ while, for문
```javascript
if(true) {
	console.log('2. if 블록문 내부에서 실행한 this:', this); // window objcet
}
```

#### 함수 myFn() 내부에서 실행한 this
```javascript
function myFn() {
	console.log('3. 함수 myFn() 내부에서 실행한 this:', this); // window objcet
}

myFn() // 결과: window objcet, 
// myFn()  === window.myFn(), 결과: window objcet
```

#### 엄격 모드로 함수 meFn() 내부에서 실행한 this
```javascript
function meFn() {
	'use strict';
	console.log('4. 엄격모드로 함수 meFn() 내부에서 실행한 this:', this);
}
meFn(); // 결과: undefined

// 이유: 엄격 모드(strict mode)에서는 기존의 설계 오류를 해결하기 위해
// 더 이상 암묵적으로 전역 콘텐스트 객체인 window에서 실행한 것처럼 처리하지 않기 때문
```

#### jQuery 함수 내부에서의 this
```javascript
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
```

### IIFE 패턴 (즉시실행 함수)
- 함수 표현식을 사용하여 사용자가 이름을 호출하는 과정을 생략하고 즉시 실행되는 함수 패턴을 말한다.
- 모듈 패턴에 자주 사용되며, 전역과 구분되는 지역을 형성함으로서 공개/비공개 멥머를 설정할 수 있다.

#### 즉시 실행함수 패턴
```javascript
(function(global) {
	console.log('즉시 실행함수 패턴 1'); 
	console.log(global === window); // true
})(this);

(function($j$) {
	console.log('즉시 실행함수 패턴 2');
	console.log($j$ === window.jQuery); // true
})(jQuery);
```

#### Closure
```javascript
var fnWrapper = function() {
	var fnInner = function () {};
	return fnInner;
}
var fnc = fnWrapper();
```

#### IIFE + Closure
```javascript
var fnc_iify = (function() {
	var fnInner = function () {};
	return fnInner;
});

var fnc_iify = (function() {
	return = function () {
	};
});
```
#### 공개와 비공개
```javascript
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
```

### jQuery
#### class 속성 제어 방법 - class로 제어
- `.hasClass()` 해당 클래스 속성을 소유했는가? Boolean
- `.addClass()` 해당 클래스가 없다면 추가한다. jQuery Object
- `.removeClass()` 해당 클래스가 있다면 제거한다. jQuery Object | 인자 값이 없다면 모든 클래스 속성을 제거한다.
- `.toggleClass()` 해당 클래스 속성을 토글한다. (해당 클래스 속성을 소유했다면 제거, 소유하지 않았다면 추가) 

#### 이벤트 객체 합성
- 매번 클릭할 마다 객체를 생성하는건 비용 발생. 객체 합성을 통해서 한번만.

```javascript
(function(global, $) {
  'use strict';
  function init() {
      var $demo_box = $('.demo-box');
      // 이벤트 위임
      $('.button-controls').on('click', 'button', {'$index': 0}, function(event) {
        switch(this.getAttribute('class')) {
          case 'addClass_look':
            // console.log('addClass_look');
            $demo_box.addClass('look');
            // $demo_box.addClass(function(index, current_class) {
            //   return '~' + current_class + '~';
            // });
          break;
          case 'removeClass_look':
            // console.log('removeClass_look');
            $demo_box.removeClass('look');
            // $demo_box.removeClass();
          break;
          case 'toggleClass_look':
            // console.log('toggleClass_look');
            // console.log(event.data.$index++ % 5 === 0);
            $demo_box.toggleClass('look');
            // $demo_box.toggleClass('look', event.data.$index++ % 5 === 0);
            // $demo_box.toggleClass( (event.data.$index += 3) % 6 === 0 ); // 나머지값이 '0'이 될때 실행
          break;
        }
      });
  };
  // 문서 객체 모델이 준비가 되면 init 함수 실행
  $(init);
}(this, this.jQuery));
```