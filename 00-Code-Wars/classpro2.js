// sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.

var mostWordsFound = function (sentences) {
    //loop through sentences
    //input: sentences = ["please wait", "continue to fight", "continue to win"]
    // return output: 3(maxiuma amount of words)
    //compare amount of words of each sentence
    //.split
    let maxWords = 0
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].split(' ').length
        maxWords = Math.max(words, maxWords)
    }
    return maxWords
};

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function (n) {
    let sum = 0
    let product = 1
    let numberString = n.toString()
    let splitNumber = numberString.split('')


    for (let i = 0; i < splitNumber.length; i++) {
        // Take string of number at the index and transform to number 
        sum += parseInt(splitNumber[i])
        product *= parseInt(splitNumber[i])
    }
    return product - sum
};

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
var shuffle = function (nums, n) {
    // sort   
    // create array variable
    //     first half of numbers
    const firstHalf = nums.slice(0, n)
    const secondHalf = nums.slice(n)
    const output = []
    // for loop
    for (let i = 0; i < n; i++) {
        console.log(i, firstHalf[i], secondHalf[i])
        output.push(firstHalf[i])
        output.push(secondHalf[i])
    }
    return output
    // nums = [2,5,1],[3,4,7], n = 3
    // create x and y arrays from nums
    // .push twice
};

const filteredVehicles = []
for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i])
    if (cars[i].activeRecall) {
        filteredVehicles.push(cars[i])
    }
}
console.log(filteredVehicles)

// There is a programming language with only four operations and one variable X:
// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.
// Given an array of strings operations containing a list of operations, 
// return the final value of X after performing all the operations.

let finalValueAfterOperations = function (operations) {
    let x = 0
    // operations = ["--X","X++","X++"]
    for (let i = 0; i < operations.length; i++) {
        let value = operations[i]
        if (value == 'X++' || value == '++X') {
            x++
        } else if (value == 'X--' || value == '--X') {
            x--
        }
    }
    return x
};