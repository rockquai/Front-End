###### Front-End Develop SCHOOL

## DAY 07
- CSS 선택자

---

### CSS 선택자

|유형                 | 선택자                    | 설명                               |
|---------------------|---------------------------|------------------------------------|
|**전체 선택자**      |                           | HTML페이지 내부의 모든 태그를 선택.|
**태그 선택자**       | E                         | 요소 , 태그명이 E인 특정 태그를 선택.
**클래스 선택자**    | .classname                 | class 속성값이 classname으로 지정된 요소를 선택.
**아이디 선택자**    | #idname                    | id 속성값이 idname로 지정된 요소를 선택.
**자식 선택자**      | E F                        | E 요소의 자손인 F 요소를 선택.
                     | E > F                      | E 요소의 직계 자식인 F 요소를 선택.
**인접 형재 선택자** | E + F                      | E 요소를 뒤따르는 F 요소를 선택.(E와 F 사이에 다른 요소가 존재하면 선택하지 않습니다.)
                     | E ~ F                      | E 요소가 앞에 존재하면 F를 선택. (E가 F보다 먼저 등장하지 않으면 선택하지 않습니다.)  
**속성 선택자**  | E[attr]                        | ‘attr’ 속성이 포함된 요소 E를 선택.
                 | E[attr="val"]                  | ‘attr’ 속성의 값이 정확하게 ‘val’과 일치하는 요소 E를 선택.
                 | E[attr~="val"]                 | ‘attr’ 속성의 값에 ‘val’이 포함되는 요소를 선택. (공백으로 분리된 값이 일치해야 합니다.)
                 | E[attr^="val"]                 | ‘attr’ 속성의 값이 ‘val’으로 시작하는 요소를 선택.
                 | E[attr$="val"]                 | ‘attr’ 속성의 값이 ‘val’으로 끝나는 요소를 선택.
                 | E[attr\|="val"]                 | ‘attr’ 속성의 값이 'val' '-'(하이픈)으로 구분되는 단어가 일치할 때 선택.
**가상 클래스**  | E:link                         | 방문하지 않은 링크 E를 선택. (기본 상태)
                 | E:visited                      | 방문한 링크 E를 선택.
                 | E:hover                        | E 요소에 마우스가 올라가 있는 동안 E를 선택.
                 | E:active                       | E 요소에 마우스 클릭 또는 키보드 엔터가 눌린 동안 E를 선택.
                 | E:focus                        | E 요소에 포커스가 머물러 있는 동안 E를 선택.
                 | E:nth-child(n)                 | 앞으로부터 지정된 순서와 일치하는 요소가 E 라면 선택. 
                 | E:nth-last-child(n)            | 뒤로부터 지정된 순서와 일치하는 요소가 E 라면 선택.
                 | E:nth-of-type(n)               | E 요소 중 앞으로부터 순서가 일치하는 E 요소를 선택.
                 | E:nth-last-of-type(n)          | E 요소 중 끝으로부터 순서가 일치하는 E 요소를 선택. 
                 | E:first-child                  | 첫 번째 등장하는 요소가 E 라면 선택.
                 | E:first-of-type                | E 요소 중 첫 번째 E를 선택.
                 | E:last-child                   | 마지막에 등장하는 요소가 E 라면 선택.
                 | E:last-of-type                 | E 요소 중 마지막 E를 선택.
                 | E:only-child                   | E 요소가 유일한 자식이면 선택.
                 | E:only-of-type                 | E 요소가 유일한 타입이면 선택.
**가상 요소**    | E::after                       | E 요소의 끝 지점에 생성된 요소를 선택.
                 | E::before                      | E 요소의 시작 지점에 생성된 요소를 선택.
                 | E::first-letter                | E 요소의 첫 번째 문자를 선택.
                 | E::first-line                  | E 요소의 첫 번째 라인을 선택.
                 | E::selection                   | E 요소를 커서로 클릭 후, 텍스트 블록을 선택할 경우 가상으로 요소를 만들어 디자인
