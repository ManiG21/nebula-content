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

function generateHashtag (str) {
    //   input: string
    //   output: string 
      if(str === "" || !str.trim()){
        return false;
      }
      //   need new variable to store new string with hashtag in it
      let hashGen = "#"
    //   for loop to iterate thru string
      let words = str.split(" ")
    //   console.log(words, str)
      for (let i = 0; i < words.length; i++){
        if(!words[i]){
          continue
        }
    //   need to iterate thru array and capitalize the first letter in words
    //     .slice
        hashGen += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    //     console.log(hashGen)
      }
    //   make condition if the final result is longer than 140 characters will return false
      if(hashGen.length > 140){
        return false
      }
      return hashGen
    }