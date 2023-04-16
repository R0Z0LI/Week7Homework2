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
  const [win, setWin] = useState(false);
  const [newGame, setNewGame] = useState(false);
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
    setWin(false);
    setTriesCounter(0);
  }, [deckSize, restart, newGame]);

  const onRestartHandler = () => {
    setTriesCounter(0);
    setWin(false);
    setRestart(true);
  };

  const onRestartCallbackHandler = () => {
    setRestart(false);
  };

  const onTriesCounterHandler = (counter: number) => {
    setTriesCounter(counter);
  };

  const onWinHandler = (won: boolean) => {
    if (won === true) {
      setWin(true);
      //setWin(false);
    }
  };

  const onNewgameHandler = () => {
    setNewGame(true);
  };

  return (
    <div>
      <div className="flex justify-center flex-col">
        <div className="bg-sky-900 flex justify-center">
          <Link
            to={"/"}
            className="lg:p-2 lg:m-2 p-1 m-1 rounded-lg bg-yellow-300 italic font-bold"
          >
            Home
          </Link>
          <StartGame onNewGame={onNewgameHandler} />
        </div>
        <div
          className="h-screen flex flex-col lg:pl-48 lg:pr-48"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        >
          <Stats
            onRestart={onRestartHandler}
            counter={triesCounter}
            win={win}
            game={newGame}
          />
          <PokemonList
            items={chosenPokemons}
            restart={restart}
            game={newGame}
            onRestartCallback={onRestartCallbackHandler}
            tries={onTriesCounterHandler}
            win={onWinHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default GamePage;
