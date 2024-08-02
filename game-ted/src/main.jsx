import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import SignupPage from './components/SignupPage';
import Home from './components/home';
import RecuperaSenha from './components/SenhaRecupera.jsx';
import Login from './components/Login.jsx'
import CadastroJogo from './components/CadastraJogo.jsx';
import Perfil from './components/perfil.jsx';

const router = createBrowserRouter(
  [
    {
      element: <NavBar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/recupera",
          element: <RecuperaSenha/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/cadastrojogo",
          element: <CadastroJogo/>,
        },
        {
          path: "/perfil",
          element: <Perfil/>,
        },
        
      ],
    },
    
    { errorElement: <div>Erro: Página não encontrada</div> },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
