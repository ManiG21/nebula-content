// .map()
// 1.   Using .map() create a new array that doubles all the numbers in a given array
nums = [3, 6, 9, 12, 15]
// 2.   Using .map() create a new array that halves all numbers in a given array
const half = cur => cur/2
const storeHalf = nums.map(half)
console.log(storeHalf)
// 3.   Using .map() create a new array that finds the power of all the numbers in a given array
const pow = cur => cur ** 2
const storePow = nums.map(pow)
console.log(storePow)
// 4.   Using .map() create a new array of all capital strings from an array of lower case strings
const strs = ["hi", "bye", "etc"]
const upp = cur => cur.toUpperCase()
const storeUpp = strs.map(upp)
console.log(storeUpp)
// 5.   Using .map() create a new array of greeting sentences from an array of given people
//      Expected output: ['Hello Pamela', 'Hello Michael', 'Hello Angela']
const ppl = ['Michael', 'Jackson', 'Timmy', 'Wanda', 'Cosmo']
const greet = cur => 'Hello ' + cur + '. Nice to meet you!'
const storeGreet = ppl.map(greet)
console.log(storeGreet)

// ppl.forEach(element => console.log("Hello, " + element))
// put this one in 4 practice