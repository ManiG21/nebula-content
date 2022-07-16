//- Define a function called //`multiplyBy10` that takes in one `number` argument and returns that `number` multiplied by 10. Test the function with some numbers.
function multiplyBy10(a){
      console.log(a*= 10)
}

multiplyBy10(4)

//- Define a function called// `sayGoodbye` that uses a `name` parameter and returns a farewell message incorporating that `name`.
function sayGoodbye(name){
    return "goodbye," + name;
}
let person = "sarah";
console.log(sayGoodbye(person))

//- Define a function called `evenNumbers` that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array (Hint: you can use the `modulus` operator to check whether a number is even or not).
function evenNumbers(arr){
      let evens = []
      for(i = 0; i<arr.length; i++)
      if(arr[i] % 2 === 0){
            evens.push(arr[i])
      } console.log(evens)
}
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//- Define a function called `reverseWords` that takes in a string and returns a string with the order of words reversed.
function reverseWords(text){
      let reversed = []
      for(let i=text.length-1; i>0; i--)
    reversed.push(text[1])
    console.log(reversed.join(''))
}
 reverseWords("January");