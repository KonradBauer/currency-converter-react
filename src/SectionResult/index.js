import "./style.css";
import React from "react";

const SectionResult = ({ result }) => {
  return (
    <section className="form__result">
      <span>
        Result: <span className="section__fontStyle">{result}</span>
      </span>
    </section>
  );
};

export default SectionResult;
