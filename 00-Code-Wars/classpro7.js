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