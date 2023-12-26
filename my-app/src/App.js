import "./App.css";
import {React} from "react"
import {NavLink, Route , Routes} from "react-router-dom"
import { AlertMessage } from "./pages/alertMsg";



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

  const {isLoggedin  , useReduce , SearchBarHandler  ,showFilter , setShowFilter , showAlert , alertMsg , handleAlertClose } = useContext(CartContext)

const userCart = JSON.parse(localStorage.getItem("user")).cart
const userWishList = JSON.parse(localStorage.getItem("user")).wishlist

  return (
    <div className="App"   >

      <nav className="nav"   >


      
    
        <div className="nav-container" >


        <p className="navHeader" >  <span style={{paddingRight:"0.5rem" , display: window.location.pathname === "/productList" ? "inline" :"none"}} className="navMenue" onClick={showFilter ? ()=>setShowFilter(false): ()=>setShowFilter(true)} ><img width="15" height="15"  src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png" alt="menu--v6"/></span>LiteraryLinx </p>

       


        




    

          <span className="navBtn"> 
        
        <NavLink className="cartNav" to="/cart" style={{ paddingTop:"2rem" , paddingRight:"1rem" , textDecoration:"none"}} ><img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png" alt="shopping-bag"/><span style={{textDecoration:"none" , color:"white" , display:isLoggedin && userCart.length > 0  ? "flex" : "none" ,  position: 'absolute' ,top:"20%" , padding:"0%" , margin:"0%" }}>
          { userCart.length}</span>
          <span style={{ display:isLoggedin  && userCart.length > 0 ? "flex" : "none" , color:"white" , position:"absolute" , top:"90%"  }}>₹{useReduce}</span></NavLink>

        <NavLink to="/wishlist" style={{  paddingTop:"2rem" , textDecoration:"none" }}><img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/like--v1.png" alt="like--v1"/><span style={{textDecoration:"none" , color:"white" , position:"absolute" ,  display:isLoggedin && userWishList.length > 0 ? "flex" : "none"   , top:"3%" , left:"20%"  }}>{ isLoggedin &&  userWishList.length}</span>  </NavLink>

        
        <NavLink to="/user" style={{  paddingTop:"2rem" ,paddingLeft:"1rem"  }}><img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/user--v1.png" alt="user--v1"/>  </NavLink>

        </span>


        
        <input className="navInput" onChange={(e)=>SearchBarHandler(e)} placeholder="Search for product"   type="search"  /> 
        </div>
      </nav>
      {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
            }
    
         
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
