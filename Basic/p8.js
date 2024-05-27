// using spread operator and rcursion  - reverse the array

// lambda function
// const display = (a) => a +1

//const display = (a) => {
//     return a + 1
// }

let x = [1,2,3,4,5,6,7,8,9,10];
console.log(`x = `,x);

const reverse = ([h,...t]) => t.length ? [...reverse(t),h] : [h];

console.log(`after x =`,reverse(x));