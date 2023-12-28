import React from "react";

const CustomScoreLegend = (props) => {
  const { payload } = props;
  return (
    <>
      <div className="label-score-wrapper">
        <div className="label-score">{payload && payload[0].payload.score}</div>
        <p className="label-score-text">
          de votre <br />
          objectif
        </p>
      </div>
    </>
  );
};

export default CustomScoreLegend;
