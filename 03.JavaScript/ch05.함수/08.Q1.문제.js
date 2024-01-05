//배열에 대한 함수 만들어 보기

let sampleArray = [43, 17, 25, 36, 98, 73];
console.log(sumArray(sampleArray));
console.log(maxArray(sampleArray));

// 1. 배열을 인수로 받아서, 합을 반환하는 함수
function sumArray(arr) {
    let arrsum = 0;
    for(let i = 0; i < arr.length; i++)
            arrsum += arr[i];
        return arrsum;   
}



// 2. 배열(1 ~ 99)에서 최대값을 찾아서 반환해주는 함수
function maxArray(arr){
   let = maxVal = 0;
   for(let t of arr) {
    if (t > maxVal)
    maxVal = t;
}
return maxVal
}
//평균값
console.log(sumArray(sampleArray) / sampleArray.length);


// 제곱
function sumOfSquared(arr){
        let arrsum = 0;
        for(let i = 0; i < arr.length; i++)
                arrsum += arr[i] * arr[i];
            return arrsum;   
    }
console.log(sumOfSquared(sampleArray));