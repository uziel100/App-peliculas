import Movie from './Movie'
import UI from './UI'
import Store from './Store'

import '../css/index.css'

const movie = new Movie();
const ui = new UI();
const store = new Store();

async function fetchMovies() {    
    ui.showLoading();
    const data = await movie.getMovieByGenre();         
    await ui.render(data);
    ui.hideLoading();
}

document.addEventListener('DOMContentLoaded', fetchMovies);
window.onload =  store.checkMode();


document.querySelector('#btn-search').addEventListener('click', (e) => {
    e.preventDefault();

    const genre = document.querySelector('#movie-search').value;
    movie.changeGenre(genre);

    fetchMovies();
    document.querySelector('form').reset();
})

document.querySelector('#switch').addEventListener('click', store.changeSwitch );

