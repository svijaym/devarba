import React, { useState, useEffect } from "react";

import { arr } from "../images/images";
import style from "../css/home.module.css";
import btn from "../css/Button.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductPage from "../components/ProductPage";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Terms from "../components/Terms";
import { useSelector } from "react-redux";

function Home() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);

  const { accepted } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const handleLeft = () => {
    if (i == 0) {
      setI(arr.length - 1);
    } else {
      setI(i - 1);
    }
  };
  const handleRight = () => {
    if (i == arr.length - 1) {
      setI(0);
    } else {
      setI((p) => p + 1);
    }
  };

  useEffect(() => {
    if (!accepted) {
      setShow(true);
    }
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.slider}>
          <div className={style.mainarrows}>
            <div className={style.leftarw} onClick={handleLeft}>
              <FaAngleLeft />
            </div>
            <div className={style.rightarw} onClick={handleRight}>
              <FaAngleRight />
            </div>
          </div>
          <img src={arr[i]} alt={arr[i] + "image"} />
          <div className={style.arraydiv}>
            <div className={style.arrayinnerdiv}>
              {arr?.map((e, ind) =>
                ind === i ? (
                  <img key={ind} className={style.thumbimg} src={e} alt={ind} />
                ) : (
                  <div key={ind} className={style.thumbdiv}></div>
                )
              )}
            </div>
          </div>
        </div>
     
        <br />
        <>
          <ProductPage title="Products" />
        </>
        <div className={style.bottomsection}>
          <div className={btn.btmbtn} onClick={() => navigate("/allproducts")}>
            All Products <AiOutlineDoubleRight />
          </div>
        </div>
      </div>
      {show && <Terms setShow={setShow} />}
    </>
  );
}

export default Home;
