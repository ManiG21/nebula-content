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

 