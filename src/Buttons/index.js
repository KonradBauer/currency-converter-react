import "./style.css";

const Buttons = ({ setResult, setAmount }) => (
  <p>
    <button className="form__button">Calculate</button>

    <button
      className="form__button"
      type="reset"
      onClick={() => {
        setResult("");
        setAmount("");
      }}
    >
      Reset
    </button>
  </p>
);

export default Buttons;
