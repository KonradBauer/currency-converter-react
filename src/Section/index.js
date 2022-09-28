import "./style.css";

const Section = ({ children, text }) => (
  <span className="form__result">
    {children} {text}
  </span>
);

export default Section;
