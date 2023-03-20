// Numbers Review 

// 1. Addition
let sum = 2 + x

// 2. Subtraction
let sub = x - 2

// 3. Division
let div = x / 2

// 4. Remainder
let rem = x % 2

// Postfix (most common)
let x = 3;
let y = x++
// y = x + 1
// Also used for loop and certain if statements

// Prefix
let a = 3;
let b = ++a;

// Compound Assignment Operators
//combinining basic operators with equal will reassign varible with given operation

let v = 4
v *= 4  // v is now = 16

let v2 = 10
v2 /= 5 // v2 is now 2

let v3 = 3
v3 += 3 // v3 is now 6

let v4 = 3
v4 -= 3 // v4 is now 0

// Type Coercion- The automatic conversion of values from one type to another
let numStr = '2'
let n = 1
console.log(numStr + n) // output = '21'

//String to a Number
parseInt("22") // output = 22

// Or
const nStr = '1';
const nu = +nStr; // console.log(nu) = 1

// Number to a String
let t = 24
console.log(t.toString()) // output = "24"

// Template Literals

// String Methods

// .split()

let myStr = "Hi my name is Armani"
 myStr.split() // returns

 let str3 = "Welcome"
 console.log(str3[0])
 console.log(str3[str3.length - 1])