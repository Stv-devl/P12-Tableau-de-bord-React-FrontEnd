import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { formatPerformance } from "../../services/formatDatas";

/**
 * The component is a Radar Chart using recharts library and displaying the 'performance' datas.
 * data is formated by 'formatPerformance' to fit the chart requirements.
 * @param {Object[]} data - The object of array of 'performance' data
 * @param {number} data[].session - A number giving the performance of each category
 * @param {string} data[].subject - Performance session categories relate to number.
 * @returns {JSX.Element} - A radar chart that visualizes user performance
 */

const Performance = ({ data }) => {
  const formattedData = formatPerformance(data).reverse();

  return (
    <RadarChart
      cx="50%"
      cy="50%"
      outerRadius={89}
      width={258}
      height={263}
      data={formattedData}
      style={{
        backgroundColor: "#282D30",
        borderRadius: 5,
      }}
      className="radarchart-graph"
    >
      {/*custom polygon SVG*/}
      <path
        stroke="#ccc"
        fill="none"
        className="recharts-polar-grid-concentric-polygon"
        d="M 129,120.5L 138.52627944162882,126L 138.52627944162882,137L 129,142.5L 119.47372055837117,137L 119.47372055837117,126Z"
      />
      <PolarGrid radialLines={false} />
      <PolarRadiusAxis axisLine={false} tick={false} tickCount={5} />
      <PolarAngleAxis
        dataKey="subject"
        tick={{
          fontSize: 12,
          fontWeight: 500,
          fill: "#ffffff",
        }}
        dy={4}
      />
      <Radar dataKey="session" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.7} />
    </RadarChart>
  );
};

export default Performance;
