import React from 'react';
import "./home.css"
const Home = () => {
  return (
    <div>
      <section className="topo-do-site">
        <div className="interface">
          <div className="flex">
            <div className="txt-topo-site">
              <h1>Divirta-se enquanto aprende <span>.</span></h1>
              <p> Utilize jogos como uma ferramenta de apoio à aprendizagem, explorando o vasto potencial que eles oferecem. Com nosso catálogo de jogos, você pode se divertir enquanto cria turmas, facilitando a interação com estudantes e amigos. 
                Além disso, você pode se envolver na emocionante jornada de desenvolver jogos educacionais, explorando como eles podem ter um impacto profundo e positivo na vida de um estudante, abrindo portas para novas oportunidades de aprendizado.
              </p>
              <div className="bt-contato">
                <a href="#">
                  <button>Cadastre-se Agora!</button>
                </a>
              </div>
            </div>
            <div className="img-topo-site">
              <img src="https://github.com/WesllenVasconcelos/game_ted_front/blob/main/game-ted/src/assets/BG1_tela_inicial.png?raw=true" alt="#" />
            </div>
          </div>
        </div>
      </section>

      <section className="especialidades">
        <div className="interface">
          <h2 className="titulo">NOSSOS USUÁRIOS.</h2>
          <div className="flex">
            <div className="especialidades-box">
              <img src="https://github.com/WesllenVasconcelos/game_ted_front/blob/main/game-ted/src/assets/est.png?raw=true" alt="" />
              <h3>Estudante</h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. </p>
            </div>  
            <div className="especialidades-box">
              <img src="https://github.com/WesllenVasconcelos/game_ted_front/blob/main/game-ted/src/assets/prof.png?raw=true" alt="" />
              <h3>Professor</h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. </p>
            </div>  
            <div className="especialidades-box">
              <img src="https://github.com/WesllenVasconcelos/game_ted_front/blob/main/game-ted/src/assets/dev.png?raw=true" alt="" />
              <h3>Desenvolvedor</h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. </p>
            </div>  
          </div>  
        </div>  
      </section> 

      <section className="sobre">
        <div className="interface">
          <div className="flex">
            <div className="img-sobre">
              <img src="https://github.com/WesllenVasconcelos/game_ted_front/blob/main/game-ted/src/assets/BG2_tela_inicial.png?raw=true" alt="" />
            </div>
            <div className="txt-sobre">
              <h2> TAREFAS POR JOGOS <span> CONHEÇA NOSSO CATÁLOGO.</span></h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nostrum quaerat ducimus quod, sit,
              quis explicabo cum, distinctio quas obcaecati doloribus? . Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nostrum quaerat ducimus quod, sit,
              quis explicabo cum, distinctio quas obcaecati doloribus? . Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="formulario">
        <div className="interface">
          <h2 className="titulo">ENVIE UMA SUGESTÃO</h2>
          <form action="">
            <input type="text" name="nome" placeholder="Nome" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="celular" placeholder="Celular" required />
            <textarea name="sugestao" placeholder="Sua sugestão"></textarea>
            <div className="btn-enviar"><input type="submit" className="submit" value="Enviar" /></div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
