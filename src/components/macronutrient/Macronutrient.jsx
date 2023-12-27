import React from "react";
import { formatNutrient } from "../../services/formatDatas";

const Macronutrient = ({ data }) => {
  return (
    <>
      {formatNutrient(data).map(({ names, number }) => (
        <div key={names} className={`nutrient-cart`}>
          <img
            src={`../${names}-icon.png`}
            alt={`${names} icon`}
            className="nutrient-img"
          />
          <div className="text-wrapper">
            <p className="chart-result">
              {names === "calorie" ? `${number}kCal` : `${number}g`}
            </p>
            <p className="chart-description">{`${names}s`}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Macronutrient;
