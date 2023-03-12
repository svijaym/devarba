import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/signup.module.css";
function Signup() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    username: "",
    password: "",
    
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
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
          <p>Please fill below details to register</p>
          <form action="">
            <input
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
              required
            />

            <input
              placeholder="Fullname"
              name="username"
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              placeholder="Email"
              name="username"
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              placeholder="Password"
              name="username"
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              placeholder="Confirm Password"
              name="username"
              onChange={(e) => handleChange(e)}
              required
            />

            <br />
            <button
              type="submit"
              className={styles.submitbtn}
              onClick={() => {
                navigate("/login");
              }}
            >
              Register
            </button>
          </form>
          <div className={styles.note}>
            <h5>
              Already have an account?{" "}
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
