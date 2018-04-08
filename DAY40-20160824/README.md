###### Front-End Develop SCHOOL

# DAY 40

### jQuery Traversing

#### .eq( index | last_index )
```javascript
    var $gnb = $('.gnb')
    var $gnb_list = $gnb.find('li');

    var $gnb_list_1st      = $gnb_list.eq(0);
    var $gnb_list_2nd      = $gnb_list.eq(1);
    var $gnb_list_last     = $gnb_list.eq(-1);
    var $gnb_list_last_2nd = $gnb_list.eq(-2);
```

#### not(selector | element | function) | selectiong()
```javascript
    // 홀수를 제외한 짝수 <li>에 class=even 추가, odd: 짝수, even: 홀수
    $gnb_list.not(function(index, element) {
      return index % 2 === 0; // 0, 2, 4 
    }).addClass('even');
```

#### .filter( selector | function | element | Selection(jQuery Object) )
```javascript
  // li, nav, a 에 클래스 추가하고, a 이거나 nav 만 결과 반환 (li 제외)
  $gnb_list
      .add('nav, a')
      .addClass('navigation-componet')
      .filter(function(index, element) {
          var node_name = element.nodeName.toLowerCase();
          return node_name === 'a' || node_name === 'nav';
  })
  .css({
    'display': 'inline-block',
    'padding': '1em'
  });
```

#### each
```javascript
  $gnb_list.each(function(idx, el) {
       // console.log(el, idx); 
       // $(el) === $(this)
       var origin_code = el.innerHTML;
       // console.log(origin_code);
       el.innerHTML = origin_code + '<span>' + (idx * idx + 1) + '<span>';
  });
```

#### Filter() VS Find()
```javascrpt
    $('li').filter(':last') // 마지막 li
    $('li').find(':last') // li 내부의 마지막 요소
```

#### .find()
```javascrpt
    $('li').filter(':last') // 마지막 li
    $('li').find(':last') // li 내부의 마지막 요소
```

#### contents()
```javascript
    // var $gnb = $('.gnb')
    // var $gnb_list = $gnb.find('li');

    // var $gnb_first = $gnb.find(':first');
    // console.log($gnb_first.next().children(':last').prevAll('.first').parents('.gnb'));

    // // $('.gnb').contents().eq('0').filter(function() { 
    // //     console.log(arguments);
    // // });

    // $('.gnb').contents().eq('0').filter(function() { 
    //     return node.nodeType === 3;
    // }).remove();
```

#### clone(), add()
```javascript
    var $gnb = $('.gnb');
    $gnb
        .find('li:first-child a')
        .clone()
        .add('<p>링크 뒤에 나오는 링크</p>')
        .appendTo('li:first-child', $gnb);
```

#### end()
```javascript
    $('ol li').find('a').css('color', 'tan').addBack();
    $('ol li').find('a').css('color', 'tan').end().addBack().addClass('me');
```

#### attr()
```javascript
    $('ol li').find('a').css('color', 'tan').addBack();
    $('ol li').find('a').css('color', 'tan').end().addBack().addClass('me');
```

#### after() => A.after(B) : A를 B뒤에 삽입
```javascript
  $('.gnb').after('<h3>bye<h3>')
```

#### before() => A.before(B) : B를 A앞에 삽입
```javascript
  $('.gnb').before('<h1>hi<h1>')
```

### 객체 합성
- 이벤트 바인딩 시에 이벤트 객체에 사용자가 정의한 객체를 합성 
- 외부에 변수를 만들지 않고, 이벤트 객체를 통해 조건 처리하는 토글 구문

```javascript
    // 2회 토글되는 경우
    $('p:eq(2)').on('click', {'clicked': false}, function(event) {
        if ( !event.data.clicked ) {
           console.log('toggle 1');
        } else {
           console.log('toggle 2');
        }
        event.data.clicked = !event.data.clicked;
    });

    // 5회 토글되는 경우
    $('p:eq(1)').on('click', {'click_count': 0}, function(ev){
        var data = ev.data;
        switch( data.click_count++ % 5 ) {
          case 0:
            console.log('toggle' + 0);
          break;
          case 1:
            console.log('toggle' + 1);
          break;
          case 2:
            console.log('toggle' + 2);
          break;
          case 3:
            console.log('toggle' + 3);
          break;
          case 4:
            console.log('toggle' + 4);
          break;
        }
    });
```