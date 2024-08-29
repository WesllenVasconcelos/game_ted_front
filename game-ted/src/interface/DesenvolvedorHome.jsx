// src/pages/DesenvolvedorHome.jsx
import React from 'react';
import Card from '../components/Card'; // Importação padrão
import './DesenvolvedorHome.css'; // Estilos da página

const gamesList = [
  {
    imageUrl: 'https://thinktedlab.org/wp-content/uploads/2020/12/WhatsApp-Image-2019-08-19-at-21.03.35.jpeg',
    title: 'Gramagica',
    description: 'Descrição curta do jogo 1.' // Esta descrição será ignorada no Card atual
  },
  {
    imageUrl: 'https://thinktedlab.org/wp-content/uploads/2020/12/EcoLogic-Inicio-1536x865.png',
    title: 'EcoLogic',
    description: 'Descrição curta do jogo 2.'
  },
  {
    imageUrl: 'https://thinktedlab.org/wp-content/uploads/2020/12/WhatsApp-Image-2019-08-20-at-13.04.06.jpeg',
    title: 'Filo Game',
    description: 'Descrição curta do jogo 3.'
  },
  // Adicione mais jogos conforme necessário
];

const DesenvolvedorHome = () => {
  return (
    <div className="developer-home">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Transforme sua experiência de aprendizado!</h1>
          <p>Divirta-se enquanto aprende!</p>
          <p>
            Utilize jogos como uma ferramenta de apoio à aprendizagem, explorando o vasto potencial que eles oferecem. Com nosso catálogo de jogos, você pode se divertir enquanto cria turmas, facilitando a interação com estudantes e amigos.
          </p>
          <p>
            Além disso, você pode se envolver na emocionante jornada de desenvolver jogos educacionais, explorando como eles podem ter um impacto profundo e positivo na vida de um estudante, abrindo portas para novas oportunidades de aprendizado.
          </p>
        </div>
        <div className="hero-image">
          <img src='' alt="Hero Image" />
        </div>
      </header>

      <section className="content-section">
        <aside className="filter-section">
          <h3>Filtros</h3>
          <div className="filters-placeholder">
            <p>Espaço reservado para filtros</p>
          </div>
        </aside>

        <main className="games-section">
          <h2>Jogos Educacionais</h2>
          <div className="games-grid">
            {gamesList.map((game, index) => (
              <Card 
                key={index}
                image={game.imageUrl} // Usando a prop 'image' para o Card
                title={game.title} // Usando a prop 'title' para o Card
              />
            ))}
          </div>
        </main>
      </section>

      <footer className="footer-placeholder">
        <p>Espaço reservado para rodapé</p>
      </footer>
    </div>
  );
};

export default DesenvolvedorHome;
