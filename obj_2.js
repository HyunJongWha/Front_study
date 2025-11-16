/* 표준 내장 객체 */

// String 표준 객체
const email = '  test@naver.com ';
console.log(email.length);
if(email.includes('@') == false){
    console.log('@가 없습니다.');
}   // 이와 비슷한 메서드인 indexOf는 논리형 값이 아닌 찾고자하는 문자열의 인덱스 값을 리턴한다.(없다면 -1을 반환)
console.log(email.trim);    // 문자열의 앞,뒤 공백 제거

// Array 표준 객체
const arr = ['a', 'b', 'c'];
arr.pop()   // a b
arr.push('d')   // a b d
// 위와 같은 메서드를 파괴 메서드라고 함.(원본을 파괴)
arr.forEach(function(v){
    console.log(v); // 배열 안의 요소를 탐색하고 값을 매개변수(여기서는 v)로 전달.
})
//위는 비파괴 메서드

// Date 객체(날짜, 시간)
const date = new Date();    // date라는 개체에 숫자로 날짜를 부여하면 우리 눈에는 date지만, js 컴파일러 입장에서는 단순 문자열 뿐이므로 객체를 생성하여 Date 메서드를 불러오기
console.log(date.detFullYear());    // 현재의 연도

// Math 객체
const random = Math.random();   // 임의의 난수를 출력(0<=  <=1)
console.log(Math.floor(random)) // 소숫점 없애는 메서드

/* mdn 사이트를 이용하여 여러가지 표준 개체의 메서드들을 보며 사용하는게 가장 중요 */