// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
// Rules: Obviously the words should be Caps, Every word should end with '!!!!',
//  Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function addArrays(arr1, arr2) {
    // input: Array 
    // Output: Array 
   // Check to see if two array are equal in length
   // Throw error if they aren't equal
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


//   Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, 
//   you've been using the work computers to smash in endless hours of codewars.
//  In a team meeting, a terrible, awful person declares to the group that you aren't working. 
//  You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
//  Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value,
//   you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. 
//   Else return 'Nice Work Champ!'.Happiness rating will be total score / number of people in the room.
//   Note that your boss is in the room (boss), their score is worth double it's face value 
//   (but they are still just one person!).