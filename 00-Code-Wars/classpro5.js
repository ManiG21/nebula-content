// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  //.reduce
  let vowels = 0
  for (let i = 0; i < str.length; i++){
    if(str[i] === 'a'){
      vowels++
    } else if(str[i] === 'e'){
      vowels++
    }else if(str[i] === 'i'){
      vowels++
    }else if(str[i] === 'o'){
      vowels++
    }else if(str[i] === 'u'){
      vowels++
    }
  }return vowels
}