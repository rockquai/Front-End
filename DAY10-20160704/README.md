###### Front-End Develop SCHOOL

## DAY 10
- CSS 레이아웃 속성 (Float)

---

## Float 방법
- Float 속성 정리
- Float이 문서 흐름에 미치는 영향
- clear 속성
- Float이 적용된 요소를 감싸는 부모 요소 높이 설정 방법
- Float & Overflow;

## Float란?
- `<img>` 요소를 좌/우로 부유시켜 텍스트가 이미지를 둘러싸도록 설정하기 위해 고안된 기술이나, 오늘 날 그리드 시스템(멀티 컬럼 레이아웃)에 활용. 
- HTML 모든 요소는 float 속성 기본 값이 none으로 설정.
- 이를 사용자가 필요에 따라 float 방향을 왼쪽(left), 오른쪽(right)으로 설정.
- 이에 따라 float이 적용된 요소의 뒤에 마크업(구조화)된 요소는 float의 영향을 받음.

## float 해지법
- [방법1] 부모요소도 float을 적용. (※ 권장하지 않음!)
- [방법2] `<div class="clear"></div>` 생성 (※ 권장하지 않음!)
- [방법3] 부모요소에 overflow: hidden | auto; 부여 (※ 권장하지 않음!)
- [방법4] 두번째 방법(`<div class="clear"></div>`)을 의미적으로 사용할 수 있도록 응용한 방법 .clearfix (※ 권장!)

```html
  <div class="parent">
    <div class="child">Child Element 1</div>
    <div class="child">Child Element 2</div>
    <div class="child">Child Element 3</div>
  </div>
```


#### [방법1] 부모요소도 float을 적용. (※ 권장하지 않음!)

```css
.parent {
  float: left;
  width: 720px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  margin-bottom: 32px;
  background: #efefef;
}

.child {
  float: left;
  width: 140px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
```
> 이미지에 float를 주면 이미지 하단에 공백이 사라짐.

#### [방법2] `<div class="clear"></div>` 생성 (※ 권장하지 않음!)

```css
 .clear {
   clear: both;
 }
 ```

#### [방법3] 부모요소에 overflow: hidden | auto; 부여 (※ 권장하지 않음!)

```css
.float-container {
  overflow: hidden;
  overflow: auto;
}
```

#### [방법4] 두번째 방법(`<div class="clear"></div>`)을 의미적으로 사용할 수 있도록 응용한 방법 .clearfix (※ 권장!)

```css
/* Legacy Method v1 */
.clearfix::after {
  content: 'pseudo element';
  visibility: hidden;
  display: block;
  clear: both;
  height: 0;
}

.lt-ie8 .clearfix {
  zoom: 1;
}

/* Legacy Method v1.1 */
.new-clearfix::after {
  content: '';
  display: block;
  clear: both;
}

.lt-ie8 .new-clearfix {
  zoom: 1;
}

/* New Method */
.micro-clearfix::before,
.micro-clearfix::after {
  content: '';
  display: table;
}
.micro-clearfix::after {
  clear: both;
}

.lt-ie8 .micro-clearfix {
  zoom: 1;
}
```

## 참고 URL
- [A new micro clearfix hack] (http://nicolasgallagher.com/micro-clearfix-hack/)
- [Force Element To Self-Clear its Children] (https://css-tricks.com/snippets/css/clear-fix/)