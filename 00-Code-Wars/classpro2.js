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