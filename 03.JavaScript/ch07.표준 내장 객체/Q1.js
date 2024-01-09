// 2. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?
let totalsum = 0;

for( let h=0; h<24; h++) {
    if(h.toString().includes('3')) totalsum += 3600
    else {
        for(let m=0; m<60; m++) {
            if(m.toString().includes('3')) totalsum += 60
            }
        }
    };

console.log(`시간초는${totalsum}입니다.`);

// 선생님 답안
// let displayTime = 0;
// for (let hour = 0; hour <= 23; hour++) {
//     for (let minute = 0; minute <= 59; minute++) {
//         let clock = hour + ':' + minute;
//         if(clock.indexOf('3') >= 0)
//         displayTime += 60;
//     }
// }
// console.log(`하루동안 3이 표시되는 시간은 ${displayTime}초 입니다.`)

// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(num) {
    let strNum = num.toString();
    return strNum === strNum.split('').reverse().join('');
}

function findLargestPalindrome() {
    let largestPalindrome = 0;
    let pal1, pal2;

    for (let i = 100; i <= 999; i++) {
        for (let k = 100; k <= 999; k++) {
            let aa = i * k;
            if (isPalindrome(aa) && aa > largestPalindrome) {
                largestPalindrome = aa;
                pal1 = i;
                pal2 = k;
            }
        }
    }

    return { palindrome: largestPalindrome, paltotal: [pal1, pal2] };
}

let { palindrome, paltotal } = findLargestPalindrome();
console.log(`제일 큰 palindrome은 (${palindrome})이고`);
console.log(`합쳐진 두 수는 ${paltotal[0]}, ${paltotal[1]} 입니다.`);
//선생님 답안
// function isPalindrome(s) {
//     return s == s.split('').reverse().join('');
// }

// let maxPal = 0, max1 = 0, max2 = 0;
// for(let i = 100; i <= 999; i++) {
//     for (let k = i; k <= 999; k++) {
//         let mul = i * k;
//         if (isPalindrome(String(mul))) {
//             if (mul > maxPal) {
//                 maxPal = mul; max1 = i; max2 = k;
//             }
//         }
//     }
// }
// console.log(`${max1} x ${max2} = ${maxPal}`);

// 4. C:/workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js
// 에서 파일명(04.String연습.js)만 출력하세요. 
const strFile='C:/workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js'
console.log(strFile.substring(strFile.length-14));

// 선생님 답안
// let path = 'C:/workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js'
// split 후 맨 마지막 요소
// let pathArr = path.split('/');
// console.log(pathArr[pathArr.length - 1]);
// 맨 마지막에 있는 / 위치를 찾아서 substring 메소드를 찾는 방법
// let fileIndex = path.lastIndexOf('/');
// console.log(path.substring(fileIndex + 1));

