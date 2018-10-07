import React from 'react';
import {ButtonBackToHome} from '../../Components/ButtonBackToHome';
import '../../App.css';

const NoFdImage = 'https://res.cloudinary.com/cristiansam/image/upload/v1538925162/No-encontrado-Hu' +
        'mberto-Munoz-Ordonez.svg';

export const NotFound = () => (
    <div className="components-not-found">
        <img src={NoFdImage} alt="No encontramos lo que buscabas"/>
        <h2>Oops, no existe el recurso.</h2>
        <ButtonBackToHome/>
    </div>
)