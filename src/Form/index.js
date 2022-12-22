import { Wrapper } from "./styled";

const Form = ({ children, calculateResult }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return <Wrapper onSubmit={onFormSubmit}>{children}</Wrapper>;
};

export default Form;
