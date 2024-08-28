import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout.jsx'; // Layout com NavBar padrão
import DevLayout from './components/DevLayout.jsx'; // Layout com DevNavBar
import SignupPage from './components/SignupPage.jsx';
import Home from './components/Home.jsx';
import RecuperaSenha from './components/SenhaRecupera.jsx';
import Login from './components/Login.jsx';
import CadastroJogo from './components/CadastraJogo.jsx';
import Perfil from './components/Perfil.jsx';
import DesenvolvedorHome from './components/DesenvolvedorHome.jsx';
import SalasDeTeste from './components/SalasDeTeste.jsx';
import Biblioteca from './components/Biblioteca.jsx';
import MeusJogos from './components/MeusJogos.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />, // Usa NavBar padrão
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/recupera", element: <RecuperaSenha /> },
      { path: "/login", element: <Login /> },
      { path: "/perfil", element: <Perfil /> },
    ],
  },
  {
    element: <DevLayout />, // Usa DevNavBar
    children: [
      { path: "/desenvolvedorhome", element: <DesenvolvedorHome /> },
      { path: "/salasdeteste", element: <SalasDeTeste /> },
      { path: "/biblioteca", element: <Biblioteca /> },
      { path: "/meusjogos", element: <MeusJogos /> },
      { path: "/cadastrojogo", element: <CadastroJogo /> },
    ],
  },
  { errorElement: <div>Erro: Página não encontrada</div> },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
