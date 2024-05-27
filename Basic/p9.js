// array reverse using recursion

var arr = [1,2,3,4,5,6,7,8,9,10];

function reverse(arr) {
    if (arr.length == 0) {
        return arr;
    }
    return reverse(arr.slice(1)).concat(arr[0]);
}

console.log(`reverse =`, reverse(arr));