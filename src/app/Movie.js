export default class Movie{

    constructor(){        
        this.genre = 'Action';
    }

    async getMovieByGenre(){        
        const URI = `https://yts.mx/api/v2/list_movies.json&genre=${this.genre}`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }    
 
    changeGenre(genre){
        this.genre = genre;
    }

}