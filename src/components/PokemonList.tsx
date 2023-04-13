import PokemonItem from "./PokemonItem";
import Pokemon from "../models/pokemon";
import { useState, useEffect } from "react";

const PokemonList: React.FC<{
  items: Pokemon[];
  restart: boolean;
  onRestartCallback: () => void;
  tries: (counter: number) => void;
}> = (props) => {
  const [clickCounter, setClickCounter] = useState(2);
  const [flipBack, setFlipBack] = useState(false);
  const [win, setWin] = useState(false);
  const [matchedId, setMatchedId] = useState(0);
  const [tries, setTries] = useState(0);
  const [prevPokemonId, setPrevPokemonId] = useState<number | null>(null);
  const [prevId, setPrevId] = useState<number | null>(null);
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);

  useEffect(() => {
    setPokemonIds(props.items.map((item) => item.pokemon));
    setWin(false);
  }, [props.items]);

  const onSecondClickHandler = (pokemonId: number, id: number) => {
    let inPlay = false;
    console.log(prevId);
    console.log(id);
    for (let i = 0; i < pokemonIds.length; i++) {
      if (pokemonIds[i] === pokemonId) {
        inPlay = true;
      }
    }
    if ((id !== prevId || clickCounter === 2) && inPlay) {
      setPrevId(id);
      if (prevPokemonId !== null && prevPokemonId !== pokemonId) {
        setClickCounter(clickCounter - 1);
        setTimeout(() => {
          setFlipBack(true);
          setPrevPokemonId(null);
          setClickCounter(2);
          setTries(tries + 1);
        }, 500);
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
    props.tries(tries);
  }, [tries]);

  useEffect(() => {
    if (pokemonIds.length === 0) {
      setPrevPokemonId(null);
      setPrevId(null);
      setWin(true);
    }
  }, [pokemonIds]);

  useEffect(() => {
    if (props.restart === true) {
      setClickCounter(2);
      setFlipBack(false);
      setPrevPokemonId(null);
      setPrevId(null);
      setMatchedId(0);
      setWin(false);
      setTries(0);
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
