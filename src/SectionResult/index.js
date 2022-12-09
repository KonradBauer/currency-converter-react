import "./style.css";
import React from "react";

const SectionResult = ({ result }) => {
  return (
    <section className="form__result">
      <span>Result: {result.toFixed(2)}</span>
    </section>
  );
};

export default SectionResult;
