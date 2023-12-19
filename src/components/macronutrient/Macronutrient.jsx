import React from "react";

const Macronutrient = ({ data }) => {
  const getNutrient = data && data.length > 0 ? data[0].keyData : {};

  return (
    <>
      <div className="calories-container">
        <img src="../calories-icon.png" alt="icone calorie" />
        <div className="calories-wrapper">
          <p className="chart-result">{getNutrient.calorieCount}</p>
          <p className="chart-description">Calories</p>
        </div>
      </div>
      <div className="protein-container">
        <img src="../protein-icon.png" alt="icone proteine" />
        <div className="calory-wrapper">
          <p className="chart-result">{getNutrient.proteinCount}</p>
          <p className="chart-description">Protéines</p>
        </div>
      </div>
      <div className="carbohydrates-container">
        <img src="../carbohydrates-icon.png" alt="icone glucide" />
        <div className="carbohydrates-wrapper">
          <p className="chart-result">{getNutrient.carbohydrateCount}</p>
          <p className="chart-description">Glucides</p>
        </div>
      </div>
      <div className="lipids-container">
        <img src="../lipids-icon.png" alt="icone lipides" />
        <div className="lipids-wrapper">
          <p className="chart-result">{getNutrient.lipidCount}</p>
          <p className="chart-description">Lipides</p>
        </div>
      </div>
    </>
  );
};

export default Macronutrient;
