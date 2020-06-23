import api from '../shared/api'
import Movie from '../models/Movie'

class MovieFetcherService {

    fetchMovies() {
        return api.get('/shows').then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return responseObj.map(movie => new Movie(movie)).splice(0, 50);
        })
    }

    fetchMovieInfo(id) {
        return api.get('/shows/{id}').then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return new Movie(responseObj);
        })
    }
}

export default MovieFetcherService = new MovieFetcherService();