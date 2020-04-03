import React, { useState, useEffect } from "react";
import axios from "axios";
import MyChart from "./myChart";

function Dashboard() {
  const [cache, setCache] = useState(false);
  const [x, setX] = useState(false);

  async function fetchData() {
    const response = await axios.get(
      "https://covid-hotline-bling.herokuapp.com/dataallfips/raw"
    );
    setCache(response.data);
    const subdata = response.data.filter(entry => entry.state === "Ohio");
    var data = {};
    subdata.forEach(entry => {
      const date = new Date(entry.date);
      if (data.hasOwnProperty(date)) {
        data[date] = data[date] + entry.deaths;
      } else {
        data[date] = entry.deaths;
      }
    });
    setX([
      {
        label: "Series 2",
        data: Object.entries(data).map(entry => [new Date(entry[0]), entry[1]])
      }
    ]);

    debugger;
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1> {x ? "Ohio COVID-19 Deaths" : "n"}</h1>
      {x && <MyChart hi={"hi"} propData={x} country="china" />}
    </div>
  );
}

export default Dashboard;
