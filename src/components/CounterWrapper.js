import { useCallback, useMemo, useState } from "react";
import FinishBtn from "./FinishBtn";

function CounterWrapper() {
  const [counter, setCounter] = useState(0);

  const [x, setX] = useState(0);
  // const counterRef = useRef(0);

  function incrementCounter() {
    setCounter(counter + 1);
    // counterRef.current = counterRef.current + 1;
  }

  function incrementrX() {
    setX(x + 1);
  }

  const result = useMemo(() => {
    console.log("calculating...");
    return x * 10000;
  }, [x]);

  //   function finish() {
  //     setCounter(counterRef.current);
  //   }

  const finish = useCallback(function () {
    setCounter(0);
  }, []);

  return (
    <>
      <h2>Counter : {counter}</h2>
      <button className="todo-btn" onClick={incrementCounter}>
        Нэгээр нэмэгдүүлэх
      </button>
      <h2>X : {result}</h2>
      <button className="todo-btn" onClick={incrementrX}>
        X ийг Нэгээр нэмэгдүүлэх
      </button>
      <br />
      <br />
      <FinishBtn onClick={finish} />
    </>
  );
}

export default CounterWrapper;
