// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  
  const result = movies.map( object => object.director)
   
  //console.log("EXERCICE 1 ->", result);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  
  const filmsOf = movies.filter( movie => (movie.director == director)); 

  //console.log("EXERCICE 2 ->", filmsOf)
  return filmsOf;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies,director) {
  
  const filmsOf = getMoviesFromDirector(movies,director);
  const noteTotal = filmsOf.reduce ( ( acc , movie) => {
    return acc += movie.score;
  },0)

  let scoreDir = Math.round(100*noteTotal/filmsOf.length)/100;
 
  console.log("EXERCICE 3 ->", scoreDir)
  return scoreDir;
}

//Exercice 3, modificted for working with array (exercie 6)

function moviesAverage(moviesList) {
  
  const noteTotal = moviesList.reduce ( ( acc , movie) => {
    return acc += movie.score;
  },0)

  let scoreDir = Math.round(100*noteTotal/moviesList.length)/100;
 
  console.log("EXERCICE 3 ->", scoreDir)
  return scoreDir;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  
  const titles = movies.map(movie => movie.title);
  titles.sort((titleOne,titleTwo) =>(titleOne < titleTwo) ? -1 : 1 );
  const twentyMovies = titles.slice(0,20);

  //console.log("EXERCICE 4 ->", orderTitle, "20 peliculas:", twentyMovies);
  return twentyMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
 
  const movieYear = movies.map(movie => movie);
  movieYear.sort((movieOne, movieTwo) =>{

    if(movieOne.year < movieTwo.year){
      return -1;
    }else if(movieOne.year > movieTwo.year){
      return 1;
    } else{
      return (movieOne.title < movieTwo.title ? -1 : 1);
    }
  } )

  //console.log( "EXERCICE 5 ->", movieYear);
  return movieYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
