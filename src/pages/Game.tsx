import background from "../pictures/background-game.png";
import StartGame from "../components/StartGame";
import { useLocation, useNavigate } from "react-router-dom";
import Stats from "../components/Stats";
import PokemonList from "../components/PokemonList";
import Pokemon from "../models/pokemon";

function GamePage() {
  const navigate = useNavigate();
  let location = useLocation().pathname;
  const deckSize: number = +location.slice(1, 3) / 2;
  let pokemons = [];
  let choosenPokemons = [];

  for (let i = 0; i < 10; i++) {
    pokemons.push(new Pokemon(i + 1));
  }

  pokemons.sort(() => Math.random() - 0.5);

  function backClickHandler() {
    navigate(-1);
  }

  for (let i = 0; i < deckSize; i++) {
    choosenPokemons.push(pokemons[i]);
    choosenPokemons.push(pokemons[i]);
  }
  choosenPokemons.sort(() => Math.random() - 0.5);

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
        <PokemonList items={choosenPokemons} />
      </div>
    </div>
  );
}

export default GamePage;
