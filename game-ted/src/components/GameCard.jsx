import React from 'react';
import PropTypes from 'prop-types';
import './GameCard.css'; // Estilos específicos para o card

const GameCard = ({ imageUrl, title, description }) => {
  return (
    <div className="game-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

GameCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GameCard;
