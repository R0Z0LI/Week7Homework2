import React from "react";
import { useNavigate } from "react-router-dom";

const Stats: React.FC<{ onRestart: () => void }> = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("");
  };
  return (
    <div>
      <p>CURRENT TRIES</p>
      <p>BEST</p>
      <button onClick={onClickHandler}>RESTART</button>
    </div>
  );
};

export default Stats;
