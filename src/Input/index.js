import { InputStyle, LabelSpan } from "./styled";

const Input = ({ placeholder, labelText, amount, setAmount }) => {
  return (
    <p>
      <label>
        <LabelSpan>{labelText}</LabelSpan>
        <InputStyle
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          min="1"
          name="amount"
          placeholder={placeholder}
          type="number"
          step="any"
          autoFocus
          required
        />
      </label>
    </p>
  );
};

export default Input;
