import api from '../shared/api'
import Movie from '../models/Movie'

class MovieFetcherService {

    fetchMovies() {
        return api.get().then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return responseObj.map(movie => new Movie(movie)).splice(0, 50);
        })
    }

    fetchMovieInfo(id) {
        const requestModifier = '/' + id;
        return api.get(requestModifier).then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return new Movie(responseObj);
        })
    }
}

export default MovieFetcherService = new MovieFetcherService();