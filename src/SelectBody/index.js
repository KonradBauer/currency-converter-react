import "./style.css";
import currencies from "../currencies";

const SelectBody = ({ labelText }) => {
  return (
    <p>
      <label>
        <span className="form__labelText">{labelText}</span>
        <select className="form__input">
          {currencies.map((currency) => (
            <option key={currency.key}>{currency.name}</option>
          ))}
        </select>
      </label>
    </p>
  );
};

export default SelectBody;
