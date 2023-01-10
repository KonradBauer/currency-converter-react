import axios from "axios";
import { useState, useEffect } from "react";

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.exchangerate.host/latest")
      .then((response) => {
        console.log(response.data);
        setCurrencies(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return currencies;
};

export default useCurrencies;
