import Footer from "./Footer";
import Buttons from "./Buttons";
import Input from "./Input";

function App() {
  return (
    <body>
      <div className="container">
        <form className="form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Currency converter</legend>
            <Input />
            <label>
              <span className="form__labelText">Set currency:</span>
              <select className="form__input" name="currency">
                <option value="EUR">Euro</option>
                <option value="USD">US Dollar</option>
                <option value="RUB">Ruble</option>
              </select>
            </label>
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
