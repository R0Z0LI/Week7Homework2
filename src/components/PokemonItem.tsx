import { useState, useEffect } from "react";

import back from "../pictures/card-back.png";
import poke1 from "../pictures/card-poke1.png";
import poke2 from "../pictures/card-poke2.png";
import poke3 from "../pictures/card-poke3.png";
import poke4 from "../pictures/card-poke4.png";
import poke5 from "../pictures/card-poke5.png";
import poke6 from "../pictures/card-poke6.png";
import poke7 from "../pictures/card-poke7.png";
import poke8 from "../pictures/card-poke8.png";
import poke9 from "../pictures/card-poke9.png";
import poke10 from "../pictures/card-poke10.png";

type pics = {
  [key: string]: string;
};

const pictureMap: pics = {
  1: poke1,
  2: poke2,
  3: poke3,
  4: poke4,
  5: poke5,
  6: poke6,
  7: poke7,
  8: poke8,
  9: poke9,
  10: poke10,
};

const PokemonItem: React.FC<{
  id: number;
  prevId: number | null;
  picture: string;
  pokemoneId: number;
  flip: boolean;
  counter: number;
  matchedId: number;
  restart: boolean;
  onSecondClick: (pokemonId: number, id: number) => void;
}> = (props) => {
  const [clicked, setClicked] = useState(false);
  const [everyClick, setEveryClick] = useState(0);
  const [matchedPokemon, setMatchedPokemon] = useState(false);
  const onClickHandler = () => {
    setClicked(true);
    setEveryClick(1);
  };
  useEffect(() => {
    if (props.restart === true) {
      setClicked(false);
      setEveryClick(0);
      setMatchedPokemon(false);
    }
  }, [props.restart]);
  useEffect(() => {
    if (props.matchedId === props.pokemoneId) {
      setMatchedPokemon(true);
    }
  }, [props.matchedId]);
  const isMatched = props.pokemoneId === props.prevId;
  useEffect(() => {
    if (everyClick === 1) {
      props.onSecondClick(props.pokemoneId, props.id);
      setEveryClick(0);
    }
  }, [everyClick]);
  const pictureSource = pictureMap[props.pokemoneId];

  useEffect(() => {
    if (!isMatched) {
      setClicked(false);
    }
  }, [props.flip]);

  const condition = matchedPokemon || (clicked && !props.flip);
  //console.log(`${props.id} ${condition} ${clicked} ${props.flip}`);
  //console.log(props.pokemoneId);
  return (
    <li onClick={props.counter === 0 ? undefined : onClickHandler}>
      {!clicked && props.flip && !matchedPokemon && (
        <img src={back} alt="PokemonPic" />
      )}
      {!clicked && !props.flip && !matchedPokemon && (
        <img src={back} alt="PokemonPic" />
      )}
      {condition && <img src={pictureSource} alt="PokemonPic" />}
    </li>
  );
};
export default PokemonItem;
