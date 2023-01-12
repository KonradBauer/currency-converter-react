import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.exchangerate.host/latest")
      .then((response) => {
        console.log(response.data);
        setCurrencies(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    <Loading />;
  } else {
    return currencies;
  }
};

export default useCurrencies;
