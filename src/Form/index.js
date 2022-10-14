import "./style.css";

const onFormSubmit = (event) => {
  event.preventDefault();
};

const Form = ({ children }) => (
  <form onSubmit={onFormSubmit} className="form">
    {children}
  </form>
);

export default Form;
