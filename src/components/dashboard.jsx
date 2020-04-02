import React, { useState, useEffect } from "react";
import axios from "axios";
import MyChart from "./myChart";

function Dashboard() {
  const [cache, setCache] = useState(false);

  async function fetchData() {
    const response = await axios.get(
      "https://covid-hotline-bling.herokuapp.com/dataallfips/raw"
    );
    setCache(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1> {cache ? "y" : "n"}</h1> <CovidChart country="china" />
    </div>
  );
}

export default Dashboard;
