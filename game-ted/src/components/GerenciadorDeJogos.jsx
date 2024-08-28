import React, { useState } from 'react';
import CadastraJogo from '../interface/CadastraJogo';
import MeusJogos from '../interface/MeusJogos';

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
