import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);
  const onADD = () => {
    dispatch({
      type: "ADD",
      payload: 1,
    });
  };
  const onDEC = () => {
    dispatch({
      type: "DEC",
      payload: 1,
    });
  };
  const ADDFIVE = () => {
    dispatch({
      type: "FIVE",
      payload: counter,
    });
  };
  return (
    <div>
      <h1>
        Count <span>{counter}</span>
      </h1>
      <button onClick={onADD}>++</button>
      <button onClick={onDEC}>-</button>
      <button onClick={ADDFIVE}>ADD 5</button>
    </div>
  );
};

export default Counter;
