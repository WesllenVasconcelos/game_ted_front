import React from 'react';
import ReactDOM from 'react-dom/client'; // Note a importação de 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout.jsx';
import DevLayout from './components/DevLayout.jsx';
import SignupPage from './interface/SignupPage.jsx';
import Home from './interface/Home.jsx';
import RecuperaSenha from './interface/SenhaRecupera.jsx';
import Login from './interface/Login.jsx';
import CadastraJogo from './interface/CadastraJogo.jsx';
import Perfil from './interface/Perfil.jsx';
import DesenvolvedorHome from './interface/DesenvolvedorHome.jsx';
import SalasDeTeste from './interface/SalasDeTeste.jsx';
import Biblioteca from './interface/Biblioteca.jsx';
import MeusJogos from './interface/MeusJogos.jsx';
import EditarJogo from './components/EditarJogo.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/recupera", element: <RecuperaSenha /> },
      { path: "/login", element: <Login /> },
      { path: "/perfil", element: <Perfil /> },
    ],
  },
  {
    element: <DevLayout />,
    children: [
      { path: "/desenvolvedorhome", element: <DesenvolvedorHome /> },
      { path: "/salasdeteste", element: <SalasDeTeste /> },
      { path: "/biblioteca", element: <Biblioteca /> },
      { path: "/meusjogos", element: <MeusJogos /> },
      { path: "/cadastrajogo", element: <CadastraJogo /> },
      { path: "/editarjogo/:id", element: <EditarJogo /> },
    ],
  },
  { path: '*', element: <div>Erro: Página não encontrada</div> },
]);

const root = ReactDOM.createRoot(document.getElementById('root')); // Atualize aqui

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
