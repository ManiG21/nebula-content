// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

let reverseString = function(s) {
    for(let i=0; i<s.length/2; i++){
        let letter = s[s.length-1-i]
        s[s.length-1-i] = s[i] //Change last letter with the first letter
        s[i] = letter // Changing the first letter to be the last letter saved in memory
    }
};
 
// or

let reverseString2 = function(s) {
    for(let i=0; i<s.length/2; i++){
        [s[i],s[s.length-1-i]] = [s[s.length-1-i],s[i]]
    }
};