import React from "react";

const CustomCursor = (props) => {
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

export default CustomCursor;
