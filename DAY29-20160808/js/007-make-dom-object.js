/**
 * --------------------------------
 * DOM API를 사용하여 문서 객체를 동적으로 생성해보자. 
 * --------------------------------
 */

//<div>this is division </div>
// var marked_division = document.createElement('div');
// var marked_division_text = document.createTextNode('this is division');
// var marked_division_id_attr = document.createElement('id');

// console.dir(marked_division_id_attr);

// // <ul> <li>list item</li></ul>
// var marked_unordered_list = document.createElement('ul');
// var marked_unordered_list_item = document.createElement('li');
// var marked_unordered_list_item_text = document.createTextNode('list item');

// console.log('div:', marked_division);
// console.log('div_text:', marked_division_text);

// console.log('ul:', marked_unordered_list);
// console.log('ul > li:', marked_unordered_list_item);
// console.log('li > li_text:', marked_unordered_list_item_text);

// 요소를 생성. 문서에 생성되지 않았다.
// textContent

/**
 * -------------------------------------------
 * DOM API를 사용하여 문서 객체를 동적으로 조작 (합체!)
 * 부모_노드.appendChild( 자식_노드 )
 * -------------------------------------------
 */

// <div>this is division </div>
var marked_division = document.createElement('div');
var marked_division_text = document.createTextNode('this is division');
var marked_division_id_attr = document.createElement('id');

marked_division.appendChild(marked_division_text);
console.log(marked_division); // <div>this is division </div>

// [7] 동적으로 생성한 div 요소를 문서의 특정한 목적지에 추가(삽입)
var target_place = document.querySelector('#parent > .child:last-child');
target_place.appendChild(marked_division);

// appendChild : 부모안에 뒷쪽 ... 마지막 자식으로 붙인다. 
// 앞에 붙이는 방법은 정식으로 지원하지 않다. 헬퍼함수로 만들어야 한다.

/**
 * ----------------------------------------------
 * [7] 동적으로 생성된 <ul> <li>list item</li></ul>을
 * 문서의 특정 요소 내부 마지막 자식으로 추가(삽입)
 * ----------------------------------------------
 */

// ex1. 
// var marked_unordered_list = document.createElement('ul');
// var marked_unordered_list_item = document.createElement('li');
// var marked_unordered_list_item_text = document.createTextNode('list item');

// marked_unordered_list.appendChild(marked_unordered_list_item);
// marked_unordered_list_item.appendChild(marked_unordered_list_item_text);
// console.log(marked_unordered_list_item); 

// // 목적지에 해당하는 요소를 직접 생성한 다음에 문서에 붙여보겠다.
// var target_container = document.createElement('div');
// target_container.appendChild(marked_unordered_list);
// document.body.appendChild(target_container);


//ex2. setAttribute(attribute, value);
// var marked_unordered_list = document.createElement('ul');
// var marked_unordered_list_item = document.createElement('li');
// var marked_unordered_list_item_text = document.createTextNode('list item');

// marked_unordered_list.appendChild(marked_unordered_list_item);
// marked_unordered_list_item.appendChild(marked_unordered_list_item_text);
// console.log(marked_unordered_list_item); 

// // <div id="targe-container"></div>
// var target_container = document.createElement('div');
// // setAttribute(attribute, value);
// target_container.setAttribute('id', 'targe-container');
// target_container.appendChild(marked_unordered_list);
// document.body.appendChild(target_container);


// ex3. insertBefore : 부모의 첫번재 자식으로 붙인다. 
// var marked_unordered_list = document.createElement('ul');
// var marked_unordered_list_item = document.createElement('li');
// var marked_unordered_list_item_text = document.createTextNode('list item');

// marked_unordered_list.appendChild(marked_unordered_list_item);
// marked_unordered_list_item.appendChild(marked_unordered_list_item_text);
// // console.log(marked_unordered_list_item); 

// // <div id="targe-container"></div>
// var target_container = document.createElement('div');
// // setAttribute(attribute, value);
// target_container.setAttribute('id', 'targe-container');
// target_container.appendChild(marked_unordered_list);
// // document.body.appendChild(target_container);

// var targe = document.body.firstChild;
// console.log(targe); // #text
// console.log(targe.parentNode); // body
// targe.parentNode.insertBefore(target_container, targe); //
// // document.body.insertBefore(target_container, targe); // 위와 같은 결과


// ex4. 
var marked_unordered_list = document.createElement('ul');
var marked_unordered_list_item = document.createElement('li');
var marked_unordered_list_item_text = document.createTextNode('list item');

marked_unordered_list.appendChild(marked_unordered_list_item);
marked_unordered_list_item.appendChild(marked_unordered_list_item_text);
// console.log(marked_unordered_list_item); 

// <div id="targe-container"></div>
var target_container = document.createElement('div');
// setAttribute(attribute, value);
target_container.setAttribute('id', 'targe-container');
target_container.appendChild(marked_unordered_list);
// document.body.appendChild(target_container);

