// for ~ 반복문
// 1에서 1000까지 합 구하기
let sum = 0;
for(let i = 1; i <= 1000; i++){
    sum += i;
}
console.log(`1에서 1000까지 합은 ${sum}`);

// 1에서 1000까지 홀수의 합 구하기
let oddsum = 0;
for (let i = 1; i <= 1000; i += 2){
   oddsum += i;
}
console.log(`1에서 1000까지 홀수의 합 ${oddsum}`);

// 홀수만 보이게 
for(let i = 1; i <= 1000; i++){
    if(i%2!=0){
       console.log(i);
    }
}
// 짝수만 보이게
for(let i = 0; i <= 1000; i+=2){
       console.log(i);
    }

// 6,8의 배수만 보이게
for(let i = 2; i <= 1000; i++){
    if(i%6==0 || i%8==0){
        console.log(i)
    }
}


// 1에서 1000까지 짝수의 합
let evenSum = 0;
for (let i = 2; i <= 1000; i += 2) {
        evenSum += i;
    }
console.log(`1에서 1000까지 짝수의 합 ${evenSum}`);

// 1에서 10까지의 곱
let product = 1;
for (let i = 1; i <= 10; i++)
    product *= i;
console.log(`1에서 10까지 곱은 ${product}`);

// array의 요소 출력
// element1, element2, ...
let fruits = ['사과','감','귤','배'];
let fruitStr ='';
for (let fruit of fruits) {
    fruitStr += fruit + ', ';
}
console.log(fruitStr);

for(let i = 2; i < 10; i++){
    for(let k = 1; k < 10; k++)
    console.log(i,'*',k , '=', i * k);
}