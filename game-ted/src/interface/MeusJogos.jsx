import React, { useState } from 'react';
import CadastraJogo from './CadastraJogo';
import MeusJogos from './MeusJogos';

const GerenciadorDeJogos = () => {
  const [jogos, setJogos] = useState([]);

  const handleAddJogo = (novoJogo) => {
    setJogos([...jogos, novoJogo]);
  };

  return (
    <div>
      <CadastraJogo onAddJogo={handleAddJogo} />
      <MeusJogos jogos={jogos} setJogos={setJogos} />
    </div>
  );
};

export default GerenciadorDeJogos;

