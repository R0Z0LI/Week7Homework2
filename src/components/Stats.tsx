import React from "react";
import { useNavigate } from "react-router-dom";

const Stats: React.FC<{ onRestart: () => void; counter: number }> = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    props.onRestart();
    navigate("");
  };
  return (
    <div>
      <p>
        <span>CURRENT TRIES: </span>
        <span>{props.counter}</span>
      </p>
      <p>BEST</p>
      <button onClick={onClickHandler}>RESTART</button>
    </div>
  );
};

export default Stats;
