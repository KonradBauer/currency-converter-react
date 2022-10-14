import "./style.css";
import React, { useState } from "react";

const Input = ({ placeholder, labelText }) => {
  const [input, setInput] = useState("");

  return (
    <p>
      <label>
        <span className="form__labelText">{labelText}</span>
        <input
          value={input}
          onChange={({ target }) => setInput(target.value)}
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
