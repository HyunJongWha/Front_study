/* 변수 */
var num = 10;
var num = 20 + 30;  // 중복 선언 가능

let num = 10;  // 중복 선언 불가. 실무에서는 var 거의 사용하지 않음.

// 호이스팅 : 선언부와 할당을 나누어서, 선언부를 최상위로 끌어들이는 행위
console.log(a);
var a = 10;  //js는 인터프리터 언어이기 때문에 오류가 날 것 같지만, 그렇지 않음. undefined 출력.
/*  호이스팅으로 인해 아래의 코드와 같은 방식으로 실행됨
var a;
console.log(a);
a=10;
*/
console.log(b);
let b=10;  //오류 발생. let은 호이스팅이 되지 않음. 더 견고한 작업에서는 유리한 장점임.

// 다만, let은 Internet Explorer 11에서 완벽히 지원되지 않음

// const는 재할당이 불가능함. 다시 할당할 일이 없어야하는 중요한 데이터.
const num=10;  // const는 선언과 할당을 무조건 동시에 해야함.
num = 20;  //error

/* 자료형 */
//문자열

let str = "Hello";
let str2 = 'Hello';
console.log(str, str2);
// 문자열은 큰따옴표("") 또는 작은따옴표로('') 정의합니다.
//  1. 문자열 연결 연산자
let str3 = '문자열은 큰따옴표("") 또는 작은따옴표로(' + "'') 정의합니다.";
//  2. 이스케이프 문자
let str4 = '문자열은 큰따옴표("") 또는 작은따옴표로(\'\') 정의합니다.'
//  3. 탬플릿 문자열.(ES6에서 새롭게 추가됨. ${}를 이용해 변수를 치환해서 사용가능. 지원해주는 컴파일러가 존재해야함...ex바벨)
const mfg = '문자열'
let str5 = `${msg}은 큰따옴표("") 또는 작은따옴표로('') 정의합니다.`

// 숫자형
const num2 = 0.1 + 0.2;  //부동소수점의 문제.
const num3 = (1 + 2)/10;

// 논리형
const bool = 30 == 30;  //true,false

// undefined, NULL
let A;  //undefined
let B = null;  //null

// 배열, 객체는 뒤에서 더 자세하게
