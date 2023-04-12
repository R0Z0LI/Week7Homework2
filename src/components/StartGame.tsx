import { Link } from "react-router-dom";
import { useState } from "react";

function StartGame() {
  const [deckSize, setDeckSize] = useState("");
  const onSelectedHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDeckSize(event.target.value);
  };
  return (
    <div>
      <select value={deckSize} onChange={onSelectedHandler}>
        <option value="">Deck Size</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
        <option value="20">20</option>
      </select>
      <Link to={deckSize}>START NEW GAME</Link>
    </div>
  );
}

export default StartGame;
