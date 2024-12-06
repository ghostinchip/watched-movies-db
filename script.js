'use strict';

const numberOfFilms = +prompt("How many movies have you already watched", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (personalMovieDB.count > 1 && personalMovieDB.count <= 10) {
    alert("Watched quite a few films");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("you are a classic viewer");
} else if (personalMovieDB.count > 30) {
    alert("you are a film buff");
} else {
    alert("an error occurred");
};

for (let i = 0; i < 2; i++) {

    let lastWatchedMovie = prompt("One of the last films you watched", '');
    let rate = prompt("How much would you rate it?", '');
        
    if (lastWatchedMovie === null || rate === null) {
        --i;
        continue;
    };

    if (lastWatchedMovie.length === 0 || lastWatchedMovie.length >= 50 || rate.length === 0) {
        --i;
        continue;
    };

    personalMovieDB.movies[lastWatchedMovie] = rate;
};

console.log(personalMovieDB);
