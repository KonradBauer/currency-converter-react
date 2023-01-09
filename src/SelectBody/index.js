import { LabelSpan, CurrencySelect } from "./styled";
import useCurrencies from "../useCurrencies";

const SelectBody = ({ labelText, currency, setCurrency }) => {
  const currenciesData = useCurrencies();

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
          {Object.keys(currenciesData).map((currency) => (
            <option key={currency.name} value={currency.rates}>
              {currency.name}
            </option>
          ))}
        </CurrencySelect>
      </label>
    </p>
  );
};

export default SelectBody;
