###### Front-End Develop SCHOOL

# DAY 26
## ECMAScript
- 통칭 Javsscript라고 부르지만 실제 표준 명칭은 'ECMAScript'
- Ecma 인터내셔널의 ECMA-262 기술 규격에 정의
- Javsscript 창시자: 브랜던 아이크(Brendan Eich)
	- HTML 창시자: 팀 버너스리(Tim Berners-Lee)
	- CSS 창시자: 호콘 뷔움 리(Håkon Wium Lie)
- 1994년 Javsscript 탄생. (1996년 CSS 탄생)
- 현재 (2000년도에 나온)ECMA 262-3 에디션을 사용하고 있다.
- 2005년에 ECMA262-4 에디션은 전혀 다른 개혁을 하려고 기존 사용자를 무시하고 XML을 사용하려 했지만 기존 사용자층의 반대로 인하여 개발 중단. (ECMA262-4에디션 + XML(Extensible Markup Language) = E4X) 
- ES6(2015년 릴리즈), ES7(2016년 릴리즈) 계속 버전업.

### Javsscript 분류
- Javsscript Core : 문법 기본 문법과 구조, 데이터 타입, 조건문, 반복문, 함수, 객체, 클래스(생성자, 프로토타입) 등
- Javsscript Core Library : Javsscript에서 기본 제공되는 클래스(Number, String, Date, Math, Array, ..)
- Javsscript BOM(Browser Object Model) : 노드(Node), 스타일, 속성, 이벤트, 위치 및 크기 등을 다룰 수 있는 다양한 기능이 포함
- Javsscript DOM(Document Object Model) : 브라우저와 관련된 Window, Navagator, Location, History, Document, Screen 객체들이 포함

## BOM(Browser Object Model)
- Global Object - window
- window.location
- window.history
- window.screen
- window.navigator

```
// window : 최상위 객체

// 현재 사용자가 스크롤 한 페이지 높이 위치 값 반환
window.scrollY;

// 인자로 전달된 값을 창으로 띄운다
window.alert(인자);

var is_youngman = window.confirm('당신은 청년입니까?');

// 확인창에서 누른 값에 따라 변수에 담길 값이 변한다(true or false)
console.log('is_youngman: ', is_youngman); 

// 입력받은 문자를 담는다
var name = window.prompt('성함을 입력해 주세요');
console.log('환영합니다 ' + name + '님!');

// 전달한 인자 값만큼 이동(x, y)
window.scrollTo(0, 400); // 절대값
window.scrollBy(0, -200); // 상대값

// 시간 제어
//window.setInterval(할일(=함수), 시간(밀리초)) : 주기마다 반복
//window.setTimeout(할일(=함수), 시간(밀리초)) : 1회 실행
window.setInterval(conutDown, 1000);

// 반복작업을 시켰으나 멈출 장치를 마련하지 않았으므로 조건을 주어야 한다
var num = 10;
var interver_id = setInterval(function(){
  num = num + 4;
  console.log(num);
  if ( num > 30 ) {
    clearInterval(interver_id);
  }
}, 200);

// Location 객체, 다양한 속성이 있다
window.location.href; 
window.location.hash; 
window.location.pathname;
.
.
.

// History 객체
window.history.back(); // 뒤로 가기(바로 뒤)
window.history.forward(); // 앞으로 가기(바로 앞)
window.history.go(-2) // 뒤로 두번, 인자로 숫자를 전달한다

// Screen 객체, 브라우저가 가져온 스크린(사용자의 화면, 모니터)의 정보
window.screen.width;
window.screen.heigth;
window.screen.availWidth;
window.screen.availHeight;
window.screen.orientation.angle;
window.screen.orientation.type;
.
.
.

// Navigator 객체(중요)
window.navigator.userAgent; // 브라우저 식별자
window.navigator.cookieEnabled
window.navigator.onLine
.
.
.
// 모바일 식별
window.navigator.toLowerCase.indexOf('android') > -1
```

## DOM(Document Object Model)

```
window.document.title;
window.document.doctype;
window.document.compatMode;
window.document.activeElement
.
.
.

// 표준 모드 감지( 자바스크립트를 사용한 문서 동적 제어)
// 웹 표준 호환 모드라면 standard_mode에 true 값이 된다.
var standard_mode = document.compatMode == 'CSS1Compat';
// 문서에서 루트 요소인 <html> 요소를 찾아 변수 html에 할당
var html = document.documentElement; // html element

// 웹 표준 호환 모드라면 첫번째 코드 블럭문 실행
if ( standard_mode ) {
  // 변수 html에 참조된 문서 객체 <html>의 클래스를 'standard'로 설정
  html.setAttribute('class', 'standard');
} else {
  // 변수 html에 참조된 문서 객체 <html>의 클래스를 'no-standard'로 설정
  html.setAttribute('class', 'no-standard');
}
```
### 간단한 애니메이션
```html
<div id="box"></div>
```

```css
#box {
  width: 100px;
  height: 100px;
  background: black;
  position: abolute;
  top: 100px;
  left: 100px;
}
```

```js
// 함수 정의 : .box 객체를 위치 이동 시킨다
function moveBox() {
  // 문서에서 .box요소를 찾는다.
  // var box = document.getElementById('box');
  var box = document.querySelector('.box');

  // 가로 방향(left)으로 이동하도록 설정
  box.style.left = parseInt(box.style.left) + 20 + 'px';
}
setInterval(moveBox, 200)
```
> 가로방향으로 이동시, transform: translateX()을 권장한다. 
> position: abolute;의 left 값으로 제어를 할 경우 이동할 때마다 'repainting reflow' 발생이 되어 브라우저 성능 이슈가 생긴다.
> [repainting reflow] (https://www.youtube.com/watch?v=ZTnIxIA5KGw)