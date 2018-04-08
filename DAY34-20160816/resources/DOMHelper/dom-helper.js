/**
 * ----------------------------------------------------------------------------
 * [INDEX] DOM Helper Function
 * isType()                  : Javascript의 모든 데이터 유형을 올바르게 감지할 수 있는 헐페 함수 
 * prependChild()            : 부모노드의 첫번재 자식노드로 삽입
 * insertAfter()             : 목표노드 뒤에 삽입
 * queryAll(), query(), $q() : 문서객체를 손쉽게 선택할 수 있도록 도와주는 함수
 * removeNode()              : 문서 객체(노드)를 제거하는 헬퍼 함수
 * createNode()              : 요소노드를 생성한 다음 내부에 텍스트노드를 자식 노드로 삽입
 * getStyle()                : 웹 브라우저에서 계산된 CSS 스타일 값 가져오는 방법
 * camelCase()               : CSS property name을 camelCase 바꿔주는 함수
 * errorMsg()                : error 메시지 헬퍼 함수
 * prevEl()                  : 이전 형재 노드 체크 함수(요소노드)
 * nextEl()                  : 다음 형재 노드 체크 함수(요소노드)
  * ----------------------------------------------------------------------------
 */

/**
 * -----------------------------------------------------------
 * Javascript의 모든 데이터 유형을 올바르게 감지할 수 있는 헐페 함수 
 * -----------------------------------------------------------
 */

function isType(data) {
    // Object.prototype.toString 메소드 빌려쓰기
    return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
}

/**
 * --------------------------------
 * 동등 비교연산자 함수
 * --------------------------------
 */

// 데이터 간 동등한지 유무 파악 헬퍼 함수
function equal(data1, data2) {
   return data1 == data2;
}

// 데이터 간 완전하게 동등한지 유무 파악 헬퍼 함수
function strictEqual(data1, data2) {
   return data1 === data2;
}

function throwError(type1, type2, err_msg) {
  err_msg = err_msg || '기본 오류 메시지';
  if ( isType(type1) !== type2 ) { throw new Error(err_msg); }
}

function validDate(data, type) {
  throwError(type, 'string'); // 오류 발생 시 멈추고 화면에 오류 메시지 출력
  return strictEqual( isType(data), type );
}

/**
 * -----------------------------------------------
 * prependChild(부모노드, 자식노드)
 * 부모노드의 첫번재 자식노드로 삽입한다.
 -------------------------------------------------
 * @param {ELEMENT_NODE} parent_node 부모노드 
 * @param {ELEMENT_NODE} child_node 자식노드 
 * @return {undefined}
 * -----------------------------------------------
 */

function prependChild(parent_node, child_node) {
    parent_node.insertBefore(child_node, parent_node.firstChild);
}

/**
 * -----------------------------------------------
 * insertAfter(목표노드, 삽입노드)
 * 목표노드 뒤에 삽입노드를 추가한다.
 -------------------------------------------------
 * @param {ELEMENT_NODE} target_node    목표노드 
 * @param {ELEMENT_NODE} insert_node    삽입노드 
 * @return {undefined}
 * -----------------------------------------------
 */
