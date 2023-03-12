import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";
import CodeChallenge from "../Pages/CodeChallenge";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyCartPage from "../Pages/MyCartPage";
import Profilepage from "../Pages/Profilepage";
import Signup from "../Pages/Signup";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<MyCartPage />} />
      <Route path="/code" element={<CodeChallenge />} />
      <Route path="/profile" element={<Profilepage />} />
      <Route path="/allproducts" element={<AllProducts />} />
    </Routes>
  );
};

export default AllRoutes;
