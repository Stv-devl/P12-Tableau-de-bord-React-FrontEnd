import React from "react";

const Macronutrient = ({ data }) => {
  const getNutrient = data ? data[0].keyData : {};
  const nutrientArray = Object.entries(getNutrient);

  return (
    <>
      {nutrientArray.map((item) => {
        const names = item[0].split("C")[0];
        const number = item[1];

        return (
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
        );
      })}
    </>
  );
};

export default Macronutrient;
