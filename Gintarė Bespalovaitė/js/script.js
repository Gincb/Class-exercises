$(function() {
    $("#filter").click(function() {
        showTopRated(movies);
    });

});

// function getTopRated(movies) {
//     topRatedMovie = movies[0];

//     for (let i = 0; i < movies.length; i++) {
//         if (topRatedMovie > movies[i].popularity) {
//             topRatedMovie = movies[i];
//         }
//     }
//     return topRatedMovie;
// }

// function showTopRated(topRatedMovie) {
//     let x = "";

//     x = `<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${topRatedMovie.poster_path}">
//                 <h3>${topRatedMovie.title}</h3>
//                 <p>${topRatedMovie.release_date}</p>
//                 <p>${topRatedMovie.overview}</p>`;
//     document.getElementById("top").innerHTML = x;
// }

function showTopRated(mostPopularMovie) {

    let h = '';

    let movie = mostPopularMovie[0];
    let x = "";

    x = `<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}">
                <h3>${movie.title}</h3>
                <p>${movie.release_date}</p>
                <p>${movie.overview}</p>`;

    document.getElementById("top").innerHTML = x;
}

//

$("#filter").click(function() {
    let filterYear = $("#yearSelect").val();
    let filteredMovies = movies;
    if (filterYear == "") {

    } else {
        filteredMovies = filteredByYear(filteredMovies, filterYear);
    }

    displayMovies(filteredMovies);
});

function filteredByYear(filteredMovies, filterYear) {
    filteredMovies = filteredMovies.filter(function(films) {
        let films_date = new Date(films.release_date);
        return films_date.getFullYear().toString() == filterYear;
    });
    return filteredMovies;
}

function displayMovies(filteredMovies) {
    let h = "";
    for (let i = 0; i < filteredMovies.length; i++) {
        h = h + `
        <div style="clear:both">
        <img class="float-left mb-3"  height=200px src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${filteredMovies[i].poster_path}">
        <h5>${filteredMovies[i].title}</h5>
        <p>${filteredMovies[i].overview}</p>
        <div>`;
    }
    $("#result").html(h);
}