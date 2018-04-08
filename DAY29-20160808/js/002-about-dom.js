var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;

for ( var i=0; i<9; i=i+1 ) {
  // console.log('i:', i);
  // parent_el_child_nodes.item(i).nodeType 이 반환하는 값?

  // ELEMENT_NODE : 1
  if ( parent_el_child_nodes[i].nodeType === 1 ) {
    // console.log( '%c current node is ELEMENT_NODE.', 'background: #222; color: #bada55' );
    // console.log( 'current node is ELEMENT_NODE.' );
    parent_el_first_child_el = parent_el_child_nodes[i]; 
    break;
    // 'break'가 없으면 lastchild 선택
    // 'break'가 있으면 firstchild 선택
  }
  // TEXT_NODE : 3
  else {
    // console.log( '%c current node is TEXT_NODE.', 'background: #222; color: #fc414b' );
    // console.log( 'current node is TEXT_NODE.' );
  }
}


/**
 * ----------------------------------------------------------------
 * #parent .child:first-child 요소의 자식노드를 순환하여 노드 유형 로그하기
 * ----------------------------------------------------------------
 */

/**
 * --------------------------------
 * ex1. else if
 * --------------------------------
 */

// var parent_el = document.getElementById('parent');
// var parent_el_child_nodes = parent_el.childNodes;
// var parent_el_first_child_el;
// console.log(parent_el_first_child_el);
// console.log(parent_el_first_child_el.length);

// for ( var node_type, k=0; k<test_list_len; k=k+1 ) {
//   node_type = test_list[k].nodeType;
//   if (node_type === 1) {
//     console.log('%c current node is ELEMENT_NODE.', 'color: #FE14FF'); }
//   else if (node_type === 3) {
//     console.log('current node is TEXT_NODE.'); }
//   else if (node_type === 8) {
//     console.log('current node is COMMENT_NODE.'); }
// }


/**
 * --------------------------------
 * ex2. if
 * 'else if' 사용하지 않아도 된다
 * ELEMENT_NODE : 1
 * TEXT_NODE    : 3
 * COMMENT_NODE : 8
 * --------------------------------
 */
var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;

var parent_el_first_child_el;
var test_list     = parent_el_first_child_el.childNodes;
var test_list_len = test_list.length;

for ( var node_type, k=0; k<test_list_len; k=k+1 ) {
  node_type = test_list[k].nodeType;
  if (node_type === 1) {
    console.log('%c current node is ELEMENT_NODE.', 'color: #FE14FF'); }
  if (node_type === 3) {
    console.log('current node is TEXT_NODE.'); }
  if (node_type === 8) {
    console.log('current node is COMMENT_NODE.'); }
}
