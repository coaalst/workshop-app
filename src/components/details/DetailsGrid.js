import React, { useState, useEffect } from 'react';
import 'materialize-css';

import MovieFetcherService from '../../service/MovieService'

function DetailsGrid(props) {
    const [movie, setMovie] = useState();

    useEffect(async () => {
        const movieInfo = await MovieFetcherService.fetchMovieInfo(props.id);
        setMovie(movieInfo);
      });

    return (
        <div class="row">
            <div class="col s6">
                <img src={movie.image.original} />
            </div>
            <div class="col s6">
                <div class="col s12">
                    {movie.name}
                </div>
                <div class="col s12">
                    {parseGenre(movie)}
                </div>
            </div>

        </div>
    );
}

function parseGenre(movie){
    const movieGenre = Array.from(movie.genres);
    const movieGenreGrid = movieGenre.map((genre) => (
        <a class="waves-effect waves-light btn">{genre}</a>
    ));
    return movieGenreGrid;
}

export default DetailsGrid;
