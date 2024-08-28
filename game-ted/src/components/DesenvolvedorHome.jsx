import React from 'react';
import { Link } from 'react-router-dom';
import './DesenvolvedorHome.css'; // Adicione o CSS para estilizar a página

const DesenvolvedorHome = () => {
  return (
    <div className="developer-home">
      <header className="hero-section">
        <h1>Transforme sua experiência de aprendizado!</h1>
        <p>Divirta-se enquanto aprende!</p>
      </header>

      <section className="content-section">
        <h2>Utilize jogos como uma ferramenta de apoio à aprendizagem</h2>
        <p>
          Explore o vasto potencial dos jogos educacionais. Com nosso catálogo de jogos, você pode se divertir enquanto cria turmas, facilitando a interação com estudantes e amigos. 
          Além disso, participe da emocionante jornada de desenvolver jogos educacionais, contribuindo para um impacto positivo e profundo na vida de estudantes, abrindo portas para novas oportunidades de aprendizado.
        </p>
      </section>
    </div>
  );
};

export default DesenvolvedorHome;
