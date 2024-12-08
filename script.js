'use strict';

const personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        let numberOfFilms = +prompt("How many movies have you already watched", '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("How many movies have you already watched", '');
        }

        this.count = numberOfFilms;
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {

            let lastWatchedMovie = prompt("One of the last films you watched", '');
            let rate = prompt("How much would you rate it?", '');
            
            if (lastWatchedMovie === null || rate === null) {
                --i;
                continue;
            }
    
            if (lastWatchedMovie.length === 0 || lastWatchedMovie.length >= 50 || rate.length === 0) {
                --i;
                continue;
            }
    
            this.movies[lastWatchedMovie] = rate;
        }
    },
    detectPersonalLevel: function() {
        if (this.count > 1 && this.count <= 10) {
            console.log("Watched quite a few films");
        } else if (this.count > 10 && this.count <= 30) {
            console.log("You are a classic viewer");
        } else if (this.count > 30) {
            console.log("You are a film buff");
        } else {
            console.log("An error occurred");
        }
    },
    toggleVisionMyDB: function() {
        if (this.private === false) {
            this.private = true;
        }
    },
    showMyDB: function() {
        if (this.private === false) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            const answer = prompt(`Your favorite genre number ${i + 1}`);
            if (answer) {
                this.genres.push(answer);
            } else {
                i--;
                continue;
            }
        }
        this.genres.forEach(function (item, i) {
            console.log(`Favorite genre ${i + 1} this: ${item}.`);
        });
    }
};

personalMovieDB.start();
//console.log(personalMovieDB.count);
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
//personalMovieDB.toggleVisionMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
