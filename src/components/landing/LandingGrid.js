import React, { useState, useEffect } from 'react';
import { BoxLoading } from 'react-loadingg';
import 'materialize-css';

import MovieCard from './MovieCard'
import MovieFetcherService from '../../service/MovieService'
import { Link } from 'react-router-dom'

function LandingGrid() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async ()=>{
            const movieList = await MovieFetcherService.fetchMovies()
            setMovies(movieList)
        })()
    },[]);

    const returnedArray = Array.from(movies)
    const movieGrid = returnedArray.map((movie, index) => (
        <Link to={`/movie/${movie.id}`} key={index}>
            <MovieCard show={movie} />
        </Link>
    ))
    if(movies === []) return (<BoxLoading/>);
    return (
        <body>
            <div class="container ">
                <div className="row">{movieGrid}</div>
            </div>
        </body>
    );
}

export default LandingGrid;
