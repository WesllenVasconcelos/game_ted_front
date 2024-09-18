// src/components/MeusJogos.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MeusJogos.css'; // Adicione os estilos necessários para o botão

const MeusJogos = () => {
  return (
    <div className="meus-jogos-container">
      <h1>Meus Jogos</h1>
      <div className="button-container">
        <Link to="/cadastrojogo">
          <button className="submit-game-button">Submeter Jogo</button>
        </Link>
      </div>
      {/* Outros conteúdos da página */}
    </div>
  );
};

export default MeusJogos;
