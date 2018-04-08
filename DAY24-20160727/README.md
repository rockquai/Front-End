###### Front-End Develop SCHOOL

# DAY 24
## Sass 문법(Syntactically Awesome Style Sheets)
- 연산 (Operations)
- 보간법(#{}, Interpolation)
- Mixins

### 연산(Operations)
- 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%) 등 수학의 연산 결과를 수행할 수 있다.
- 사칙연산의 원리를 따른다(+,-,*,/, %[나머지 연산자])
- 폰트 속기형을 쓸 때 생각처럼 작동하지 않는다
- 인터폴레이션(Interpolation) 방식으로 해결한다 #{}
- 컬러 연산이 가능하다(RRGGBB값중 매칭되는 값들을 연산한다)
- 문자 연산(String Operations) : 문자와 문자를 접합하려는 경우 + 연산자를 사용.
- 불린 연산도 연산이 가능하다.

```
10 >= 11 // false
1 + 1 == 2 // true
red == #f00 // true

'foo' + 'bar' // 'foobar'
'foo ' + 'bar' // 'foo bar'

1 + 2 == 4 or 2 != two // true

true and false // false

not false // true
```

### 보간법(#{}, Interpolation)
- 문자를 접합(용접과 비슷)
- Sass는 변수를 “” 내부에서 처리 할 수 있는 보간법을 지원.

- 웹 폰트 CDN을 사용할 경우, 보간법이 유용하게 활용.

```sass
$spoq-language: kr

@import url("http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-#{$spoq-language}.css")
```

- RWD, 쿼리문 보간법 활용(#{ })

```sass

$selector: selector-name
$media-md: "screen and (min-width: 760px)"
$media-lg: "screen and (min-width: 1220px)"
$media-print: "not screen and (min-width: 21cm)"

.#{$selector}
	@media #{$media-print}
		background: #fff !important
		color: #000 !important
```
> !important은 프린트(인쇄) 환경에서는 꼭 배경은 흰색, 컬러는 검정으로 출력해야 잉크 낭비를 줄일 수 있다.


### 믹스인(Mixins)
- JS함수(function)와 흡사한 믹스인 모듈 정의(@mixin, =) 후, 호출(@include, +)해서 사용. 재사용이 가능.
- '@mixin' 지시자(Directive)를 사용하여 정의한다. (*Sass 문법에서는 '='으로 대체할 수 있다.)
- '@include' 지시자를 사용하여 정의된 믹스인을 호출한다. (*Sass 문법에서는 '+'으로 대체할 수 있다.)
- 어떤 경우에 정적 믹스인 보다 플레이스홀더(%) 선택자가 좋은 선택인가? ex) `common.css`

> Sass는 전달인자(Arguments)로 통일해서 쓴다.
> javasscript는 매개변수(Parameter), 전달인자(Arguments)로 구분해서 쓴다.
	[- 매개변수(Parameter) : 값을 정의 할 경우 | - 전달인자(Arguments) : 값을 전달 할 경우]

- scss
	- 정의: @mixin
	- 불러오기: @include
- sass
	- 정의: =
	- 불러오기: +

### 활용성이 떨어지는 ‘정적 믹스인’
- 정적인 믹스인은 매번 동일한 스타일만 설정이 가능하기 때문에 활용성이 떨어짐.
- 기본적으로 매개변수(Parameter)가 설정되어 있지 않은 믹스인을 정적 믹스인이라고 한다. 

```sass
=믹스인이름 {}
+믹스인이름
```

### 활용성이 향상된 ‘동적 믹스인’
- 전달된 인자에 따라 스타일 변경이 가능하기 때문에 활용성이 향상.

```sass
=믹스인이름(매개변수1, 매개변수2) {}
+믹스인이름(전달인자1, 전달인자2)
```

### 전달 인자 (Arguments) 
- JS 함수 확장처럼 mixin으로 정의된 모듈에 인자를 전달하여 믹스인을 확장 할 수 있다.
- 전달인자는 Sass의 변수와 유사하기에 변수 전달인자 앞에 '$'를 붙여야 하며, 각 인자는 콤마(',')로 구분한다.
- 전달인자의 기본 값을 설정하는 구문이 있다면 해당 인자는 선택사항이다. ex) $arg: value

```sass
=믹스인이름(매개변수1, 매개변수2, 매개변수3, 매개변수4) {}
```

### 키워드 전달 인자(Args, Keyword)
- Mixin 호출시 값을 전달하지 않아 오류가 발생하는 것을 방지하기 위해 특정 값을 기본으로 설정할 수 있다.

```sass
=믹스인이름(매개변수1:기본값, 매개변수2:기본값) {}
```

### 가변 전달 인자(Args, Variable)
- 전달할 인자의 개수가 고정된 경우, 응용하여 활용 불편.
- 전달 받을 인자 List(배열)를 '...'로 처리하면 복수의 인자를 처리하기 쉽다.

```sass
=믹스인이름(매개변수...) {}
```

- 줄여서('...') 전달하는 인자 표현식에는 '맵(Map) 데이터 유행'을 사용할 경우, '$를 제외한 키(Key)'를 전달하여 처리 가능하다 (반복문 없이)

```SCSS
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}

$value-map: (text: #00ff00, background: #0000ff, border: #ff0000);
.secondary {
  @include colors($value-map...);
}
```

### 변수 범위(scope) 콘텐트 블록
- 믹스인 내부에 `@content`를 사용하면 믹스인 호출 과정에서 믹스인 내부에서 처리될 콘텐츠(코드 블록)를 전달하여 코드를 섞을 수 있다.

```sass
=apply-to-ie6-only
  * html
    @content

+apply-to-ie6-only
  #logo
    background-image: url(/logo.gif)
```

```css
* html #logo {
  background-image: url(/logo.gif);
}
```
> * html : `*` IE6,7 hack.

### 믹스인(Mixins) VS 플레이스홀더 %(placeholder)
- 믹스인(Mixins)
	- 선택자마다 동일한 코드가 생성이 되어 코드량이 많아진다.
	- 인자를 전달함으로써 확장성이 좋다.
	- 외부에서 전달받은 인자 또는 콘텐츠를 병합해서 코드 덩어리를 출력이 된다.
- 플레이스홀더 %(placeholder)
	- 선택자가 올라가 그룹핑이 된다. 
	- 확장하기 힘들다.

