import "./style.css";
import React, { useState } from "react";

const Input = ({ placeholder, labelText, amount, setAmount }) => {
  return (
    <p>
      <label>
        <span className="form__labelText">{labelText}</span>
        <input
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          className="form__input"
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
