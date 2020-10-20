import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="navBar">
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/work">Work</NavLink>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </nav>
    );
}

export default withRouter(NavBar);
