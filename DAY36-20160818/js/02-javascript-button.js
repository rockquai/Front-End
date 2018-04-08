(function(global) {
	'use strict';

	// .button-set을 선택
	var button_set = query('.button-set');
	// .button-set [CONTEXT] 내부에서 .button 을 모두 수집 [NODELIST]
	// var button_all = queryAll('.button', button_set);
	// console.log(buttons, isType( makeArray(buttons) ));
	// 수집된 [NODELIST]를 순환하여 (코드의 흐름 제어) 클릭 이벤트에 함수(이벤트 핸들러)를 연결한다.
	var buttons = makeArray( queryAll('.button', button_set) );


	/**
	 * --------------------------------
	 * for of
	 * chrome에선 배열로 출력 된다.
	 * --------------------------------
	 */
	// for ( var button_all of buttons ) {
	// 	console.log(button_all);
	// };
	// console.log( isType(makeArray(button_all)) ); // array

	/**
	 * --------------------------------
	 * ex1. for문 - 클로저가 없는 경우
	 * --------------------------------
	 */
	
	// for (var i = 0, l=buttons.length; i <l; i+=1) {
	// 	buttons[i].onclick = function(){
	// 		console.log(i); // 5
	// 	}
	// }


	/**
	 * ------------------------------------------------------
	 * ex2. for문 - 클로저가 있는 경우
	 * 각 버튼을 사용자가 클릭할 경우, 자신의 순환 인덱스 숫자를 콘솔에 출력
	 * ------------------------------------------------------
	 */

	// for (var i = 0, l=buttons.length; i <l; i+=1) {
	// 	buttons[i].onclick = (function(i){
	// 		return function() {
	// 			console.log(i); // 0 ~ 4
	// 		};
	// 	}(i));
	// }

	/**
	 * -------------------------------------------------------
	 * ex3. forEach()
	 * 각 버튼을 사용자가 클릭할 경우, 자신의 순환 인덱스 숫자를 콘솔에 출력
	 * -------------------------------------------------------
	 */
	
	// buttons.forEach(function(button, index, buttons){
	// 	// arguments 함수 내부에서만 접근 가능한 매개변수(전달인자들을 묶어 놓은 집합 객체)
	// 	// console.log(arguments); // 유사 배열 객체이다.
	// 	button.onclick = function() {
	// 		console.log(index); // 0 ~ 4
	// 	};
	// });

	/**
	 * ---------------------------------------------------
	 * ex4. for문
	 * 클로저를 사용하지 않고 button이라는 객체에 속성을 추가하는 방법
	 * ---------------------------------------------------
	 */

	// for ( var button, i=0, l=buttons.length; i<l; i+=1 ) {
	// 	button = buttons[i];
	// 	// 객체.속성을 추가하여 for문이 돌 때 마다 각 버튼 객체의 index 속성에 i 값을 할당한다.
	// 	button.index = i
	// 	button.onclick = function() {
	// 		// this 키워드 컨텍스트를 참조하는 변수
	// 		// this를 사용하여 각 버튼 객체의 index 속성 값에 접근하여 출력한다.
	// 		console.log(this.index);
	// 	};
	// }

	/**
	 * --------------------------------
	 * ex5. for문
	 * 클로저를 사용하여 문제를 해결하는 방법
	 * --------------------------------
	 */

	// for ( var button, i=0, l=buttons.length; i<l; i+=1 ) {
	// 	button = buttons[i];
	// 	button.index = i
	// 	button.onclick = (function(index) {
	// 		return function(){
	// 			console.log(index);
	// 		}
	// 	})(i);
	// }

	/**
	 * ----------------------------------------------------
	 * ex6. 유사배열을 배열로 만들지 않고 Array의 메서드를 빌려쓰기
	 * ----------------------------------------------------
	 */
	
	Array.prototype.forEach.call(buttons, function(item, index){
		item.onclick = function(event){
		event.preventDefault();
		console.log(index)
		}
	});

	/**
	 * --------------------------------
	 * concat()으로 배열과 배열 합치기.
	 * --------------------------------
	 */

	 var script = queryAll('script');
	 var script_all = makeArray(script);
	 var buttons_script = buttons.concat(script_all);
	 console.log(buttons_script); // buttons 배열과 script 배열이 합친 배열 
	 console.log(isType(buttons_script)); // array

}(this));