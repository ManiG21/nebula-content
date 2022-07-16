// 1.   Write a higher-order function which takes in two numbers and performs a calculation with them
//      Write the callback functions seperately 
//          Ex: calculate(multiply, 2,4) => 8
//          Ex: calculate(subtract, 2,4) => -2
//          Ex: calculate(exponent, 2,4) => 16

const calculateTwo = (num1, num2, func) => {
    const calc2 = func(num1, num2)
    return calc2;
}
const multTwo = (num1,num2) => {
   return num1 * num2;
}
// function subOne(num1, num2){
//     return num1-num2;
// }
const subOne = (num1, num2) => { return num1-num2;}

const exponent = (num1, num2) => {
   return Math.pow(num1, num2)
}




// 2.   Write a function that takes in any number of numbers and performs calculations on them
//      Write the callback functions seperately 
//      console.log(arguments) inside of a function to visualize your arguments
//          Ex: calculateAll(multiply, 1,4,1,231,5) => 4620
//          Ex: calculateAll(subtract, 2,4,5,7) => -14

function calculateAll(func, args){
    const calc3 = func(args)
    return calc3;
    }

function multiply(...args){
    console.log(arguments);
    let product = 0;
    for(let i=0; i<args.length; i++){
        product *= args[i];
    }
}


// 3.   Write a function that takes in a string and performs some form of manipulation on it
//          Ex: modify(yeller, 'I need a nap') => I NEED A NAP!!!
//          Ex: modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
//          Ex: modify(code, 'There is no cake') => Th-r- -s n- c-k-

function modify(str, func){
    const str1 = func(str)
    return str1;

}
function yeller(str){
const yl = str.toUpperCase()
return yl + "!!!"
}
console.log(modify("it's thursday", yeller))

// 4.   Write a function that takes in an array filled with different data types and returns each data type
//          Ex: oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['I love coding, 'goosfraba']
//          Ex: oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['Nested Array!']
//          Ex: oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => [10, Infinity]