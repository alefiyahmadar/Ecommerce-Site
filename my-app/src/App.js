import "./App.css";
import {NavLink, Route , Routes} from "react-router-dom"



import { HomePage } from "./pages/Home";
import { ProductList } from "./pages/productList";
import { GetCart } from "./pages/cart";
import { GetWishList } from "./pages/wishlist";
import { useContext } from "react";
import { CartContext } from "./contexts/contextProvider";
import { GetLogin } from "./pages/loginPage";
import { GetSignUp } from "./pages/SignUp";
import { GetUserPage } from "./pages/userPage";
import { AuthWrapper } from "./contexts/AuthWrapper";
import { GetProductDetail } from "./pages/productDetail";
import { CheckOut } from "./pages/checkout";


function App() {

  const {isLoggedin  , useReduce  } = useContext(CartContext)

const userCart = JSON.parse(localStorage.getItem("user")).cart
const userWishList = JSON.parse(localStorage.getItem("user")).wishlist

  return (
    <div className="App">

      <nav className="nav">


      

        <div style={{display:"flex" , float:"right" , justifyContent:"space-around" , paddingRight:"4rem"  }}>


        <p style={{color:"white" , fontSize:"1.5rem" , padding:"1rem" ,paddingLeft:"5rem" , paddingRight:"75rem" ,paddingBottom:"0%", fontWeight:"bold" }}>LiteraryLinx</p>

          
        
        <NavLink to="/cart" style={{ paddingTop:"2rem" , paddingRight:"4rem" }} ><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png" alt="shopping-bag"/><b style={{textDecoration:"none" , color:"white" , display:isLoggedin ? "flex" : "none" }}>
          { userCart.length} / ₹{useReduce}</b></NavLink>

        <NavLink to="/wishlist" style={{  paddingTop:"2rem" }}><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/like--v1.png" alt="like--v1"/><b style={{textDecoration:"none" , color:"white"  }}>{ isLoggedin &&  userWishList.length}</b>  </NavLink>

        
        <NavLink to="/user" style={{  paddingTop:"2rem" ,paddingLeft:"4rem" }}><img width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/user--v1.png" alt="user--v1"/>  </NavLink>
        </div>
      </nav>
    
         
         <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          
          <Route path="/productList" element={
            isLoggedin ? <ProductList/> :<AuthWrapper><ProductList/></AuthWrapper>
          
          }></Route>
          <Route path="/cart" element={  isLoggedin ? <GetCart/> :<AuthWrapper><GetCart/></AuthWrapper>}></Route>
          <Route path="/wishlist" element={ isLoggedin ? <GetWishList/> :<AuthWrapper><GetWishList/></AuthWrapper>}></Route>
          <Route path="/login" element={<GetLogin/>}></Route>
          <Route path="/signup" element={<GetSignUp/>}></Route>
          <Route path="/user" element={ isLoggedin ? <GetUserPage/> :<AuthWrapper><GetUserPage/></AuthWrapper>}></Route>
          <Route path="/individual/:prodId" element={isLoggedin ? <GetProductDetail/> :<AuthWrapper><GetProductDetail/></AuthWrapper>}></Route>
          <Route path="/checkout" element={<CheckOut/>}></Route>
         </Routes>


          
    </div>
  );
}

export default App;
