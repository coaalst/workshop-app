import React from 'react';
import 'materialize-css';

import MovieFetcherService from '../../service/MovieService'

class DetailsGrid extends React.Component {

    constructor(props) {
        super();
        this.state = {
            id: props.id,
            movie: []
        };
    }

    async componentDidMount() {
        try {
            console.log(this.state.id)
            const movieInfo = await MovieFetcherService.fetchMovieInfo(this.state.id);
            this.setState({ movie: movieInfo })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    render() {
        const movieGenre = Array.from(this.state.movie.genres)
        const movieGenreGrid = movieGenre.map((genre, index) => (
            <a class="waves-effect waves-light btn">{genre}</a>
        ))
        return (
            <div class="row">
                <div class="col s6">
                    <img src={this.state.movie.image.original}/>  
                </div>
                <div class="col s6">
                    <div class="col s12">
                        {this.state.movie.name}
                    </div>
                    <div class="col s12">
                        {movieGenreGrid}
                    </div>
                </div>
               
            </div>
        );
    }
}

export default DetailsGrid;
