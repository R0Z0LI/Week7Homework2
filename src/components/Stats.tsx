import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Stats: React.FC<{
  onRestart: () => void;
  counter: number;
  win: boolean;
}> = (props) => {
  const navigate = useNavigate();
  const [bestScore, setBestScore] = useState<number>(0);
  useEffect(() => {
    const score = localStorage.getItem("bestScore");
    if (score !== null) {
      setBestScore(parseInt(score));
    }
  }, []);

  useEffect(() => {
    if (bestScore === 0 || bestScore > props.counter) {
      setBestScore(props.counter);
    }
  }, [props.win]);

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore.toString());
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
