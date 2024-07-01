import { useState } from 'react';
import { Card } from 'primereact/card';

function App() {

  const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
  );

  const [games, setGames] = useState([
    {
      id:1,
      name:"nome",
      gla: "true",
      tags: "port and math",
      subtitle:" a game ...",
      img:""
    },
    {
      id:1,
      name:"nome",
      gla: "true",
      tags: "port and math",
      subtitle:" a game ...",
      img:""
    },
    {
      id:1,
      name:"nome",
      gla: "true",
      tags: "port and math",
      subtitle:" a game ...",
      img:""
    },
    {
      id:1,
      name:"nome",
      gla: "true",
      tags: "port and math",
      subtitle:" a game ...",
      img:""
    },
    {
      id:1,
      name:"nome",
      gla: "true",
      tags: "port and math",
      subtitle:" a game ...",
      img:""
    },
    {
      id:1,
      name:"nome",
      gla: "true",
      tags: "port and math",
      subtitle:" a game ...",
      img:""
    }


  ])


  return (
    <div>
      <h1>Listagem</h1>
      <div className="main-menu">
        {games.map((game) =>
        (
          <div className='game-card'>

            <Card title={game.name} subTitle={game.tags} footer={null} header={header} className="md:w-25rem">
                <p className="m-0">
                  {game.subtitle}
                </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
