import "./style.css";

const Input = ({ placeholder, labelText }) => (
  <p>
    <label>
      <span className="form__labelText">{labelText}</span>
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
