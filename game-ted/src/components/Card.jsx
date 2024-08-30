import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css'; // Certifique-se de que o CSS está correto

const Card = ({ game, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    imageLink: '',
    videoLink: ''
  });
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  // Atualiza o estado formData quando game muda
  useEffect(() => {
    if (game) {
      setFormData({ ...game });
    }
  }, [game]);

  const handleEdit = () => setIsEditing(true);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    try {
      if (!game?.id) return; // Verifica se o ID do jogo está disponível
      await axios.put(`/games/${game.id}`, formData);
      onUpdate();
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar o jogo', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Tem certeza de que deseja excluir este jogo?')) {
      try {
        if (!game?.id) return; // Verifica se o ID do jogo está disponível
        await axios.delete(`/games/${game.id}`);
        onDelete();
      } catch (error) {
        console.error('Erro ao excluir o jogo', error);
      }
    }
  };

  if (!game) return <div className="game-card">Nenhum jogo disponível.</div>;

  return (
    <div className="game-card">
      <h2>{game.title || 'Título não disponível'}</h2>
      <img src={game.imageLink || 'URL de imagem padrão'} alt={game.title || 'Imagem não disponível'} />
      <p>Gênero: {game.genre || 'Gênero não disponível'}</p>
      <button onClick={() => setIsDetailVisible(!isDetailVisible)}>
        {isDetailVisible ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
      </button>

      {isDetailVisible && (
        <div className="game-details">
          {isEditing ? (
            <div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleFormChange}
                placeholder="Título"
              />
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleFormChange}
                placeholder="Gênero"
              />
              <input
                type="text"
                name="imageLink"
                value={formData.imageLink}
                onChange={handleFormChange}
                placeholder="URL da Imagem"
              />
              <input
                type="text"
                name="videoLink"
                value={formData.videoLink}
                onChange={handleFormChange}
                placeholder="URL do Vídeo"
              />
              <button onClick={handleUpdate}>Salvar</button>
            </div>
          ) : (
            <div>
              <button onClick={handleEdit}>Editar</button>
              <button onClick={handleDelete}>Excluir</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
