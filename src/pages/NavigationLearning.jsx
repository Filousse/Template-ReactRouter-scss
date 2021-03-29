import React from 'react';
import Navigation from '../components/Navigation';

const NavigationLearning = () => {
    return (
        <div className= "pages">
            <Navigation/>
            <h1>Navigation</h1>
            <ol>
                <li>créer dans cmpt => navigation.jsx avec : import /// NavLink /// from 'react-router-dom' </li>
                <li>dans celui-ci faire les link :  ///NavLink exact to = "/" activeClassName="nav-active"///text///NavLink</li>
            </ol>
</div>
    );
};

export default NavigationLearning;