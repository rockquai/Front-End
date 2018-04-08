###### Front-End Develop SCHOOL

# DAY 29

## DOM API
- id 속성으로 대상(요소노드)을 선택 `document.getElementById('id_name')`
- 요소노드의 이름으로 대상(요소노드)을 선택 `document.getElementsByTagName('tag_name')`
- class 속성으로 대상(요소노드)을 선택 `document.getElementsByClassName('class_name')`
- 특정 속성으로 대상(요소노드)을 선택

### DOM Traversing
- [선택] 현재 선택한 대상 `el`
- [탐색] 부모노드 `el.parentNode`
- [탐색] 첫번째자식노드 `el.firstChild`
- [탐색] 마지막자식노드 `el.lastChild`
- [탐색] 이전 형제 노드 `el.previousSibling`
- [탐색] 다음 형제 노드 `el.nextSibling`
- [탐색] 자식 노드들 `el.childNodes`

```html 
	<div id="parent" class="container" data-container="true" aria-hidden="false" role="group">
		<div class="child">
			<!-- First Child -->
			<div class="childern">Chidren 1</div>
			<div class="childern"></div>
			<div class="childern">Chidren 3</div>
			<div class="childern">Chidren 4</div>
			<div class="childern">Chidren 5</div>
		</div>
		<div class="child">
			<div class="childern">Chidren 1</div>
			<div class="childern">Chidren 2</div>
			<div class="childern"></div>
			<div class="childern"></div>
			<div class="childern"></div>
		</div>
		<div class="child">
			<div class="childern">Chidren 1</div>
			<div class="childern">Chidren 2</div>
			<div class="childern">Chidren 3</div>
			<div class="childern">Chidren 4</div>
			<div class="childern">Chidren 5</div>
		</div>
		<div class="child">
			<!-- Last Child -->
			<div class="childern"></div>
			<div class="childern"></div>
			<div class="childern"></div>
			<div class="childern"></div>
			<div class="childern">Chidren 5</div>
		</div>
	</div>
```

### console 패널 화면에 각 수집된 `parent_el_child_nodes`의 노드 유형을 출력

```javascript
var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;

for ( var i=0; i<9; i=i+1 ) {
  console.log('i:', i);
  // parent_el_child_nodes.item(i).nodeType 이 반환하는 값?

  // ELEMENT_NODE : 1
  if ( parent_el_child_nodes[i].nodeType === 1 ) {
    console.log( '%c current node is ELEMENT_NODE.', 'background: #222; color: #bada55' );
    console.log( 'current node is ELEMENT_NODE.' );
    parent_el_first_child_el = parent_el_child_nodes[i];
    break;
    // 'break'가 없으면 lastchild 선택
    // 'break'가 있으면 firstchild 선택
  }
  // TEXT_NODE : 3
  else {
    console.log( '%c current node is TEXT_NODE.', 'background: #222; color: #fc414b' );
    console.log( 'current node is TEXT_NODE.' );
  }
}
```

#### `#parent .child:first-child` 요소의 자식노드를 순환하여 노드 유형 로그하기

```javascript
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
```

#### CSS 선택자를 통해 문서 객체를 선택하는 방법 (IE 8+ 지원)
- querySelector('#id .class');
- querySelectorAll('#id .class');

```javascript
var childThird= document.querySelector('#parent > .child:nth-child(3)');
var parentAll= document.querySelectorAll('#parent *');
var pateentAllfirst= document.querySelectorAll('#parent *')[0]; 
var pateentFirst= document.querySelector('#parent *');
```

### DOM API를 사용하여 문서 객체를 동적으로 생성

```javascript
var marked_division = document.createElement('div');
var marked_division_text = document.createTextNode('this is division');
var marked_division_id_attr = document.createElement('id');
marked_division.appendChild(marked_division_text);

var target_place = document.querySelector('#parent > .child:last-child');
target_place.appendChild(marked_division);

var marked_unordered_list = document.createElement('ul');
var marked_unordered_list_item = document.createElement('li');
var marked_unordered_list_item_text = document.createTextNode('list item');

marked_unordered_list.appendChild(marked_unordered_list_item);
marked_unordered_list_item.appendChild(marked_unordered_list_item_text);

var target_container = document.createElement('div');
target_container.setAttribute('id', 'targe-container');
target_container.appendChild(marked_unordered_list);
```