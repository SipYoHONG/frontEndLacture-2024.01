// while 반복문
let person = ['James', 27, '남', '프로그래머', 175.3];

let i = 0;
while (i < person.length) {
    console.log(person[i]);
    i++;
}

// 주사위를 던져서 합이 21을 초과하면 탈출
let sum = 0;
while (sum <= 21) {
    let dice = Math.ceil(Math.random()*6)
    console.log(dice);
    sum += dice;
}
console.log(sum);

