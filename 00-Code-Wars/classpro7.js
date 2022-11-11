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

  // You are given an array (which will have a length of at least 3, but could be very large) 
  // containing integers. The array is either entirely comprised of odd integers or entirely comprised 
  // of even integers except for a single integer N. Write a method that takes the array as
  //  an argument and returns this "outlier" N.

  function findOutlier(int){
    let even = []
    let odd = []
  for(let i = 0; i < int.length; i++){
    if(int[i] % 2 === 0){
      even.push(int[i])
    } else if(int[i] % 2 !== 0) {
     odd.push(int[i])
    }
     }if(odd.length < even.length){
       return odd[0]
     } else {
       return even[0]
     }
  }
  