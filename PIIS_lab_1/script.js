'use strict';

let numberOfFilms;

do {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
} while (numberOfFilms === null || numberOfFilms.trim() === '' || isNaN(numberOfFilms));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

for (let i = 0; i < 2; i++) {
    let lastMovie, movieRating;
    
    do {
        lastMovie = prompt("Назовите один из последних просмотренных фильмов?", "");
    } while (lastMovie === null || lastMovie.trim() === '' || lastMovie.length > 50);

    do {
        movieRating = prompt("На сколько оцените его (по 10 бальной шкале)?", "");
    } while (movieRating === null || movieRating.trim() === '' || isNaN(movieRating));

    personalMovieDB.movies[lastMovie] = movieRating;
}

console.log(personalMovieDB);
