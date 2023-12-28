import { RadialBarChart, RadialBar, PolarAngleAxis, Legend } from "recharts";
import { formatScore } from "../../services/formatDatas";
import CustomScoreLegend from "../customrecharts/customscorelegend/CustomScoreLegend";
const Score = ({ data }) => {
  return (
    <>
      <RadialBarChart
        width={258}
        height={263}
        cx="50%"
        cy="50%"
        innerRadius={80}
        outerRadius={180}
        barSize={15}
        startAngle={90}
        data={[
          {
            name: "Score",
            score: formatScore(data),
            fill: "#FF0000",
          },
        ]}
        style={{
          backgroundColor: "rgb(251 251 251)",
          borderRadius: 5,
        }}
      >
        <circle cx="50%" cy="50%" r="80" fill="#FFF" />

        <PolarAngleAxis type="number" domain={[0, 80]} tick={false} />
        <Legend content={<CustomScoreLegend />} />

        <RadialBar
          minAngle={15}
          clockWise={true}
          dataKey="score"
          cornerRadius={8}
          background={{ fill: "#FFF" }}
          label={false}
        />
      </RadialBarChart>
    </>
  );
};

export default Score;
