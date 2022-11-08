// When provided with a String, capitalize all vowels

function swap (str) {
    // input: string
    // output: sting with capital vowels
    // Loop over string or turn into Array and use array method (map, join, split)
    // check to see its a vowel and then capitalize them
    // create variable for new string
    // return new string 
    let split = ''
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'a'|| str[i] === 'e'|| str[i] === 'i'|| str[i] === 'o'|| str[i] === 'u'){
     split += str[i].toUpperCase()
    }else{
    split +=  str[i]
    }
  }return split
  }