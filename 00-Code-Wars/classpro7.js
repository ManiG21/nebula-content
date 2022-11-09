// When provided with a String, capitalize all vowels

function swap (str) {
    // input: string
    // output: sting with capital vowels
    // create variable for new string
    let split = ''
    // Loop over string or turn into Array and use array method (map, join, split)
  for(let i = 0; i < str.length; i++){
    // check to see its a vowel and then capitalize them
    if(str[i] === 'a'|| str[i] === 'e'|| str[i] === 'i'|| str[i] === 'o'|| str[i] === 'u'){
     split += str[i].toUpperCase()
    }else{
    split +=  str[i]
    }
    // return new string 
  }return split
  }