// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
// Rules: Obviously the words should be Caps, Every word should end with '!!!!',
//  Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function addArrays(arr1, arr2) {
    // input: Array 
    // Output: Array 
   // Check to see if two array are equal in length
    let newArr = []
    if(arr1.length !== arr2.length){
        throw new Error('invalid length')
      }
    for(let i = 0; i < arr1.length; i++){
       if(arr1.length === arr2.length){
        newArr.push(arr1[i] + arr2[i])
      }
    }
    return newArr
  }