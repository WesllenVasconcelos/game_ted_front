import React, { useState } from 'react';
import './CadastroJogo.css'; // Adicione estilos para o formulário
import videoIcon from '../assets/video-icon.png';
import photoIcon from '../assets/photo-icon.png';

const CadastroJogo = () => {
  const [title, setTitle] = useState('');
  const [accessLinks, setAccessLinks] = useState('');
  const [platform, setPlatform] = useState('');
  const [thinkTest, setThinkTest] = useState('');
  const [glboard, setGlboard] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAccessLinksChange = (e) => setAccessLinks(e.target.value);
  const handlePlatformChange = (e) => setPlatform(e.target.value);
  const handleThinkTestChange = (e) => setThinkTest(e.target.value);
  const handleGlboardChange = (e) => setGlboard(e.target.value);

  return (
    <div className="form-container">
      <h1 className="form-title">Formulário de Submissão</h1>
      <div className="form-content">
        <div className="form-left">
          <label>
            <span>Título:</span>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          <label>
            <span>URL do Projeto:</span>
            <input
              type="text"
              name="project-url"
              value={accessLinks}
              onChange={handleAccessLinksChange}
            />
          </label>
          <label>
            <span>Tipo de Jogo:</span>
            <input
              type="text"
              name="game-type"
            // Value and onChange handlers as needed
            />
          </label>
          <label>
            <span>Faixa Etária:</span>
            <input
              type="text"
              name="age-rating"
            // Value and onChange handlers as needed
            />
          </label>
          <label>
            <span>Classificação de Conteúdo:</span>
            <input
              type="text"
              name="content-rating"
            // Value and onChange handlers as needed
            />
          </label>
          <label>
            <span>Gênero do Jogo:</span>
            <input
              type="text"
              name="game-genre"
            // Value and onChange handlers as needed
            />
          </label>
          <label>
            <span>Glboard:</span>
            <div className="glboard-group">
              <label>
                <input
                  type="radio"
                  name="glboard"
                  value="yes"
                  checked={glboard === 'yes'}
                  onChange={handleGlboardChange}
                />
                <span></span>
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="glboard"
                  value="no"
                  checked={glboard === 'no'}
                  onChange={handleGlboardChange}
                />
                <span></span>
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
              onChange={handleAccessLinksChange}
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
              <input type="file" multiple className="upload-input" />


            </div>
            <div className='file-actions-container'>
              <div className="file-actions">
                <button type="button" className="upload-button">Enviar</button>
                <label for="fileInput" className="upload-button">
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
              onChange={handlePlatformChange}
            />
          </label>
          <label>
            <span>ThinkTest:</span>
            <div className="thinktest-group">
              <label>
                <input
                  type="radio"
                  name="thinktest"
                  value="yes"
                  checked={thinkTest === 'yes'}
                  onChange={handleThinkTestChange}
                />
                <span></span>
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="thinktest"
                  value="no"
                  checked={thinkTest === 'no'}
                  onChange={handleThinkTestChange}
                />
                <span></span>
                Não
              </label>
            </div>
          </label>
        </div>
      </div>
      <div className="sub-actions">
        <button type="button" className="cancel-button">Cancelar</button>
        <button type="submit" className="submit-button">Submeter</button>
      </div>
    </div>
  );
};

export default CadastroJogo;
