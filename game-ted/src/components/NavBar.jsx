import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './NavBar.css'; // Adicione estilos para a NavBar

const NavBar = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to="/"><img src="https://github.com/WesllenVasconcelos/game_ted_front/blob/main/game-ted/src/assets/logo.png?raw=true" alt="" /></Link>
        </div>
        <nav className="nav">
          <Link to="/Glboard">GlBoard</Link>
          <Link to="/Thinktest">ThinkTest</Link>
          <input
            type="text"
            placeholder="Procure por Jogos ou Conteúdos Didáticos"
            onChange={(event) => console.log(event.target.value)}
          />
          <div className="auth">
            <Link to="/signup">Cadastrar</Link>
            <Link to="/login">Entrar</Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default NavBar;
