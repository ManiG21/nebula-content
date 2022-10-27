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