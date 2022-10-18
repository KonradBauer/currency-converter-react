import "./style.css";
import Form from "../Form";

const Buttons = () => (
  <p>
    <>
      <button className="form__button">Calculate</button>

      <button className="form__button" type="reset" onClick={() => Form.reset}>
        Reset
      </button>
    </>
  </p>
);

export default Buttons;
