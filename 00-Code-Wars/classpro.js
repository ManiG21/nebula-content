// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

function fizzbuzz(n) {
  let sum = []
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      sum.push('FizzBuzz')
    } else if (i % 5 === 0) {
      sum.push('Buzz')
    } else if (i % 3 === 0) {
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
    if (mealObj[person.meal]) {
      mealObj[person.meal]++
    } else {
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
  for (let i = 0; i < list.length; i++) {
    let person = list[i]
    let year = new Date().getFullYear()
    let newYear = year - person.age
    person.username = `${person.firstName}`.toLowerCase() + `${person.lastName[0]}`.toLowerCase() + newYear.toString()
  }
  return list
}

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var runningSum = function (nums) {
  //create previous value variable
  //.map()
  //add previous values to current value
  //return runningSum
  let prev = 0
  return nums.map(curr => prev += curr)

};

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
//  such that each unique element appears only once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages,
//  you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates, 
// then the first k elements of nums should hold the final result. 
// It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by 
// modifying the input array in-place with O(1) extra memory

var removeDuplicates = function (nums) {
  //     make a variable for the count (unique letter)
  let x = 0
  //     looping go through numbers
  for (let i = 0; i < nums.length; i++) {
    //     else if   
    // if number is unique (prev = curr) then increase the count
    if (nums[i] !== nums[i - 1]) {
      x++
    } else {
      nums.splice(i, 1)
      i--
    }
    //     else "replace"
  }
  return x
};


// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  return [min, max]
}

//or
function minMax(arr) {
  const sorted = arr.sort((a, b) => a - b)
  return [sorted[0], sorted[arr.length - 1]]
}

// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether

function toAcronym(inp) {
  //input string
  // output : string
  // first letter of each word
  // string and use split() string -> array ( of words)
  // grab the first letter of the word
  // uppercase the letter
  // join()
  // return new string of captial letters w/ no spaces

  const words = inp.split(' ')
  const acr = []
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    //   let combo = words[0].charAt(1) + words[1].charAt(0)
    const fletter = word[0].toUpperCase()
    acr.push(fletter)
  }
  return acr.join('')
}
