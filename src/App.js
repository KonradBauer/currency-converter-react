import React, { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import Container from "./Container";
import currencies from "./currencies";

function App() {
  const [resultData, setResultData] = useState({});
  const [currency, setCurrency] = useState([currencies[0].value]);
  const [amount, setAmount] = useState("");

  const calculateDivision = amount / currency;

  const calculateResult = () => {
    setResultData({
      amount,
      result: calculateDivision.toFixed(2),
      currency: currencies.find(({ value }) => +currency === value)?.shortcut,
    });
  };

  return (
    <body>
      <Container>
        <Form
          calculateResult={calculateResult}
          setAmount={setAmount}
          amount={amount}
          currency={currency}
          setCurrency={setCurrency}
          resultData={resultData}
          setResultData={setResultData}
        />
        <Footer />
      </Container>
    </body>
  );
}

export default App;
