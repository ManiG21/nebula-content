// write a function that removes all numbers from a string
// Loop through the string to look for numbers
// Remove the numbers from string

function noNum(str){
    let output = ' '
    for( let i = 0; i < str.length; i++){
        if(isNaN(str[i]) === false)
        output += str
    }
    return output
}