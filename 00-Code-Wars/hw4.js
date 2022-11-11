// Complete the square sum function so that it squares each number 
// passed into it and then sums the results together.

function squareSum(numbers){
    const sqr = numbers.map(x => x * x).reduce( (prev, curr) => prev + curr, 0);
      return sqr
    }

    