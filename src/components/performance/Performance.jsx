import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { formatPerformance } from "../../services/formatDatas";
import CustomPolygon from "../customrecharts/custompolygon/CustomPolygon";

const Performance = ({ data }) => {
  const formattedData = formatPerformance(data).reverse();

  return (
    <RadarChart
      cx="50%"
      cy="50%"
      outerRadius={89}
      width={258}
      height={263}
      data={formattedData.length > 0 && formattedData}
      style={{
        backgroundColor: "#282D30",
        borderRadius: 5,
      }}
    >
      {CustomPolygon()}
      <PolarGrid radialLines={false} />
      <PolarRadiusAxis axisLine={false} tick={false} tickCount={5} />
      <PolarAngleAxis
        dataKey="subject"
        tick={{
          fontSize: 12,
          fontWeight: 500,
          fill: "#ffffff",
        }}
        dy={3}
      />
      <Radar dataKey="session" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.7} />
    </RadarChart>
  );
};

export default Performance;
