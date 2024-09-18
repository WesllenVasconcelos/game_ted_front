import React from 'react';
import { Outlet } from 'react-router-dom';
import DevNavBar from './DevNavBar.jsx'; // Supondo que você tenha um componente de DevNavBar

const DevLayout = () => (
  <div>
    <DevNavBar />
    <main>
      <Outlet />
    </main>
  </div>
);

export default DevLayout;