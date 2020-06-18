import React from 'react';
import 'materialize-css';

function MovieCard(props) {
    return (
        <div class="col s6 m4">
          <div class="card hoverable">
            <div class="card-image">
              <img src={props.show.image.medium}/>
              <span class="card-title"></span>
              <a class="btn-floating halfway-fab waves-effect waves-light red">{props.show.rating}</a>
            </div>
            <div class="card-content">
              <h6>{props.show.name}</h6>
            </div>
          </div>
      </div>
    );
}

export default MovieCard;