// Create a variable for each aspect of an address 
// First Name, Last Name, House-Number, Street-Name, City, State, Zip
// Combine them to be usable as a postage address

/*
First-Name Last-Name
House-Number, Street-Name 
City, State
Zip

Your log should look like this:

Steve Rogers
569, Amsterdam Ave
New York, NY
18062 
*/




const fName = "Armani"
const lName = "Grant"
const houseNum = "32"
const city = "Albany"
const state = "New York"
const zip = "11721"
const street = "Liberty Dr"
console.log("address")

const address = `${fName} ${lName} 
${houseNum}, ${street}
${city}, ${state}
${zip}`

console.log(address)