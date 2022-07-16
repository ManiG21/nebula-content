// 1.   Write a higher order function that manipulates every number in an array 
//      Ex: changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
//      Ex: changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
//      Ex: changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]
const myArray = [1, 4, 6, 7, 8, 10];
const newArray = []
// for(let i = 0; i< arr.length; i++) {
// let currentElement =
// }



function doubler (n){
    return n * 2;
}

function halve() {
return n/2
}

function squared(n) {
    return n **= 2
}

// 2.   Write a higher order function that calculates some features of a string
//      Ex: stringInfo(length, 'Howdy Partner!') => 14
//      Ex: stringInfo(vowels, 'Howdy Partner!') => 3
//      Ex: stringInfo(capitals, 'Howdy Partner!') => 2
//      Ex: stringInfo(nonLetters, 'Howdy Partner!') => 2
const myString = "Saturday's are the best!";

const stringInfo = (str, func) => {
    return func(str);
}

function length(str){
    return str.length;
}
const vowels = (str) => {
    let vowelsCount = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] == 'a'|| str[i] == 'e'||
        str[i] == 'i'|| str[i] == 'o'||
        str[i] == 'u'){
            vowelsCount += 1;
        }
    }
    return vowelsCount;
        }
    
console.log(stringInfo(myString, length));
console.log(stringInfo(myString, vowels));
console.log(stringInfo(myString, capitals));

function capitals(str){
    let capCount = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            capCount += 1;
        }
    }
    return capCount;
}
// 3.   Write a higher order function that minimizes a given list of numbers into one number
//      Ex: minimizeNums(add, [2,3,5,8]) => 18
const  nums = [4, 6, 10, 7]
const miniNums = (func, arr) => {
    return func(arr)
}

function add(arr){
 let sum = 0
 for(let i=0; i<arr.length; i++){
     sum += arr[1]
 }
 return sum; 
}
console.log(miniNums(add, nums));
