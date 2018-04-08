/**
 * --------------------------------
 * if문
 * --------------------------------
 */

// deivce_pixel_density ==> dp로 줄임.
// 카멜케이스 표기식
// Sass의 변수 : $dp: value;
// JS의 변수 : var dp ==> 전역, 지역이든 무조건 'var'를 붙여야 한다!!!

var dp = window.devicePixelRatio;

// 웹 브라우저 콘솔(consol) 패널에 기록(Log)를 남긴다.
// console.log('기기의 픽셀 농도:', dp); // ios: 정수, 안드로이드: 실수

// Sass 조건문
// @if dp > 1 {
// 	@debug "고해상도 디스플레이의 픽셀 농도를 가집니다.";
// } @else {
// 	@debug "일반 디스플레이의 픽셀 농도를 가집니다.";
// }

// javascript 조건문
if ( dp == 1) {
	console.log("일반 디스플레이의 픽셀 농도를 가집니다.");
} else {
	console.log("고해상도 디스플레이의 픽셀 농도를 가집니다.");
}

/**
 * -----------------------------------------------
 * window의 화면 가록 폭 (브라우저 맨위 주소창, 메뉴 제외)
 * -----------------------------------------------
 */

var window_width  = window.innerWidth;
var window_height = window.innerHeight;

console.log('window_width:', window_width); // 1280
console.log('window_height:', window_height); // 221

/**
 * --------------------------------
 * window.scrollX
 * window.pageXOffset
 * window.scrollY
 * window.pageYOffset
 * --------------------------------
 */

// window.scrollTop 도 사용하는 브라우저도 있다. 
// window.pageXOffset == window.scrollX // true
// window.pageYOffset == window.scrollY // true
// document.all

var window_scrollX = window.scrollX;
var window_scrollY = window.scrollY;

console.log('window_scrollX:', window_scrollX);
console.log('window_scrollY:', window_scrollY);

// 변수 서언만 하는 경우. 즉, 값이 대입(할당)되지 않은 경우
// undefined 값이 기본으로 활당되어 있다.
// ==> Sass는 명시적으로 null값 할당.
// '=' 연산자는 "활당(대입) 연산자" 이다.

var scroll_Y; //undefined

// 이미 객체에 속성이 정해진 값을 사용자가 덮어쓰게 된다면, 덮어쓴 값이 출력된다. 
// 자바스크립트 약점. 태생적 한계이다.
// 초창기 자바스크립트 환경에서는 문법이 엄격할 수가 없었다.

// window 전역 객체의 속성 중에 scrollTop이 있는가 확인??
// scrollTop을 지원한다는 것은 구형 IE를 감지하는 것이다. 
// Window.pageYOffset : IE9이상 지원. scrollTop:

if (window.scrollTop) {
	// scrollTop 속성이 window 전역 객체에 존재한다면 (조건이 참(True))
	// scrollY 변수에 window.scrollTop이 가리키는 값을 할당한다.
	scroll_Y = window.scrollTop;
}
// 그렇지 않다면 (위에 조건이 거짓(false)인 경우) 
else {
	// scrollY 변수에 window.scrollY이 가리키는 값을 활당한다.
	scroll_Y = window.scrollY;
}


/**
 * --------------------------------
 * window 객체의 메소드(함수)
 * 매소드(Method)란?
 * 객체가 소유하고 있는 함수를 가리킨다.
 * --------------------------------
 */

// window.alert('hi');
// var is_youngman = window.confirm('당신은 청년입니까?');
// console.log('is_youngman', is_youngman); // 취소: fasle, 확인: true

// var is_youngman = window.confirm('당신은 청년입니까?');
// if ( is_youngman ) {
// 	console.log('true');
// } else {
// 	console.log('false');
// }

// 사용자의 입력 값을 받아왔다면 이를 기억해 두기 위해서 변수가 필요하다.
// var user_name = window.prompt('당신의 이름은 무엇입니까?', '예) 홍길동');
// window.alert(user_name + '님 반값습니다.');


/**
 * --------------------------------
 * - 시간제어
 * 어떤 주기 마다 시간에 따라 반복적으로 설정. 
   window.setInterval(할일, 시간) // 주기마다 계속 반복
   window.setTimeout(할일, 시간) // 1회 반복
 * --------------------------------
 */

// Sass 함수
// $count: 10;
// @function countDown(){
// 	$count: $count - 1;
// 	@return $count;
// }

// JS 함수
// var count = 10;
// function countDown() {
// 	count = count - 1;
// 	return count;
// }

// 주기(시간)마다 수행되는 일을 처리할 경우에 아래와 같은 구문을 사용할 수 있다.
// window.setInterval(countDown, 1000)

// window.setInterval(countDown(), 1000)
// ㄴ> countDown() 바로 실행이 되어버린다. 'return count;'을 반환한다. '9' 반환.

// 컴퓨터에게 일을 반복적으로 수행하도록 시켰으나,
// 이를 멈출 수 있는 장치를 마련하지 않고 사용하면 안된다.

// var count = 10;
// function countDown() {
// 	count = count - 1;
// 	return count;
// }

// window.setInterval(countDown, 1000);

//////////////////////////////////////////////////////////////////

function init() {
	console.log('문서 로드가 완료되었다.');
	return 1;
}

// 사용자가 직접 함수를 실행할 때에는 실행 연산자가 필요하다. 
// init();

// 이벤트가 함수를 처리할 때는 실행 연산자를 붙이지 않아야 한다. 
window.onload = init();
























