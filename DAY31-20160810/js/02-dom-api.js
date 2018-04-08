/**
 * ----------------------------------------------------------------
 * DOM API
 * ----------------------------------------------------------------
 * target_node.parentNode.replaceChild(replace_node, target_node)
 * node.cloneNode()
 * node.isEqualNode() (DOM Lv3, IE 호환 가능)
 * node.contains(other_node) (DOM Lv4, IE 호환 가능)
 * ---------------------------------------------------------------- */

/**
 * --------------------------------
 * ex1. 노드 복제
 * --------------------------------
 */

// // 노드 교체 (* 위치를 교체하는 것이 아니라, 이전 노드를 삭제하지만 결과 값으로 반환된다.)
// var replace_p = createNode('p', 'replaced paragraph.');
// var body_firstchild = body.replaceChild(replace_p, body.children[0]);

// // 노드 복제
// var clone_replace_p = replace_p.cloneNode(); //<p>만 복제
// var deep_clone_replace_p = replace_p.cloneNode(true); // <p>의 모든 것을 복제

// // jquery의 clone는 이벤트까지 복제한다. 
// // http://api.jquery.com/clone/

// console.log('일반 복제:', clone_replace_p);
// console.log('깊은 복제:', deep_clone_replace_p);

// prependChild(body, deep_clone_replace_p); 

/**
 * --------------------------------
 * ex2. 10번 복제
 * --------------------------------
 */
// for (var i=0; i<10; i++) {
//   // 변수 deep_clone_replace_p 있으면 10번 복제.. 없으면 한번 복제
//   var deep_clone_replace_p = replace_p.cloneNode(true);
//   prependChild(body, deep_clone_replace_p); 
// }

/**
 * ---------------------------------------
 * changPositionNodes()
 * [설계] 
 * 이 함수는 어떤 일을 하나?
 * 전달된 2개의 노드 위치를 교체한다.
 * 매개변수 1: 이동시키고자 하는 노드
 * 매개변수 2: 이동시키고자 하는 목표가 되는 노드
 * ---------------------------------------
 */

// // var removed_node = target_node.parentNode.replaceChild(moving_node, target_node);
// function changePositionNodes(moving_node, target_node) {
//   // moving_node의 위치를 기억하기 위한 위치 변수로 다음 노드를 참조.
//   var next_node = moving_node.nextSibling;
//   // moving_node의 부모 노드가 존재하는지 유무를 파악하기 위한 변수.
//   var parent_node = moving_node.parentNode;
//   // 교체 과정에서 사라진 노드를 변수에 기억시킴.
//   var removed_node = target_node.parentNode.replaceChild(moving_node, target_node);
//   // 다음 노드가 존재할 경우
//   if (next_node) {
//     next_node.parentNode.insertBefore(removed_node, next_node);
//   }
//   // 부모 노드가 존재할 경우
//   else if (parent_node) {
//     parent_node.appendChild(removed_node);
//   }
//   // 부모 노드가 존재하지 않을 경우
//   else {
//     return removed_node;
//   }
// }

// // _target_node = target_node 변수 사용
// function changePositionNodes(moving_node, target_node) {
//   // 
//   // moving_node의 위치를 기억하기 위한 위치 변수로 다음 노드를 참조.
//   var next_node = moving_node.nextSibling;
//   // moving_node의 부모 노드가 존재하는지 유무를 파악하기 위한 변수.
//   var parent_node = moving_node.parentNode;
//   // 교체 과정에서 사라진 노드를 변수에 기억시킴.
//   var removed_node = target_node.parentNode.replaceChild(moving_node, target_node);
//   // 다음 노드가 존재할 경우
//   if (next_node) {
//     next_node.parentNode.insertBefore(removed_node, next_node);
//   }
//   // 부모 노드가 존재할 경우
//   else if (parent_node) {
//     parent_node.appendChild(removed_node);
//   }
//   // 부모 노드가 존재하지 않을 경우
//   else {
//     return removed_node;
//   }
// }

// target_node
// function changePositionNodes(moving_node, target_node) {
//   // moving_node의 위치를 기억하기 위한 위치 변수로 다음 노드를 참조.
//   var next_node = moving_node.nextSibling;
//   // moving_node의 부모 노드가 존재하는지 유무를 파악하기 위한 변수.
//   var parent_node = moving_node.parentNode;
//   // 교체 과정에서 사라진 노드를 변수에 기억시킴.
//   // var removed_node = target_node.parentNode.replaceChild(moving_node, target_node);
//   // 다음 노드가 존재할 경우
//   if (next_node) {
//     next_node.parentNode.insertBefore(target_node, next_node);
//   }
//   // 부모 노드가 존재할 경우
//   else if (parent_node) {
//     parent_node.appendChild(target_node);
//   }
//   // 부모 노드가 존재하지 않을 경우
//   else {
//     return target_node;
//   }
// }


// 노드 교체(※ 위치를 교체하는 것이 아니라, 이전 노드를 삭제하지만 결과 값으로 반환된다.)
var replace_p = createNode('p', 'replaced paragraph.');
var body_firstElChild = body.replaceChild(replace_p, body.children[0]);

// 노드 복사
var clone_replace_p = replace_p.cloneNode(); // <p>만 복제
var deep_clone_replace_p = replace_p.cloneNode(true); // <p>의 모든 것을 복제

// 조건: 부모가 있는 안에서만 사용하는 ??? 돔안에 있다는 조건.??
function changePositionNodes(moving_node, target_node) {
	var next_node = moving_node.nextSibling;
	target_node.parentNode.replaceChild(moving_node, target_node);
	if (next_node) {
		next_node.parentNode.insertBefore(target_node, next_node);
	} else {
		moving_node.parentNode.appendChild(target_node);
	}
}