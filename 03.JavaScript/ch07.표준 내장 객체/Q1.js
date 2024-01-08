// 2. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?
let totalsum = 0;

for( let h=0; h<24; h++) {
    if(h.toString().includes('3')) totalsum += 3600
    else {
        for(let m=0;m<60;m++){
            if(m.toString().includes('3')) totalsum += 60
            }
        }
    };

console.log(`시간초는${totalsum}입니다.`);

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

// 4. C:/workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js
// 에서 파일명(04.String연습.js)만 출력하세요. 
const strFile='C:/workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js'
console.log(strFile.substring(strFile.length-14));
