/**
 * --------------------------------
 * CSS 선택자를 통해 문서 객체를 선택하는 방법
 * IE 8+ 지원
 * querySelector('#id .class');
 * querySelectorAll('#id .class');
 * querySelector() === .querySelector()[0];
 * --------------------------------
 */

var childThird= document.querySelector('#parent > .child:nth-child(3)');
var parentAll= document.querySelectorAll('#parent *');
var pateentAllfirst= document.querySelectorAll('#parent *')[0]; 
var pateentFirst= document.querySelector('#parent *');

console.log('3번째 자식 찾기:', childThird);
console.log('모든 자식,자손 찾기:', parentAll);
console.log('첫번재 자식 찾기:', pateentAllfirst);
console.log('첫번재 자식 찾기:', pateentFirst);






















