// Write an algorithm that takes an array and
//  moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    //input: array
    //output :array
    //Loop through to find the zeros
    let length = arr.length
    for(let i = 0; length-- ; i++){
      if(arr[i] === 0){
        arr.push(arr[i])
        arr.splice(i, 1)
        i--
      }
    }
   return arr
  }

//   The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.