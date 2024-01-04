// for(let i = 2; i < 10; i++){
//     for (let k=1; k < 10; k++){
//         console.log(`${i}*${k} = ${i*k}`);
//     }
// }


for(let i=1; i < 6; i++){
    let star= '';
    for(let k=1; k <6; k++){
        star += '*';
    } 

    console.log(star);
}

for(let i=0; i<6; i++){
    let star=' ';
    for (let k=0; k<i+1; k++){
    star += '*';
}
console.log(star);
}

for(let i=5; i>0; i--){
        let star=' ';
    for(let k=0; k<i; k++){
        star += '*';
    }
    console.log(star);
}

for (let i = 0; i < 5; i++){
        let star = '';
    for (let k = 0; k < 4 - i; k++){
        star += ' ';
    }
    for (let k = 0; k < i + 1; k++){
        star += '*';
    }
    console.log(star);
}

for(let i = 0; i < 5; i++){
        let star ='';
    for(let k=0; k < i; k++){
        star += ' ';
    }
    for(let k=0; k < 5-i ; k++){
        star += '*';
    }
console.log(star);
}

// 10000 이하의 수중에서 완전수 4개을 찾으세요.

for(let i = 2; i <= 10000; i++){
    let t = 0;
for(let k = 1; k < i; k++){
    if(i%k == 0)
     t += k;
}
if(i == t)
console.log(i);
}

// 2. a + b + c = 1000 을 만족하는 피타고라스 수 (단, a < b < c) 
// a*a+b*b=c*c
let answer=[];
for(let a=1; a<1000; a++){
    for(let b=1; b<1000; b++){
        c = 1000-a-b;
        if(a+b+c==1000){
            if(a*a+b*b == c*c && a < b)
            answer.push (a,b,c);
        }
    }
}
console.log(answer);
