import React from "react";
import style from "../css/Terms.module.css";
import btn from "../css/Button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handleTerms } from "../Store/auth/auth.action";
export default function Terms({ setShow }) {
  const dispatch = useDispatch();
  const { accepted } = useSelector((store) => store.auth);
  return (
    <div className={style.termsdiv}>
      <div className={style.termsContainer}>
        <h3>TERMS AND CONDITION</h3>
        <p>
          ArBa Development Studios is here to provide you with support
          throughout your entire journey, from initial planning and
          brainstorming, through the build and launch, all the way to continued
          maintenance and growth!
        </p>
        <p>
          We provide top quality web, software, app, and hardware development
          and testing for companies around the world. Our industry leading team
          has extensive experience with ground up API development and App
          creation for iOS, Android and Windows, full website design and
          building, software and hardware integration, firmware development,
          hardware configuration, and in house graphic design capabilities.
        </p>
        <p>
          We are a globally trusted brand with clients around the world. Our
          dedicated team in the UK and India work to the highest professional
          standards to make sure your goal is realized.
        </p>
        <div className={style.termsbtns}>
          <div className={btn.btmbtn} onClick={() => setShow(false)}>
            CANCEL
          </div>
          <div
            className={btn.btmbtn}
            onClick={() => {
              dispatch(handleTerms());
              setShow(false);
            }}
          >
            ACCEPT
          </div>
        </div>
      </div>
    </div>
  );
}
