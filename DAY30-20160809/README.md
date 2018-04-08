###### Front-End Develop SCHOOL

# DAY 30

## DOM API 

### 1. 선택
- document.getElementById('id name')
- .getElementsByTagName('element node(tag) name')
- .getElementsByClassName('class attribute value name')
- .querySelector('css selector')
- .querySelectorAll('css selector')

### 2. 탐색
- .firstChild
- .firstElementChild (IE 9+)
- .lastChild
- .lastElementChild (IE 9+)
- .parentNode
- .parentElement (DOM Lv4)
- .childNodes
- .children
- .previousSibling
- .previousElementSibling (IE 9+)
- .nextSibling
- .nextElementSibling (IE 9+)

### 3. 조작
- parent_node.appendChild(child_node)
- target_node.parentNode.insertBefore(insert_node, target_node)
- parent_node.removeChild(child_node)
- target_node.parentNode.replaceChild(replace_node, target_node)
- node.cloneNode()
- node.hasChildNodes()
- node.isEqualNode() (DOM Lv3, IE 호환 가능#)
- node.contains(other_node) (DOM Lv4, IE 호환 가능#)
- node.normalize() (DOM Lv2, IE 호환 가능#)

### console.error(), throw new Error() 차이점
- console.error(): 오류를 발생되고 코드가 실행 된다.
- throw new Error: 오류가 발생되고 코드 자체를 멈춤. 실행 되지 않는다. 네이티브코드라 브라우저 호환성 높음.