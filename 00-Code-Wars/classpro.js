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

 //write a function that adds the username property to each object in the input array:
//The value of the username property is composed by concatenating:
// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. 

function addUsername(list) {
  // thank you for checking out the Coding Meetup kata :)
    //   forEach
    //   concat
    // new variable
  for (let i =0; i< list.length; i++){
    let person = list[i]
  let year = new Date().getFullYear()
    let newYear = year - person.age
    person.username = `${person.firstName}`.toLowerCase() + `${person.lastName[0]}`.toLowerCase() + newYear.toString()
  }
  return list
}