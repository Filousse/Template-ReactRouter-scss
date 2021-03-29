import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
                 <h1>Hello React Dom Router NAv Sass</h1>
                 <p>Ce projet est un template ayant de basse : <br></br></p>
                <ul>
                        <li>Router</li>
                        <li>Navigation</li>
                        <li>Sass</li>
                   
                </ul>
             
        </div>
    );
};

export default Home;