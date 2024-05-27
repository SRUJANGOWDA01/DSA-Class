// write a recursive function to retrieve/remove vowels from name

const removeVowels = function (str) {
    let vowels = ["a","e","i","o","u"];
    return [...str].filter((c) => !vowels.includes(c)).join("");
}

console.log( "result =", removeVowels("apple"));
console.log( "result =", removeVowels("test"));
console.log( "result =", removeVowels("india"));

const remVowels = function(str) {
    let vowels = ["a","e","i","o","u"];
    let words = [];

    for(let i=0; i < str.length; i++) {
        if(!vowels.includes(str[i])) {
            words.push(str[i]);
        }
    }

    return words.join("");
}