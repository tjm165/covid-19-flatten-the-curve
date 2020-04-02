import React, { useState, useEffect } from "react";
import { getHotlineBlingData } from "../API";
import axios from "axios";
import CovidChart from "./covidChart";

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
