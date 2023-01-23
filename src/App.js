
import imagenRickMorty from "./img/img-home.png";
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters,setCharacter] = useState(null);
  
  const recApi = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacter(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Rick & Morty </h1>
        {characters ? (
          <Characters characters={characters} setCharacter={setCharacter}/>
        ) : (
          <>
          <img src={imagenRickMorty} alt="Rick & Morty" className='img-home'></img>
          <button onClick={recApi} className="btn-search">Buscar Personajes</button>
          </>
        )}

       
      </header>
    </div>
  );
}

export default App;
