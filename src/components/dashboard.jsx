import React from "react";
import CovidChart from "./covidChart";

function Dashboard() {
  const x = 2;
  return (
    <div className="App">
      <h1>{x}</h1>
      <CovidChart country="china" />
    </div>
  );
}

export default Dashboard;
