import React from "react";
import formatSessions from "../../utils/formatSessions";
import { LineChart, Line, XAxis } from "recharts";

const Session = ({ data }) => {
  return (
    <>
      <div className="chart-title-white">Durée moyenne des sessions</div>
      <LineChart width={300} height={100} data={formatSessions(data)}>
        <XAxis dataKey="day" />
        <Line
          type="monotone"
          dataKey="session"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </>
  );
};

export default Session;
