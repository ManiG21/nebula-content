// Write a function that takes an array of strings as an argument and returns a sorted array containing 
// the same strings, ordered from shortest to longest.

function sortByLength(array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((pre, curr) => pre.length - curr.length)

}

//   Write a function named sumDigits which takes a number as input and
//    returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
    // Sum of each index of a number in absolute value
    // .toString to turn the numbers
    //parseInt to turn it back to a number
    const num = Math.abs(number).toString()
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i])
    }
    return sum
    // *Additional solution*return Math.abs(number).toString().split('').reduce((total, current)=> total + parseInt(current),0)
}

    //   write a function that adds the username property to each object in the input array:
//     The value of the username property is composed by concatenating:
// firstName in lower -case;
// first letter of the lastName in lower -case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year.
//  Please make sure that your function delivers the correct birth year irrespective of 
// when it will be executed, for example it should also work correctly for a meetup organised in 10 - years - time. 
// The example above assumes that the function is run in year 2020.

function addUsername(list) {
    //   forEach
    //   concat
    // new variable



    let year = new Date().getFullYear()
    let newYear = 2020 - list.age
    list.username = `${list.firstName}`.toLowerCase() + `${list.lastName}`.toLowerCase() + newYear.toString()
    console.log(list)



}