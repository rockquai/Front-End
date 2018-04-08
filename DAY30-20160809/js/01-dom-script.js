/**
 * --------------------------------------------------
 * 다음 HTML 코드를 동적으로 <body> 요소 내부에 추가하기!
 * --------------------------------------------------
 */

// <div class="modal">
//   <h2 class="modal-title">Modal Window</h2>
//   <p class="modal-desc">Modal Window Content....</p>
//   <button class="modal-cta">send message</button>
//   <button class="modal-close" aria-label="close modal window">x</button>
// </div>

// 노드 생성
var modal = document.createElement('div');
// 노드 속성 설정
modal.setAttribute('class', 'modal');
//------------------------------------------------------------------------
var modal_title = document.createElement('h2');
var modal_title_txt = document.createTextNode('Modal Window');
modal_title.setAttribute('class', 'modal-title');
modal_title.appendChild(modal_title_txt);
//------------------------------------------------------------------------
var modal_desc = document.createElement('p');
var modal_desc_txt = document.createTextNode('Modal Window Content....');
modal_desc.setAttribute('class', 'modal-desc');
modal_desc.appendChild(modal_desc_txt);
//------------------------------------------------------------------------
var btn_modal_cta = document.createElement('button');
var btn_modal_cta_txt = document.createTextNode('send message');
btn_modal_cta.setAttribute('class', 'modal-cta');
btn_modal_cta.setAttribute('type', 'button');
btn_modal_cta.appendChild(btn_modal_cta_txt);
//------------------------------------------------------------------------
var btn_modal_close = document.createElement('button');
var btn_modal_close_txt = document.createTextNode('x');
btn_modal_close.setAttribute('class', 'modal-close');
btn_modal_close.setAttribute('type', 'button');
btn_modal_close.setAttribute('aria-label', 'close modal window');
btn_modal_close.appendChild(btn_modal_close_txt);
//------------------------------------------------------------------------
// 생성된 모든 노드를 병합
modal.appendChild( modal_title );
modal.appendChild( modal_desc );
modal.appendChild( btn_modal_cta );
modal.appendChild( btn_modal_close );
// <body> 요소 맨 뒷편에 삽입
// document.body.appendChild(modal);

// 
/**
 * ---------------------------------------
 * <body> 요소 맨 앞편에 삽입 
 * 방법1. insertBefore(insert, target)
 * 방법2. 사용자 정의(Custom) 헬퍼함수 
 * ---------------------------------------
 */

/**
 * -----------------------------------------------------------------------------
 * 방법1. 표준 지원되는 DOM API 방법인 insertBefore() 메소드를 활용
 * 부모(body)안에 맨 끝에 삽입. (<script> 앞에.)
 * => target_node.parentNode.insertBefore(insert_node, target_node)
 * -----------------------------------------------------------------------------
 */
// var body = document.body;
// // 1. body안에 자식인 script를 찾는다.
// var script_in_body = body.querySelector('script') // IE8+
// // console.log(script_in_body); // script
// var script_parent = script_in_body.parentNode;
// // console.log(script_parent); // body
// script_parent.insertBefore(modal, script_in_body);

/**
 * -------------------------------------------------------------------------------
 * 방법2. 사용자 정의(Custom) 헬퍼함수 : prependChild()
 * 부모(body)안에 맨 앞 삽입.
 * parent_node.appendChild(child_node);
 * [이 코드를 이용하여] target_node.parentNode.insertBefore(insert_node, target_node)
 * -------------------------------------------------------------------------------
 */

// var body = document.body;
// function prependChild(parent_node, child_node) {
// 	parent_node.insertBefore(child_node, parent_node.firstChild);
// };

// prependChild(body, modal);

/**
 * ----------------------------------------------------
 * 방법3. 사용자 정의(Custom) 헬퍼함수 : insertAfter()
 * 삽입하고자 하는 목표 노드 뒤에 추가해주는 헬퍼 함수이다
 * insertBfter(insert_node, target_node)
 * insertAfter(target_node, insert_node) 
 * ----------------------------------------------------
 */

 function insertAfter(target_node, insert_node) {
 	// 함수 내부의 var 키워드를 사용한 변수 선언은 '지역 변수'가 된다.
 	var next_node = target_node.nextSibling;
 	var parent_node = target_node.parentNode;

 	// 만약 next_node 존재한다면
 	if ( next_node ) {
 		parent_node.insertBefore(insert_node, next_node);
 	} 
 	// 만약 next_node 존재하지 않는다	
 	else {
 		parent_node.appendChild(insert_node);
 	}
 };

var script = document.querySelector('script');
insertAfter(script, modal);