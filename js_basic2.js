/* 연산자 */
let num = 2 ** 3;  //제곱 연산자
num = ++num;  // 전치: 할당하기 전에 1을 증가해라. console=9
num = num++;  // 후치: 할당한 후에 증가해라. console=8

num = -num;  // 부호 바꾸기

num += 2;  // 복합대입연산자

let num1 = 10;
let strNum = '10';
let result = num1==strNum;  // 형 변환: 비교 연산 과정을 위해 두 개의 자료형을 하나의 자료형으로 하나로 일치시킴

/* 조건문 */
//if, switch
if(){
  
}else if(){
  
}else{
  
}  // if문은 내부에서 중첩해서 사용가능  
let food = 'melon';
switch(food){
  case 'melon':
  case 'apple':  // 두 case의 실행이 동일할 때 이런식으로도 표현가능하다.
    console.log('fruit');
    break;
  case 'carrot':
    console.log('vegetable');
    break;
  default:
    console.log('아무것도 아니다.')
    break;
}

/* 반복문 */
let num = 1;
//while, do-while 문
while(num<=999){
  console.log(num);
  num++;  // 무한루프에 빠지지 않도록 설정하는 것이 중요
}
do{
  console.log('do');  // 한번 출력됨.
  //조건문이 참이면 실행할 구문  
}while(false)  // do-while문은 while문과 다르게 조건문이 충족하지 않아도 한번은 do구문이 실행된다. 
//for 문
for(let i=0;i<=5;i++){
  console.log(`i:${i}`);
  for(let k=0;k<2;k++){
    console.log(`k:${k}`);
  }
}
const arr=['apple', 'banana', 'orange'];
for(let i=0;i<arr.length;i++){
  if(i==1) continue;  //banana는 출력이 안됨.
  console.log(arr[i]);
}  //while이나 do-while을 사용해서 표현할 수 있지만 for문이 가장 간단하기 때문에 많이 사용
const obj={
  name: '철수';
  age: 20,
};
for (let index in arr){
  console.log(arr[index]);
}
for (let key in obj){
  console.log(obj[key]);  //'철수 20' 출력
}

