import background from "../pictures/background-game.png";
import StartGame from "../components/StartGame";
import { useLocation, useNavigate } from "react-router-dom";
import Stats from "../components/Stats";
import PokemonList from "../components/PokemonList";
import Pokemon from "../models/pokemon";

function GamePage() {
  const navigate = useNavigate();

  let pokemons = [];

  for (let i = 0; i < 10; i++) {
    pokemons.push(new Pokemon(i + 1));
  }

  console.log(pokemons);
  function backClickHandler() {
    navigate(-1);
  }
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div>
        <button onClick={backClickHandler} className="p-3 shadow-lg m-5">
          Menu
        </button>
        <StartGame />
        <Stats />
        <PokemonList />
      </div>
    </div>
  );
}

export default GamePage;
