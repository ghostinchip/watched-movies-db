'use strict'

const numberOfFilms = +prompt("how many movies have you already watched", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastWatchedMovie = prompt("One of the last films you watched", '');
let rate = prompt("How much would you rate it?", '');

personalMovieDB.movies[lastWatchedMovie] = rate;

lastWatchedMovie = prompt("One of the last films you watched", '');
rate = prompt("How much would you rate it?", '');

personalMovieDB.movies[lastWatchedMovie] = rate;

console.log(personalMovieDB);
