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

function App() {
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    setResult((result = amount / currency));
  };

  return (
    <body>
      <Container>
        <Form calculateResult={calculateResult}>
          <Fieldset>
            <Legend title="Currency converter" />
            <Input placeholder="set your PLN amount" labelText=" Amount*:" />
            <SelectBody labelText="Set currency:" />
          </Fieldset>
          <SectionResult calculateResult={calculateResult} />
          <Buttons />
        </Form>
        <Footer />
      </Container>
    </body>
  );
}

export default App;
