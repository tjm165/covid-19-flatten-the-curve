import React, { useState, useEffect } from "react";
import axios from "axios";
import MyChart from "./myChart";

function Dashboard() {
  const [cache, setCache] = useState(false);

  async function fetchData() {
    const response = await axios.get(
      "https://covid-hotline-bling.herokuapp.com/dataallfips/raw"
    );
    debugger;
    setCache(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  const subdata = cache && cache.filter(entry => entry.state === "Ohio");
  const x = subdata && subdata.map(entry => entry.date);
  const y = subdata && subdata.map(entry => entry.deaths);

  return (
    <div className="App">
      <h1> {subdata ? "y" : "n"}</h1> <MyChart country="china" />
    </div>
  );
}

export default Dashboard;
