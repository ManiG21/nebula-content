// .forEach

// 1.   Given an array of numbers, log them to the console for each number. 
const nums = [4, 5, 7, 9, 12, 13, 2]
const print = element => console.log(element)
nums.forEach(print)
// 2.   Given an array of people, log a greeting to the console for each person.
function greet(el) {
    console.log("hello", + el)
}
ppl.gorEach(greet)
// 3.   Given an array of mixed values, log whether the value is undefined.
const arr3 = ["hi", 23, 56, 7, true, 0, [], "boo"]
function checkUndefined() {
    for (let i = 0; i < arr3.lenght; i++) {
        if (typeof (arr3[i]) === "undefined") {
            console.log(arr3[i])
        }
    }
}
arr3.forEach(checkUndefined)

// 4.   Given an array of strings, log the vowel count for each string.
const vowelsCount = (arr) => {
    let strVowels = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'a' || arr[i][j] === 'e' || arr[i][j] === 'i' ||
                arr[i][j] === 'o' || arr[i][j] === 'u') {
                    strVowels += 1
                }

                
        }

    }
    console.log(strVowels);
}
ppl.forEach(vowelsCount);
// 5.   Given an array of numbers, double them and log them to the console. 

const a32 = [1, 5, 2, 3, 7, 8, 9] 
a32.forEach(cat => console,log(cat))