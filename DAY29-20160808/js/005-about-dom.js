/**
 * ----------------------------------------------------------
 * 클래스 속성 값으로 문서 객체 대상 선택하기
 * IE 9+ 지원
 * document.links; // HTMLCollection (레거시 방식-DOM LV.0)
 * HTMLCollection와 NodeList는 다르다. 
 * ----------------------------------------------------------
 */

var childs = document.getElementsByClassName('child'); // NodeList (유사배열 - 배열처럼 보이지만 배열이 아니다. )
console.log(childs, childs.length);

var container = document.getElementsByClassName('container');
console.log(container, container.length);
ㅈ

// 메소드 빌려쓰기
Array.prototype.forEach.call( childs, function( item, index ){
	console.log(item );
} );