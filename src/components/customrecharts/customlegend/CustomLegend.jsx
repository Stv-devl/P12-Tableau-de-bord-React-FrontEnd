import React from "react";

const CustomLegend = (props) => {
  const { payload } = props;

  return (
    <>
      <div className="activity-legend-wrapper">
        <div className="title-activity">Activité quotidienne</div>
        <ul className="recharts-activity-legend">
          {payload.map((entry, index) => (
            <div key={`value-wrapper${index}`} className="value-wrapper">
              <span
                className="legend-icon"
                style={{ backgroundColor: entry.color }}
              ></span>
              <p className="legend-value">
                {entry.value === "kilogram"
                  ? "Poids (kg)"
                  : "Calories brulées (kCal)"}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CustomLegend;
