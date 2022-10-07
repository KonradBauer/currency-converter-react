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
  return (
    <body>
      <Container>
        <Form>
          <Fieldset>
            <Legend title="Currency converter" />
            <Input placeholder="set your PLN amount" labelText=" Amount*:" />
            <SelectBody labelText="Set currency:" />
          </Fieldset>
          <SectionResult />
          <Buttons />
        </Form>
        <Footer />
      </Container>
    </body>
  );
}

export default App;
