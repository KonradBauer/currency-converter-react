import axios from "axios";
import { useState, useEffect } from "react";

const useCurrencies = () => {
  const [ratesData, setRatesData] = useState({});

  useEffect = () => {
    axios
      .get("https://api.exchangerate.host/latest")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };
  setRatesData(response.data);
};

export default useCurrencies;
