import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { formatScore } from "../../services/formatDatas";

const Score = ({ data }) => {
  return (
    <>
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={80}
        outerRadius={180}
        barSize={15}
        data={[
          {
            name: "Score",
            score: formatScore(data),
            fill: "#FF0000",
          },
        ]}
        startAngle={180}
        endAngle={-180}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          minAngle={15}
          clockWise={true}
          dataKey="score"
          cornerRadius={8}
          background={{ fill: "#d0d0d0" }}
          label={{
            position: "insidestart",
            fill: "#fff",
          }}
        />
      </RadialBarChart>
    </>
  );
};

export default Score;