**언어 선택자**  | E:lang(ko)                     | E 요소의 끝 지점에 생성된 요소를 선택.
**부정 선택자**  | E:not(S)                       | S가 아닌 E 요소를 선택.
**목적 선택자**  | E:target                       | E의 URI가 요청되면 선택.(따라서 E는 ID가 지정되어 있어야 합니다.)
**UI요소 상태 선택자**  | E:enabled               | 사용 가능한 폼 콘트롤(input, textarea, select, button) E를 선택.
                        | E:disabled              | 사용 불가능한 폼 콘트롤(input, textarea, select, button) E를 선택.
                        | E:checked               | 선택된 폼 콘트롤(input checked=”checked”)을 선택.


** 최대한 간결하게 보기 쉽게 작성해야 한다.-*

#### 속성 선택자
- [attr]
- [attr="value"]
- [attr|="value"]
- [attr~="value"]
- [attr*="value"]

```
/* 공백으로 구분되는 단어가 일치할 때 선택-/
[class~="container"] {
  border: 1px dashed #cacaca
  padding: 1em;
}

/* 하이픈(-)으로 구분되는 단어가 일치할 때 선택-/
[lang|="en"] {
  color: #4d4840;
}

/*  howare 단어가 완전하거만 스타일 된다-/
[attr*="howare"] {
  color: #4d4840;
}
```

#### 상태 디자인(State Design) 선택자
- 기본 상태(Normal)
- 커서가 올라간 상태(Hover)
- 커서로 누른 상태(Active)

```
/* 기본 상태(Normal)-/
.container p {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0.88em;
  color: #84888a;
  background: #fff;
}

/* 커서가 올라간 상태(Hover)-/
/* Pseudo Class: 가상(유사, 의사) 클래스-/
.container p:hover {
  color: #0c0d0d;
  background: #bfbfbf;
}

/* 커서로 누른 상태(Active)-/
.container p:active {
  background-color: #000;
  color: #fff;
}
````

#### 가상 클래스 선택자
- :link    | 기본 상태
- :visited | 방문한 상태
- :hover   | 커서 올라간 상태
- :active  | 커서로 누르고 있는 상태
- :focus   | 키보드 포커싱 상태

```
a {
  padding-left: 0.25em; /* 4px === 0.25em */
  padding-right: .25em;
  text-decoration: none;
  color: #363636;
}

/* 기본 상태 */
a:link {}

/* 방문한 상태 */
a:visited {
  color: #fc414b;
}

/* 커서 올라간 상태 */
a:hover {
  padding-bottom: 1px;
  border-bottom: 2px dotted;
}

/* 커서로 누른 상태 */
a:active {
  background: #ff0;
}

/* 키보드 포커싱 상태 */
a:focus {
  outline: 3px solid #fc414b;
}

/* a에 포커스 됐을 때 오버 됐을 때 */
a:focus:hover {
  outline-offset: 10px;
}
```

#### 가상 요소 선택자
- ::before, ::after, ::first-lette, ::first-line, ::selection  
- 가상으로 요소를 만들어 준다. 
- 하위호환을 위해 콜론(:)을 하나만 붙일 수도 있다
- 이미지로 처리되므로 접근성에 좋지 않다.
- ::selection
    ㄴ 사용자가 커서로 클릭 후, 텍스트 블록을 선택할 경우 가상으로 요소를 만들어 디자인
    ㄴ 반드시 콜론(:)을 두개 붙여야 한다

```
.msg::after{
  content: 'hand up up up up';
  color: #604887;
}

.msg p::before {
  content: 'designer';
  display: block;
  color:;
}

p::selection {
  cursor: move;
  background: #ff0;  
  text-shadow: 2px 3px 8px #6300b5;
}

::-moz-selection {
  background: #ff0;
  text-shadow: 2px 3px 8px #6300b5;
}
```

##### [잡지 드롭캡] 앞글자만 크게 키우는 디자인
```
.dropcap::first-letter {
  font-size: 300%;
  color: #FF0000;
  line-height: 1;
}
```
```
/* 첫줄 스타일 적용 */
dropcap::first-line {
  font-size: 300%;
  color: #FF0000;
}
```
> IE하위 브라우저 때문에 콜론 한개짜리 더 붙여준다
 
#### 접근성 관점에서 링크의 주소, 축약어를 출력하는 스타일
```
@media print {
  a::after {
    content: '(' attr(href), attr(title) ')';
    color: #fc4a54;
  }
  
  abbr::after {
    content: '(' attr(title) ')';
  }
}
```






