/**
 * --------------------------------
 * ex1. 8월 9일 실습한 모달창
 * --------------------------------
 */

// var body            = document.body;
// // 모달의 상태 변수 : exist_modal
// var exist_modal     = false;
// var scripts_in_body = queryAll('script');
// var last_script     = scripts_in_body[scripts_in_body.length - 1];
// var make_btn		= query('.btn_make_modal');

// function makeModal() {
// 	if(!exist_modal) {
// 		// 노드 생성
// 		var modal = document.createElement('div');
// 		// 노드 속성 설정
// 		modal.setAttribute('class', 'modal');
// 		//------------------------------------------
// 		var modal_title = document.createElement('h2');
// 		var modal_title_txt = document.createTextNode('Modal Window');
// 		modal_title.setAttribute('class', 'modal-title');
// 		modal_title.appendChild(modal_title_txt);
// 		//------------------------------------------
// 		var modal_desc = document.createElement('p');
// 		var modal_desc_txt = document.createTextNode('Modal Window Content....');
// 		modal_desc.setAttribute('class', 'modal-desc');
// 		modal_desc.appendChild(modal_desc_txt);
// 		//------------------------------------------
// 		var btn_modal_cta = document.createElement('button');
// 		var btn_modal_cta_txt = document.createTextNode('send message');
// 		btn_modal_cta.setAttribute('class', 'modal-cta');
// 		btn_modal_cta.setAttribute('type', 'button');
// 		btn_modal_cta.appendChild(btn_modal_cta_txt);
// 		//------------------------------------------
// 		var btn_modal_close = document.createElement('button');
// 		var btn_modal_close_txt = document.createTextNode('x');
// 		btn_modal_close.setAttribute('class', 'modal-close');
// 		btn_modal_close.setAttribute('type', 'button');
// 		btn_modal_close.setAttribute('aria-label', 'close modal window');
// 		btn_modal_close.appendChild(btn_modal_close_txt);
// 		//------------------------------------------
// 		btn_modal_close.onclick = removeModal;
// 		//------------------------------------------
// 		// 생성된 모든 노드를 병합
// 		modal.appendChild( modal_title );
// 		modal.appendChild( modal_desc );
// 		modal.appendChild( btn_modal_cta );
// 		modal.appendChild( btn_modal_close );
// 		//------------------------------------------
// 		insertAfter(last_script, modal);

// 		// 모달 상태 변경
// 		// var exist_modal = false; ==> !exist_modal; ==> true
// 		exist_modal = !exist_modal;
// 		// 한번 클릭시, 다시 클릭을 하지 못하도록 disabled="true" 값을 넣어준다.
// 		// this ==> make_btn
// 		this.setAttribute('disabled', true);
// 	}
// };

// function removeModal() {
// 	// makeModal()안에 선언된 지역변수인 modal를 모른다 
// 	// .modal 찾아와서 제거해야 한다. 
// 	var modal = query('.modal');
// 	// modal.parentNode.removeChild(modal);
// 	// ㄴ> 헬퍼 함수를 이용
// 	removeNode(modal);

// 	// 모달 상태 변경 
// 	exist_modal = !exist_modal;
// 	// make_btn.setAttribute('disable', false); 
// 	make_btn.removeAttribute('disabled'); 
// }

// make_btn.onclick = makeModal;


/**
 * ----------------------------------------
 * ex2. 생성한 헬퍼함수를 통해 아래 코드 리펙토리
 * removeNode(): 노드 제거 헬퍼 함수
 * createNode(): 요소, 텍스트 생성 헬퍼 함수
 * ----------------------------------------
 */

var body            = document.body;
var exist_modal     = false;
var scripts_in_body = queryAll('script');
var last_script     = scripts_in_body[scripts_in_body.length - 1];
var make_btn        = query('.btn_make_modal');

function makeModal() {
  if(!exist_modal) {
    var modal = createNode('div');
    modal.setAttribute('class', 'modal');
    //------------------------------------------
    var modal_title = createNode('h2', 'Modal Window');
    modal_title.setAttribute('class', 'modal-title');
    //------------------------------------------
    var modal_desc = createNode('p', 'Modal Window Content....');
    modal_desc.setAttribute('class', 'modal-desc');
    //------------------------------------------
    var btn_modal_cta = createNode('button', 'send message');
    btn_modal_cta.setAttribute('class', 'modal-cta');
    btn_modal_cta.setAttribute('type', 'button');
    //------------------------------------------
    var btn_modal_close = createNode('button', 'x');
    btn_modal_close.setAttribute('class', 'modal-close');
    btn_modal_close.setAttribute('type', 'button');
    btn_modal_close.setAttribute('aria-label', 'close modal window');
    //------------------------------------------
    btn_modal_close.onclick = removeModal;
    //------------------------------------------
    // 생성된 모든 노드를 병합
    modal.appendChild( modal_title );
    modal.appendChild( modal_desc );
    modal.appendChild( btn_modal_cta );
    modal.appendChild( btn_modal_close );
    //------------------------------------------
    insertAfter(last_script, modal);

    // 모달 상태 변경
    // var exist_modal = false; ==> !exist_modal; ==> true
    exist_modal = !exist_modal;
    // 한번 클릭시, 다시 클릭을 하지 못하도록 disabled="true" 값을 넣어준다.
    // this ==> make_btn
    this.setAttribute('disabled', true);
  }
};

function removeModal() {
  // makeModal()안에 선언된 지역변수인 modal를 모른다 
  // .modal 찾아와서 제거해야 한다. 
  var modal = query('.modal');
  // modal.parentNode.removeChild(modal);
  // ㄴ> 헬퍼 함수를 이용
  removeNode(modal);

  // 모달 상태 변경 
  exist_modal = !exist_modal;
  // make_btn.setAttribute('disable', false); 
  make_btn.removeAttribute('disabled'); 
}

make_btn.onclick = makeModal;
