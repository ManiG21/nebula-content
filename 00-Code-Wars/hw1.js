function oddOrEven(array) {
    //I have to get the remainder of the sum
   //return string of even or odd
   const initialValue = 0;
 const sum = array.reduce(
   (previousValue, currentValue) => previousValue + currentValue,
   initialValue);
   if(sum % 2 === 0){
     return "even"
   }else {
     return "odd"
   }
 }