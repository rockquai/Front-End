###### Front-End Develop SCHOOL

# DAY 22
## Sass (Syntactically Awesome Style Sheets)
- Sass 설치
- CLI(Command line interface) 명령어
	- 컴파일 1회
	- 폴더 내 파일 변화
	- 지속적 컴파일 관찰 명령어
	- Sourcemap 설정
	- CSS output style
- Sass 문법 
	- 주석(Comments)
	- 중첩 규칙(Nested Rules)
	- 부모, 참조 선택자 (&)
	- 선택자 상속(Selector Inheritance) : @extend
	- 선택자 상속, 옵션(!optional) 

### 설치 
$ npm install node-sass --global

### CLI(Command line interface) 명령어
#### 컴파일 1회
$ node-sass sass/style.scss css/style.css

#### 폴더 내 파일 변화
$ node-sass sass/ --output css/

#### 지속적 컴파일 관찰 명령어
$ node-sass -w sass/ -o css/

#### Sourcemap 설정
$ node-sass -w sass -o css --source-map css

#### CSS output style
$ node-sass -w sass -o css --output-style expanded --source-map css
> CSS 출력 스타일 설정 (nested | expanded | compact | compressed)

### Sass 문법
#### 주석(Comments)
CSS 멀티라인 주석 뿐만 아니라, JS 싱글라인 주석 역시 SASS에서 사용.

```sass
/*
* 여러 줄 주석의 경우는
* CSS 컴파일 되어도 주석이 남음.
 */

// 한줄주석의 경우는 CSS에서 지원하지 않기 때문에
// CSS 컴파일시, 주석이 표시 되지 않음.
````

#### 중첩 규칙(Nested Rules)
부모 선택자 내부에 자식 선택자를 포함하는 구조 형태로 작성이 가능.

```sass
.page
	.container
		position: relative
		height: 20vh
			.section
				position: absolute
				left: 100%
```
```css
.page .container {
	position: relative;
	height; 20vh;
}

.page .container .section {
	position: absolute;
	left: 100%;
}
```

> SCSS 중첩 코드는 적당한게 좋다. 

```scss
	div.container {
		div.contenr {
			div.articles {
				& > div.post {
					div.title {
						h1 {
							a {

							}
						}
					}
					div.content {
						ul {
							li {}
						}
					}
				}
			}
		}
	}
```

#### 중첩 속성(Nested Properties)
분화된 속성 여러 개를 설정할 경우, 네임스페이스(Namespace)를 사용하여 중첩 속성을 설정

```sass
.page
	font: 1rem/1.5 "Spoqa Han Sans", sans-serif
		weight: 600
		variant: small-caps

	border:
		top:
			color: red
			style: solid
			width: 2px
		bottom:
			color: transparent
			style: solid
			width: 2px
		right:
			color: pink
			style: dashed
			width: 2px
```
```css
.page {
	font: 1rem/1.5 "Spoqa Han Sans", sans-serif;
	font-weight: 600;
	font-variant: small-caps;
	border-top-color: red;
	border-top-style: solid;
	border-top-width: 2px;
	border-bottom-color: transparent;
	border-bottom-style: solid;
	border-bottom-width: 2px;
	border-right-color: pink;
	border-right-style: dashed;
	border-right-width: 2px; 
}
```

### 부모, 참조 선택자 (&)
앤퍼센트(&) 심볼은 부모를 참조하는 선택자 역할을 수행

```sass
.page
	.page-header
		position: relative
		height: 20vh
		a
			color: #3B40F3
			.chrome &::hover
				color: #6b141c
			&:focus,
			&:active,
				outline: none
			& span
				font-weight: 900
```

```css
.page .page-header {
	position: relative;
	height: 20vh;
}

.page .page-header a {
	color: #3B40F3;
}

.chrome .page .page-header a::hover {
	color: #6b141c;
}

.page .page-header a:focus, .page .page-header a:active {
	outline: none;
}

.page .page-header a span {
	font-weight: 900;
}
```
### RWD, 부모 참조 선택자(&)와 미디어쿼리
선언 구간 내부의 미디어쿼리는 외부로 분리.

```sass
aside.page-sidebar
	float: left
	width: 100%
	@media (min-width: 600px)
		width: 45%
	@media (min-width: 1100px)
		width: 33.3333%
```

```css
aside.page-sidebar {
	float: left;
	width: 100%; 
}
@media (min-width: 600px) {
	aside.page-sidebar {
	width: 45%; 
	} 
}
@media (min-width: 1100px) {
	aside.page-sidebar {
	width: 33.3333%; 
	}
}
```

### 선택자 상속(Selector Inheritance) : @extend
@extend를 사용해 선언된 다른 규칙의 내용을 상속.

```sass
$button-radius: 4px
$button-align: center
$button-gap: 0.6em
$button-bg: #485AFF
$button-primary-color: #FFAE35
$button-secondary-color: #9C198A

.button
	display: block
	padding: $button-gap 1em
	background: $button-bg
	text-align: $button-align

.button-error
	@extend .button
	background: #f00
	color: #fff
	border: 3px solid darken(#f00, 42%)
```

```css
.button, .button-error {
	display: block
	padding: 0.6em 1em
	background: #485AFF
	text-align: center
}

.button-error {
	background: #f00
	color: #fff
	border: 3px solid #290000
}
```

### 선택자 상속, 옵션(!optional) 
@extend 오류 발생시, 오류가 발생되지 않도록 옵션 설정.

```sass
$button-radius: 4px
$button-align: center
$button-gap: 0.6em
$button-bg: #485AFF
$button-primary-color: #FFAE35
$button-secondary-color: #9C198A

.button
	display: block
	padding: $button-gap 1em
	background: $button-bg
	text-align: $button-align

.button-error
	@extend .buttons !optional
	background: #f00
	color: #fff
	border: 3px solid darken(#f00, 42%)
```

```css
.button {
	display: block;
	padding: 0.6em 1em;
	background: #485AFF;
	text-align: center;
}

.button-error {
	background: #f00;
	color: #fff;
	border: 3px solid #290000;
}
```

### 대체 선택자(Placeholder Selector, %)
SASS는 특수한 선택자 ‘%대체 선택자’를 지원. 해석된 CSS에서는 출력 되지 않음.

```sass
%btn
	$btn-bg: #E923CE
	background: $btn-bg
	border: none
	color: darken($btn-bg, 40%)

.page-list
	button 
		@extend %btn

footer button, 
footer a[role=button],
footer input[type="button"]
	@extend %btn
```

```css
.page-list button, footer button,
footer a[role=button],
footer input[type="button"] {
	background: #E923CE;
	border: none;
	color: #3a0633;
}
```