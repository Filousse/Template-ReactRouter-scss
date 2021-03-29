import React from 'react';
import Navigation from '../components/Navigation';

const Router = () => {
    return (
        <div className= "pages">
            <Navigation/>
            <h1>Router</h1>
            <ol>
                <li>installer : npm install --save react-router-dom et instal react-dom : npm install --save react-router</li>
                <li>import /// BrowserRouter, Switch, Route /// from "react-router-dom" => dans le dossier parents qui gérer les routes (bien souvent App.js</li>
                <li>emcapsuler du parents à l'enfant : BrowserRouter => Switch => Route path="/router" component=///Router/// exact</li>
                <li>créer le dossier pages et y mettre les pages avec : import Navigation from '../components/Navigation' et ///Navigation/// au début du cmpt</li>
                <li> tester avec les url ;) </li>
    </ol>
       </div>
    );
};

export default Router;