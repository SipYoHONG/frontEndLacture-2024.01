// 자료형 변환 casting
//강제형 변환
console.log(123, String(123));
console.log(Number("101"), Number(true), Number(false));
console.log(Number("hello")); // NaN: Not a Number

// 아래 경우를 제외하면 모두 참
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined), Boolean(null), Boolean(NaN));
