import "./style.css";

const SelectBody = ({ labelText }) => (
  <p>
    <label>
      <span className="form__labelText">{labelText}</span>
      <select className="form__input" name="currency">
        <option value="EUR">Euro</option>
        <option value="USD">USD</option>
        <option value="RUB">Ruble</option>
        <option value="CHF">Franc</option>
      </select>
    </label>
  </p>
);

export default SelectBody;
