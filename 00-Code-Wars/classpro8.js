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