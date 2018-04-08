###### Front-End Develop SCHOOL

# DAY 27
## DOM(Document Object Model)
- Document: 도큐멘트.(문서), Object: 객체.(문서의 요소), Model: 모델.(요소들 간의 관계도)
- 문서안에 있는 특정 선택자를 선택할 수 있도록 API 제공.
- 문서(document)는 노드의 집합.
  
- 돔-스크립트(DOM-Script)는 DOM을 이용하여 문서의 요소를 선택하고, Javascript를 이용하여 이벤트 헨들링 및 조작하는 것이다.

### node type
- 문서 노드(Document Node)
: 트리의 최상위에 존재하며 각각 요소, 속성, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다.

- 요소 노드(Element Node)
: 요소 노드는 HTML 요소를 표현한다. 속성, 텍스트 노드에 접근하려면 먼저 요소 노드를 찾아 접근해야 한다.

- 속성 노드(Attribute Node)
: 속성 노드는 HTML 요소의 속성을 표현한다. 먼저 요소 노드를 찾고 해당 요소의 속성을 참조 또는 수정할 수 있는 자바스크립트 메서드, 속성을 사용하여 참조, 수정할 수 있다.

- 텍스트 노드(Text Node)
: 텍스트 노드는 HTML 요소의 텍스트을 표현한다. 텍스트 노드는 자식 노드를 가질 수 없다.

- [노드 타입 분류, MDN] (https://developer.mozilla.org/ko/docs/Web/API/Node/nodeType)

```
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. </p>
<p id="notification">Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

```
// 유사배열(Like Array): NodeList or HTMLCollection 반환
// 집합을 반환하므로 각 객체를 조작하기 위해 집합에서 조작하려는 객체를 꺼내야 한다
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByTagName('p').length)

// 같은 결과를 반환
console.log(document.getElementsByTagName('p').item(0));
console.log(document.getElementsByTagName('p')[0]);

// 노트 타입 체크
console.log(document.getElementsByTagName('p')[0].nodeType));
```

### DOM Level Version
- DOM Legacy (Lv.0)
- DOM Lv.1
- DOM Lv.2
- DOM Lv.3
- DOM Lv.4
  > 현재 DOM Lv.0을 사용하며 레거시 모델이라고 부른다.

### DOM - Property
- firstChild // 첫번째 자식노드(Node)를 찾습니다.  
- nodeValue // 노드의 값을 확인할 수 있습니다. 
- innerHTML // 내부에 HTML 코드를 넣을 수 있습니다. 비표준이나, 표준처럼 사용되며 매우 유용합니다. 

### DOM - Method 
- document.getElementById() // id 속성을 가진 객체를 선택할 수 있습니다. 
- document.getElementsByTagName() // 객체(요소) 이름으로 요소 노드집합을 선택할 수 있습니다. 
.
.
.

### DOM - Event, Event Handler
- onclick = function() {...} // 선택한 대상을 클릭할 경우 일어나는 일을 제어합니다. 
- ondblclick = function() {...} // 선택한 대상을 더블클릭할 경우 일어나는 일을 제어합니다. 
- onmouseover = function() {...} // 선택한 대상에 마우스 오버시에 일어나는 일을 제어합니다. 
- onmouseout = function() {...} // 선택한 대상에 마우스 아웃시에 일어나는 일을 제어합니다. 
.
.
.

```html
<div id="button-group" role="group">
  <button type="button">#f50054</button>
  <button type="button">#8800f3</button>
  <button type="button">#139df3</button>
  <button type="button">#20f97d</button>
  <button type="button">#f2ce09</button>
</div>
```

```js
  var btn_group = document.getElementById('button-group');
  var buttons = btn_group.getElementsByTagName('button');
  var btn1 = buttons[0];
  var btn2 = buttons[1];
  var btn3 = buttons[2];
  var btn4 = buttons[3];
  var btn5 = buttons[4];
  var btn6 = buttons[5];
  var body = document.body; 

  var changBgcolor = function() {
    var color = this.firstChild.nodeValue;
    console.log(color);
    body.style.backgroundColor = color;
  }

  btn1.onmouseenter = 
  btn2.onmouseenter = 
  btn3.onmouseenter = 
  btn4.onmouseenter = 
  btn5.onmouseenter = 
  btn6.onmouseenter = changBgcolor;
```
