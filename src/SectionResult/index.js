import { ResultWrapper, FontSpan } from "./styled";
import React from "react";

const SectionResult = ({ resultData }) => {
  const { result, amount, currency } = resultData;

  return (
    <ResultWrapper>
      <span>
        Result:{" "}
        <FontSpan>{result && `${amount} PLN = ${result} ${currency}`}</FontSpan>
      </span>
    </ResultWrapper>
  );
};

export default SectionResult;
