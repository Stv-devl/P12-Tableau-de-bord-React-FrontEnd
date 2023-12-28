import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { formatScore } from "../../services/formatDatas";

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
        startAngle={180}
        endAngle={-180}
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
        <PolarAngleAxis type="number" domain={[0, 55]} tick={false} />
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
