export default class UI{

    constructor(){
        this.boxMovies = document.querySelector('#box-movies');
        this.movies = document.querySelector('#movies');
    }

    showLoading(){  
        this.movies.innerHTML = `
        <div id="loading" class="text-center justify-content-center">                
            <div class="spinner-border" role="status"></div>                
            <p class="mt-2">Cargando...</p>
        </div>
        <div id="box-movies" class="card-columns mx-auto col-12 mt-4"></div>`;        
    }

    hideLoading(){
        document.querySelector('#loading').remove();
    }
    
    render(data){    
        this.boxMovies = document.querySelector('#box-movies');
        
        const {  data: {  movies  }  } = data;
        let cardMovies = '';

        movies.forEach( (element) => {
            cardMovies +=`<div class="card shadow-sm bg-white">
                <div class="card-body">
                    <h5 id="title-movie" class="card-title">${element.title}</h5>
                    <figure class="figure">
                        <img id="img-movie" class="figure-img img-fluid" src="${element.large_cover_image}" alt="">                            
                        <figcaption class="figure-caption">Year: <span id="year-movie">${element.year}</span></figcaption>
                    </figure>
                    <p class="font-weight-bold">Rating: <span class="font-weight-light" id="rating-movie">${element.rating}</span> </p>                        
                    <p class="font-weight-bold">Genres: <span class="font-weight-light" id="genre-movie">${element.genres.join(', ')}</span> </p>
                    <p  class="font-weight-bold d-none">Language: <span class="font-weight-light" id="lang-movie">${element.language}</span> </p>
                    <p class="d-none" id="description-movie">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nesciunt, veniam sapiente repellat expedita eveniet facilis debitis </p>
                </div>                    
            </div>`;                        
        });

        this.boxMovies.innerHTML = cardMovies;
    }
}