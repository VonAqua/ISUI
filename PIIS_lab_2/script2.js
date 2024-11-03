'use strict';

const personalMovieDB = {
    privat: false, 
    movies: {
        "The Matrix": 9.5,
        "Inception": 8.8,
        "Interstellar": 9.0
    }
};

function showMovies() {
    const tableContainer = document.getElementById('movie-table');

    if (!personalMovieDB.privat) {
        let tableHTML = '<table border="1"><tr><th>Название фильма</th><th>Оценка</th></tr>';

        for (let movie in personalMovieDB.movies) {
            tableHTML += `<tr><td>${movie}</td><td>${personalMovieDB.movies[movie]}</td></tr>`;
        }

        tableHTML += '</table>';

        tableContainer.innerHTML = tableHTML;
    } else {

        console.log('Доступ к базе данных закрыт');
    }
}

showMovies();
