
let N = 6;
for( let i = 1; i < 10; i++) {
    console.log(`${N}*${i} = ${N*i}`);
}

// 2 ~ 9단 까지
for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`);
    for (let k = 1; k <= 9; k++)
    console.log(`${i}*${k} = ${i*k}`);
}