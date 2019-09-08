import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const Navigation = props => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Countries.js</Link>
                </div>
                <div className="navbar-collapse navi-bar mr-auto">
                    <ul className="nav navbar-nav">
                        <li><Link className="nav-link active" to="/countries">Countries</Link></li>
                        <li><Link className="nav-link" to="/continents">Continents</Link></li>
                        <li><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Navigation;