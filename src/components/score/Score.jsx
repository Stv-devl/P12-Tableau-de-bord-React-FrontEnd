import { RadialBarChart, RadialBar, PolarAngleAxis, Legend } from "recharts";
import { formatScore } from "../../services/formatDatas";

/**
 * This component create a custom legend for the score chart
 * @param {Object} props - The props for the component.
 * @param {Object[]} props.payload - We use the playload array of object for get the score
 * @param {number} props.payload[].score - The score value who will be displayed in the legend.
 * @returns {JSX.Element} - Will display the legend of the chart with the user score in % and the description.
 */

export const CustomScoreLegend = (props) => {
  const { payload } = props;
  return (
    <>
      <div className="label-score-wrapper">
        <div className="label-score">
          {`${payload && payload[0].payload.score}%`}
        </div>
        <p className="label-score-text">
          de votre <br />
          objectif
        </p>
      </div>
    </>
  );
};

/**
 * The component renders a Radial Chart using recharts library and displaying the 'user' datas.
 * 'data' is formated by 'formatScore' to fit the chart requirements.
 * @param {Object[]} data - The object of array of 'user' data
 * @param {number} data[].score - The number representing the value of users score
 * @returns {JSX.Element} - A Radial bar chart visualizing the user's score in %
 */

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
        className="radialbarchart-graph"
      >
        <circle cx="50%" cy="50%" r="80" fill="#FFF" />

        <PolarAngleAxis type="number" domain={[0, 80]} tick={false} />
        <Legend
          content={<CustomScoreLegend />}
          wrapperStyle={{ left: "40%", top: "38%" }}
        />

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
