// Complete the function that takes a sequence of numbers as single parameter. 
// Your function must return the sum of the even values of this sequence.

function sumEvenNumbers(input) {
    let evens = input.filter(num => num % 2 === 0)
   let sum = evens.reduce(
    (prev, cur) => prev + cur,
    0);
    return sum
  }
  //or 
//one line
  function sumEvenNumbers(input) {
    return  input.filter(num => num % 2 === 0).reduce( (prev, cur) => prev + cur, 0);
  }

  //or
// With for loop
  function sumEvenNumbers(input) {
    let sum = 0
    for(let i = 0; i < input.length; i++){
    if(input[i] % 2 === 0){
      sum += input[i] 
      console.log(sum)
      }
    } return sum
  }

//   Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.
// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. 
// You should return an integer representing the maximum amount of gifts Leo can buy.

  function howManyGifts(maxBudget, gifts){
    // inputs: budget (number) and gifts (array of prices)
    // output: number - how many gifts he can buy
    // loop over array
    // variable counter to track budget limit ( count up to 20 or down from 20)
    // variable to count how many gifts you bought
    // if statement / logic to decide whether or not to buy it
    // return the count of gifts
    gifts = gifts.sort((a,b)=> a-b)
    let giftCount = 0
    let total = maxBudget
    for(let i = 0; i < gifts.length; i++){
      if(total - gifts[i] >= 0){
        total -= gifts[i]
        giftCount++
      }
    }
    return giftCount
  }

//   Don't give me five!
// In this kata you get the start number and the end number of a region and 
// should return the count of all numbers except numbers with a 5 in it.
// \ The start and the end number are both inclusive!


function dontGiveMeFive(start, end){
  //inputs : starting and ending indexes
  // output: count of numbers that dont have a 5 in it
  // create a loop
  // let i = start
  // i <= end
  // number to a string using toString()
  // so we can use the includes string method
  // create a variable to count numbers
  // create condition/ if statement
    let count = 0
  for (let i = start; i < end.length; i++){
    let numStr = end[i].toString()
  // check to see if there isnt a "5" in it and then count it
    if(!numStr[i].includes('5')){
      count++
    }  
  // return the count 
  } return count
  
}

// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(str) {
  //input: string
// output: string with space 
//create variable to add the new string to
  let output = ''
//loop through to find uppecase character
for(let i = 0; i < str.length; i++){
  if(str[i] === str[i].toUpperCase()){
    output += ' '
  }
  output += str[i]
//return new variable
} return output
}
