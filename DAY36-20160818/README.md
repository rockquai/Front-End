###### Front-End Develop SCHOOL

# DAY 36

### 코드를 작성하기 위한 공간을 생성 : IIFE 패턴

```javascript
(function(global){
    'use strict';
    var claire = 'hi'; // 지역변수
})(this);
console.log(claire); // claire is not defined
```

```javascript
(function(global) {
	'use strict';
	var claire; // 지역 변수 (전역과 충돌이 안된다.)
	console.log(claire); //undefined

	// 전역으로 공개할 경우 (노출 패턴 = 외부에 공개)
	global.claire = claire; 

}(this));
console.log(claire); // undefined
```

### 요일 출력하기!

```javascript
(function(global){
  'use strict';

  // 스크립트를 사용해 오늘이 무슨 요일인지 알 수 있다.
  var today = (new Date()).getDay();
  // var today = 6; // 0 ~ 6
  console.log(today);
  // 주중, 주말인지를 구분하여 콘솔에 출력한다.
  switch(today) {
    // 주말이면... "주말이다. 놀자!"라고 출력.
    case 0:
    case 6:
      console.log("주말이다. 놀자!");
    break;
    // 주중이라면... "아... 출근이여.." 라고 출력.
    default:
      console.log("아... 출근이여..");
  }
}(this));
```

### 각 버튼을 사용자가 클릭할 경우, 자신의 순환 인덱스 숫자를 콘솔에 출력하기!

```html
<div role="group" class="button-set">
	<button type="button" class="button">Button X-012</button>
	<button type="button" class="button">Button X-013</button>
	<button type="button" class="button">Button X-014</button>
	<button type="button" class="button">Button X-015</button>
	<button type="button" class="button">Button X-016</button>
</div>
```

```javascript
var button_set = query('.button-set');
var buttons = makeArray( queryAll('.button', button_set) );
```

#### 방법1. forEach()문
```javascript
	buttons.forEach(function(button, index, buttons){
		// arguments 함수 내부에서만 접근 가능한 매개변수(전달인자들을 묶어 놓은 집합 객체)
		// console.log(arguments); // 유사 배열 객체이다.
		button.onclick = function() {
			console.log(index); // 0 ~ 4
		};
	});
```

#### 방법2. for문 - 클로저를 사용하지 않고 button이라는 객체에 속성을 추가하는 방법
```javascript
	for ( var button, i=0, l=buttons.length; i<l; i+=1 ) {
		button = buttons[i];
		// 객체.속성을 추가하여 for문이 돌 때 마다 각 버튼 객체의 index 속성에 i 값을 할당한다.
		button.index = i
		button.onclick = function() {
			// this 키워드 컨텍스트를 참조하는 변수
			// this를 사용하여 각 버튼 객체의 index 속성 값에 접근하여 출력한다.
			console.log(this.index);
		};
	}
```

#### 방법3. 유사배열을 배열로 만들지 않고 Array의 메서드를 빌려쓰기
```javascript
	Array.prototype.forEach.call(buttons, function(item, index){
		item.onclick = function(event){
		event.preventDefault();
		console.log(index)
		}
	});
```

### 