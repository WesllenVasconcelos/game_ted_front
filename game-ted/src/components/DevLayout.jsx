import React from 'react';
import { Outlet } from 'react-router-dom';
import DevNavBar from './DevNavBar'; // Barra de navegação do desenvolvedor

const DevLayout = () => {
  return (
    <div>
      <DevNavBar />
      <Outlet /> {/* Renderiza o componente filho da rota */}
    </div>
  );
};

export default DevLayout;
