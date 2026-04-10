
export const skeletonStyle = ({ width, height, margin }) => ({
  width,
  height,
  margin: margin || "10px 0",
  borderRadius: "10px",
  background: "linear-gradient(90deg, #444 25%, #666 50%, #444 75%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 1.5s infinite"
});

