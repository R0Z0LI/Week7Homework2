import PokemonItem from "./PokemonItem";
import Pokemon from "../models/pokemon";
import { useState, useEffect } from "react";

const PokemonList: React.FC<{ items: Pokemon[] }> = (props) => {
  const [clickCounter, setClickCounter] = useState(0);
  const [flipBack, setFlipBack] = useState(false);
  const [prevId, setPrevId] = useState<number | null>(null);

  const onSecondClickHandler = (id: number) => {
    if (prevId !== null && prevId !== id) {
      setTimeout(() => {
        setFlipBack(true);
        setPrevId(null);
      }, 1000);
    } else {
      setFlipBack(false);
      setPrevId(id);
    }
  };

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
          onSecondClick={onSecondClickHandler}
        />
      ))}
    </ul>
  );
};

export default PokemonList;