function insertAfter(target_node, insert_node) {
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


/**
 * -------------------------------------------------------------------
 * document.querySelectorAll() --> queryAll()
 * document.querySelector() --> query()
 * 문서객체를 손쉽게 선택할 수 있도록 도와주는 함수
 * queryAll(), query(), queryItem(), [queryAll() + query()] ==> $q
 ---------------------------------------------------------------------
 * @param   {String}                selector   CSS 선택자
 * @param   {ElementNode, String}   context    컨텍스트 요소노드 또는 CSS 선택자
 * @return {NodeList, Array}                   수집된 문서 요소 리스트
 * -------------------------------------------------------------------
 */

function queryAll(selector_str, context) {
	// 사용자가 올바른 데이터를 전달하였는가? 검증단계
	if (typeof selector_str !== 'string') {
		// 조건이 참이 되면 오류 발생
		throw new Error ('첫번째 전달인자는 문자 유형이어야 합니다.');
	} 
	// context 인자 값을 사용자가 전달하였는가?
	// 사용자가 context 값을 전달하지 않았을 경우는 undefined 이다.
	// if ( typeof context === 'undefined' ) === if ( !context )
	// ㄴ > if ( !context ) 사용 권장.
	if ( !context ) {
		context = document;
	}
	return context.querySelectorAll(selector_str);
}

function query(selector, context) {
	return queryAll(selector, context)[0];
}

// item을 인자를 넣는 경우
function queryItem(selector, idx, context) {
	if ( !idx ) {
		idx = 0;
	}
	return queryAll(selector, context)[idx];
}

// queryAll + query 
// 단수, 복수인지 
function $q(selector, hook, context) {
	var method;
	if ( hook === 1 ) {
		method = 'query';
	}
	else {
		method = 'queryAll';
	}
	return window[method](selector, context);
}

/**
 * ----------------------------------------------------------------
 * 문서 객체(노드)를 제거하는 헬퍼 함수 
 * modal.parentNode.removeChild(modal); 대신 사용할 헬퍼 함수
 * ----------------------------------------------------------------
 */

function removeNode(node) {
	node.parentNode.removeChild(node);
}

/**
 * -----------------------------------------------
 * createElement(), createTextNode()
 * 2가지 일을 동시에 수행하는 헬퍼 함수 
 * 요소노드를 생성한 다음 내부에 텍스트노드를 자식 노드로 삽입
 * -----------------------------------------------
 */

function createNode(el_name, text) {
	var el_node = document.createElement(el_name);
    if ( typeof text !== 'undefined' && typeof text === 'string' ) {
        var text_node = document.createTextNode(text);
        el_node.appendChild(text_node);
    }
	return el_node;
}

/**
 * ---------------------------------------------
 * 웹 브라우저에서 계산된 CSS 스타일 값 가져오는 방법
 * ---------------------------------------------
 * 비 표준 MS IE 방식 (IE 8-)
 * 대상.currentStyle.스타일속성
 * ---------------------------------------------
 * 표준 W3C 방식 (IE 9+)
 * window.getComputedStyle(대상,가상요소).스타일속성
 * ---------------------------------------------
 */

function getStyle(el, property, pseudo) {
    var value, el_style;
    // 유효성 검사
    if ( el.nodeType !== 1 ) {
        console.error('첫번째 인자 el은 요소노드여야 합니다.');
    }
    if ( typeof property !== 'string' ) {
        console.error('두번째 인자 property는 문자열이야 합니다.');
    }
    if ( typeof pseudo !== 'string' && pseudo ) {
        console.error('세번째 인자 pseudo는 문자열이야 합니다.');
    }

    // CSS 속성 이름이 카멜케이스화
    // getComputedStyle : 브라우저가 해석된 px값을 가져온다.
    property = camelCase(property);

    if ( window.getComputedStyle ) {
        el_style = window.getComputedStyle(el, pseudo);
    if (pseudo && el_style.content === '') {
    return null;
    }
        value = el_style[property]; // = value = el_style.fontSize;
    } else {
        value = el.currentStyle[property];
    }
    return value;
}

/**
 * ----------------------------------------
 * CSS property name을 camelCase 바꿔주는 함수
 * font-size ==> fontSize 
 * 정규표현식을 이용해서 만드는 헬퍼 함수
 * ----------------------------------------
 */

function camelCase(css_prop) {
     return css_prop.replace(/-./g, function($1){
    return $1.replace('-','').toUpperCase();
     });
}

/**
 * --------------------------------
 * error 메시지 헬퍼 함수 - 0816
 * --------------------------------
 */

function errorMsg(message) {
  if ( isType(message) !== 'string' ) {
    // 함수 자신을 다시 호출: 재귀함수
    errorMsg('오류 메시지는 문자 데이터 유형이어야 합니다.');
  }
  throw new Error(message);
}

/**
 * -------------------------------------------
 * 요소노드인지 아닌지를 체크하여 참/거짓을 반환하는 헬퍼함수 - 0816
 * -------------------------------------------
 */

function isElNode(node) {
    return node.nodeType === 1;
}

function isntElNode(node) {
    return !isElNode(node);
    // return node.nodeType !== 1;
}

/**
 * -----------------------------------------------
 *  요소노드의 이름이 동일한지 체크하는 헬퍼 함수 
 * -----------------------------------------------
 */

function isElName(node, name) {
    if ( isntElNode(node) ) { errorMsg('첫번째 인자로 요소노드가 전달되어야 합니다.') }
    if ( isType(name) !== 'string' ) { errorMsg('두번째 인자로 텍스트 데이터 유형이 전달되어야 합니다.') }
    return (node.localName || node.nodeName.toLowerCase()) === name;
}

// ------------------------------------------------
// 텍스트노드의 유형인지 체크하는 함수
function isTextNode(node) {
    return node.nodeType === 3;
}
// ------------------------------------------------
// 텍스트노드의 유형이 아닌지 체크하는 함수
function isntTextNode(node) {
    // return !isTextNode(node);
    return node.nodeType !== 3;
}


/**
 * ----------------------------------------------
 * prevEl() - 0816
 * 이전 형재노드를 반환 헬퍼 함수 
 * 단! 요소노드인 경우 반환
 * ----------------------------------------------
 */

// // ex1.
// function prevEl(node) {
//     // 검증: 유효성 검사
//     if ( node.nodeType !== 1 ) { // element node가 아닐 경우 실행 | element node가 맞는 경우 do 블록문 실행
//        errorMsg('전달된 인자는 element node(요소노드)여야 합니다.'); 
//     }
//     // node.previousSibling; // 요소노드, 텍스트노드, 주석노드 ??? 이전 형제 노드가 뭔지 모른다.
//     do {
//         node = node.previousSibling;
//     } while( node && node.nodeType !== 1 ); 
//     return node;
// }

// ex2. isElNode(), !isElNode() 헬퍼 함수 사용 
// function prevEl(node) {
//     // 검증: 유효성 검사
//     if ( isntElnode(node) ) { 
//        errorMsg('전달된 인자는 element node(요소노드)여야 합니다.'); 
//     }
//     // node.previousSibling; // 요소노드, 텍스트노드, 주석노드 ???  이전 형제 노드가 뭔지 모른다.
//     do {
//         node = node.previousSibling;
//     } while( node && !isElNode(node)); 
//     return node;
// }

// ex3. '.previousElementSibling' 써도 되지만 구형 브라우저 대응을 위해서 if문 추가
// function prevEl(node) {
//     // 검증: 유효성 검사
//     if ( isntElnode(node) ) { // element node가 아닐 경우 실행 | element node가 맞는 경우 do 블록문 실행
//        errorMsg('전달된 인자는 element node(요소노드)여야 합니다.'); 
//     }
//     // 구형 IE+9, 신형 웹 브라우저
//     if ( node.previousElementSibling ) {
//         return node.previousElementSibling;
//     }
//     // 구형 IE 6 ~ 8
//     else {
//         do { node = node.previousSibling; }
//         while ( node && !isElNode(node) );
//         return node;
//     }
// }

// ex4. 신형브라우저에서 구형 브라우저 테스트 할 경우 !node.previousElementSibling
function prevEl(node) {
    // 검증: 유효성 검사
    if ( isntElnode(node) ) { // element node가 아닐 경우 실행 | element node가 맞는 경우 do 블록문 실행
       errorMsg('전달된 인자는 element node(요소노드)여야 합니다.'); 
    }
    // 구형 IE+9, 신형 웹 브라우저
    // 신형브라우저에서 구형 브라우저 테스트 할 경우 !node.previousElementSibling
    if ( !node.previousElementSibling ) {
        return node.previousElementSibling;
    }
    // 구형 IE 6 ~ 8
    else {
        do { node = node.previousSibling; }
        while ( node && !isElNode(node) );
        return node;
    }
}

/**
 * ----------------------------------------------
 * nextEl() - 0816
 * 다음 형제요소를 반환 헬퍼 함수 
 * 단! 요소노드인 경우 반환
 * (= node.nextSibling)
 * ----------------------------------------------
 */

function nextEl(node) {
    // if ( isElNode(node) ) {
    //      errorMsg('전달된 인자는 element node(요소노드)여야 합니다.');
    // }
    // 구형 IE+9, 신형 웹 브라우저
    if ( node.nextElementSibling ) {
        return node.nextElementSibling;
    }
    // 구형 IE 6 ~ 8
    else {
        do { node = node.nextSibling; }
        while ( node && !isElNode(node) );
        return node;
    }
}

/**
 * -------------------------------------
 * 첫번째 자식요소 노드를 찾는 헬퍼 함수 - 0816
 * firstEl()
 * 의존 함수 :
 * -------------------------------------
 */

//ex1. 
// function _fristEl(node) {
//     return node.child[0];
// }

// ex2.
function firstEl(node) {
    if ( isElNode(node) ) {
        errorMsg('요소노드를 전달해야 합니다');
    }
    // 구형 IE+9, 신형 웹 브라우저
    if ( node.firstElementChild ) {
        return node.firstElementChild;
    } 
    // 구형 IE 6 ~ 8
    // 1. node 찾고자 하는 자식 노드의 부모이다.
    // 2. 제일 먼저 부모 노드인 node의 첫번째 자식 노드를 찾는다.
    else {
        node = node.fristchild;
        // 3. 만약 찾은 자식 노드가 요소 노드가 아니라면 다음 형제 노드를 찾는다.
        // 4. 다음 형제 노드가 요소 노드라면 반환하고, 아니라면 다시 다음 형제 노드를 요소노드인지 확인한다.
        // console.log(node && isntElNode(node)); //text
        return ( node && isntElNode(node) ) ? nextEl(node) : node;
    }
    // 함수는 명시적으로 어떤 값도 반환하지 않을 경우 undefined를 반환한다.
    // return undefined;
}


/**
 * ---------------------------------------
 * 마지마 자식요소 노드를 찾는 헬퍼 함수 - 0816
 * _lastEl()
 * ---------------------------------------
 */

// ex1.
// function _lastEl(node) {
//   var children = node.children;
//   return children[children.length - 1];
// }

//ex2.
function lastEl(node) {
  if ( isntElNode(node) ) { errorMsg('요소노드를 전달해야 합니다.'); }
  if ( node.lastElementChild ) {
    return node.lastElementChild;
  } else {
    node = node.lastChild;
    return ( node && isntElNode(node) ) ? prevEl(node) : node;
  }
}

/**
 * ---------------------------------------
 * 단위 제거 / 가저오기 / 소유하고 있는 확인 - 0816
 * ---------------------------------------
 */

// 단위를 빼오는 함수 = getUnit('2rem') // rem
function getUnit(value){
  var i=0,l=getUnit.units.length,unit;
  for ( ; i<l; i++ ) {
    unit = getUnit.units[i];
    if ( value.indexOf(unit) > -1 ) {
      // break;
      return unit;
    }
  }
  return null;
}

// 함수 또한 객체이기 때문에 속성을 가질 수 있다.
getUnit.units = 'px rem em % vw vh wmin vmax'.split(' ');

// 0 : px, 

// 단위 제거 = removeUnit('32px') //
function removeUnit(value) {
  removeUnit.unit = getUnit(value);
  return parseFloat(value, 10);
}
removeUnit.unit = null;

// 단위값이 가지고 있는 유무 체크 
function hasUnit(value) {
  return !!getUnit(value);
}




