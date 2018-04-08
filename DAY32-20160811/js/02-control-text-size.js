/**
 * --------------------------------------
 * ex1. 글자 크기 버튼 함수
 * ㄴ> inline style로 되어진 font-size값 추출
 * --------------------------------------
 */

// // 문자
// var page_header = query('.page-header');
// var increase_btn = query('.btn-increase-text');
// var decrease_btn = query('.btn-decrease-text');

// // 검증
// // console.log('page_header:', page_header);
// // console.log('increase_btn:', increase_btn);
// // console.log('decrease_btn:', decrease_btn);

// // page_header 요소 객체의 글자 크기 초기화
// page_header.style.fontSize = '16px';

// // 버튼에 이벤트 핸들링(핸들러 바인딩)
// increase_btn.onclick = function() {
// 	//page-header의 글자 크기를 키운다.
// 	//글자 크기를 연산이 가능하도록 변경.
// 	var current_size = parseInt(page_header.style.fontSize);
// 	// console.log(current_size);
// 	// 글자 크기를 변경(키움)하여 해당 요소에 설정한다 
// 	page_header.style.fontSize = current_size + 5 + 'px';
// 	console.log(page_header);
// };

// decrease_btn.onclick = function() {
// 	//page-header의 글자 크기를 줄인다.
// 	var current_size = parseInt(page_header.style.fontSize);
// 	page_header.style.fontSize = current_size + -5 + 'px';
// 	console.log(page_header);
// };


// /**
//  * ---------------------------------------------
//  * ex2. 하나의 함수에서 조건 분기를 통해 제어 
//  * HTML의 '+', '-' nodeValue를 가져와서 만든 방법
//  * ---------------------------------------------
//  */

// 문서에서 선택한 요소노드(객체) 참조
// var page_header  = query('.page-header');
// var increase_btn = query('.btn-increase-text');
// var decrease_btn = query('.btn-decrease-text');
// var change_text  = 10;

// // 글자 크기 변경 함수 
// function changeTextSize() {
// 	var operator = this.firstChild.nodeValue; // '+'
// 	console.log(this); // <button>
// 	var _change_txt = change_text;
// 	// page_header의 글자 크기를 키운다.
// 	// 글자 크기를 연산이 가능하도록 변경
// 	var current_size = parseInt(page_header.style.fontSize);
// 	if (operator === '-') {
// 		_change_txt = change_text * -1;
// 	}
// 	page_header.style.fontSize = current_size + _change_txt + 'px';	
// };

// // page_header 요소 객체의 글자 크기 초기화
// page_header.style.fontSize = '16px';

// // 버튼에 이벤트 핸들링(핸들러 - 바인딩)
// increase_btn.onclick = changeTextSize;
// decrease_btn.onclick = changeTextSize;


// /**
//  * -----------------------------------------------------------------------------
//  * ex3. 글자 크기 제한 
//  * [문제발생!] '+': 46px이 되었을 때 40px로, '-': 2px이 되었을 때 12px로 되어 튕기는 현상 발생!
//  * -----------------------------------------------------------------------------
//  */

// // 문서에서 선택한 요소노드(객체) 참조
// var page_header  = query('.page-header');
// var increase_btn = query('.btn-increase-text');
// var decrease_btn = query('.btn-decrease-text');
// var change_text  = 10;
// var limit_up     = 40;
// var limit_down   = 12;

// // 글자 크기 변경 함수 
// function changeTextSize() {
// 	var operator = this.firstChild.nodeValue;
// 	// console.log(this);
// 	var _change_txt = change_text;
// 	// page_header의 글자 크기를 키운다.
// 	// 글자 크기를 연산이 가능하도록 변경
// 	var current_size = parseInt(page_header.style.fontSize);
// 	if (operator === '-') {
// 		_change_txt = change_text * -1;
// 	}

// 	if ( current_size > limit_up || current_size < limit_down ){
// 		if ( current_size > limit_up ) {
// 			page_header.style.fontSize = limit_up + 'px';
// 		}
// 		if ( current_size < limit_down ) {
// 			page_header.style.fontSize = limit_down + 'px';
// 		}
// 		return;
// 	}
// 	page_header.style.fontSize = current_size + _change_txt + 'px';
// };

