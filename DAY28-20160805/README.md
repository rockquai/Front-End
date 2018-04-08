###### Front-End Develop SCHOOL

# DAY 28
### DOM tree
DOM tree는 브라우저가 HTML 문서를 로드한 후 생성하는 모델을 의미하는데 객체의 트리로 구조화되어 있기 때문에 DOM tree라 부른다.

### DOM Query / Traversing (요소 접근)

```html
  <form name="primary_form" action="#" methdo="GET">
    <p>
      <label for="c_id">ID</label>
      <input type="text" id="c_id" name="c_id" placeholder="yammo9">
    </p>
  </form>

  <form name="secondary-form" action="#" methdo="GET">
    <p>
      <label for="c_mail">Email</label>
      <input type="text" id="c_mail" name="c_mail" placeholder="yammo9@exaple.com">
    </p>
  </form>
```

```javascript
// DOM Lv.0 방식
var forms = document.forms;
console.log(forms); //[form, form]

// secondary-form 접근
forms.'secondary-form'   //==> '-'(하이픈)이 있으면 '에러''
forms['secondary-form']  //==> 찾아진다.
```

```javascript
// 과거의 코드이다. 더 이상 쓰지 말고 없애야한다.
if (document.layers) {
  // NN (Netscape Navigator)
  console.info('NN 웹 브라우저가 확실합니다!');
} else {
  // IE (Internet Explorer)
  console.info('IE 웹 브라우저가 확실합니다!');
}
```

#### DOM Level 1
- document.documentElement
- document.getElementsByTagName()
- document.getElementById()

```javascript
var root_element;
root_element = document.documentElement; // HTML 문서에서만 가능
root_element = document.getElementsByTagName('hmlt')[0]; //xml, HTML문서에서 사용 가능 

console.log('root_element', root_element);

var head = document.head; // HTML 문서에서만 가능
var body = document.body; // HTML 문서에서만 가능

console.log(root_element); //'html'로 표준, 'body'로 출력되면 비표준. 

var inputs = document.getElementsByTagName('input');
var buttons = document.getElementsByTagName('buttom');

console.log('inputs:', inputs); 
console.log('buttons:', buttons);

// ID 속성을 통한 접근 방법 (Inerface: Selcetion)
var c_id = document.getElementById('c_id');
var c_mail = document.getElementById('c_mail');

console.log('c_id:', c_id);
console.log('c_mail:', c_mail);
```

```html
  <p class="my-pa">
    <strong>hello</strong> how are you doing?
  </p>
```

```javascript
var first_para = document.getElementsByTagName('p').item(0);
// var first_para = document.getElementsByTagName('p')[0];
var first_para_nodes = first_para.childNodes;

console.log(first_para_nodes[0].nodeType); // 3
console.log(first_para_nodes[1].nodeType); // 1
console.log(first_para_nodes[2].nodeType); // 3

console.log(first_para_nodes[0].nodeType === document.ELEMENT_NODE); // false
console.log(first_para_nodes[1].nodeType === document.ELEMENT_NODE); // true
console.log(first_para_nodes[2].nodeType === document.TEXT_NODE); // true

// Node.ELEMENT_NODE: 1, Node.TEXT_NODE: 3, Node.ATTRIBUTE_NODE: 2
// Node.COMMENT_NODE: 8, Node.DOCUMENT_NODE: 9
````



















