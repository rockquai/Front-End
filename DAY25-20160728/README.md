###### Front-End Develop SCHOOL

# DAY 25
## function
	- Color Functions
	- Number Functions
	- 사용자 정의 함수(@function)
## Condition
	- @if (Condition) @else if, @else
	- if() 함수 (Condition, true, false)
## Loops
	- @while (iteration)
	- @for (iteration, from ~ [to, through])
	- @each

### Color Functions
```sass
// 각도를 돌려 색을 변형
adjust-hue($color, $degree)

// 많이 사용되는 함수
lighten($color, $amount)
darken($color, $amount)
saturate($color, $amount)
desaturate($color, $amount)
grayscale($color)

complement($color) // 보색
invert($color) // 보색, 명도까지 반전

// Get 함수(Getter)
alpha($color)
opacity($color)

// Set 함수(Setter)
rgba($color, $alpha)

// 불투명하게 변경
opacify($color, $amount) / fade-in($color, $amount)

// 투명하게 변경
transparentize($color, $amount) / fade-out($color, $amount)
```

### Number Functions

```sass
// 퍼센트(%) 반환
percentage($number)

// 반올림
round($number)

// 올림
ceil($number)

// 내림
floor($number)

// 절대값
abs($number)

// 최소값 반환
min($numbers...)

// 최대값 반환
max($number...)

// $limit이하의 랜덤한 숫자(정수) 반환
random([$limit])
```

### 사용자 정의 함수(@function)
- JS 함수와 거의 흡사한 함수로 @function으로 모듈을 정의한 후, 이름으로 호출할 수 있어 재사용이 가능.
- @return 값이 있어야 값을 돌려받을 수 있다.

```scss
@function px2em($font_size, $base_font_size: 16) {
  @return $font_size / $base_font_size + em;
}
```

```css
body {
	// px2em 함수 호출
	color: px2em(12, 20); // 12/20 + em = 0.6em 
}
```

### @if (Condition) @else if, @else
- JS의 if ~ else 문과 유사한 조건문을 처리. (JS 코드에서 조건부분의 괄호가 빠짐)

```scss
$value: null;

h1 {
  @if $value == false {
    color: blue;
  } @else if $value == null {
    color: green;
  } @else {
    color: black;
  }
}
```

```css
h1 {
  color: green; 
}
```

### if() 함수 (Condition, true, false)
- JS의 3항식 조건문과 유사하게 조건문을 처리.

```scss
$main-bg: #000;

.main {
  // if (조건, 참일 경우, 거짓일 경우)
  color: if($main-bg == black, #fff, #000)
  // 결과: color: #fff
}
```

```css
.main {
	color: #fff
}
```

### @while문
- JS의 while문과 유사한 반복문을 처리. (JS 코드에서 조건부분의 괄호가 빠짐)
- `$i:$i+1;' : 조건에 변화가 없으면 '무한 루프'에 빠짐.

```scss
$i: 1; 
$gutter: 20px;

@while $i <= 12 { 
	.grid-#{$i} {
		width: 60px * $i + $gutter * ($i-1); 
	}
	// 조건 변화 코드 
	$i:$i+1; 
}
```

### @if VS @while
```scss
// 1회만 처리
@if 조건 {
  조건이 참인 경우 , 코드 블록문이 처리
}

// 조건이 참일 동안 계속 처리, 조건이 계속 참일 경우.. 무한 루프에 빠질 수 있으므로 사용에 주의해야 한다.
@while 조건 {
  조건이 참인 경우, 코드 블록문이 처리
}
```

### @for (iteration, from ~ [to, through])
- JS의 for문과 유사한 반복문을 처리.
- to vs through
	- to: ~까지 (12 전까지)
	- through: ~끝까지 (12 끝가지)
 
```scss
$total: 12;
	@for $i from 1 to $total {
		.grid-#{$i} {
			width: 70px * $i; 
		}
	}

	@for $i from 1 through $total { 
		.grid-#{$i} {
			width: 70px * $i; 
		}
	 }
```

### @each문 ( in ~ [list, map])
- JS의 for~in문, forEach문과 유사한 반복문을 처리.
- list 데이터 유형일 경우

```sass
$buttons: play pause stop prev next forward backward

// list에서 각각의 아이템을 뽑아서 대입한다
@each $button in $buttons
  .button-#{$button}
    background: url("../images/button-#{button}.png")
```

- map 데이터 유형일 경우

```sass
$headings: (h1: 3rem 1.2, h2: 2rem 1.45, h3: 1.5rem 1.6)

@each $heading in $headings
  $h: nth($heading, 1)
  $v: nth($heading, 2)
  $fz: nth($v, 1) // 3rem
  $lh: nth($v, 2) // 1.2
  #{$h}
    font-size: $v
    line-height: $lh
// 보다 간단히
@each $heading, $info in $headings
  $fz: nth($info, 1)
  $lh: nth($info, 2)
  #{$heading}
    font-size: $fz
    line-height: $lh
```











