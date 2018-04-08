/**
 * --------------------------------
 * While문
 * --------------------------------
 */

// // ex1.
// var boo = true, m = 10;
// while(boo){
//   console.log(boo); // true
//   if (m-- > 0) {
//     boo = !boo;
//   }
// }

// // 선감소 --
// var boo = true, m = 10;
// while(boo){
//   console.log(boo ? '참참참' : '짝짝짝!'); 
//   if (--m > 0) { // 9,8,7,6,5,4,3,3,1
//     boo = !boo;
//   }
// }

// // 후감소 --
// var boo = true, m = 10;
// while(boo){
//   console.log(boo ? '참참참' : '짝짝짝!'); 
//   if (m-- < 0) { // 10, 9,8,7,6,5,4,3,3,1
//     boo = !boo;
//   }
// }

/**
 * --------------------------------
 * do ~ while 문
 * 조건이 거짓이라도 한번은 실행한다. 
 * --------------------------------
 */

// ex1. do 블록문 실행. 
// var boo = true, m =10;
// do {
//   console.log(boo ? '참참참!' : '짝짝짝!'); // true이므로 참참참!
//   if (m-- < 0) { 
//     boo = !boo; 
//   }
// } while(boo); // boo ==> true이므로 실행이 된다.


// ex2.
// var boo = !true, m =10;
// do {
//   console.log(boo ? '참참참!' : '짝짝짝!'); // false이므로 짝짝짝!
//   if (m-- < 0) {  // 9
//     boo = !boo; 
//   }
// } while(boo); // boo ==> false이므로 실행이 안된다. 


/**
 * -------------------------------------------
 * firstEl() 헬퍼 함수로 첫번째 자식 요소 노드 찾기
 * -------------------------------------------
 */

// var demo_container = query(".demo-container");
// console.log(demo_container.firstChild); // text

// var demo_container_first_el = firstEl(demo_container);
// console.log(demo_container_first_el);


/**
 * --------------------------------
 * while ==> for 변경
 * [실행 흐름 순서] 
 * 1. 초기값(한번만 수행) ; 
 * 2. 조건 (참이면 계속, 거젓이면 그만!)
 * 3. {} 문자 수행
 * 4. 변수값 변화
 * --------------------------------
 */

//ex1. 
// var i = 0, boo = false;
// for( ; i < 10; i++) {
// 	if ( i === 9 ) {
// 		boo = !boo;
// 	}
// 	console.log( boo ? '참참참' : '짝짝짝' );
// } 

// //ex2. 
// for( var i = 0, boo = false; i < 10; i++) {
// 	if ( i === 9 ) {
// 		boo = !boo;
// 	}
// 	console.log( boo ? '참참참' : '짝짝짝' );
// } 

// //ex3. 
// for( var i = 0, boo = false; i < 10; i++) {
// 	boo = i === 9 ? !boo : boo;
// 	console.log( boo ? '참참참' : '짝짝짝' );
// }

// ex4. 
// for( var i=0, boo=false; i < 10; i++ ) {
// 	console.log( (i === 9 ? !boo : boo) ? '참참참!' : '짝짝짝!' );
// } 

/**
 * --------------------------------
 * for문 continue를 사용해보는 예제
 * --------------------------------
 */

var fruits = ['바나나', true,'딸기', false, '포도', null, '수박'];
fruits.push(function(){});
fruits.push({ 'name': 'object'});

// 미션! fruits 변수에 참조된 데이터 (배열)에는 과일이 아닌 것들이 포함되어 있습니다.
// 이를 for문을 사용하여 불필요한 데이터를 뺀 실제 과일만 담은 배열을 반환하시오.
var real_fruits = [], // 과일만 담은 주머니 => real_fruits[]
	fruit,
	k = 0,
	o = fruits.length;

for ( ; k<o; k=k+1 ) {
	fruit = fruits[k];
	if( isType(fruit) !== 'string' ) {
	// console.log(fruit);
	continue;
	}
	real_fruits.push(fruit); 
}
console.log(real_fruits); // ["바나나", "딸기", "포도", "수박"]



/**
 * -----------------------------------------------------------
 * for - continue
 * <body> 요소의 자식노드 중, <script>, #text 노드가 아닌 요소노드를 찾아
 * el_collection 배열에 수집하라.
 * -----------------------------------------------------------
 */

//ex1. 
// var collection = document.body.childNodes;
// for( var el_collection = [], i = collection.length - 1; collection[i]; i--) {
// 	var node = collection[i];
// 	// #text, <script>일 경우
// 	var node_name = node.nodeName;
// 	if( node.nodeType === 3 || node_name.toLowerCase() ) {
// 		continue;
// 	}
// 	el_collection.push(node);
// }
// console.log(el_collection);


