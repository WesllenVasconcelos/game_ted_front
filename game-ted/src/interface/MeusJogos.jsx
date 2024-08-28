import React, { useState, useEffect } from 'react';
import './MeusJogos.css'; // Certifique-se de que este caminho está correto
import { Card } from '../components/Card'; // Certifique-se de que este caminho está correto
import { useGameData } from '../hooks/useGameData'; // Presumido para obter dados dos jogos
//import { CreateModal } from '../components/CreateModal'; // Importa o componente do modal, ajuste conforme necessário

function MeusJogos() {
  const { data } = useGameData(); // Obtém dados dos jogos
  const [jogos, setJogos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setJogos(data);
    }
  }, [data]);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <div className="container">
      <h1>Meus Jogos</h1>
      <div className="card-grid">
        {jogos.map(gameData => (
          <Card
            key={gameData.id} // Certifique-se de que cada Card tem uma chave única
            title={gameData.title}
            image={gameData.image}
            genre={gameData.genre} // Supondo que 'genre' seja uma propriedade dos dados dos jogos
            type={gameData.type}   // Supondo que 'type' seja uma propriedade dos dados dos jogos
          />
        ))}
      </div>
      <button className="submit-game-button" onClick={handleOpenModal}>
        Adicionar Jogo
      </button>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
    </div>
  );
}

export default MeusJogos;

