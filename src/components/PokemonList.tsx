import PokemonItem from "./PokemonItem";
import Pokemon from "../models/pokemon";
import { useState, useEffect } from "react";

const PokemonList: React.FC<{ items: Pokemon[] }> = (props) => {
  const [clickCounter, setClickCounter] = useState(2);
  const [flipBack, setFlipBack] = useState(false);
  const [prevId, setPrevId] = useState<number | null>(null);

  const onSecondClickHandler = (id: number) => {
    if (prevId !== null && prevId !== id) {
      setClickCounter(clickCounter - 1);
      setTimeout(() => {
        setFlipBack(true);
        setPrevId(null);
        setClickCounter(2);
      }, 1000);
    } else {
      setFlipBack(false);
      setPrevId(id);
      setClickCounter(clickCounter - 1);
      if (id === prevId) {
        console.log("hey");
        setClickCounter(2);
        setPrevId(null);
      }
    }
  };

  //console.log(prevId);
  console.log(clickCounter);

  return (
    <ul className="flex flex-wrap">
      {props.items.map((item, index) => (
        <PokemonItem
          key={index}
          id={index}
          prevId={prevId}
          picture={item.picture}
          pokemoneId={item.pokemon}
          flip={flipBack}
          counter={clickCounter}
          onSecondClick={onSecondClickHandler}
        />
      ))}
    </ul>
  );
};

export default PokemonList;
