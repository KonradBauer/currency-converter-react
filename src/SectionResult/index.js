import "./style.css";
import React from "react";

const SectionResult = ({ resultData }) => {
  const { result, amount, currency } = resultData;

  return (
    <section className="form__result">
      <span>
        Result:{" "}
        <span className="section__fontStyle">
          {result && `${amount} PLN = ${result} ${currency}`}
        </span>
      </span>
    </section>
  );
};

export default SectionResult;
