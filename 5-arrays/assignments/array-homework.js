// 1.   Create an array that contains two of your favorite things to do
const favThings = ["Video games", "Basketball", "Cooking"]

// 2.   Using an array method, add another thing you like to do to that list
favThings.push("Weight Lift")
// 3.   Reverse the order of the array (remember, if needed use MDN)
const reversed = favThings.reverse()
//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   const daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wedsnesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
console.log(daysWeek.length)
// 5.   log the 4th element in the array
console.log(daysWeek[3])

// 6.   Remove the first element in the array. Log the new array and the element removed from the array
daysWeek.shift();
// 7.   Put 'Sunday' back at the beginning of the array and log the new array
 daysWeek.unshift();
// 8.   Remove the last element in the array. Log the new array and log the element removed
const daysWeekpop = daysWeek.pop();
console.log(daysWeekpop)
// 9.   Add 'Saturday' back to the end of the array and log the new array
const daysWeek2 = daysWeek.push('Saturday')
console.log(daysWeek2)
//10.   Replace 'Thursday' with 'Friday Junior'
daysWeek[4] = "Friday Junior";
//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
console.log("My favorite day of the week " .concat(daysWeek[3]))
//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
const devices = phone +  laptop
//13.   Write a line of code to test if something is an array or not
 console.log(devices)