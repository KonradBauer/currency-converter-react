import Footer from "./Footer";

function App() {
  return (
    <body>
      <div className="container">
        <form className="form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Currency converter</legend>
            <p>
              <label>
                <span className="form__labelText">Amount*:</span>
                <input
                  className="form__input"
                  min="1"
                  name="amount"
                  placeholder="set your PLN amount"
                  type="number"
                  step="any"
                  autofocus
                  required
                />
              </label>
            </p>
            <p>
              <label>
                <span className="form__labelText">Set currency:</span>
                <select className="form__input" name="currency">
                  <option value="EUR">Euro</option>
                  <option value="USD">US Dollar</option>
                  <option value="RUB">Ruble</option>
                </select>
              </label>
            </p>
          </fieldset>
          <section className="form__result">
            <span>Result:</span>
          </section>
          <p>
            <button className="form__button">Calculate</button>
            <button className="form__button" type="reset">
              Reset
            </button>
          </p>
        </form>
        <Footer />
      </div>
    </body>
  );
}

export default App;
