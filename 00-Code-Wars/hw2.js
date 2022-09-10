// Write a function that takes an array of strings as an argument and returns a sorted array containing 
// the same strings, ordered from shortest to longest.

function sortByLength(array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((pre, curr) => pre.length - curr.length)

}

//   Write a function named sumDigits which takes a number as input and
//    returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
    // Sum of each index of a number in absolute value
    // .toString to turn the numbers
    //parseInt to turn it back to a number
    const num = Math.abs(number).toString()
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i])
    }
    return sum
    // *Additional solution*return Math.abs(number).toString().split('').reduce((total, current)=> total + parseInt(current),0)
}

    //   write a function that adds the username property to each object in the input array:
//     The value of the username property is composed by concatenating:
// firstName in lower -case;
// first letter of the lastName in lower -case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year.
//  Please make sure that your function delivers the correct birth year irrespective of 
// when it will be executed, for example it should also work correctly for a meetup organised in 10 - years - time. 
// The example above assumes that the function is run in year 2020.

function addUsername(list) {
    // thank you for checking out the Coding Meetup kata :)
      //   forEach
      //   concat
      // new variable
    for (let i =0; i< list.length; i++){
      let person = list[i]
    let year = new Date().getFullYear()
      let newYear = year - person.age
      person.username = `${person.firstName}`.toLowerCase() + `${person.lastName[0]}`.toLowerCase() + newYear.toString()
    }
    return list
  }
  

  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`)
  // //Search by Movie title
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieTitle}`)
  // // // Trending movies
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`)
  // // // All possible genres
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
  // // // Find videos/trailers by movie id
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
<iframe
        className='movie-trailer'
        width="640" height="360"
        src={`https://www.youtube.com/embed/${movieTrailerId}?enablejsapi=1`}
        frameBorder="0"
        allowFullScreen
></iframe>