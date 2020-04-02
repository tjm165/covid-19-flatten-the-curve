import React from "react";
import { Chart } from "react-charts";

function CovidChart() {
  const exampleData = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 100],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7]
        ]
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4]
        ]
      }
    ],
    []
  );

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

export default CovidChart;
