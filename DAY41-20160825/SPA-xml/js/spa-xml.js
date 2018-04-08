// ex1. xml
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

//      // 비동기 상태
//      xhr.open('GET', 'data/data.xml');

//      // 동기 상태
//      // xhr.open('GET', 'data/data.txt', false);

//      /**
//       * --------------------------------
//       * 비동기 통신 객체에 이벤트 핸들러 바인딩
//       * xhr.open('GET', 'data/data.txt');
//       * --------------------------------
//       */
    
//     // 비동기 통신 객체에 이벤트 핸들러 바인딩
//       xhr.onreadystatechange = function() {
//         console.log(this); // this === xhr 객체
//         if ( this.status === 200 && this.readyState === 4 ) {
//           console.log('통신 데이터 전송 성공! ^ㄴ^');

//           // TEXT
//           // result_view.textContent = '[' + this.statusText + '] ' + this.responseText;

//           // HTMLE
//           // result_view.innerHTML = this.responseText


//           // XML
//           var doc = this.responseXML;
//           // console.log(doc);
//           var people = doc.querySelector('people');
//           var person_list = people.querySelectorAll('person');
//           var person, name, tel, mail, i = person_list.length - 1;

//           for( ; person_list[i]; i-- ) {
//             person = person_list[i];
//             name = person.querySelector('name').firstChild.nodeValue;
//             tel = person.querySelector('tel').firstChild.nodeValue;
//             mail = person.querySelector('mail').firstChild.nodeValue;
//             // console.log(name, tel, mail);
//           }

//         } else {
//           console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
//           result_view.textContent = '[' + this.statusText + '] ' + '데이터 로드에 실패했습니다....';
//         }
//         console.log(xhr);
//       }

//      function updateViewPlace() {
//         // AJAX 통신 요청
//         xhr.send();
//      };

//  })(this, this.XMLHttpRequest);


// ex2. 템플릿 추가 : <ul> + [ html 코드 ]
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

     // [동기 통신] 데이터가 로드될 때까지 기다림
     // [비동기 통신] 아래 코드가 바로 해석됨.

     var result_view = document.querySelector('.ajax-result');
     var call_ajax_btn = document.querySelector('.call-ajax-data');

     call_ajax_btn.onclick = updateViewPlace;

     // 비동기 상태
     xhr.open('GET', 'data/data.xml');

     // 동기 상태
     // xhr.open('GET', 'data/data.txt', false);

     /**
      * --------------------------------
      * 비동기 통신 객체에 이벤트 핸들러 바인딩
      * xhr.open('GET', 'data/data.txt');
      * --------------------------------
      */
    
    // 비동기 통신 객체에 이벤트 핸들러 바인딩
      xhr.onreadystatechange = function() {
        console.log(this); // this === xhr 객체
        if ( this.status === 200 && this.readyState === 4 ) {
          console.log('통신 데이터 전송 성공! ^ㄴ^');

          // TEXT
          // result_view.textContent = '[' + this.statusText + '] ' + this.responseText;

          // HTMLE
          // result_view.innerHTML = this.responseText
          
          // XML
          var doc = this.responseXML;
          // console.log(doc);
          var people = doc.querySelector('people');
          var person_list = people.querySelectorAll('person');
          var template = '<ul>';
          var person, name, tel, mail, i = person_list.length - 1;

          for( ; person_list[i]; i-- ) {
            person = person_list[i];
            name = person.querySelector('name').firstChild.nodeValue;
            tel = person.querySelector('tel').firstChild.nodeValue;
            mail = person.querySelector('mail').firstChild.nodeValue;
            // console.log(name, tel, mail);

             template += [
                    '<li>',
                        '<span class="name"> '+ name +' </span>',
                        '<span class="tel"> '+ tel +' </span>',
                        '<span class="mail"> '+ mail +' </span>',
                    '</li>'
                ].join('');
            }
        } else {
            console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
            // result_view.textContent = '[' + this.statusText + '] ' + '데이터 로드에 실패했습니다....';
        }
        // console.log(xhr);
        template += '</ul>';
        result_view.innerHTML = template;
    }
    function updateViewPlace() {
        xhr.send();
    }
})(this, this.XMLHttpRequest);