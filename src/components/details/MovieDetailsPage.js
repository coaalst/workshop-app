import React from 'react';
import 'materialize-css';
import {useParams} from "react-router-dom";

import Header from '../shared/Header'
import DetailsGrid from '../details/DetailsGrid'

class MovieDetailsPage extends React.Component{
    render(){
        let { id } = useParams();
        return (
            <div>
                <Header title="BIT show"/>
                <DetailsGrid id={id}/>
           </div>
        );
    }
}

export default MovieDetailsPage;
