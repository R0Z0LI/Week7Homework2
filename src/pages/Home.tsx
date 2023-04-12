import StartGame from "../components/StartGame";
import background from "../pictures/background-start.png";
import logo from "../pictures/pokemon-title.png";

function HomePage() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div>
        <img src={logo} alt="pokemon logo" />
        <StartGame />
      </div>
    </div>
  );
}

export default HomePage;
