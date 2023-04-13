import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function StartGame() {
  const [deckSize, setDeckSize] = useState("");
  const navigate = useNavigate();

  const onSelectedHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDeckSize(event.target.value);
  };
  const onClickHandler = () => {
    navigate(`/${deckSize}`, { replace: true });
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
      <button onClick={() => onClickHandler()}>START NEW GAME</button>
    </div>
  );
}

export default StartGame;
