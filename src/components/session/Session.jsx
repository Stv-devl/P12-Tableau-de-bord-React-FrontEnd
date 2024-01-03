import React, { useState, useEffect } from "react";
import { formatSessions } from "../../services/formatDatas";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

/**
 * A component for set the size of the chart based on the window size.
 * @returns {number} The width of the chart is 258px if window width is > 1318px, otherwise 240px.
 */
export const CustomSizeLineChart = () => {
  const breakpoint = 1318;
  const [chartWidth, setChartWidth] = useState(
    window.innerWidth > breakpoint ? 258 : 240
  );
  useEffect(() => {
    const changeSize = () => {
      setChartWidth(window.innerWidth > breakpoint ? 258 : 240);
    };
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);
  return chartWidth;
};

/**
 * The component create a custom cursor for the session chart
 * @param {Object} props - The props for the component.
 * @param {Object[]} props.points - An array of object with 'x' & 'y' representing the cursor position
 * @param {number} props.payloadIndex - The index of data point in the payload (0 to 6)
 * @param {number} props.points[].y - The y-coordinate for the cursor line.
 * @returns {JSX.Element} - A line element that darkens the area at the right of the cursor
 */

export const CustomCursor = (props) => {
  const { points, payloadIndex } = props;
  //for fix the problem of 2 lignes we find custom x points, same for breakup
  const xPoint = [250, 293, 336, 378, 422, 465, 550];
  const xPointBreak = [250, 290, 330, 370, 410, 450, 550];
  const { y } = points[0];
  const chartWidth = CustomSizeLineChart();

  return (
    <line
      x1={chartWidth === 258 ? xPoint[payloadIndex] : xPointBreak[payloadIndex]}
      y1={0}
      x2={chartWidth === 258 ? xPoint[payloadIndex] : xPointBreak[payloadIndex]}
      y2={y + 248}
      stroke="#000000"
      strokeWidth={500}
      strokeOpacity={0.098}
    />
  );
};

/**
 * The component is a line chart using recharts library and displaying the 'session' datas.
 * data is formated by 'formatSession' to fit the chart requirements.
 * @param {Object[]} data - The data array object whith the 'session' data
 * @param {string} data[].day - Days of the week to the x-coordinate (L, M...)
 * @param {number} data[].session - A number with the duration of each session
 * @returns {JSX.Element} - A line chart visualization of the user session.
 */

const Session = ({ data }) => {
  return (
    <>
      <LineChart
        width={CustomSizeLineChart()}
        height={263}
        data={formatSessions(data)}
        style={{
          backgroundColor: "#FF0000",
          borderRadius: 5,
        }}
        margin={{
          top: 77,
          bottom: 20,
        }}
        className="linechart-graph"
      >
        <defs>
          <linearGradient id="linGradient" x1="0" x2="1">
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity={0.5} />
            <stop offset="80%" stopColor="#FFFFFF" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "rgba(255, 255, 255, 0.55)", fontSize: 12 }}
          padding={{ left: 15, right: 15 }}
          tickMargin={10}
          xAxisId="display"
        />

        <XAxis dataKey="day" hide xAxisId="notDisplay" />

        <Line
          type="monotone"
          dataKey="session"
          stroke="#FFFFFF"
          strokeWidth={2}
          dot={false}
          style={{ stroke: "url(#linGradient)" }}
          xAxisId="notDisplay"
        />
        <Tooltip
          cursor={<CustomCursor />}
          contentStyle={{
            position: "relative",
            border: "none",
            width: 39,
            height: 25,
          }}
          wrapperClassName="sessionTooltip"
          formatter={(value) => [`${value} min`]}
          labelFormatter={() => ""}
          trigger="hover"
        />
        <text x={34} y={40} fill="rgba(255, 255, 255, 0.5)">
          Durée moyenne des
        </text>
        <text x={34} y={60} fill="rgba(255, 255, 255, 0.5)">
          sessions
        </text>
      </LineChart>
    </>
  );
};

export default Session;
