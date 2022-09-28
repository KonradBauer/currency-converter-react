import Footer from "./Footer";
import Buttons from "./Buttons";
import Input from "./Input";
import Legend from "./Legend";
import Label from "./Label";
import Form from "./Form";
import Container from "./Container";
import Fieldset from "./Fieldset";
import Section from "./Section";

function App() {
  return (
    <body>
      <Container>
        <Form>
          <Fieldset>
            <Legend title="Currency converter" />
            <Input placeholder="Set your PLN amount" />
            <Label />
          </Fieldset>
          <Section text="Result:"></Section>
          <Buttons />
        </Form>
        <Footer />
      </Container>
    </body>
  );
}

export default App;
