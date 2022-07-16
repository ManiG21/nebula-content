function arraySum(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return arr.pop() + arraySum(arr)
        //    arr.pop takes off the last element  until it gets to the first elemen in the array 
    }
}
console.log(arraySum([1, 2, 3, 4, 5,]));


function isNumEven(number) {
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    } else {
        // number = number - 2 *Below s
        return isNumEven(number - 2)
    }
}
// console.log(isEven(-1));
console.log(isNumEven(9));

function numRange(start, end) {
    if (end - start === 2) {
        return start + 1
    } else {
        let list = numRange(start, end - 1)
        list.push(end - 1)
        return list;
    }
}
console.log(numRange(3, 12));