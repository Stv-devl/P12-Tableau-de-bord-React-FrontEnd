import { formatSessions } from "../../services/formatDatas";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

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
  const customXpoint = [250, 293, 336, 378, 422, 465, 550];
  const { y } = points[0];

  return (
    <line
      x1={customXpoint[payloadIndex]}
      y1={0}
      x2={customXpoint[payloadIndex]}
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
        width={258}
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
