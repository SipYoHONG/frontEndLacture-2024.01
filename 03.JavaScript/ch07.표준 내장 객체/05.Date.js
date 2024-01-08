/*
// Date 객체

// 1. 현재 날짜/시간
let today = new Date();
console.log(today);
console.log(today.toISOString());
console.log(today.toLocaleString());


// YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDateTime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())}` + 
         `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
    }
console.log(myDateTime(today));

// 2.임의의 날짜/시간
let yesterday = new Date('2024-01-07 14:00:00');
let tomorrow = new Date('Jan 9 2024');
let nextSunday = new Date ('01/14/24');
let lastChristmas = new Date(2023, 12-1 ,25, 19, 30);
console.log(myDateTime(lastChristmas));

// 3. Unix time (1970-01-01 00:00:00 이후 ms 단위)
let unixDay = new Date(1.70469e12);
console.log(myDateTime(unixDay));
console.log(new Date().getTime());

// 4.시간 연산
// 더하기, 빼기
let date = new Date()
date.setDate(date.getDate(), + 100);
console.log(myDateTime(date));
date.setDate(date.getDate(), -100);
console.log(myDateTime(date));

date.setMonth(date.getMonth() + 6);
date.setFullYear(date.getFullYear() + 1);
console.log(myDateTime(date));

// 시간 간격
let gradDay = new Date('2024-06-13 17:30');
let diffMs = gradDay.getTime() - today
let diffDay = Math.ceil(diffMs / (1000*60*60*24));
console.log(diffDay);
*/
