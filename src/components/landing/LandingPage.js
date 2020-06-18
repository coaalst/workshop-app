import React from 'react';
import 'materialize-css';

import Header from '../shared/Header'
import LandingGrid from './LandingGrid'

function LandingPage() {
    return (
       <div>
            <Header title="BIT show"/>
            <LandingGrid/>
       </div>
    );
}

export default LandingPage;