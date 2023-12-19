import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import formatActivity from "../../utils/formatActivity";

const Activity = ({ data }) => {
  return (
    <>
      <div className="header-container">
        <p className="chart-title">Activité quotidienne</p>
        <div className="weight-wrapper">
          <span className="circle-black">Poids (kg)</span>
          <p className="chart-description"></p>
        </div>
        <div className="cal-wrapper">
          <span className="circle-red"></span>
          <p className="chart-description">Calories brûlées (kCal)</p>
        </div>
      </div>
      <div className="activity-chart-container">
        <BarChart
          width={700}
          height={300}
          data={formatActivity(data)}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis orientation="right" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </div>
    </>
  );
};

export default Activity;
