import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const onMinus = () => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlus = () => {
    setCount((prevValue) => prevValue + 1);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button onButtonClick={onMinus} name="-" />
      </div>
      <p>{count}</p>
      <div className="button-control">
        <Button onButtonClick={onPlus} name="+" />
      </div>
    </div>
  );
}

export default Counter;
