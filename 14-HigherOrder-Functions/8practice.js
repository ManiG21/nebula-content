// .sort()

// 1.   Write a HOF to sort an array of numbers from largest to smallest
const nums = [1,25,6,3,88,45,0]
nums.sort((a,b) => a < b ? 1 : -1);
console.log(nums)
// 2.   Write a HOF to sort peoples names by their length
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]
partyPeople.sort((a,b) => a.name.length > b.name.length ? 1 : -1);
console.log(partyPeople)
// 3.   Write an HOF to sort an array of objects of people by their age youngest to oldest

// 4.   Write an HOF to sort an array of strings by the last letter of the string
const strings = ['sam', 'john', 'daniel', 'vanessa']