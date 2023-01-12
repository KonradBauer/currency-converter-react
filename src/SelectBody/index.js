import { LabelSpan, CurrencySelect } from "./styled";

const SelectBody = ({ labelText, currency, setCurrency, currenciesData }) => {
  return (
    <p>
      <label>
        <LabelSpan>{labelText}</LabelSpan>
        <CurrencySelect
          value={currency}
          onChange={({ target }) => {
            setCurrency(target.value);
          }}
        >
          {Object.keys({ currenciesData }).map((currency) => (
            <option value={currency.rates}>{currency}</option>
          ))}
        </CurrencySelect>
      </label>
    </p>
  );
};

export default SelectBody;
