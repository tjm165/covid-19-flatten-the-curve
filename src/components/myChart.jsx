import React from "react";
import { Chart } from "react-charts";

function MyChart({ propData }) {
  const exampleData = React.useMemo(() => propData, []);

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );

  return (
    // A react-chart hyper-responsively and continuusly fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "400px",
        height: "300px"
      }}
    >
      {/* {d.map(x => (
        <h1>2</h1>
      ))} */}
      <Chart data={exampleData} axes={axes} />
    </div>
  );
}

export default MyChart;
