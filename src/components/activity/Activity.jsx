import React, { useState, useEffect } from "react";
import { formatActivity } from "../../services/formatDatas";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/**
 * A component for set the size of the chart based on the window size.
 * @returns {number} The width of the chart is 835px if window width is > 1318px, otherwise 710px.
 */
export const CustomSize = () => {
  const breakpoint = 1318;
  const [chartWidth, setChartWidth] = useState(
    window.innerWidth > breakpoint ? 835 : 710
  );

  useEffect(() => {
    const changeSize = () => {
      setChartWidth(window.innerWidth > breakpoint ? 835 : 710);
    };

    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);
  return chartWidth;
};

/**
 * The component create a custom legend for the activity chart.
 * @param {Object} props - The props for the component.
 * @param {Object[]} props.payload - Get the items to display.
 * @param {string} props.payload[].value - The value determine the label text
 * @param {string} props.payload[].color - The color of each legend item.
 * @returns {JSX.Element} - Display title & legend with description and color
 */

export const CustomActivityLegend = (props) => {
  const { payload } = props;
  return (
    <>
      <div className="activity-legend-wrapper">
        <div className="title-activity">Activité quotidienne</div>
        <div className="recharts-activity-legend">
          {payload.map((item, index) => (
            <div key={`value-wrapper${index}`} className="value-wrapper">
              <span
                className="legend-icon"
                style={{ backgroundColor: item.color }}
              ></span>
              <p className="legend-value">
                {item.value === "kilogram"
                  ? "Poids (kg)"
                  : "Calories brulées (kCal)"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

/**
 * The component is a bar chart using recharts library and displaying the 'activity' datas.
 * data is formated by 'formatActivity' to fit the chart requirements.
 * @param {Object[]} data - The 'data' array object whith the 'activity' datas
 * @param {number} data[].day - The x-coordinate containing the days of the week in number
 * @param {number} data[].kilogram - Value of Kilogram for each day
 * @param {number} data[].calories - Value of calories for each day
 * @returns {JSX.Element} A bar chart visualization of activity.
 */

const Activity = ({ data }) => {
  return (
    <>
      <BarChart
        className="barchart-graph"
        width={CustomSize()}
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
          borderRadius: 5,
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
          dataKey="day"
          tickLine={false}
          axisLine={{ stroke: "lightgrey", strokeWidth: 1 }}
          tick={{ fill: "#9B9EAC" }}
          tickMargin={12}
          padding={{ left: -42, right: -42 }}
        />
        <Tooltip
          cursor={{
            fill: "rgba(196, 196, 196, 0.50)",
          }}
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
          content={<CustomActivityLegend />}
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
