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

//or

function getCount(str) {
    let vowels = str.split('')
    let count = 0
    console.log(vowels)
  const countedVowels = vowels.reduce((pre, curr) => {
    if (curr === 'a') {
       count++
    } else if (curr === 'e'){
      count++
    }else if (curr === 'i'){
     count++
    }else if (curr === 'o'){
      count++
    }else if (curr === 'u'){
     count++
    }
     },0) 
  return count
  }

  //or
  //     function getCount(str) {
//   return str.match(/[aeiou]/gi);
// }

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments,
//  neutralizing the threat.Your task is to write a function that takes a string and return 
//  a new string with all vowels removed. For example, the string "This website is for losers LOL!" 
//  would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  
  return str;
}