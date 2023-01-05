import axios from "axios";
import { useState, useEffect } from "react";

const useCurrencies = () => {
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.exchangerate.host/latest")
      .then((response) => setResultData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return resultData;
};

export default useCurrencies;
