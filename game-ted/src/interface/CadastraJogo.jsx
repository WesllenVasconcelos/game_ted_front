import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastraJogo.css';
import videoIcon from '../assets/video-icon.png';
import photoIcon from '../assets/photo-icon.png';

const CadastraJogo = ({ onAddJogo }) => {
  const [title, setTitle] = useState('');
  const [accessLinks, setAccessLinks] = useState('');
  const [platform, setPlatform] = useState('');
  const [thinkTest, setThinkTest] = useState('');
  const [glboard, setGlboard] = useState('');
  const [gameType, setGameType] = useState('');
  const [ageRating, setAgeRating] = useState('');
  const [contentRating, setContentRating] = useState('');
  const [gameGenre, setGameGenre] = useState('');
  const [image, setImage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onAddJogo !== 'function') {
      console.error('onAddJogo prop is not a function');
      return;
    }
    const novoJogo = {
      title,
      accessLinks,
      platform,
      thinkTest,
      glboard,
      gameType,
      ageRating,
      contentRating,
      gameGenre,
      image,
    };
    onAddJogo(novoJogo);

    // Exibe a mensagem de sucesso e redireciona após 2 segundos
    setSuccessMessage('Jogo criado com sucesso!');
    setTimeout(() => {
      setSuccessMessage('');  // Limpa a mensagem de sucesso
      // Limpa os campos do formulário
      setTitle('');
      setAccessLinks('');
      setPlatform('');
      setThinkTest('');
      setGlboard('');
      setGameType('');
      setAgeRating('');
      setContentRating('');
      setGameGenre('');
      setImage('');
      navigate('/meusjogos');
    }, 2000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Converte a imagem em base64 para exibição
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Formulário de Submissão</h1>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="form-left">
          <label>
            <span>Título:</span>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            <span>URL do Projeto:</span>
            <input
              type="text"
              name="project-url"
              value={accessLinks}
              onChange={(e) => setAccessLinks(e.target.value)}
            />
          </label>
          <label>
            <span>Tipo de Jogo:</span>
            <input
              type="text"
              name="game-type"
              value={gameType}
              onChange={(e) => setGameType(e.target.value)}
            />
          </label>
          <label>
            <span>Faixa Etária:</span>
            <input
              type="text"
              name="age-rating"
              value={ageRating}
              onChange={(e) => setAgeRating(e.target.value)}
            />
          </label>
          <label>
            <span>Classificação de Conteúdo:</span>
            <input
              type="text"
              name="content-rating"
              value={contentRating}
              onChange={(e) => setContentRating(e.target.value)}
            />
          </label>
          <label>
            <span>Gênero do Jogo:</span>
            <input
              type="text"
              name="game-genre"
              value={gameGenre}
              onChange={(e) => setGameGenre(e.target.value)}
            />
          </label>
          <label>
            <span>Glboard:</span>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="glboard"
                  value="yes"
                  checked={glboard === 'yes'}
                  onChange={(e) => setGlboard(e.target.value)}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="glboard"
                  value="no"
                  checked={glboard === 'no'}
                  onChange={(e) => setGlboard(e.target.value)}
                />
                Não
              </label>
            </div>
          </label>
        </div>
        <div className="form-right">
          <label>
            <span>Anexo de Links de Acesso ao Jogo:</span>
            <input
              type="text"
              name="access-links"
              value={accessLinks}
              onChange={(e) => setAccessLinks(e.target.value)}
            />
          </label>
          <label className="upload-section">
            <div className="upload-label">
              <img src={videoIcon} alt="Video" className="upload-icon" />
              <input type="file" className="upload-input" />
            </div>
            <div className="file-actions-container">
              <div className="file-actions">
                <button type="button" className="upload-button">Enviar</button>
                <label className="upload-button" htmlFor="videoInput">
                  Biblioteca de Mídia
                </label>
                <input type="file" id="videoInput" className="file-input" accept="video/*" />
              </div>
            </div>
          </label>
          <label className="upload-section">
            <div className="upload-label">
              <img src={photoIcon} alt="Photos" className="upload-icon" />
              <input type="file" multiple className="upload-input" onChange={handleImageUpload} />
            </div>
            <div className='file-actions-container'>
              <div className="file-actions">
                <button type="button" className="upload-button">Enviar</button>
                <label htmlFor="fileInput" className="upload-button">
                  Biblioteca de Mídia
                </label>
                <input type="file" id="fileInput" accept="image/*" className="upload-input" />
              </div>
            </div>
          </label>
          <label>
            <span>Plataforma:</span>
            <input
              type="text"
              name="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            />
          </label>
          <label>
            <span>ThinkTest:</span>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="thinktest"
                  value="yes"
                  checked={thinkTest === 'yes'}
                  onChange={(e) => setThinkTest(e.target.value)}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="thinktest"
                  value="no"
                  checked={thinkTest === 'no'}
                  onChange={(e) => setThinkTest(e.target.value)}
                />
                Não
              </label>
            </div>
          </label>
        </div>
        <div className="sub-actions">
          <button type="button" className="cancel-button" onClick={() => navigate('/meusjogos')}>Cancelar</button>
          <button type="submit" className="submit-button">Submeter</button>
        </div>
      </form>
    </div>
  );
};

export default CadastraJogo;


