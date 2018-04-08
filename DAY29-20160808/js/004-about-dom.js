/**
 * ----------------------------------------------------------------------------
 * #parent 내부의 요소 중 자식이 없는 요소를 모두 콘솔에 기록하라.
 * ※ 주의! hasChildNodes()는 빈 공백 또한 자식노드로 읽기 때문에 공백이 없을 때만 사용 가능하다.
 * ---------------------------------------------------------------------------- */

 /**
  * --------------------------------
  * ex1. 변수를 빼는 형태
  * --------------------------------
  */
 
// var parent_el = document.getElementById('parent');
// var parent_childs= parent_el.getElementsByTagName('div');
// var i = 0;
// var parent_childe_len = parent_childs.length;

// for (; i<parent_childe_len; i=i+1) {
// 	child = parent_childs[i];
// 	if ( !child.hasChildNodes() ) {
// 		console.log(child);
// 	}
// }

 /**
  * --------------------------------
  * ex2. 변수를 합치는 형태
  * --------------------------------
  */
// child.hasChildNodes() ==> 자식 노드가 있다. true
// !child.hasChildNodes() --> 자식 노드가 없다. false
var parent_el = document.getElementById('parent');
var parent_childs= parent_el.getElementsByTagName('div');

for (var child, i=0, l=parent_childs.length; i<l; i=i+1) {
	child = parent_childs[i];
	if ( !child.hasChildNodes() ) {
		console.log(child);
	}
}