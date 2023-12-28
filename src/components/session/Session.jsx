import { formatSessions } from "../../services/formatDatas";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import CustomCursor from "../customrecharts/customcursor/CustomCursor";

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
          trigger="click"
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
