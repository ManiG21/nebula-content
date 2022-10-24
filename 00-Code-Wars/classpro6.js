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
    return  input.filter(num => num % 2 === 0).reduce( (prev, cur) => prev + cur, 0);
  }

  //or

  function sumEvenNumbers(input) {
    let sum = 0
    for(let i = 0; i < input.length; i++){
    if(input[i] % 2 === 0){
      sum += input[i] 
      console.log(sum)
      }
    } return sum
  }