import Footer from "./Footer";
import Buttons from "./Buttons";
import Input from "./Input";
import Legend from "./Legend";
import Label from "./Label";
import Form from "./Form";
import Container from "./Container";

function App() {
  return (
    <body>
      <Container>
        <Form>
          <fieldset className="form__fieldset">
            <Legend title="Currency converter" />
            <Input />
            <Label />
          </fieldset>
          <section className="form__result">
            <span>Result:</span>
          </section>
          <Buttons />
        </Form>
        <Footer />
      </Container>
    </body>
  );
}

export default App;
