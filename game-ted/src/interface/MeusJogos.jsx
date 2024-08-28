import React, { useState } from 'react';
import './MeusJogos.css'; // Certifique-se de que este caminho está correto
import { Card } from '../components/Card'; // Supondo que você tenha um componente Card
//import { useFoodData } from './hooks/useFoodData'; // Presumido para obter dados dos jogos

function MeusJogos() {
  const { data } = useFoodData();
  const [jogos, setJogos] = useState([]);

  return (
    <div>
      <h1>Meus Jogos</h1>
      <div className="card-grid">
        {data?.map(gameData => (
          <Card
            key={gameData.id} // Certifique-se de que cada Card tem uma chave única
            title={gameData.title}
            image={gameData.image}
          />
        ))}
      </div>
    </div>
  );
}

export default MeusJogos;

