'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function start() {
    numberOfFilms = +prompt("How many movies have you already watched", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you already watched", '');
    }
}

function rememberMyFilms() {
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
}

function detectPersonalLevel() {
    if (personalMovieDB.count > 1 && personalMovieDB.count <= 10) {
        console.log("Watched quite a few films");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log("You are a classic viewer");
    } else if (personalMovieDB.count > 30) {
        console.log("You are a film buff");
    } else {
        console.log("An error occurred");
    };
}

function showMyDB(obj) {
    if (obj.private === false) {
        console.log(personalMovieDB);
    };
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const answer = prompt(`Your favorite genre number ${i + 1}`);
        personalMovieDB.genres.push(answer);
    }
}


start();

detectPersonalLevel();

rememberMyFilms();

writeYourGenres();

showMyDB(personalMovieDB);
