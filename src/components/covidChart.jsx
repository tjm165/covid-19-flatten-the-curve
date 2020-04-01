import React, { useState, useEffect } from "react";
import { Chart } from "react-charts";

function x(da) {
  const deathCountEachDay = {};
  da.forEach(element => {
    if 
  });
  return da[0];
}

function CovidChart() {
  const path = "https://api.covid19api.com/dayone/country/china/status/deaths";

  const [d, setd] = useState(false);

  async function fetchData() {
    const res = await fetch(path);
    res.json().then(res => setd(x(res)));
  }

  useEffect(() => {
    fetchData();
  }, []);

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
