//let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
//let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627

 //for(let i = 0; i < arr_1. length; i++) { sum += arr_1[i]; }


 //let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line



let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]
let reverse = []
let reverse2 = []
for(let i = array1.length - 1; i >= 0; i--){
    reverse.push(`${array1[i]}`)
}
 console.log(reverse)


 for(let i = array2.length - 1; i >= 0; i--){
     reverse2.push(`${array2[i]}`)
 }
 console.log(reverse2)