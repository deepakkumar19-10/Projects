import { useState, useEffect } from "react";
import "./Counter.css";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let incCountx = () => {
    setCountx((currCount) => currCount + 1);
  };
  let incCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(
    function printSomething() {
      console.log("this is a side-effect");
    },
    // 1. type Give Array [countx, county],
    [], //2. Empty Array
  );

  return (
    // <div className="counter">
    //   <h3>countx = {countx} </h3>
    //   <button onClick={incCountx}>+1</button>
    //   <h3>county = {county} </h3>
    //   <button onClick={incCounty}>+1</button>
    // </div>

    <div className="counter">
      <div className="counter-box">
        <div className="counter-item">
          <h3>Count X</h3>

          <span>{countx}</span>

          <button onClick={incCountx}>+1</button>
        </div>

        <div className="counter-item">
          <h3>Count Y</h3>

          <span>{county}</span>

          <button onClick={incCounty}>+1</button>
        </div>
      </div>
    </div>
  );
}
