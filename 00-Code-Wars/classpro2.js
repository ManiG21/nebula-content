// sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.

var mostWordsFound = function(sentences) {
    //loop through sentences
    //input: sentences = ["please wait", "continue to fight", "continue to win"]
    // return output: 3(maxiuma amount of words)
    //compare amount of words of each sentence
    //.split
    let maxWords = 0
    for(let i = 0; i < sentences.length; i++){
   let words = sentences[i].split(' ').length
      maxWords = Math.max(words, maxWords) 
    } 
    return maxWords
};

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
var subtractProductAndSum = function(n) {
    let sum = 0
    let product = 1
    let numberString = n.toString()
    let splitNumber = numberString.split('') 
    
    
    for(let i = 0; i < splitNumber.length; i++) {
        // Take string of number at the index and transform to number 
        sum += parseInt(splitNumber[i])
        product *= parseInt(splitNumber[i])
    }
    return product - sum
};