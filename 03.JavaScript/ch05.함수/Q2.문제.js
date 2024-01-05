//1. 만 나이를 계산하시오. 
//   생년, 월, 일을 변수로 설정해서 풀어보세요.

const birthdate = new Date('1996-09-16');
const now = new Date();
let age = now.getFullYear() - birthdate.getFullYear();
if  (now.getMonth() < birthdate.getMonth() ||  
    (now.getMonth() == birthdate.getMonth() && now.getDate() < birthdate.getDate())){
        age--;
    }
    console.log(`만 ${age}입니다`);

// 2. 백준도장 31090참조
// 다음의 사례에 대해서 Good/Bye를 출력하세요.
//  2023, 2024, ..., 2040
// 단, 조건에 맞는지를 확인해주는 함수 isDivisible(year)를 만들어서 해결하세요.

function isDivisible(year) {
        const T = year % 100;
        const N = (year + 1) % T === 0;
    
        return N;
    }
    
    for (let i = 2023; i <= 2040; i++)
    {
        if (isDivisible(i))
            console.log('Good');
        else
            console.log('bye');
    }

// 3. 어레이를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
// [24, 67, 45, 97, 43] 의 결과를 출력하세요

function addarr(arr) {
    let sum = 0;
    let sumSquared = 0;
    let squaredSum =0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum = sum * sum;
    for (let i = 0; i < arr.length; i++) {
        sumSquared += arr[i] * arr[i];
    }

squaredSum = sum - sumSquared;
return squaredSum;
}

let numArray = [24, 67, 45, 97, 43]

console.log(`차이는 ${addarr(numArray)}다.`)