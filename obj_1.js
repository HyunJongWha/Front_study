/* 자바스크립트 객체 다루기 */
const person = {
    name: 'Sucoding',
    age: 20,
    isAdult: false,
    'phone number': '010-1234-5678',    /* key에 blank 값이 들어가면 error.''로 감싸주기. 또한, 대괄호 연산자를 사용하여 키에 접근할 수 있음 */
    printInfo: function(){
        console.log('printInfo');
    }
};
console.log(person.name);
person.name='철수'; /* 속성 값 바꾸기. 추가로 할당할 때도 이러한 방식으로 */
console.log(person['age']);
person.printInfo;
delete person.age;  /* 속성 삭제 */

// 본래 const는 재할당이 불가능한 선택자이지만 const로 선언한 객체는 동적 할당이 가능함. JS의 기본 자료형에서 데이터를 어떻게 관리하는지 살펴보자
let num = 10;
let num2 = num ; // num2 = 10
num = 30;
console.log(num,num2);  //30, 10 => num 과 num2는 독립적인 공간에서 데이터를 관리한다. 서로 영향을 주지 않는다.(깊은 복사)
//아래는 참조자료형 (얕은 복사)
const obj = {
    name: '철수',
};
const obj2 = obj;
delete obj.name;
console.log(obj,obj2)   //{} {} => 서로 같은 메모리 공간을 공유한다.