//ex2. nodeName 쓴 경우
// var collection = document.body.childNodes;
// for( var el_collection = [], i = collection.length - 1; collection[i]; i--) {
// 	var node = collection[i];
// 	// #text, <script>일 경우
// 	if( node.nodeType === 3 || node.nodeName === 'SCRIPT' ) {
// 		continue;
// 	}
// 	el_collection.push(node);
// }
// console.log(el_collection);



// ex2 - [ES2015] let / localName 쓴 경우
// localName: 크롬 브라우저에만 작동. 다른 브라우저 체크해야 한다
// var collection = document.body.childNodes;
// for( var el_collection = [], i = collection.length - 1; collection[i]; i--) {
// 	let node = collection[i];
// 	// #text: nodeType: 3, <script>일 경우
// 	if( node.nodeType === 3 || node.localName === 'script' ) {
// 		continue;
// 	}
//	// #text: nodeType: 3, <script> 아닌 경우 
// 	el_collection.push(node);
// }

// console.log(el_collection); // [div.demo-container]

// ex3. 헬퍼 함수 이용
var collection = document.body.childNodes;
for ( var el_collection=[], i = collection.length - 1; collection[i]; i-- ) {
	let node = collection[i];
	// #text: nodeType: 3, <script>일 경우
	// if( node.nodeType === 3 || node.localName === 'script' ) {
	if( isTextNode(node) || isElName(node,'script') ) { // #text, <script> (ㅇ)
		// continue;
		break;
	}
	// #text: nodeType: 3, <script> 아닌 경우 
	el_collection.push(node); // #text, <script> (x)
}

console.log(el_collection); // [div.demo-container]


/**
 * --------------------------------
 * break 예제
 * --------------------------------
 */

// ex1.
// for (var units = 'em rem % px vw vh wmin vmax'.split(' '), units, i = 0, l = units.length; i<1; i++) {
// 	unit = units[i];
// 	console.log(unit);
// }

// ex2. ECMAScript 2015 (ES6) : <for ~ of>
// var units = 'em rem % px vw vh wmin vmax'.split(' ');
// for ( let unit of units ) {
// 	console.log(unit);
// }

// ex3. Javascript Memorization
// var units = 'px em rem % vw vh wmin vmax'.split(' '); // 배열로 넣는다
// var units;
// var i = 0;
// var l = units.length;

// var demo_container = query('.demo-container');
// var get_value = getStyle(demo_container, 'margin-bottom');

// function getUnit(value){
// 	var i=0, l=getUnit.units.length, unit;
// 	for (; i<l; i++) {
// 		unit = getUnit.units[i];
// 		if( value.indexOf(unit) > -1){
// 			break;
// 		}
// 	}
// 	return unit;
// }

// // 함수 또한 객체이기 때문에 속성을 가질 수 있다.
// getUnit.units = 'px rem em % vw vh wmin vmax'.split(' ');

// for( ; i<l; i++ ) {
// 	unit = units[i];
// 	// console.log( get_value.indexOf(unit) > -1 );
// 	if ( get_value.indexOf(unit) > -1 ) {
// 		// 특정 단위가 존재한다.
// 	}
//   // console.log(unit);
// }

// ex4. 단위 제거/가져오기/소유하고 있는지 헬퍼함수 이용
var units = 'px em rem % vw vh wmin vmax'.split(' '); // 배열로 넣는다
var units;
var i = 0;
var l = units.length;

var demo_container = query('.demo-container');
var get_value = getStyle(demo_container, 'margin-bottom');

for( ; i<l; i++ ) {
	unit = units[i];
	// console.log( get_value.indexOf(unit) > -1 );
	if ( get_value.indexOf(unit) > -1 ) {
		// 특정 단위가 존재한다.
	}
  // console.log(unit);
}

/**
 * --------------------------------
 * for in문
 * --------------------------------
 */

var obj = {'name':'name_value', 'job': 'job_value', 'age': 'age_value'};
for ( var property in obj ){
	// 자신의 속성인지 경우만 탐색 -- 조상까지 탐색하는 것을 막아준다. 
	if ( obj.hasOwnProperty(property) ) {
		console.log('속성:', property);
		console.log('값:', obj[property]);
	}
}

/**
 * --------------------------------
 * ECMAScript 2015 <for ~ of>
 * --------------------------------
 */

for ( let unit of units ) {
  console.log(unit);
}

/**
 * --------------------------------
 * for ~ in 문
 * --------------------------------
 */
 
for ( var property in obj ) {
    if ( obj.hasOwnProperty(property) ) {
        console.log('속성:', property);
        console.log('값:', obj[property]);
    }
}