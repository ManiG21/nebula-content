// .filter()

const nums = [1,2,3,4,5,6,7,8,9,10]
// 1.   Write a function to filter an array for all the numbers greater than 5
const greaterThan5 = nums.filter(num => num >5)
console.log(greaterThan5)
// 2.   Write a function to filter an array for all the even numbers
const evenSteven = nums.filter(num = num %
    2 === 0)
    console.log(evenSteven)
// 3.   Write a function to filter an array for all the non number items
const newArr2 = [1,2,3, "bee", 4, 5, true, 12, false]
const nonNums = newArr2.filter(el => typeof(el) !== "number")

// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

const pep21 = partyPeople.filter(peep => peep.age >=21)
console.log(pep21)


// 5.   Write a function to filter out all letters from a string 
//      Hint: filter doesn't work on strings..

