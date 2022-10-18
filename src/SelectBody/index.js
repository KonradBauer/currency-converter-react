import "./style.css";
import "../currencies";

const SelectBody = ({ labelText, currencies }) => {
  return (
    <p>
      <label>
        <span className="form__labelText">{labelText}</span>
        <select className="form__input" name="currency">
          {currencies.map((currency) => (
            <option>{currency.name}</option>
          ))}
        </select>
      </label>
    </p>
  );
};

export default SelectBody;
