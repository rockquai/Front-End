###### Front-End Develop SCHOOL

# DAY 23
## Sass 문법(Syntactically Awesome Style Sheets)
- @import 호출(Import on Steroids)
- 중첩 @import
- 스타일 모듈 관리 (Manage Style Modules)
- 변수(Variables, $) 
- !defult, !global, !optional
- sass 내장함수
- 데이터 유형 (Data Type)

### @import 호출(Import on Steroids)
- CSS 뿐만 아니라 *.scss, *.sass 파일을 @import 문을 사용하여 호출.
- scss, sass 확장자의 경우는 생략 가능하며 css 확장자는 필히 명시.
- 여러 개의 파일을 불러들일 때는 콤마(,)로 불러올 수 있으나, 명시적 표기를 위해 권장하지는 않는다.
- import구문이 파일 중간에 있어도 에러가 나지 않는다.

```sass
@import layout
@import variables
@import media-quries

// 명시적 표기를 위해 권장하지 않는다.
@import layout, variables, media-quries
```

### 중첩 @import
- @import를 선언 구문 내부에 사용하면 별도로 분리된 파일에서 코드를 불러와 진다. (선택자 상속)

```sass
// _button.sass
$space: 50px !default
$pink: #FF0099 !default

.button
	padding: $space
	border: none
	background: $pink

// style.sass
.buldack
	$space: 40px 
	$pink: null
	width: 200px
	@import "button"
```

```css
.buldack {
  width: 200px;
}

.buldack .button {
  padding: 40px;
  border: none;
  background: #FF0099;
}
```

### 스타일 모듈 관리(Manage Style Modules)
- Sass에서는 각각의 역할을 분리하여 필요에 따라 재사용할 수 있도록 모듈 관리하는 것이 가능.
- 관리가 무척이나 쉬워진다.
- 작은 단위로 쪼개면 조립하기 쉽다.

```sass
// 라이브러리: Libraries
@import compass
@import public/config 
@import public/reset 
@import shared/avantgarde 
@import public/mixins 
@import public/sprites 
@import shared/payment_types

// 타이포그래피: Typography 
@import public/type_styles
@import public/type_layout 
@import public/links 
@import public/pagination
```

### 변수(Variables, $) 
- PHP변수처럼 $이름값을 설정한 후, 값을 참조하여 적용 가능.
- 호이스팅 개념이 없다. 변수는 맨위 상위에 선언해야 한다. 
- Sass 변수는 변수 이름 앞에 '$' 기호를 붙인다.
- 변수 이름 사이에 공백을 사용하지 않는다.
- 변수 이름의 음절 사이에 _, - 등을 사용한다.
- camelCase 방식의 이름을 사용할 수도 있다. 다만, camelCase 표기식은 일반적으로 함수 이름에 사용되기 때문에 권장하지는 않는다.

### !defult, !global, !optional Flag
- !default:  변수를 설정한 후, 초기값을 지정 할 수 있다.
- !global:   변수에 선언을 전역변수로 선언이 된다.
- !optional: @extend 오류 발생시, 오류가 발생되지 않도록 설정하는 옵션이다. 

### sass 내장함수
- floor(): 내림함수
- round(): 반올림 함수 
- ceil(): 올림 함수
- unquote(): 따옴표 제거 함수
- abs(): 절대값 표시 함수
- percentage(): 퍼센트 변경 함수

### 데이터 유형(Data Type)
Sass는 6가지(Null, Number, String & Color, Boolean, list, map) 데이터 형을 지원.

- Numbers: 숫자형 
1.2, 3, 14px

- Nulls: 비어있음 
null

- Strings & Colors: 문자형
“../images/icon.jpg”|‘Times New Roman’|Verdana|lightblue|#fe4940

- Booleans: 논리형 
(참, 거짓) true, false

- Lists: 공백, 콤마(,)로 구분되는 목록 (Javascript 배열과 유사), 관련 함수 
1.5em 1em 0 2em|2px solid gray|Helvetica, Sans-Serif

- Maps: '키:값'' 으로 구성된 그룹 (Javascript 객체와 유사), 관련 함수로 값을 얻을 수 있습니다. 
$map: (key1: value1, key2: value2)