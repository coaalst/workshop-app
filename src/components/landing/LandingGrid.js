import React from 'react';
import 'materialize-css';

import MovieCard from './MovieCard'
import MovieFetcherService from '../../service/MovieService'
import { Link } from 'react-router-dom'

class LandingGrid extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: []
           };
      }

    async componentDidMount() {
        try {
            const movieList = await MovieFetcherService.fetchMovies()
            this.setState({movies: movieList})
        } catch (error) {
            throw new Error(error.message)
        }
    }
    
    render(){
        const returnedArray = Array.from(this.state.movies)
        const movieGrid = returnedArray.map((movie, index) => (
            <Link to={`/movie/${movie.id}`} key={index}>
                <MovieCard show={movie} />
            </Link>
        ))
        return (
            <body>
                <div class="container ">
                    <div className="row">{movieGrid}</div>
                </div>
            </body>
        );
    }
    
}

export default LandingGrid;
        