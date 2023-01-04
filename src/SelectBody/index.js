import { LabelSpan, CurrencySelect } from "./styled";
import useCurrencies from "../useCurrencies";

const SelectBody = ({ labelText, currency, setCurrency }) => {
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
          {useCurrencies.map((currency) => (
            <option key={currency.key} value={currency.value}>
              {currency.name}
            </option>
          ))}
        </CurrencySelect>
      </label>
    </p>
  );
};

export default SelectBody;
