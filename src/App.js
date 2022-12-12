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

function App() {
  const [result, setResult] = useState("");
  const [currency, setCurrency] = useState(4.87);
  const [amount, setAmount] = useState("");

  const calculateDivision = amount / currency;

  const calculateResult = () => {
    setResult(calculateDivision.toFixed(2));
  };

  return (
    <body>
      <Container>
        <Form calculateResult={calculateResult} setAmount={setAmount}>
          <Fieldset>
            <Legend title="Currency converter" />
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
          <SectionResult result={result} />
          <Buttons setResult={setResult} setAmount={setAmount} />
        </Form>
        <Footer />
      </Container>
    </body>
  );
}

export default App;
