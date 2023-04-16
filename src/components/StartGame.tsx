import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const StartGame: React.FC<{ onNewGame: () => void }> = (props) => {
  const [deckSize, setDeckSize] = useState("");
  const [newGame, setNewGame] = useState(false);
  const navigate = useNavigate();

  const onSelectedHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDeckSize(event.target.value);
  };
  const onClickHandler = () => {
    props.onNewGame();
    navigate(`/${deckSize}`, { replace: true });
  };
  return (
    <div className="inline-block">
      <select
        value={deckSize}
        className="lg:p-2 p-1 m-1 lg:m-2 rounded-lg bg-blue-300 italic font-bold"
        onChange={onSelectedHandler}
      >
        <option value="">Deck Size</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
        <option value="20">20</option>
      </select>
      <button
        className="lg:p-2 p-1 m-1 lg:m-2 rounded-lg bg-yellow-300 italic font-bold"
        onClick={() => onClickHandler()}
      >
        START NEW GAME
      </button>
    </div>
  );
};

export default StartGame;
