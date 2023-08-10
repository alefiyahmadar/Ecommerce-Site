import "./App.css";
import {NavLink, Route , Routes} from "react-router-dom"


import { HomePage } from "./pages/Home";
import { ProductList } from "./pages/productList";
import { GetCart } from "./pages/cart";
import { GetWishList } from "./pages/wishlist";


function App() {
  return (
    <div className="App">

      <nav className="nav">
        <NavLink to="/productList" >ProductList</NavLink>
        <NavLink to="/cart" >Cart</NavLink>
        <NavLink to="/wishlist">wishlist  </NavLink>
      </nav>
    
         
         <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/productList" element={<ProductList/>}></Route>
          <Route path="/cart" element={<GetCart/>}></Route>
          <Route path="/wishlist" element={<GetWishList/>}></Route>
         </Routes>


          
    </div>
  );
}

export default App;
