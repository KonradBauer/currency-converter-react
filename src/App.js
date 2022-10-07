import Footer from "./Footer";
import Buttons from "./Buttons";
import Input from "./Input";
import Legend from "./Legend";
import Form from "./Form";
import Container from "./Container";
import Fieldset from "./Fieldset";
import SectionResult from "./SectionResult";

function App() {
  return (
    <body>
      <Container>
        <Form>
          <Fieldset>
            <Legend title="Currency converter" />
            <Input placeholder="set your PLN amount" />
            <p>
              <label>
                <span className="form__labelText"> Set currency:</span>
                <select className="form__input" name="currency">
                  <option value="EUR">Euro</option>
                  <option value="USD">US Dollar</option>
                  <option value="RUB">Ruble</option>
                </select>
              </label>
            </p>
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
