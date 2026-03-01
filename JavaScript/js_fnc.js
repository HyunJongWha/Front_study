/* 자바스크립트 함수 */

/* 함수 선언문 */
function gugudan(dan){
    for(let i=1;i<=9;i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
}
gugudan(3);

/* 함수 표현식 */
const gugudanExpress = function dd(dan){
    for(let i=1;i<=9;i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
};
gugudanExpress();
dd(2);   // error. 함수를 호출할 때는 할당된 변수로 호출해야함

/* 화살표 함수 */
const gugudanArrowFunc = (dan) => {     //(dan)의 괄호는 생략 가능.
    for(let i=1;i<=9;i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
};
gugudanArrowFunc();

// return을 사용하는 이유
function sum(num1, num2){
    const result = num1 + num2;
    return result;  // result를 이용해 함수 내부에 있는 데이터를 외부에서 참조할 수 있다.
}
const result1 = sum(10,20);
const result2 = sum(50,100);

console.log(result1 + result2);

/* 지역, 전역 변수 */
// 함수 scope : 함수 내부 = 지역 scope, 함수 외부 = 전역 scope
function A(){
    let a = 10;
    console.log(`함수 내부에서 a 참조 : ${a}`);
}
A();
console.log(`함수 외부에서 a 참조 : ${a}`);     //error

// Block scope : let, const 변수가 블록문 안에서는 지역 변수로 작용
{
    let b = 10;
    console.log(`블록문 내부에서 변수 b: ${b}`);
}
console.log(`블록문 외부에서 변수 b : ${b}`);   //error

// 함수 호이스팅
printName();
function printName(){
    console.log('현종화');
}   // no error

printname();
var printname = function printname(){
    console.log('현종화');
}   // printname is not a function

/* 즉시 실행 함수 */
const init = () => {
    console.log('init');
};
init(); // 전역 scope의 오염 : 더 이상 init이라는 식별자를 사용하지 못한다.

(() => {
    console.log('init');
})();
