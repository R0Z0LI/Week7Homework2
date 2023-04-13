import PokemonItem from "./PokemonItem";
import Pokemon from "../models/pokemon";
import { useState, useEffect } from "react";

const PokemonList: React.FC<{ items: Pokemon[] }> = (props) => {
  const [clickCounter, setClickCounter] = useState(2);
  const [flipBack, setFlipBack] = useState(false);
  const [prevPokemonId, setPrevPokemonId] = useState<number | null>(null);
  const [prevId, setPrevId] = useState<number | null>(null);
  const [matchedId, setMatchedId] = useState(0);

  const onSecondClickHandler = (pokemonId: number, id: number) => {
    setPrevId(id);
    console.log(prevId);
    console.log(id);
    if (id !== prevId) {
      if (prevPokemonId !== null && prevPokemonId !== pokemonId) {
        setClickCounter(clickCounter - 1);
        setTimeout(() => {
          setFlipBack(true);
          setPrevPokemonId(null);
          setClickCounter(2);
        }, 1000);
      } else {
        setFlipBack(false);
        setPrevPokemonId(pokemonId);
        setClickCounter(clickCounter - 1);
        if (pokemonId === prevPokemonId) {
          setMatchedId(pokemonId);
          setClickCounter(2);
          setPrevPokemonId(null);
        }
      }
    }
  };

  //console.log(clickCounter);

  return (
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
          onSecondClick={onSecondClickHandler}
        />
      ))}
    </ul>
  );
};

export default PokemonList;
