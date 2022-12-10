import "./style.css";

const Buttons = ({ setResult }) => (
  <p>
    <>
      <button className="form__button">Calculate</button>

      <button
        className="form__button"
        type="reset"
        onClick={() => setResult("")}
      >
        Reset
      </button>
    </>
  </p>
);

export default Buttons;
