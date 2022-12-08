import React, { useState } from "react";
import "./style.css";
import currencies from "../currencies";

const SelectBody = ({ labelText }) => {
  const [currency, setCurrency] = useState("");
  return (
    <p>
      <label>
        <span className="form__labelText">{labelText}</span>
        <select
          className="form__input"
          value={currency}
          onChange={({ target }) => {
            setCurrency(target.value);
          }}
        >
          {currencies.map((currency) => (
            <option key={currency.key}>{currency.name}</option>
          ))}
        </select>
      </label>
    </p>
  );
};

export default SelectBody;
