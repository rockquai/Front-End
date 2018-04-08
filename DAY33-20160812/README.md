###### Front-End Develop SCHOOL

# DAY 33

### 함수 정의
1. 함수선언식(Function declaration)
2. 함수표현식(Function expression)
3. Function() 생성자 함수

#### 1. Function Declaration(함수 선언문) - 권장하지 않지만 사용하려면 주위 요망.
- 함수를 모아서 위에 선언. 
- 함수 블록문 뒤에 세미콜론(;)을 사용하면 안됨.
	- function 함수이름(){}
	- if() {}, while() {}, for() {} ==> 세미콜론(;)을 사용하면 안됨.
	- function( ) { }; ==> 함수 리터럴 표현식  

#### 2. Function Expression(함수 표현식) - 권장!
- 변수에 참조하지 않고 이름이 있는 함수로 선언
- 함수의 일급객체 특성을 이용하여 함수 리터럴 방식으로 함수를 정의하고 변수에 할당할 수 있는데 이러한 방식을 함수표현식(Function expression)이라 한다.
- 함수 블록문 뒤에 세미콜론(;)을 사용해야 한다.
	- var 변수(함수이름) = function(){};

#### 3. 『함수』 생성자 함수를 사용하여 함수를 생성하는 방법 - 사용 지양!
``` javascript
var logIdentity = new Function('console.log("this is function object.")');

// 함수를 참조하고 있는 변수 이름을 통해서 호출 (실행 연산자 `()` 사용)
logIdentity();
```

### 데이터 간 동등한지 유무 확인 헬퍼 함수
``` javascript
function equal(data1, data2) {
    return data1 == data2;
}

// 데이터 간 완전하게 동등한지 유무 확인 헬퍼 함수
function strictEqual(data1, data2) {
   return data1 === data2;
}

function throwError(type1, type2, err_msg) {
  err_msg = err_msg || '기본 오류 메시지';
  if ( isType(type1) !== type2 ) { throw new Error(err_msg); }
}

function validDate(data, type) {
  throwError(type, 'string'); // 오류 발생 시 멈추고 화면에 오류 메시지 출력
  return strictEqual( isType(data), type );
}
```
