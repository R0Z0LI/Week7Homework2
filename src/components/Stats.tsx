import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Stats: React.FC<{
  onRestart: () => void;
  counter: number;
  win: boolean;
  game: boolean;
}> = (props) => {
  const navigate = useNavigate();
  const [newBestScore, setNewBestScore] = useState(false);
  const [bestScore, setBestScore] = useState<number>(() => {
    const score = localStorage.getItem("bestScore");
    return score !== null ? parseInt(score) : 0;
  });

  useEffect(() => {
    if (bestScore === 0 || (bestScore > props.counter && props.counter !== 0)) {
      setBestScore(props.counter);
      setNewBestScore(true);
    }
  }, [props.win]);

  useEffect(() => {
    if (newBestScore === true) {
      setNewBestScore(false);
      localStorage.setItem("bestScore", bestScore.toString());
    }
  }, [bestScore]);

  const onClickHandler = () => {
    props.onRestart();
    navigate("");
  };
  return (
    <div className="text-yellow-300 p-2 flex justify-between text font-bold text-lg">
      <p className="">
        <span>CURRENT TRIES: </span>
        <span>{props.counter}</span>
      </p>
      <p>
        <span>BEST: </span>
        <span>{bestScore}</span>
      </p>
      <button onClick={onClickHandler}>RESTART</button>
    </div>
  );
};

export default Stats;
