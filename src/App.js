import React, { useState } from "react";
import Footer from "./Footer";
import Buttons from "./Buttons";
import Input from "./Input";
import Legend from "./Legend";
import Form from "./Form";
import Container from "./Container";
import Fieldset from "./Fieldset";
import SectionResult from "./SectionResult";
import SelectBody from "./SelectBody";
import currencies from "./currencies";
import Clock from "./Clock";

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
        <Form calculateResult={calculateResult} setAmount={setAmount}>
          <Fieldset>
            <Legend title="Currency converter" />
            <Clock />
            <Input
              amount={amount}
              setAmount={setAmount}
              placeholder="set your PLN amount"
              labelText=" Amount*:"
            />
            <SelectBody
              currency={currency}
              setCurrency={setCurrency}
              labelText="Set currency:"
            />
          </Fieldset>
          <SectionResult resultData={resultData} />
          <Buttons setResult={setResultData} setAmount={setAmount} />
        </Form>
        <Footer />
      </Container>
    </body>
  );
}

export default App;
