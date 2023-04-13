import PokemonItem from "./PokemonItem";
import Pokemon from "../models/pokemon";
import { useState, useEffect } from "react";

const PokemonList: React.FC<{
  items: Pokemon[];
  restart: boolean;
  onRestartCallback: () => void;
  tries: () => void;
}> = (props) => {
  const [clickCounter, setClickCounter] = useState(2);
  const [flipBack, setFlipBack] = useState(false);
  const [prevPokemonId, setPrevPokemonId] = useState<number | null>(null);
  const [prevId, setPrevId] = useState<number | null>(null);
  const [matchedId, setMatchedId] = useState(0);
  const [win, setWin] = useState(false);
  const [pokemonIds, setPokemonIds] = useState<number[]>(
    props.items.map((item) => item.pokemon)
  );

  const onSecondClickHandler = (pokemonId: number, id: number) => {
    setPrevId(id);
    if (id !== prevId || clickCounter === 2) {
      if (prevPokemonId !== null && prevPokemonId !== pokemonId) {
        setClickCounter(clickCounter - 1);
        setTimeout(() => {
          setFlipBack(true);
          setPrevPokemonId(null);
          setClickCounter(2);
          //props.tries();
        }, 1000);
      } else {
        setFlipBack(false);
        setPrevPokemonId(pokemonId);
        setClickCounter(clickCounter - 1);
        if (pokemonId === prevPokemonId) {
          setMatchedId(pokemonId);
          setClickCounter(2);
          setPrevPokemonId(null);
          setPokemonIds((prevIds) => prevIds.filter((id) => id !== pokemonId));
        }
      }
    }
  };

  useEffect(() => {
    if (pokemonIds.length === 0) {
      setWin(true);
    }
  }, [pokemonIds]);

  useEffect(() => {
    if (props.restart === true) {
      console.log("restart");
      setClickCounter(2);
      setFlipBack(false);
      setPrevPokemonId(null);
      setPrevId(null);
      setMatchedId(0);
      setWin(false);
    }
    props.onRestartCallback();
  }, [props.restart]);

  return (
    <div>
      {!win && (
        <ul className="flex flex-wrap">
          {props.items.map((item, index) => (
            <PokemonItem
              key={index}
              id={index}
              prevId={prevPokemonId}
              picture={item.picture}
              pokemoneId={item.pokemon}
              flip={flipBack}
              counter={clickCounter}
              matchedId={matchedId}
              restart={props.restart}
              onSecondClick={onSecondClickHandler}
            />
          ))}
        </ul>
      )}
      {win && <p>You Win! Lets go for anothere round</p>}
    </div>
  );
};

export default PokemonList;
