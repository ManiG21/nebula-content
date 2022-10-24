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

  function sumEvenNumbers(input) {
    let evens = input.filter(num => num % 2 === 0).reduce( (prev, cur) => prev + cur, 0);
    return evens
  }