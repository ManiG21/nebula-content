// 2.   Create a promise for something you may, or may not do.
let promise = new Promise(function(resolve, reject) {

});

let cookPromise = true;

let cookedDinner = new Promise(function(resolve, reject) {
    setTimeout(() =>{
    if(cookPromise) {
        resolve('I made Chicken Parmagina and garlic bread.');
    } else {
        reject("I didn't cook tonight, I ordered pizza");
    }
},4 * 1000);
});

console.log(cookedDinner)

// 3.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.

// 4.   Using the prior example use .then and .catch to handle responses and rejections

// 5.   What does a promise resolve to?


// 5.   What does a promise resolve do?
// It checks to see if the statement true then returns a statement over time
