###### Front-End Develop SCHOOL

# DAY 34

### While
: 조건이 참(true)일 동안(while) 코드 블록문 ( { ... } ) 실행

``` javscript
// 선감소 --
var boo = true;
while(boo){
  console.log(boo ? '참참참' : '짝짝짝!'); 
  if (--m > 0) { // 9,8,7,6,5,4,3,3,1
    boo = !boo;
  }
}

// 후감소 --
var boo = true;
while(boo){
  console.log(boo ? '참참참' : '짝짝짝!'); 
  if (m-- < 0) { // 10, 9,8,7,6,5,4,3,3,1
    boo = !boo;
  }
}
```
### do ~ while
: while문과 다르게 do 블럭의 코드가 무조건 한번 실행이 되고 while문 안으로 진입

``` javscript
var boo = true, m =10;
do {
  console.log(boo ? '참참참!' : '짝짝짝!'); // true이므로 참참참!
  if (m-- < 0) { 
    boo = !boo; 
  }
} while(boo); // boo ==> true이므로 실행이 된다.
```

### for
: for문의 조건절에서 var로 선언된 변수는 전역변수와 똑같다

``` javscript
for( var i=0, boo=false; i < 10; i++ ) {
  console.log( (i === 9 ? !boo : boo) ? '참참참!' : '짝짝짝!' );
} 
```

### continue

``` javascript
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
  // isType() 헬퍼함수
  if( isType(fruit) !== 'string' ) {
  // console.log(fruit);
  // 다음 for문으로 점프!
  continue;
  }
  real_fruits.push(fruit); 
}
console.log(real_fruits); // ["바나나", "딸기", "포도", "수박"]
```

### break

``` javascript
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
```

### for in

``` javascript
var obj = {'name':'name_value', 'job': 'job_value', 'age': 'age_value'};
for ( var property in obj ){
  // 자신의 속성인지 경우만 탐색 -- 조상까지 탐색하는 것을 막아준다. 
  if ( obj.hasOwnProperty(property) ) {
    console.log('속성:', property);
    console.log('값:', obj[property]);
  }
}
```