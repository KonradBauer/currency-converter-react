import Footer from "./Footer";
import Buttons from "./Buttons";
import Input from "./Input";
import Legend from "./Legend";
import Label from "./Label";

function App() {
  return (
    <body>
      <div className="container">
        <form className="form">
          <fieldset className="form__fieldset">
            <Legend title="Currency converter" />
            <Input />
            <Label />
          </fieldset>
          <section className="form__result">
            <span>Result:</span>
          </section>
          <Buttons />
        </form>
        <Footer />
      </div>
    </body>
  );
}

export default App;
