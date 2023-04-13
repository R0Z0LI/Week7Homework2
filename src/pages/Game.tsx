import background from "../pictures/background-game.png";
import StartGame from "../components/StartGame";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Stats from "../components/Stats";
import PokemonList from "../components/PokemonList";
import Pokemon from "../models/pokemon";
import { useState } from "react";

function GamePage() {
  let location = useLocation().pathname;
  const [restart, setRestart] = useState(false);
  const deckSize: number = +location.slice(1, 3) / 2;
  let pokemons = [];
  let choosenPokemons = [];

  for (let i = 0; i < 10; i++) {
    pokemons.push(new Pokemon(i + 1));
  }

  pokemons.sort(() => Math.random() - 0.5);

  const onRestartHandler = () => {
    setRestart(true);
  };

  const onRestartCallbackHandler = () => {
    setRestart(false);
  };

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
        <Link to={"/"} className="p-3 shadow-lg m-5">
          Menu
        </Link>
        <StartGame />
        <Stats onRestart={onRestartHandler} />
        <PokemonList
          items={choosenPokemons}
          restart={restart}
          onRestartCallback={onRestartCallbackHandler}
        />
      </div>
    </div>
  );
}

export default GamePage;
