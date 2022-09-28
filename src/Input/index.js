import "./style.css";

const Input = () => (
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
);

export default Input;
