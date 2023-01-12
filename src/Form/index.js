import { Wrapper } from "./styled";
import Buttons from "../Buttons";
import Input from "../Input";
import Legend from "../Legend";
import Fieldset from "../Fieldset";
import SectionResult from "../SectionResult";
import SelectBody from "../SelectBody";
import Clock from "../Clock";
import Loading from "../Loading";
import useCurrencies from "../useCurrencies";

const Form = ({
  calculateResult,
  amount,
  setAmount,
  currency,
  setCurrency,
  resultData,
  setResultData,
  currenciesData,
}) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  const loading = useCurrencies();

  if (loading) {
    <Loading />;
  } else {
    return null;
  }

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend title="Currency converter" />
        <Clock />
        <Input
          amount={amount}
          setAmount={setAmount}
          placeholder="set your PLN amount"
          labelText="Amount*:"
        />
        <SelectBody
          currency={currency}
          setCurrency={setCurrency}
          currenciesData={currenciesData}
          labelText="Set currency:"
        />
      </Fieldset>
      <SectionResult resultData={resultData} />
      <Buttons setResult={setResultData} setAmount={setAmount} />
    </Wrapper>
  );
};

export default Form;
