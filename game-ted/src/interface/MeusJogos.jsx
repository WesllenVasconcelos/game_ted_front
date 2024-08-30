import React, { useState, useEffect } from 'react';
import './MeusJogos.css';
import Card from '../components/Card'; // Importação sem chaves
import CadastraJogo from './CadastraJogo.jsx';
import { useGameData } from '../hooks/useGameData';
import axios from 'axios';

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
    
    const handleUpdateJogo = (updatedJogo) => {
        setJogos(prevJogos =>
            prevJogos.map(jogo => jogo.id === updatedJogo.id ? updatedJogo : jogo)
        );
    };

    const handleDeleteJogo = (id) => {
        setJogos(prevJogos => prevJogos.filter(jogo => jogo.id !== id));
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
                        game={game}
                        onUpdate={handleUpdateJogo}
                        onDelete={handleDeleteJogo}
                    />
                ))}
            </div>
            <button className="submit-game-button" onClick={toggleForm}>
                {isFormOpen ? 'Fechar Formulário' : 'Adicionar Jogo'}
            </button>
            {isFormOpen && <CadastraJogo onAddJogo={handleAddJogo} />}
        </div>
    );
}

export default MeusJogos;
