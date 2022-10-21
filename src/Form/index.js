import "./style.css";

const onFormSubmit = (event) => {
  event.preventDefault();
};

const Form = ({ children }) => {
  return (
    <form onSubmit={onFormSubmit} className="form">
      {children}
    </form>
  );
};

export default Form;
