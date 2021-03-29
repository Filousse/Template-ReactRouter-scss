import React from 'react';
import Navigation from '../components/Navigation';

const Sass = () => {
    return (
        <div className= "pages">
            <Navigation/>
            <h1>Sass</h1>
            <h3>Astuce pour faire une div class écrire => .maclasse + tabs</h3><br></br>
            <h3>Sass ou scss permets de ranger les stle de chaque pages ou cpmt dans des fichier dispatcher par index.scss et de créer un settings pour les scc globales du site ;°) Cool...</h3>
            <br></br>
            <ol>
                <li>npm install node-sass</li>
                <li>faire le dossier styles</li>
                <li>faire le fichier _settings qui mets le style général sur les tags html du site et des classes globales </li>
                <li>faire index.scss qui sera le dossier (main) pour les fichiers de : styles/components/ nomsfichier.scss</li>
                <li>Connecter le fichier index.scss à index.js => import './styles/index.scss'</li>
            </ol>
        </div>
    );
};

export default Sass;