import React from 'react';
import 'materialize-css';
import { useParams } from "react-router-dom";

import Header from '../shared/Header'
import DetailsGrid from '../details/DetailsGrid'

function MovieDetailsPage() {
    const params = useParams();
    console.log(params.id)
    return (
        <div>
            <Header title="BIT show" />
            <DetailsGrid id={params.id} />
        </div>
    );
}

export default MovieDetailsPage;
