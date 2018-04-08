(function(global, $){
    'use strict';
/**
 * ----------------------------------------------------------------
 * FIND
 * ----------------------------------------------------------------
 * .find(), .next(), .prev(), .parent(), .prents(), 
 * .children(), .prevAll(), .prevUntil(), .nextAll(), .nextUntil()
 * ----------------------------------------------------------------
 */


/**
 * --------------------------------
 * .find()
 * --------------------------------
 */
    // var $gnb = $('.gnb')
    // var $gnb_list = $gnb.find('li');
    // $gnb_list.each(function(idx, el) {
    //     var $gnb_first = $gnb.find(':first');
    //     console.log( $gnb_first.next().children(':last').prevAll('.first').parents('.gnb') );
    // });

/**
 * --------------------------------
 * contents()
 * --------------------------------
 */
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

/**
 * --------------------------------
 * add()
 * --------------------------------
 */
    // var $gnb = $('.gnb');
    // var $selectred_el = $gnb.find('p').addClass('this-is-parapgrah').add('li', $gnb);
    // console.log($selectred_el);

    // $selectred_el.each(function() {
    //     var item = arguments[1];
    //     console.log(item);
    // });

/**
 * --------------------------------
 * clone(), add()
 * --------------------------------
 */
    // var $gnb = $('.gnb');
    // $gnb
    //     .find('li:first-child a')
    //     .clone()
    //     .add('<p>링크 뒤에 나오는 링크</p>')
    //     .appendTo('li:first-child', $gnb);

/**
 * --------------------------------
 * addBack()
 * --------------------------------
 */
    // $('li:gt(3)'); // 4번째부터 선택
    // $('li:gt(3)', '.gnb'); //.gnb 컨텍스트 안에서 li 4번째 부터 선택 
    // $('li:gt(3)', '.gnb').add('li:eq(1)').find('a');
    // $('li:gt(3)', '.gnb').add('li:eq(1)').find('a').addBack();
    // $('li:gt(3)', '.gnb').add('li:eq(1)').find('a').addBack('.last_2nd');

/**
 * --------------------------------
 * end()
 * --------------------------------
 */
    // $('ol li');
    // $('ol li').find('a');
    // $('ol li').find('a').css('color', 'tan');
    // $('ol li').find('a').css('color', 'tan').addBack();
    // $('ol li').find('a').css('color', 'tan').end().addBack().addClass('me');

/**
 * --------------------------------
 * attr() 
 * --------------------------------
 */
    /**
     * ------------------------------------------------------
     * ex1. attr()
     * jQuery 팩토리 함수를 통해 문서 객체를 생성할 수 있다.
     * ------------------------------------------------------
     */
    // $('<div>')
    //     .addClass('custom-division')
    //     .attr({
    //        'id': 'hi',
    //        'title': 'hey jude'
    //        })
    //     .text('Hey Division Element')
    //     .on('click', function() {
    //         console.log(this);
    //     })
    //     .appendTo('.gnb');


    /**
     * ------------------------------------------------------
     * ex2. attr()
     * jQuery 팩토리 함수를 통해 문서 객체를 생성할 수 있다.
     * ------------------------------------------------------
     */
    // var $new_div = $('<div>', {
    //    'id': 'hi-seoul',
    //    'class': 'custom-division',
    //    'attr': {
    //        'title': 'hey jude'
    //    }, 
    //    'text': 'Hey Division Element'.
    //    'on': {
    //        'click' : function() {
    //            console.log(this);
    //        }
     //    }
     // }

     /**
      * --------------------------------
      * ex1. attr()
      * String Template
      * --------------------------------
      */     
      // $('p').first().attr('class', function(index, old_class){
      //   return ':( ' + old_class + '/' + old_class + ' :-)';
      // });

      /**
        * ---------------------------------------------------
        * ex2. attr()
        * ECMAScript 2015(es6) - String Template
        * ---------------------------------------------------
        */        
      // $('p').first().attr('class', function(index, old_class){
      //   // ECMAScript 2015 - String Template
      //   return `:( ${old_class}/${old_class} :-)`;
      // });

      /**
       * --------------------------------
       * ex1. 
       * --------------------------------
       */      
      // var form_action = '#';
      // var form_method = 'GET';

      // var template = [
      //   '<form action="'+ form_action +'" method="'+ form_method +'">',
      //     '<label for="demo">demo</label>',
      //     '<input id="demo" type="text" maxlength="10">',
      //   '</form>'
      // ].join('');

      /**
       * --------------------------------
       * ex2. ECMAScript 2015(es6)
       * --------------------------------
       */      
      // var template = `
      // <form action="${form_action}" method="${form_method}">
      //   <label for="demo">demo</label>
      //   <input id="demo" type="text" maxlength="10">
      // </form>
      // `;

      // $(template);

/**
 * --------------------------------
 * html()
 * --------------------------------
 */
    // var $gnb = $('.gnb');
    // $gnb.html(function() {
    //     console.log(arguments);
    // });

    // $gnb.html(function(index, oldHTML) {
    //     return '<article>' + oldHTML + '</article>';
    // });

/**
 * --------------------------------
 * 보이는 모양 대로 암기!
 * A.insertBefor(B) : A를 B 뒤에 삽입
 * A.after(B) : A를 B뒤에 삽입
 * --------------------------------
 * A.before(B) : B를 A앞에 삽입
 * A.insertAfter(B) : B를 A앞에 삽입
 * --------------------------------
 */

/**
 * --------------------------------
 * after()
 * A.after(B) : A를 B뒤에 삽입
 * --------------------------------
 */
    // $('.gnb').after('<h3>bye<h3>')

/**
 * --------------------------------
 * before()
 * A.before(B) : B를 A앞에 삽입
 * --------------------------------
 */
    // var $h2 = $('<h2 id="demo-test-h2">demo heading h2</h2>');
    // var h3 = document.createElement('h3');
    // var h3_text = document.createTextNode('new content - heading h3');
    // var gnb = document.querySelector('.gnb');

    // var $ol = $('ol');
    // $ol.prependTo('body');

    // window.setTimeout(function() {
    //     // $ol.before( $h2, [h3, gnb]);
    //     $ol.before( [$h2, h3, gnb]); // 위에 같다.
    // }, 3000);

/**
 * --------------------------------
 * wrap, wrapAll, unwarp
 * --------------------------------
 */
    // $.each([1,2,3,4,5].reverse(), function(index, item){ 
    //     $('<div>', { 'class': 'hesus' + item }).text('hesus' + item).prependTo('body'); 
    // });

    // $('[class*="hesus"]').wrapAll('<aside class="wrapAllHesus">');
    // $('[class*="hesus"]').eq(0)

/**
 * ------------------------------------------------------
 * 이벤트 바인딩 시에 이벤트 객체에 사용자가 정의한 객체를 합성 [객체 합성]
 * 외부에 변수를 만들지 않고, 이벤트 객체를 통해 조건 처리하는 토글 구문
 * ------------------------------------------------------
 */
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
 })(this, this.jQuery);