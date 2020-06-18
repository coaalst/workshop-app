import React from 'react';
import { Link } from 'react-router-dom'
import 'materialize-css';

function Header(props) {
    return (
        <header>
            <nav className="blue darken-2">
                <div class="container">
                    <div className="nav-wrapper">
                        <Link to="/" class="brand-logo">{props.title}</Link>
                        <ul id="nav-mobile" class="right">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;