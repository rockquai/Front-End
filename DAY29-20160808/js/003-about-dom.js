/**
 * --------------------------------
 * 노드(Node)의 유형/이름/값을 출력하는 방법
 * --------------------------------
 */
// 1. nodeType
//    ELEMENT_NODE = 1
//    TEXT_NODE    = 3
//    COMMENT_NODE = 8
// 2. nodeName
//    ELEMENT_NODE의 경우는 요소 이름을 대문자로 반환
//    TEXT_NODE의 경우는 '#text' 반환
// 3. nodeValue
//    TEXT_NODE의 경우만 접근이 가능
//    ELEMENT_NODE의 경우는 null 반환


/**
 * --------------------------------------------------
 * DOM API ==> IE9+
 * Traversal Properties
 * .firstChild      -> .firstElementChild
 * .lastChild       -> .lastElementChild
 * .previousSibling -> .previousElementSibling
 * .nextSibling     -> .nextElementSibling
 * .parentNode      -> .parentElement
 * --------------------------------------------------
 */

/**
 * --------------------------------------------------
 * NODE Information
 * HTML DOM 방식의 속성 접근 방법
 * 웹의 초창기 때부터 존재하던 속성들
 * id, className, title, ...
 * --------------------------------------------------
 */

var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;

 console.log('parent_el 요소노드의 id 속성:', parent_el.id); // parent
 console.log('parent_el 요소노드의 class 속성:', parent_el.className); //''
 console.log('parent_el 요소노드의 title 속성:', parent_el.title);//''

// 새롭게 등장한 속성들
// data-*, aria-*, role, ...
console.log('parent_el.role: ', parent_el.role);
console.log('parent_el.role: ', parent_el.getAttribute('role'));
// console.log('parent_el.data-container: ', parent_el.data-container); // '-'(하이픈)이 있으면 에러
console.log('parent_el.data-container: ', parent_el['data-container']);
console.log('parent_el.data-container: ', parent_el.getAttribute('data-container'));
// console.log('parent_el.aria-hidden: ', parent_el.aria-hidden); // '-'(하이픈)이 있으면 에러
console.log('parent_el.aria-hidden: ', parent_el['aria-hidden']);
console.log('parent_el.aria-hidden: ', parent_el.getAttribute('aria-hidden'));










