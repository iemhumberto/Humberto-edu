import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export const ButtonBackToHome = () => (
    <Link className="button is-danger b-not-found" to="/">Ir a página principal</Link>
)