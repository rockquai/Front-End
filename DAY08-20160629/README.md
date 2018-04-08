###### Front-End Develop SCHOOL

## DAY 08
- CSS 박스모델
- Block box, Inline box
- 가로 가운데 정렬
- margin 정렬
- Margin collapsing
- @media (미디어 기술 사용)
- Vertical centering using CSS

---

## CSS 박스모델

### content
- 내용

### padding
- 내부여백 영역으로 보더 안쪽. (content와 border 사이)
- 색 표현이 가능하다.
- 양수값, 0만 적용이 가능하다. 

### border 
- 테두리 영역
- top, bottom, left, right 각기 다른색 적용 가능.
- 각 방향마다 색상을 다르게 주면 경계면이 대각선으로 생성이 된다. 삼각형, 별 등 다양항 그림을 그릴 수 있다.
- [관련글:border 속성으로 그림 그리기] (http://nuli.navercorp.com/sharing/blog/post/1132695)

### margin
- 외부여백 영역으로 보더 바깥쪽. (객체와 객체 사이)
- 투명하며 배경색이 적용되지 않는다. (눈에 보이지 않는다)
- 음수값 적용이 가능하다. (양수, 0 가능)
- 기본값 0

### Block Element
- 가로(넓이)의 기준은 부모, 세로(폭)의 기준은 자식
- 상, 하, 좌, 우 공간을 가진다.

###  Block box 특징
- 문서의 폭이 있을 때, 가로폭이 문서의 폭만큼 적용. 높이는 자신이 가지고 있는 콘텐츠 만큼 가진다. 콘텐츠가 없으면 '0'. 
- 화면의 폭을 줄이면 자동을 줄여든다. 

### Inline Element
- 자기가 가진 콘텐츠 만큼만 영역을 가진다.
- 좌, 우 공간 만을 가진다.

#### Inline box 특징
- 화면의 폭을 줄이면 박스가 깨진 형태의 모양이 변경된다.

### margin collasing
- 마진이 상/하 방향으로 접혀지는 현상. (좌/우는 겹치지 않는다.)
- 마진 상/하 중 큰 값이 적용이 된다.

> Margin collapsing 예.
> - 세로로 2개 이상 블록요소 마진이 만났을 때, 마진이 겹쳐지는 현상
> - 부모 요소 안에 자식 요소의 경우, 부모에게 패딩/보더 값이 없을 때 발생

### 단위
- em (equal M)
: 글씨 크기를 세로축에 대한 길이를 1em. (대문자 기준)
: 웹브라우저 기본 폰트는 16px이며 상대크기를 1em (1em = 16px)
: em을 쓰기 어려운 이유는 부모-자식-(자식안에)자식... 단계가 걸칠 수록(상속) 계산이 어려워지면 예측하기 어렵다. 이를 단점을 보완하는 것이 rem. 

- rem (root equal M)
: 최상위 요소인 'html' 요소에 비례하여 크기를 가지는 단위.
: 즉 html 요소에 font-size를 고정값으로 지정해두면 나머지는 그 비율에 따라 크기를 계산

### @media (미디어 기술 사용)
- 중단점 (Breakpoint) 설계(Design)
- CSS3 미디어쿼리 @media 환경 and (조건1) and (조건2)
- --1-- 600 --2-- 1000 --3--
- @media screen {} ==> IE 6-8 (o)
- @media only screen {} ==> IE 6-8 (X) 
- 미디어 쿼리 단위 em으로 사용하라. (rem: 사파리 오류)

### width
- 표준 속성의 width(가로폭)
: selector {width:200px; padding:10px; border:5px; margin:3px;} 
: 박스의 총 가로폭 = 200px + (10px+5px+3px) X 2

- 비표준 브라우저 (IE)
: width는 border까지 폭을 말한다.

### inheritbody 
- 화면 100% - (자식) div는 부모 body의 100% 기준으로 70%. 
- 그 안에 (자식)은 div(70%)를 100% 기준 삼아 
- input는 부모로 부터 상속을 받지 않는다. 상속을 받을려면 font-size: inherit; 하면 상속 받는다.

### 가로 가운데 정렬 설명
- 가로 가운데 정렬 원리
1. width : 50%
2. margin-left: auto;
3. 나머지 남은 공간은 왼쪽으로 이동해서 오른쪽 정렬
4. margin-right: auto;를 주면 공간은 절반을 오른쪽에 준다. 양쪽으로 나눠지게 된다.

- 명시적 표기
```
width: 70%;
margin-right: auto;
margin-left: auto;
```
- 암묵적 표기 
```
width: 70%;
margin: 0 auto;
```
> 비표준모드의 IE에서는 margin:auto; 설정이 적용되지 않음.

### vw, vh, vmin, vmax (Viewport units)
: 모바일 대응으로 생긴 단위 (새로운 시대에 새로운 기계에 적용하기 위해 생긴 단위)
- vw (viewport width)
- vh (viewport height)
- vmin (viewport min)
- vmax (viewport max)

> 1vw = 1% of viewport width
> 1vh = 1% of viewport height
> 1vmin = 1vw or 1vh, whichever is smaller
> 1vmax = 1vw or 1vh, whichever is larger
> 읽어보기 [Viewport Sized Typography] (https://css-tricks.com/viewport-sized-typography/)

### Vertical centering using CSS
[Vertical centering using CSS] (http://www.student.oulu.fi/~laurirai/www/css/middle/)
- Using line-height (and vertical-align)
- Using display:table-cell
- Using padding andline-height negative margin
- Using line-height and display:inline-block

#### line-height
- 블록 요소에 적용. 

#### text-align: 
- 블록 요소에 적용. 

#### vertical-align
- 인라인 요소에 적용 안됨. (inline,table-cell 요소에만 적용 가능)

### Fonts, Text property
- Font: 글꼴 관련
- Text: 문단 관련
- 읽어보기 : [다국어 환경에 맞게 타이포그래피 세팅하기 - 다국어 반응형 타이포그래피]
(http://spoqa.github.io/2016/06/03/localize-type-setting.html)