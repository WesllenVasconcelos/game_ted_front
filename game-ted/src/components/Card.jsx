// src/components/Card.jsx
import React from 'react';
import './Card.css'; // Verifique se o caminho do CSS está correto

const Card = ({ title, image, genre, type }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-genre">{genre}</p>
            <p className="card-type">{type}</p>
        </div>
    );
};

export default Card; // Exportação padrão
