(function(global, $){
    'use strict';

/**
 * ----------------------------------------------------------------
 * FILTER
 * ----------------------------------------------------------------
 * .eq(), .filter(), .not(), slice(), .first(), .last()
 * ----------------------------------------------------------------
 */

/**
 * ------------------------------------------------
 * eq( index | last_index )
 * 문서에서 .gnb 요소를 선택한 후에 내부에서 li 요소를 찾기.
 * ------------------------------------------------
 */
    var $gnb = $('.gnb')
    var $gnb_list = $gnb.find('li');

    var $gnb_list_1st      = $gnb_list.eq(0);
    var $gnb_list_2nd      = $gnb_list.eq(1);
    var $gnb_list_last     = $gnb_list.eq(-1);
    var $gnb_list_last_2nd = $gnb_list.eq(-2);
    // console.log('$gnb_list_1st: ', $gnb_list_1st);
    // console.log('$gnb_list_2nd: ', $gnb_list_2nd);
    // console.log('$gnb_list_last: ', $gnb_list_last);
    // console.log('$gnb_list_last_2nd: ', $gnb_list_last_2nd);

/**
 * ----------------------------------------------------
 * not(selector | element | function) | selectiong()
 * ----------------------------------------------------
 */
    /**
      * ------------------------------------------------------
      * ex1. 마크업에 class 없는 곳에 have-not-class-attribute 추가
      * ------------------------------------------------------
      */

        // $gnb_list.not('[class]').addClass('have-not-class-attribute');

    /**
     * -----------------------------------------------
     * ex2. fucntion: 매개변수를 확인 하고 싶은 땐 arguments
     * -----------------------------------------------
     */
        // $gnb_list.not(function() {
        //    console.log(arguments); 
        // });

    /**
     * -----------------------------------------------
     * ex3. fucntion: 매개변수를 확인 하고 싶은 땐 arguments
     * dom 객체로 받고 싶을 때
     * -----------------------------------------------
     */
        // $gnb_list.not(function(index, element) {
        //    console.log(element); 
        // });

    /**
     * -----------------------------------------------
     * ex4. 나머지 값이 '0'이면 짝수, '1'이면 홀수 
     * -----------------------------------------------
     */
        // $gnb_list.not(function(index, element) {
        //    if ( index % 2 === 1 ) {
        //     console.log(index);
        //    }
        // });

    /**
     * -----------------------------------------------
     * ex5. 홀수를 제외한 짝수 <li>에 class=even 추가
     * jquery 필터링 표현식. not()
     * odd: 짝수, even: 홀수
     * -----------------------------------------------
     */
        // $gnb_list.not(function(index, element) {
        //     return index % 2 === 0; // 0, 2, 4 
        // }).addClass('even');

    /**
     * --------------------------------
     * ex6. 'ex5'와 같은 결과
     * --------------------------------
     */
        $gnb_list.not(':even').addClass('even');

 /**
  * --------------------------------
  * .filter()
  * --------------------------------
  */
 
    /**
     * --------------------------------
     * ex1. filter()
     * --------------------------------
     */
        // $gnb_list.filter('.last').addClass('last-list-element');
        // $gnb_list.filter('.first').remove();

    /**
     * --------------------------------
     * ex2. filter()
     * 리턴되는 참인 값을 골라낸다.
     * --------------------------------
     */
        // $gnb_list.filter(function(index, element) {
        //     console.log(index, element);
        // });

    /**
     * --------------------------------
     * ex3. filter()
     * li, nav, a 수집
     * --------------------------------
     */
        // $gnb_list.add('nav, a').filter(function(index, element) {
        //     console.log(index, element);
        // });

    /**
     * -----------------------------------------------------------------
     * ex4. filter()
     * li, nav, a 에 클래스 추가하고, a 이거나 nav 만 결과 반환 --> li 제외.
     * -----------------------------------------------------------------
     */
        // $gnb_list
        //     .add('nav, a')
        //     .addClass('navigation-componet')
        //     .filter(function(index, element) {
        //         var node_name = element.nodeName.toLowerCase();
        //         return node_name === 'a' || node_name === 'nav';
        // })
        // .css({
        //   'display': 'inline-block',
        //   'padding': '1em'
        // });

    /**
     * --------------------------------
     * ex5. filter()
     * --------------------------------
     */
        $gnb_list
            .add('nav, a')
            .addClass('navigation-component')
            .filter(function(index, element) {
              var node_name = element.nodeName.toLowerCase();
              return node_name === 'a' || node_name === 'nav';
            })
            .eq(-1).css('width', '4rem')
            .last().css('width', '4rem')
            .css({
              'width': function(index, current_value) {
                var $current_list = $gnb_list.eq(index);
                if( $current_list.is('.last') ) {
                  // console.log($current_list[0]);
                  return '4rem';
                }
              }
            });

/**
 * --------------------------------
 * slice()
 * --------------------------------
 */
    $('li').slice(2) // 세 번째 부터 끝까지
    $('li').slice(2,5) // 세 번째 부터 다섯 번째 까지 [ 4개가 아닌 3개 수집 ]

/**
 * --------------------------------
 * Filter() VS Find()
 * --------------------------------
 */
    $('li').filter(':last') // 마지막 li
    $('li').find(':last') // li 내부의 마지막 요소

/**
 * -------------------------------------------------------------------------
 * each
 * .each( callback )
 * .each( function (index, element) () )
 * -------------------------------------------------------------------------
 */
    /**
     * --------------------------------
     * ex1. arguments - index, dom객체
     * --------------------------------
     */
     // $gnb_list.each(function() {
     //     console.log(arguments); 
     // })

     /**
      * -------------------------------------------
      * ex2. DOM Script 방식 : a뒤에 span으로 감싼 인덱스
      * -------------------------------------------
      */
        $gnb_list.each(function(idx, el) {
             // console.log(el, idx); 
             // $(el) === $(this)
             var origin_code = el.innerHTML;
             // console.log(origin_code);
             el.innerHTML = origin_code + '<span>' + (idx * idx + 1) + '<span>';
         });
 })(this, this.jQuery);