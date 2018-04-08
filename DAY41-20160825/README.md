###### Front-End Develop SCHOOL

# DAY 41

### Ajax
- 현대 웹에서 비동기 통신은 필수 사항이 되고 있다.
- 전통적인 웹은 요청사항이 생기면 화면전환(깜빡임)이 생기지만 Ajax 통신을 이용하면 부분 제어가 가능하다
- 쾌적한 UX를 제공해 줄수 있다

### XMLHttpRequest
```javascript
(function(global, XHR){
    'use strict';

    var creatXHR =(function() {
        XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
        return function() {
          return new XHR;  
        };
    }());

    var xhr = creatXHR();
	var result_view = document.querySelector('.ajax-result');
    var call_ajax_btn = document.querySelector('.call-ajax-data');
    call_ajax_btn.onclick = updateViewPlace;
    xhr.open('GET', 'data/data.html'); // 비동기 통신

      xhr.onreadystatechange = function() {
        console.log(this); // this === xhr 객체
        if ( this.status === 200 && this.readyState === 4 ) {
          console.log('통신 데이터 전송 성공! ^ㄴ^');
          // result_view.textContent = '[' + this.statusText + '] ' + this.responseText;
          result_view.innerHTML = this.responseText;
        }
        // console.log(xhr);
      }

      function updateViewPlace() {
        xhr.send();
      }
 })(this, this.XMLHttpRequest);
```

### SPA(Single Page Application) 

#### Tab Menu
```javascript
(function(global, XHR){
  'use strict';

  var xhr = new XHR;
  // console.log(xhr); // AJAX 통신을 위해 생성된 객체

  // 통신 상태 관찰 이벤트 핸들링
  xhr.onreadystatechange = function() {
    // console.log(this); // xhr
    // 200 서버 통신 성공
    // 4 데이터 전송이 완료된 상태
    if ( this.status === 200 && this.readyState === 4 ) {
      view.innerHTML = this.responseText; // HTML Code
    }
  };  
  var view = document.querySelector('main');
  var nav_links = document.querySelectorAll('nav a');
  // console.log(nav_links.length);

  // nodelist 순환하여 이벤트 바인딩 <-> 핸들러(함수)
  for ( var link, i = nav_links.length - 1; nav_links[i]; i-- ) {
    link = nav_links[i];
    link.idx = i;
    link.onclick = viewUpdate;
  }

  // 페이지 뷰를 업데이트 하는 함수
  var views = 'home about works contact'.split(' ');

  function viewUpdate() {
    // console.log(this, this.idx); // <a>
    // 비동기 통신 설정/요청
    // 클릭한 <a> 요소의 인덱스를 통해 데이터를 가져와야 한다....
    // 집합 데이터 Array
    // 각 <a> 요소를 클릭했을 때 인덱스는 어떻게 전달할 것인가?
    // var index = 0;
    var page = 'view/' + views[this.idx] + '.html';
    xhr.open('GET', page);
    xhr.send();
    // 페이지의 주소(해쉬) 값을 변경
    global.location.hash = page;
    // 웹 브라우저가 수행하는 브라우저의 기본 동작 차단
    return false;
  }
  link.onclick();
})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));
```
#### JSON
- JS의 객체 형태, 다루기 용이하다
- `{ key: value, key2: value2 ... key3: [ {key_01: value_01}, {key_02: value_02} ... ]}`
- 데이터의 구조는 서비스마다 다르며, 백엔드 개발자와 협의를 하여 정한다
- JSON 파일을 변환 (JSON) 
	- `JSON.parse` : text -> object
	- `JSON.stringify` : objcet -> text

```javascript
	// JSON 파일
	xhr.open('GET', 'data/data.json');

      xhr.onreadystatechange = function() {
        // console.log(this); // this === xhr 객체
        if ( this.status === 200 && this.readyState === 4 ) {
          console.log('통신 데이터 전송 성공! ^ㄴ^');

          var random_users = this.response; // text file
          random_users = JSON.parse(random_users); // text --> object
          var template = '<table>';

          var people = random_users.results;

          for( var person of people ){
            person.fullname = `${person.name.first} ${person.name.last}` 
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
```
#### xml
```javascript
     // xml 파일
     xhr.open('GET', 'data/data.xml');

      xhr.onreadystatechange = function() {
        console.log(this); // this === xhr 객체
        if ( this.status === 200 && this.readyState === 4 ) {
          console.log('통신 데이터 전송 성공! ^ㄴ^');

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
 ```