// When provided with a String, capitalize all vowels

function swap (str) {
    // input: string
    // output: sting with capital vowels
    // create variable for new string
    let split = ''
    // Loop over string or turn into Array and use array method (map, join, split)
  for(let i = 0; i < str.length; i++){
    // check to see its a vowel and then capitalize them
    if(str[i] === 'a'|| str[i] === 'e'|| str[i] === 'i'|| str[i] === 'o'|| str[i] === 'u'){
     split += str[i].toUpperCase()
    }else{
    split +=  str[i]
    }
    // return new string 
  }return split
  }

  // You are given an array (which will have a length of at least 3, but could be very large) 
  // containing integers. The array is either entirely comprised of odd integers or entirely comprised 
  // of even integers except for a single integer N. Write a method that takes the array as
  //  an argument and returns this "outlier" N.

  function findOutlier(int){
    let even = []
    let odd = []
  for(let i = 0; i < int.length; i++){
    if(int[i] % 2 === 0){
      even.push(int[i])
    } else if(int[i] % 2 !== 0) {
     odd.push(int[i])
    }
     }if(odd.length < even.length){
       return odd[0]
     } else {
       return even[0]
     }
  }

  // Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
  // The first word within the output should be capitalized only if the original word was capitalized 
  // (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
  
  function toCamelCase(str){
    let newStr = ''
    for(let i = 0; i < str.length; i++){
      if(str[i] === '_'|| str[i] === '-'){
       newStr += str[i + 1].toUpperCase()
           i++
      }
      else{
       newStr += str[i]
      }
    }
    return newStr
  }

  // Given n, take the sum of the digits of n. If that value has more than one digit,
  //  continue reducing in this way until a single-digit number is produced. 
  //  The input will be a non-negative integer.

  function digitalRoot(n) {
    //   let nums = n.toString().split('')
    //   let fin = nums.reduce((prev, curr) => prev + +curr, 0)
    //   return fin
      //create a variable
      let sum = n.toString()
      // Loop through
      //check to see if their are multiple digits
      for(let i = 0; sum.length > 1; i++){
      //split up numbers
      sum =  sum.split('').reduce((prev, curr) => prev + +curr, 0).toString()
      }
      return +sum
      //output: number
    }

    // Reverse every other word in a given string, then return the string. 
    // Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
    // Punctuation marks should be treated as if they are a part of the word in this kata.

    function reverse(str){
      let strArr = str.split(' ')
      let fin = ''
      for (let i = 0; i < strArr.length; i++){
        if(i % 2 !== 0){
         fin +=  strArr[i].split('').reverse().join('') + ' '
        } else {
         fin +=  strArr[i] + ' '
        }
      } 
       return fin.trim()
     }

     //or

    function reverse(str){
    }

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. 
// The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. 
// Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, 
// and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.

function checkExam(arr1, arr2) {
  let score = 0
 for(let i = 0; i < arr1.length;i++){
   if(arr1[i] === arr2[i]){
     score += 4
// and +0 for each blank answer, represented as an empty string (in C the space character is used).
   } else if (arr2[i] === ""){
     score  += 0
   } else if(arr1[i] !== arr2[i]){
     score -= 1
   } 
 } 
// If the score < 0, return 0.
  if( score < 0){
     score = 0
   }
  return score
}