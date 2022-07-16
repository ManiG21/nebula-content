/* 
Copy the following text to your notes, then create variables and assign them strings that will help the bottom console.log run properly:

Write your code below the comment and above the console log 
*/

let language = "JavaScript"
let adjective1 = "like"
let keyword1 = "var"
let year = 2015
let instructor = "Eric"

const sent = `I am currently learning the programming language called ${language}. I ${adjective1} this program already. I read recently that declaring variables with the ${keyword1} keyword has gone out of style ever since ECMAScript ${year}. Oh, also, my instructor ${instructor} is awesome!`

console.log(sent)

let name = "Armani Grant"
const letter1 = name[0] //A
const letter2 = name[1] //r
const letter3 = name[2] //m
const letter4 = name[4] //n
const letter5 = name[5] //i

const fName =  letter1 + letter2 + letter3 + letter1 + letter4 + letter5

console.log(fName)



const mani = "Star baketball player"

console.log(mani.slice(0, 4));

const main = '4 pc chicken tenders'
const side1 = 'mozzerella sticks'
const side2 = 'french fries'

console.log("I am going to Pudgies for my favorite combo of " .concat(main, " with ", 
side1, " and ", side2))

const str = 'The cat ran across the street to the other yard';

const cat = str.split(' ');

console.log(cat);
console.log(str.split('cat'));