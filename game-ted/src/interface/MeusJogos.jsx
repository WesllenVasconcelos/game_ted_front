// src/interface/MeusJogos.jsx
import React, { useState, useEffect } from 'react';
import './MeusJogos.css';
import { Card } from '../components/Card';
import { useGameData } from '../hooks/useGameData';
import { CreateModal } from '../components/CreateModal';

function MeusJogos() {
    const { data } = useGameData();
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

    const handleAddGame = (newGame) => {
        setJogos(prevJogos => [...prevJogos, newGame]);
    };

    return (
        <div className="container">
            <h1>Meus Jogos</h1>
            <div className="card-grid">
                {jogos.map(game => (
                    <Card
                        key={game.id}
                        title={game.title}
                        image={game.image}
                        genre={game.genre}
                        type={game.type}
                    />
                ))}
            </div>
            <button className="submit-game-button" onClick={handleOpenModal}>
                Adicionar Jogo
            </button>
            {isModalOpen && <CreateModal closeModal={handleOpenModal} addGame={handleAddGame} />}
        </div>
    );
}

export default MeusJogos;
