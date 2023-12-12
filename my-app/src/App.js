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

  const {isLoggedin  , useReduce , SearchBarHandler  } = useContext(CartContext)

const userCart = JSON.parse(localStorage.getItem("user")).cart
const userWishList = JSON.parse(localStorage.getItem("user")).wishlist

  return (
    <div className="App">

      <nav className="nav">


      
    
        <div style={{display:"flex" , float:"right" , justifyContent:"space-around" , paddingRight:"4rem"  }}>


        <p style={{color:"white" , fontSize:"2rem" , padding:"1rem" ,paddingLeft:"5rem" , paddingRight:"70rem" ,paddingBottom:"0%", fontWeight:"bold" }}>LiteraryLinx <input onChange={(e)=>SearchBarHandler(e)} placeholder="Search for product"   type="search" style={{ display:"flex" , margin:"auto" , marginLeft:"17%" , width:"30%" , padding:"0.6rem"  , border:"none" , borderRadius:"1rem" , position:"absolute" , top:"8%"   }} /> </p>

    

          
        
        <NavLink to="/cart" style={{ paddingTop:"2rem" , paddingRight:"2rem" , textDecoration:"none"}} ><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png" alt="shopping-bag"/><span style={{textDecoration:"none" , color:"white" , display:isLoggedin && userCart.length > 0  ? "flex" : "none" ,  position: 'absolute' ,top:"3%" , padding:"0%" , margin:"0%" }}>
          { userCart.length}</span>
          <span style={{ display:isLoggedin  && userCart.length > 0 ? "flex" : "none" , color:"white" , position:"absolute" , right:"15.5%" }}>₹{useReduce}</span></NavLink>

        <NavLink to="/wishlist" style={{  paddingTop:"2rem" , textDecoration:"none" }}><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/like--v1.png" alt="like--v1"/><span style={{textDecoration:"none" , color:"white" , position:"absolute" ,  display:isLoggedin && userWishList.length > 0 ? "flex" : "none"  , right:"10%" , top:"3%"  }}>{ isLoggedin &&  userWishList.length}</span>  </NavLink>

        
        <NavLink to="/user" style={{  paddingTop:"2rem" ,paddingLeft:"4rem"  }}><img width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/user--v1.png" alt="user--v1"/>  </NavLink>
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
