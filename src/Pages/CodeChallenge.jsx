import { useState } from "react";
import style from "../css/coding.module.css";

function CodeChallenge() {
  const [values, setValues] = useState("");
  const handleSubmit = () => {
    console.log("code submitted");
  };
  return (
    <div className={style.codediv}>
      <p className={style.head}>Code Challenge</p>
      <div className={style.question}>
        <p>write a function:</p>
        <p>function soliution(A)</p>
        <p>
          that, given array A of N integers, returns the smallest positive
          integer n greater than 0 that does not occur in A.
        </p>
        <p>For example, given A=[1,3,6,4,1,2 ],the function should return 5 </p>
        <p>given A =[1,2,3] function should return 4</p>
        <p>given A =[-1,-3] function should return 1</p>

        <p>
          write efficient algorithm within the range N, [-1,000,000,1,000,000]
        </p>
      </div>
      <p className={style.head}>Data Collection</p>
      <div className={style.dataCollection}>
        <div className={style.input}>
          <input type="text" onChange={(e) => setValues(e.target.value)} />
          <button onClick={() => handleSubmit()}>Print Result</button>
          <p>Enter the values with comma(,) seperator eg: 1,3,6,4,1,2</p>
        </div>
      </div>
      <p className={style.head}>Output</p>
      <div className={style.input}>
        <button>4</button>
      </div>
    </div>
  );
}

export default CodeChallenge;
