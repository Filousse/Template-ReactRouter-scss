import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to = "/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to = "/router" activeClassName="nav-active">
            "/router"
            </NavLink>
            <NavLink exact to = "/navigation" activeClassName="nav-active">
            "/navigation"
            </NavLink>
            <NavLink exact to = "/sass" activeClassName="nav-active">
            "/sass"
            </NavLink>
        </div>
    );
};

export default Navigation;