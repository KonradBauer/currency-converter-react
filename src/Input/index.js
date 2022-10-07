import "./style.css";

const Input = ({ placeholder }) => (
  <p>
    <label>
      <span className="form__labelText"> Amount*:</span>
      <input
        className="form__input"
        min="1"
        name="amount"
        placeholder={placeholder}
        type="number"
        step="any"
        autofocus
        required
      />
    </label>
  </p>
);

export default Input;