// // page_header 요소 객체의 글자 크기 초기화
// page_header.style.fontSize = '16px';

// // 버튼에 이벤트 핸들링(핸들러 - 바인딩)
// increase_btn.onclick = changeTextSize;
// decrease_btn.onclick = changeTextSize;


/**
 * --------------------------------------------------------------------
 * ex4. 글자 크기 제한 - 문제해결!  
 * [방식1] 인라인 값을 가져오는 경우
 * --------------------------------------------------------------------
 */

// 문서에서 선택한 요소노드(객체) 참조
// var page_header  = query('.page-header');
// var increase_btn = query('.btn-increase-text');
// var decrease_btn = query('.btn-decrease-text');
// var change_text  = 10;
// var limit_up     = 46;
// var limit_down   = 12;

// // 글자 크기 변경 함수
// function changeTextSize() {
//   // console.log('context:', this.firstChild.nodeValue);
//   var operator = this.firstChild.nodeValue;
//   var _current_text;
//   // page_header의 글자 크기를 키운다.
//   // 글자 크기를 연산이 가능하도록 변경
//   // [방식1] 인라인 값을 가져오는 경우
//   var current_size = parseInt(page_header.style.fontSize);

//   if (operator === '+') {
//     _current_text = current_size + change_text;
//   } else {
//     _current_text = current_size - change_text;
//   }
//   // 글자 크기를 변경(키움)하여 해당 요소에 설정
//   if ( _current_text > limit_up || _current_text < limit_down) {
//     _current_text = current_size;
//   }

//   page_header.style.fontSize = _current_text + 'px';
//   // console.log(page_header.style.fontSize);
// };

// // 검증
// // console.log('page_header:', page_header);
// // console.log('increase_btn:', increase_btn);
// // console.log('decrease_btn:', decrease_btn);

// // page_header 요소 객체의 글자 크기 초기화
// page_header.style.fontSize = '16px';

// // 버튼에 이벤트 핸들링(핸들러 - 바인딩)
// increase_btn.onclick = changeTextSize;
// decrease_btn.onclick = changeTextSize;


/**
 * ------------------------------------------------------------
 * ex5. CSS 스타일에서 가져오는 방법
 * [방식2] getStyle()헬퍼 함수를 이용하여 값 추출.
 * ㄴ> parseInt( getStyle(page_header, 'font-size') );
 * ------------------------------------------------------------
 */

// 문서에서 선택한 요소노드(객체) 참조
var page_header  = query('.page-header');
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');
var change_text  = 10;
var limit_up     = 46;
var limit_down   = 12;

// 글자 크기 변경 함수
function changeTextSize() {
  // console.log('context:', this.firstChild.nodeValue);
  var operator = this.firstChild.nodeValue;
  var _current_text;
  // page_header의 글자 크기를 키운다.
  // 글자 크기를 연산이 가능하도록 변경

  // [방식1] 인라인 값을 가져오는 경우
  // var current_size = parseInt(page_header.style.fontSize); 

  // [방식2] CSS 값을 가져오는 경우 - getStyle()헬퍼 함수를 이용하여 값 추출.
  var current_size = parseInt( getStyle(page_header, 'font-size') );

  if (operator === '+') {
    _current_text = current_size + change_text;
  } else {
    _current_text = current_size - change_text;
  }
  // 글자 크기를 변경(키움)하여 해당 요소에 설정
  if ( _current_text > limit_up || _current_text < limit_down) {
    _current_text = current_size;
  }
  page_header.style.fontSize = _current_text + 'px';
};

// 버튼에 이벤트 핸들링(핸들러 - 바인딩)
// var operator = this.firstChild.nodeValue; ==> this의 context는 함수에 대입된 클릭된 주체에서 볼 수 있다.
increase_btn.onclick = changeTextSize;
decrease_btn.onclick = changeTextSize;