// src/gameService.js
import { createGame, fetchGames } from './api';

// Função para criar um novo jogo
export const addGame = async (gameData) => {
    try {
        const response = await createGame(gameData);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('Erro ao criar jogo:', error);
        throw error;
    }
};

// Função para obter a lista de jogos
export const getGames = async () => {
    try {
        const response = await fetchGames();
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        throw error;
    }
};

