(function(global, storage, $){
  'use strict';
  
  // 루트 요소인 <html>을 참조하는 jQuery 객체 생성
  var $html = $('html');

  // 사용자가 웹 브라우저가 localstorage를 지원하는가?
  if (storage) {
    $html.addClass('localStorage');
  } else {
    $html.addClass('no-localStorage');
  }

  // 지원이 안된다면 사용자에게 웹브라우저 업데이트 권고 
  if ( $html.hasClass('no-localStorage') ) {
    console.log('로컬스토리지가 지원되는 최신 브라우저로 업데이트 하세요.');
    return; // 함수 종료
  }

  // 사용자의 엡 브라우저에 데이터를 저정/가져오기/지우기 등을 수행할 수 있다. 

  // 데이터 가져오기 
  var FDS = storage.getItem('FDS');
  FDS ? console.log('FDS 값:', FDS) : console.log('FDS는 존재하지 않습니다.'); 

  // 데이터 저장하기
  storage.setItem('FDS', 'Front-End Develop school, FC');

  // 데이터 1개 지우기
  if ( FDS ) {
    storage.removeItem('FDS');
  }

  // 데이터 모두 지우기
  // key data가 1개 이상이라도 존재한다면
  storage.length > 0 && storage.clear();

  /**
   * -----------------------------------------------------------
   * 객체 형태로 만들기 
   * Javascript Objcet -> JSON String -> Javascript Objcet 변환
   * -----------------------------------------------------------
   */

  var susu = {
    'name'      : '수진',
    'job'       : '디벨로퍼',
    'age'       : 23,
    'gender'    : '여성',
    'email'     : 'susu@susu.me',
    'favorites' : ['자동차', '여행', '공부']
  }

  // local Sttorage에 susu 저장
  // storage.setItem('susu', susu); // [object Object]로 저장된다. 

  // 객체 -> 문자 
  var str_susu = JSON.stringify(susu);
  storage.setItem('susu', str_susu);

  // 문자 -> 객체
  var getted_susu = storage.getItem('susu');
  getted_susu = JSON.parse(getted_susu);
  console.log(getted_susu);

  //전역 공개
  global.susu = susu;
})(this, this.localStorage, this.jQuery);