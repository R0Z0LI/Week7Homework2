import { Link } from "react-router-dom";

function StartGame() {
  return (
    <div>
      <select>
        <option value="">Deck Size</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
        <option value="20">20</option>
      </select>
      <Link to="./Game">START NEW GAME</Link>
    </div>
  );
}

export default StartGame;
