import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../css/signup.module.css";
import { UserLogin } from "../Store/auth/auth.action";

// username: "mor_2314",
// password: "83r5^_",
function Login() {
  const [data, setdata] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, token } = useSelector((store) => store.auth);

  function handleChange(e) {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }

  function handleLogin(e) {
    e.preventDefault();
    if (data.username === "mor_2314" && data.password === "83r5^_") {
      dispatch(UserLogin(data));
      navigate("/");
    } else {
      alert(
        `wrong credentials it should be username:"mor_2314", password: "83r5^_"`
      );
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.topcircle}></div>
        <div className={styles.btmcircle}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={(styles.child, styles.right)}>
        <div className={styles.formdiv}>
          <div className={styles.round}></div>
          <h2>ArBa</h2>
          <p>Please fill below details to proceede further</p>
          <form action="">
            <input
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
            />

            <input
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <button
              type="submit"
              onClick={(e) => handleLogin(e)}
              className={styles.submitbtn}
            >
              Login
            </button>
          </form>
          <div className={styles.note}>
            <h5>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
