###### Front-End Develop SCHOOL

# DAY 32

### 기본 자료형(primitive data type): 값을 복제하는 경우
- 원시 데이터 유형 (숫자, 문자, 논리, undefined, null)
- 원시 데이터 유형은 값이 복제가 된다.

### Object(객체형, 참조형): 값을 참조하는 경우
- 자료형 데이터 유형 (객체, 배열, 함수)
- 자료형 데이터 유형은 데이터가 참조가 된다.

### 데이터 유형 변환
#### 숫자 -> 문자
- '데이터' ex) '9'
- 데이터 + ''       ex) 9 + ''         // '9'
- String(데이터)    ex) String(9)      // '9'
- 데이터.toString() ex) (9).toString() // '9'

> 주의할 점: 숫자, 함수, 객체 리터럴(그 자체의 값)의 경우는 오류가 발생! 
오류가 발생하는 객체는 괄호 ()를 사용하여 데이터를 감싼 후 테스트!

#### 문자(숫자형 문자) -> 숫자
- 데이터 -0, *1, /1
- +데이터
- Number(데이터)
- parseInt(데이터), parseFloat(데이터)

#### 데이터 -> 불리언
- Boolean(데이터)
- !!데이터

### 웹 브라우저에서 계산된 CSS 스타일 값 가져오는 헬퍼 함수 
- 비 표준 MS IE 방식 (IE 8-) : 대상.currentStyle.스타일속성
- 표준 W3C 방식 (IE 9+) : window.getComputedStyle(대상,가상요소).스타일속성

```javascript
function getStyle(el, property, pseudo) {
    var value, el_style;
    // 유효성 검사
    if ( el.nodeType !== 1 ) {
        console.error('첫번째 인자 el은 요소노드여야 합니다.');
    }
    if ( typeof property !== 'string' ) {
        console.error('두번째 인자 property는 문자열이야 합니다.');
    }
    if ( typeof pseudo !== 'string' && pseudo ) {
        console.error('세번째 인자 pseudo는 문자열이야 합니다.');
    }

    // CSS 속성 이름이 카멜케이스화
    property = camelCase(property);

    if ( window.getComputedStyle ) {
        el_style = window.getComputedStyle(el, pseudo);
    if (pseudo && el_style.content === '') {
    return null;
    }
        value = el_style[property]; // = value = el_style.fontSize;
    } else {
        value = el.currentStyle[property];
    }
    return value;
}
```
#### CSS property name을 camelCase 바꿔주는 함수
- font-size ==> fontSize 
- 정규표현식을 이용해서 만드는 헬퍼 함수

```javascript
function camelCase(css_prop) {
     return css_prop.replace(/-./g, function($1){
     return $1.replace('-','').toUpperCase();
     });
}
```


