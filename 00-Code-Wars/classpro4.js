// Given two numbers and an arithmetic operator (the name of it, as a string), 
// return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number 
// in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator){
    //your code here!
    if(operator === 'add'){
      return a + b
    } else if(operator === 'subtract'){
      return a - b
    }else if(operator === 'divide'){
      return a / b
    }else if(operator === 'multiply'){
      return a * b
    }
  }

   //or

   const arithmetic = (a, b, operator) => {
    return  ( 
      operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
    )
   }

//   You are going to be given a word. Your job is to return the middle character of the word. 
//   If the word's length is odd, return the middle character.
//    If the word's length is even, return the middle 2 characters.
  function getMiddle(s){
    //Code goes here!
    for(let i = 0; i < s.length; i++){
      if(s.length % 2 !== 0){
        return   s[Math.floor(s.length/2)]
        }
      else if(s.length % 2 === 0){
        return   s[(s.length/2) - 1]  + s[s.length/2]
      }
    }
  }

//   Create a function that returns the sum of the two lowest positive numbers
//    given an array of minimum 4 positive integers. 
//   No floats or non-positive integers will be passed.
function SumTwoSmallestNumbers(numbers){
// let min = ( => parseInt(numbers.spliceInumbers.indexOf(Math.min(...numbers)),1))
// return min() + min()
}

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
  //.toString
  //set parmeter to equal .reverse of parameter
  let numStr = x.toString()
  let splitX = numStr.split('').reverse().join('')
  if(numStr === splitX){
      return true
  } else {
      return false
  }
  
};
//or
let isPalindrome = (x) =>(x === parseInt(x.toString().split('').reverse().join('')))


function search(budget, prices) {
  // Integer (budget) and array of intergers (prices)
  // Output: String of comma seperated numbers
  // loop or filter
 // 3, [6, 1, 2, 9, 2]
  //[1,2,2]
  // loop over each price and see if we can afford it
  // assending order .sort()
  // convert the numbers to strings .toString()
 // ["1","2","2"]
  // Convert the array of strings to a string 
  // ["1","2","2"] --> "1,2,2"
  let belowB = prices.filter(price => price <= budget)
  console.log(belowB)
//   arr.sort((a, b) => a - b)
   let avail = belowB.sort((a, b) => a - b).toString()
  return avail
}