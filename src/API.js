import axios from "axios";

export function getHotlineBlingData() {
  return getRawData("http://covid-hotline-bling.herokuapp.com/dataallfips/raw");
}

async function getRawData(url) {
  const response = await axios.get(
    "http://covid-hotline-bling.herokuapp.com/dataallfips",
    {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
  return response;
}
