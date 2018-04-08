###### Front-End Develop SCHOOL

## DAY 11
- CSS 레이아웃 box-sizing
- Vertical Rhythm
- CSS 레이아웃 position 속성

---

### box-sizing
- 요소의 너비와 높이를 계산하는 데에 사용되는 기본적인 CSS box model 대체하기 위해 사용.
- content-box
- border-box
- padding-box


##### content-box
- 초기값: content-box
- width와 height 속성은 오로지 콘텐츠만을 포함하여 측정되며, padding, border, margin을 포함하지 않는다.
- padding, border, margin은 박스 외부에 존재한다.


```css
.box {
	width: 350px;
	border: 10px solid black;
}
```
* 결과적으로 브라우저에서 렌더링되는 것은 `.box {width: 370px;}`이다.


##### border-box
- width 와 height 속성이 padding 및 border를 포함하며, margin을 포함하지 않는다. 이 box model 은 인터넷 익스플로러에서 문서가 쿽스 모드일 때 사용.
- padding과 border는 박스 안에 존재한다.

```css
.box {
	width: 350px;
	border: 10px solid black;
}
```
* 결과적으로 브라우저에서 렌더링되는 것은 `.box {width: 350px;}`이다.

##### padding-box
- width 와 height 속성은 padding 크기를 포함한다. 하지만 border 및 margin을 포함하지 않는다.
- Firefox 브라우저에만 적용이 된다. 

##### 참고 URL
[box-sizing] (https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)

## Vertical Rhythm
- 수직 방향으로 운율을 조정하는 디자인
- 본문 크기 18px(1.125rem), line-height: 1.5;

```css
/* baseline */
body {
    font: 1.125rem/1.5 'Spoqa Han Sans', 'Sans-serif'; 
    background-image: linear-gradient(180deg, transparest 95% 0%, #704578 95%,);
    background-size: 1px 27px;
}

/* 제목 디자인 */
h1,h2,h3,h4,h5,h6,p {margin-bottom: 27px;}

h1,h2,h3   {font-weight: 200;}
h1 		   {font-size: 44.78976px; line-height: 81px;}
h2, h3, h4 {line-height: 54px;}
h2 		   {font-size: 37.3248px;}
h3 		   {font-size: 31.104px;}
h4 		   {font-size: 25.92px;}
h5, h6     {line-height: 27px;}
h5 		   {font-size: 21.6px;}
```

>  background-image: linear-gradient(angle, color-stop 0% ~ color-stop 100%,);

## CSS 레이아웃 position 속성 
- `static` 
	- 기본값
- `relative `
	- 원래 위치에서 상대적, 주는 속성(top, left, right, bottom)에 따라 이동
	- 일반 흐름(normal flow)에 영향을 주지 않는다
- `absolute`
	- 부모 위치에서 상대적, relative 처럼 속성에 따라 이동
	- 일반 흐름(normal flow)에 영향을 준다
	- 부모 요소는 자격이 필요하다. position 값이 static이 아니고 가장 가까운 요소를 찾는다.
- `fixed`
	- 기준: screen, viewport
	- 기본적으로는 absolute와 유사하게 처리되어 보이나, 처리 결과는 다르다.
	- 고정 형태로 위치가 설정된다. 화면 스크롤과 상관 없이 항상 그 자리를 유지한다.