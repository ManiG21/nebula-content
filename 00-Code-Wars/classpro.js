// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

function fizzbuzz(n){
    let sum = []
  for(let i = 1; i <= n; i++){
   if (i % 5 === 0 && i % 3 === 0){
    sum.push('FizzBuzz')
   } else if (i % 5 === 0){
     sum.push('Buzz')
   } else if(i % 3 === 0){
     sum.push('Fizz')
   } else {
     sum.push(i)
   }
  }
    return sum
  }



  function orderFood(list) {
    // thank you for checking out the Coding Meetup kata :)
    const mealObj = {}
    list.forEach(person => {
      if(mealObj[person.meal]){
        mealObj[person.meal] ++
      }else {
        mealObj[person.meal] = 1
      }
    })
    return mealObj
  }