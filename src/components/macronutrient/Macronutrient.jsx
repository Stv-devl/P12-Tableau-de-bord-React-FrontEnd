import React from "react";

/**
 * The component containing 4 cards who displaying the amount of each macronutrient.
 * data is formated by 'formatNutrient'
 * @param {Object} data - The data array object
 * @param {string} data[].names - The name of the nutrient.
 * @param {number} data[].number - The quantity of the nutrient.
 * @returns {JSX.Element} - Display the 4 cards
 */

const Macronutrient = ({ data }) => {
  return (
    <>
      {data.map(({ names, number }) => (
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
