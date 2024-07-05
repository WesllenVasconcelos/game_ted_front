// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <header className="header">
      <div className="logo">
      <Link to="/">GAMETED</Link>
        </div>
      <nav className="nav">
        <a href="#">GlBoard</a>
        <a href="#">ThinkTest</a>
        <input
          type="text"
          placeholder="Procure por Jogos ou Conteúdos Didáticos"
          onChange={handleSearch}
        />
        <div className="auth">
          <Link to="/signup">Cadastrar</Link>
          <a href="#">Entrar</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
