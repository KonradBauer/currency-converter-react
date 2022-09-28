import "./style.css";

const Label = () => (
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
);

export default Label;
