const customPolygon = () => {
  //for fix polarRadius bug
  return (
    <path
      stroke="#ccc"
      fill="none"
      className="recharts-polar-grid-concentric-polygon"
      d="M 129,120.5L 138.52627944162882,126L 138.52627944162882,137L 129,142.5L 119.47372055837117,137L 119.47372055837117,126Z"
    />
  );
};
export default customPolygon;
