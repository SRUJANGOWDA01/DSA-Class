// spread and rest operators

function sum(...x) {
    console.log(`x (rest) = `,x)
}

sum(12,4,54,65,6,34,45,32)

let a = ["john", "Robert", "fred"]

let b = ["morris", "sandy", "grek"]

//spread -> array to individual value.
let c = [...a,...b];

console.log(`c =`, c);