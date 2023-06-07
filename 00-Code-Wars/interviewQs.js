// -- S1 Theory - answer these questions high level:

//     1 - What is a data structure? why is it important?

// A format to store data,allows us to access and modify them. Each data structure has access to unique properties and
// methods.

//   2 - What is the definition of a higher order function? What can they be used for? Name 3 different ones.

// A higher order is a function that takes a function as an argument, or returns a function.
//  .map(), .reduce(), .sort(), .slice(), .reverse(), .slice(), .split(), .remove(), 
// .toUpperCase(), .toLowerCase(), Math.min(), Math.Max(). Math.sqr(), Math.random()*number of your choice, 
//  Math.abs(), .some(), .includes(), .shift(), .unshift(), .splice(), .concat(), .fill()

//     3 - What is a full stack application? Name an example of a tech stack used that can be used create one.
// Amazon, Fashion Nova, Nike app
//  A full stack application include both front end(visual aesetic) and backend frameworks + Database. React

//     4 - What is react? What is one advatange has over vanilla javascript?
// A framwork built ontop of Javacript that utilizes a virtual/shadow to rerender as few elements as possible
//  DOM It is more effcient (reduce the load speed of web pages), Doesn't have to reload 

/*
-- S2 Primatives 
*/
console.log('--Section 2--');
// 1 - How can we print the fifth letter of this string
const string = 'I want the fifth character in this string';
console.log(string[4]) //n
// 2 - How can we print the fifth letter of this number
const num = 13513531531
const numStr = num.toString()
console.log(numStr[4]) //3
// 3 - How can we update the value of our variables
let add5 = 7
add5 += 5
// add 5 here
console.log(add5) // 12
let helloWorld = 'Hello'
// add World here
helloWorld += ' World'
console.log(helloWorld)
//0r
console.log(helloWorld + ' World') // 'Hello World'
// 4 - log 1 truthy value and 1 fasley value
let a = 'wrong'
console.log(a === 'right') //[value], false
console.log(10 / 2 === 4)

let x = 'str'
console.log(x === 'str') //[value],

//   There is a singly-linked list head and we want to delete a node node in it.
// You are given the node to be deleted node. You will not be given access to the first node of head.
// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.
// Delete the given node. Note that by deleting the node, we do not mean removing it from memory.

let deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}

// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

let reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    let letter = s[s.length - 1 - i]
    s[s.length - 1 - i] = s[i] //Change last leter with the first letter
    s[i] = letter // Changing the irst letterto be the last letter saved in memory
  }
};