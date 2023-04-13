import background from "../pictures/background-game.png";
import StartGame from "../components/StartGame";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Stats from "../components/Stats";
import PokemonList from "../components/PokemonList";
import Pokemon from "../models/pokemon";
import { useEffect, useState } from "react";

function GamePage() {
  let location = useLocation().pathname;
  const [restart, setRestart] = useState(false);
  const [triesCounter, setTriesCounter] = useState(0);
  const deckSize: number = +location.slice(1, 3) / 2;
  const [chosenPokemons, setChosenPokemons] = useState<Array<Pokemon>>(
    Array(deckSize * 2).fill(new Pokemon(0))
  );

  useEffect(() => {
    const newPokemons: Pokemon[] = [];
    for (let i = 0; i < 10; i++) {
      newPokemons.push(new Pokemon(i + 1));
    }
    newPokemons.sort(() => Math.random() - 0.5);

    const newChosenPokemons: Pokemon[] = [];

    for (let i = 0; i < deckSize; i++) {
      newChosenPokemons.push(newPokemons[i]);
      newChosenPokemons.push(newPokemons[i]);
    }
    newChosenPokemons.sort(() => Math.random() - 0.5);
    setChosenPokemons(newChosenPokemons);
    setTriesCounter(0);
  }, [deckSize]);

  //console.log(chosenPokemons);
  const onRestartHandler = () => {
    setTriesCounter(0);
    setRestart(true);
  };

  const onRestartCallbackHandler = () => {
    setRestart(false);
  };

  const onTriesCounterHandler = (counter: number) => {
    setTriesCounter(counter);
  };

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
        <Stats onRestart={onRestartHandler} counter={triesCounter} />
        <PokemonList
          items={chosenPokemons}
          restart={restart}
          onRestartCallback={onRestartCallbackHandler}
          tries={onTriesCounterHandler}
        />
      </div>
    </div>
  );
}

export default GamePage;
