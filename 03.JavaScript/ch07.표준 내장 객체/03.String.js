// String 객체

let hello = '안녕하세요?';

// 속성
console.log(hello.length);

//메소드(method)
console.log(hello[1], hello.charAt(1));         //'녕'
console.log(hello + ' 여러분!', hello.concat(' 여러분!'));
console.log(hello.indexOf('하'));
console.log('pineapple'.lastIndexOf('p'));

//문자열을 분리하여 배열을 반환
let fruits = '사과,배,감,포도';
let fruitArray = fruits.split(',');         //['사과','배','감','포도']
console.log(fruitArray);
