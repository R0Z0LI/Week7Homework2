import StartGame from "../components/StartGame";
import background from "../pictures/background-start.png";
import logo from "../pictures/pokemon-title.png";
import { useState } from "react";

function HomePage() {
  const [newGane, setNewGame] = useState(false);

  const onNewgameHandler = () => {};

  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div>
        <img src={logo} alt="pokemon logo" className="p-2 pb-8" />
        <StartGame onNewGame={onNewgameHandler} />
      </div>
    </div>
  );
}

export default HomePage;
