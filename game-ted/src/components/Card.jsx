// src/components/Card.jsx
import React from 'react';
import './Card.css'; // Certifique-se de que este caminho está correto

export const Card = ({ title, image, genre, type }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-genre">Gênero: {genre}</p>
        <p className="card-type">Tipo: {type}</p>
      </div>
    </div>
  );
};


