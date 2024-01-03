const fs = require('fs');
const inputData = fs.readFileSync(0,'utf8').toString().split(" "); //띄어쓰기로 나누기

let ABC = [parseInt(inputData[0]),parseInt(inputData[1]),parseInt(inputData[2])];
ABC.sort(); //sort로 오름차순으로 정렬! 

const A = ABC[0];
const B = ABC[1];
const C = ABC[2];

if (A == B && B ==C){ // 세 숫자가 같으면
    result1 = 10000+A*1000
    console.log(result1);
} else if (A===B || B ===C ){ // 정렬을 해놨기 때문에 경우의 수가 두가지. 
    if (A ===B){
        console.log(1000+A*100);
    } else if( B ===C ){
        console.log(1000+B*100);
    }
} else if(A !== B && B !== C){ //세 숫자가 각기 다르면
    console.log(C*100); //정렬을 통해 C가 젤 큰 숫자 임으로 C*100
}