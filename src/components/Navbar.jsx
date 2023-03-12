import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../Store/auth/auth.action";

function Navbar() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const { data, flag } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    let arr = data?.filter((e) => e.added === true);
    setTotal(arr.length);
  }, [flag]);
  function navigateTo(route) {
    if (route == "/logout") {
      dispatch(handleLogout());
      alert("logged out");
    } else {
      navigate(route);
    }
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.leftnav}>
        <button onClick={() => navigate("/")}>ARBA</button>{" "}
      </div>
      <div className={styles.rightnav}>
        <div className={styles.cartdiv} onClick={() => navigate("/cart")}>
          <FaShoppingCart fontSize={"1.5em"} className={styles.carticon} />
          <span>{total}</span>
        </div>
        <div className={styles.profile}>
          <img
            onClick={() => navigate("/profile")}
            src="https://lh3.googleusercontent.com/ogw/AAEL6sgk_M8N-tL3Z6hVAEcQdgmEaFDzidN6DgitiZRF5A=s32-c-mo"
            alt=""
          />

          <select name="" id="" onChange={(e) => navigateTo(e.target.value)}>
            <option value="/logout">Logout</option>
            <option value="/login">Login</option>

            <option value="/profile">Profile </option>
            <option value="/code">Code Challenge</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
