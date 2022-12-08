import "./style.css";
import React from "react";

const SectionResult = ({ calculateResult }) => {
  return (
    <section className="form__result">
      <span>Result: {calculateResult}</span>
    </section>
  );
};

export default SectionResult;
