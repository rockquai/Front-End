// ex1. json
// (function(global, XHR){
//     'use strict';

//     /**
//      * -----------------------------------------------------------
//      * new를 강제화 하는 패턴 헬퍼 함수 
//      * ActiveXObject('Microsoft.XMLHTTP') --> iE6이하 위한 대체 코드 
//      * -----------------------------------------------------------
//      */
    
//     var creatXHR =(function() {
//         XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
//         return function() {
//           return new XHR;  
//         };
//     }());

//     // 비동기 통신을 수행할 객체
//     var xhr = creatXHR();

//      // [동기 통신] 데이터가 로드될 때까지 기다림
//      // [비동기 통신] 아래 코드가 바로 해석됨.

//      var result_view = document.querySelector('.ajax-result');
//      var call_ajax_btn = document.querySelector('.call-ajax-data');

//      call_ajax_btn.onclick = updateViewPlace;

//      // 비동기 상태 - 파일을 가져오기 경우
//      // xhr.open('GET', 'data/data.json');

//      // 비동기 상태 -  URL로 가져오기 경우
//      xhr.open('GET', 'http://api.randomuser.me/?results=20/&gender=female&nat=gb,br');
    
//     // 비동기 통신 객체에 이벤트 핸들러 바인딩
//       xhr.onreadystatechange = function() {
//         // console.log(this); // this === xhr 객체
//         if ( this.status === 200 && this.readyState === 4 ) {
//           console.log('통신 데이터 전송 성공! ^ㄴ^');
          
//           /**
//            * --------------------------------
//            * josn 파일을 변환 (JSON)
//            * text -> object
//            ㄴ> JSON.parse
//            * objcet -> text
//            ㄴ> JSON.stringify
//            * --------------------------------
//            */
//           var random_users = this.response; // text file
//           random_users = JSON.parse(random_users); // text --> object

//           var people = random_users.results;

//           for( var person of people ){
//             person.fullname = `${person.name.first} ${person.name.last}` 
//             console.log( person.fullname );
//             console.log( person.gender );
//             console.log( person.email );
//             console.log( person.nat );
//           }
//         } 
//     }

//     function updateViewPlace() {
//         xhr.send();
//         this.onclick = null;
//         this.setAttribute('disabled', 'disabled');
//     }
// })(this, this.XMLHttpRequest);


//ex2. json - templte
(function(global, XHR){
    'use strict';

    /**
     * -----------------------------------------------------------
     * new를 강제화 하는 패턴 헬퍼 함수 
     * ActiveXObject('Microsoft.XMLHTTP') --> iE6이하 위한 대체 코드 
     * -----------------------------------------------------------
     */
    
    var creatXHR =(function() {
        XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
        return function() {
          return new XHR;  
        };
    }());

    // 비동기 통신을 수행할 객체
    var xhr = creatXHR();
     var result_view = document.querySelector('.ajax-result');
     var call_ajax_btn = document.querySelector('.call-ajax-data');

     call_ajax_btn.onclick = updateViewPlace;

     // 비동기 상태 - 파일을 가져오기 경우
     xhr.open('GET', 'data/data.json');

     // 비동기 상태 -  URL로 가져오기 경우
     // xhr.open('GET', 'http://api.randomuser.me/?results=20&gender=female&nat=gb,br');
    
    // 비동기 통신 객체에 이벤트 핸들러 바인딩
      xhr.onreadystatechange = function() {
        // console.log(this); // this === xhr 객체
        if ( this.status === 200 && this.readyState === 4 ) {
          console.log('통신 데이터 전송 성공! ^ㄴ^');
          
          /**
           * --------------------------------
           * josn 파일을 변환 (JSON)
           * text -> object
              ㄴ> JSON.parse
           * objcet -> text
              ㄴ> JSON.stringify
           * --------------------------------
           */

          var random_users = this.response; // text file
          random_users = JSON.parse(random_users); // text --> object
          var template = '<table>';

          var people = random_users.results;

          for( var person of people ){
            person.fullname = `${person.name.first} ${person.name.last}` 
            // console.log( person.fullname );
            // console.log( person.gender );
            // console.log( person.email );
            // console.log( person.nat );

            template += [
                    '<tr>',
                        '<td>',
                         '<span class="fullname"> '+ person.fullname +' </span>',
                        '</td>',
                        '<td>',
                         '<span class="gender"> '+ person.gender +' </span>',
                        '</td>',
                        '<td>',
                         '<span class="email"> '+ person.email +' </span>',
                        '</td>',
                        '<td>',
                         '<span class="nat"> '+ person.nat +' </span>',
                        '</td>',
                    '</tr>'
            ].join(''); 
          }
        template += '</table>';
        result_view.innerHTML = template;
        } 
    }

    function updateViewPlace() {
        xhr.send();
        this.onclick = null;
        this.setAttribute('disabled', 'disabled');
    }
})(this, this.XMLHttpRequest);