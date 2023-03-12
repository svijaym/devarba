import React, { useEffect, useState } from "react";
import style from "../css/profile.module.css";
import btn from "../css/Button.module.css";
import Terms from "../components/Terms";

function Profilepage() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, [show]);
  return (
    <div>
      <div className={style.profile}>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&pid=Api&P=0"
          alt="Profile"
        />
        <h3>mor_2314</h3>
        <p>mor_2314@gmail.com</p>
      </div>
      <div className={style.line}></div>
      <div className={style.btn}>
        <div className={btn.btmbtn} onClick={() => setShow(true)}>
          See T&C
        </div>
      </div>
      {show && <Terms />}
    </div>
  );
}

export default Profilepage;
