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
import CustomLegend from "../customrecharts/customlegend/CustomLegend";

const Activity = ({ data }) => {
  return (
    <>
      <BarChart
        width={835}
        height={320}
        data={formatActivity(data)}
        margin={{
          top: 112,
          right: 31,
          left: -16,
          bottom: 32,
        }}
        style={{
          backgroundColor: "rgb(251 251 251)",
          borderRadius: 10,
        }}
        barGap={10}
        barSize={10}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <YAxis yAxisId="notDisplay" display="none" />
        <YAxis
          yAxisId="right"
          orientation="right"
          allowDecimals={false}
          domain={["dataMin-1", "dataMax+2"]}
          axisLine={false}
          tickLine={false}
          tickMargin={40}
          tick={{ fill: "#9B9EAC" }}
        />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={{ stroke: "lightgrey", strokeWidth: 1 }}
          tick={{ fill: "#9B9EAC" }}
          tickMargin={12}
          padding={{ left: -42, right: -42 }}
        />
        <Tooltip
          contentStyle={{
            position: "relative",
            backgroundColor: "#E60000",
            border: "none",
            width: 39,
            height: 63,
            left: 10,
          }}
          wrapperClassName="activityTooltip"
          formatter={(value, name) => {
            return [name === "kilogram" ? `${value} kg` : `${value} kCal`];
          }}
          labelFormatter={() => ""}
        />
        <Legend
          content={<CustomLegend />}
          wrapperStyle={{ left: 43, top: "24px", width: 770 }}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#282D30"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="notDisplay"
          dataKey="calories"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </>
  );
};

export default Activity;
