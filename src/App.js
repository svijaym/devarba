import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { getProducts } from "./Store/product/product.action";

function App() {
  const dispatch =useDispatch()
  
  useEffect(() => {
    dispatch(getProducts())
   }, []);
 
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />  
    </div>
  );
}

export default App;
