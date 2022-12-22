import { Button } from "./styled";

const Buttons = ({ setResult, setAmount }) => (
  <p>
    <Button>Calculate</Button>

    <Button
      type="reset"
      onClick={() => {
        setResult("");
        setAmount("");
      }}
    >
      Reset
    </Button>
  </p>
);

export default Buttons;
