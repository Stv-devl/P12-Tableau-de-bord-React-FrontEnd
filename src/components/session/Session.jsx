import React from "react";
import formatSessions from "../../utils/formatSessions";
import { LineChart, Line, XAxis, Tooltip, Text } from "recharts";

const Session = ({ data }) => {
  return (
    <>
      {/* <div className="chart-title-white">Durée moyenne des sessions</div>*/}
      <LineChart
        width={258}
        height={253}
        data={formatSessions(data)}
        style={{
          backgroundColor: "#FF0000",
          borderRadius: 5,
        }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#FFFFFF", fontSize: 12 }}
          padding={{ left: 10, right: 10 }}
        />
        <Line
          type="monotone"
          dataKey="session"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
          style={{ stroke: "#FFFFFF" }}
        />
        <Tooltip
          contentStyle={{
            position: "relative",
            backgroundColor: "#FFFFFF",
            border: "none",
            width: 39,
            height: 25,
          }}
          wrapperClassName="sessionTooltip"
          formatter={(value) => [`${value} min`]}
          labelFormatter={() => ""}
        />
      </LineChart>
    </>
  );
};

export default Session;
