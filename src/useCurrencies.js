import axios from "axios";
import { useState, useEffect } from "react";

const useCurrencies = () => {
  const [ratesData, setRatesData] = useState({});
  const getURL = "https://api.exchangerate.host/latest";

  useEffect = () => {
    axios
      .get(getURL)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));

    setRatesData(() => response.data);
  };

  return ratesData;
};

export default useCurrencies;
