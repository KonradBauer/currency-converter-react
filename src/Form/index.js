import "./style.css";

const Form = ({ children, calculateResult, setAmount }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      {children}
    </form>
  );
};

export default Form;
