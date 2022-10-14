import "./style.css";
import React, { useState } from "react";

const Input = ({ placeholder, labelText }) => {
  const [number, setNumber] = useState("");

  return (
    <p>
      <label>
        <span className="form__labelText">{labelText}</span>
        <input
          value={number}
          onChange={({ target }) => setNumber(target.value)}
          className="form__input"
          min="1"
          name="amount"
          placeholder={placeholder}
          type="number"
          step="any"
          autofocus
          required
        />
      </label>
    </p>
  );
};

export default Input;
