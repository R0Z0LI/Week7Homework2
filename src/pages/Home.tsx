import background from "../pictures/background-start.png";
import logo from "../pictures/pokemon-title.png";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div>
        <img src={logo} alt="pokemon logo" />
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
      </div>
    </div>
  );
}

export default HomePage;
