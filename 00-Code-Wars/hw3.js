// 1. Using HOF create a new array of all capital strings from an array of lower case strings
const strs = ["hi", "bye", "etc","rainbow"]
let strsUp = strs.map(x => x.toUpperCase());
console.log(strsUp)
// 2. Using a HOF log 'Hi, my name is [NAME], I like to go [HOBBY]'
const people = [
    { name: "Dan", hobby: 'hiking' },
    { name: "Joe", hobby: 'biking' },
    { name: "Samantha", hobby: 'sking' },
    { name: "Jocelyn", hobby: 'skate boarding' },
    { name: "Sasha", hobby: 'swimming' },
    { name: "Tim", hobby: 'running' },
    ];
    const greet = cur => 'Hi, my name is ' + cur.name + ' , I like to go ' + cur.hobby
    const greeting = people.map(greet)
    console.log(greeting)
    

// Using a HOF create a new array of only family members that are older than 50
const familyMembers = [{name: 'Bill', age: 55}, {name: 'Johnny', age: 18}, {name: 'Frank', age: 23}, {name: 'Anna', age: 58}]

const elders = familyMembers.filter(pep => pep.age > 50);

// 4.   Write a HOF to find the largest number in the array
const numbers = [34,90,12,55,100,2,65]
let largenum = numbers.map((num) => Math.max(num));
console.log(largenum)

// 5. Solve one of the problems above again, but this time use a FOR LOOP
for(let i = 0; i < strs.length; i++){
    let strsUp2 = strs[i].toUpperCase()
    return strsUp2
}


// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. 
// The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] 
// is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). 
// Return the highest altitude of a point.

function largestAltitude(gain) {
    //input: an array
    //output highest alt  
       let max = Math.max(...gain)
       return max
  };