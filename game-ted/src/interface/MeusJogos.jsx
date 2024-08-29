// src/pages/MeusJogos.jsx
import React, { useState, useEffect } from 'react';
import './MeusJogos.css';
import Card from '../components/Card'; // Importação sem chaves
import CadastraJogo from './CadastraJogo.jsx';
import { useGameData } from '../hooks/useGameData';

function MeusJogos() {
    const { data } = useGameData();
    const [jogos, setJogos] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        if (data) {
            setJogos(data);
        }
    }, [data]);

    const handleAddJogo = (novoJogo) => {
        setJogos(prevJogos => [...prevJogos, novoJogo]);
        setIsFormOpen(false); // Fechar o formulário após adicionar o jogo
    };

    const toggleForm = () => {
        setIsFormOpen(prev => !prev);
    };

    return (
        <div className="container">
            <h1>Meus Jogos</h1>
            <div className="card-grid">
                {jogos.map(game => (
                    <Card
                        key={game.id}
                        title={game.title}
                        image={game.imageLink}
                        genre={game.gameGenre}
                        type={game.gameType}
                    />
                ))}
            </div>
            <button className="submit-game-button" onClick={toggleForm}>
                Adicionar Jogo
            </button>
            {isFormOpen && <CadastraJogo onAddJogo={handleAddJogo} />}
        </div>
    );
}

export default MeusJogos;
