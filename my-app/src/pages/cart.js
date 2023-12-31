import { useContext  , React} from "react"
import { CartContext } from "../contexts/contextProvider"


import { NavLink,  useNavigate } from "react-router-dom"

import { CartCard } from "../cards/CartCard"
import { ProductCard } from "../cards/productCard"

export const GetCart = ()=>{

    const { getCartLength , discount , showCpn , setShowCpn, useReduce , coupan , setCoupan      } = useContext(CartContext)

    const navigate = useNavigate()

    const coupanHandler = (e)=>{

        if(e.target.value === "20"){

            const getAmt = (useReduce*20)/100
            setCoupan(getAmt)
            setShowCpn("NewUser")
        } else if(e.target.value === "50"){

            const getHalf = (useReduce*50)/100
            setCoupan(getHalf)
            setShowCpn("SummerSale")
        }else{

            setCoupan(0)
        }
    }
    const RemoveCpnHandler = ()=>{

        setCoupan(0)
    }
    


    
  

    
    const userData = [JSON.parse(localStorage.getItem("user"))]

    
    



    return(<div className="cartContainer"  >
        <p >Cart</p>

        <ul className={window.innerWidth > 450 ? "product-grid" :"cartProduct"} > 

       

        {
           
            window.innerWidth > 450 ?
              userData.map((e)=> e.cart.length > 0 ? e.cart.map((e)=>  <ProductCard {...e}  />): <h2 >Cart is empty! <NavLink style={{textDecoration:"none"}} to="/productList">Back to store</NavLink></h2>)

              :  userData.map((e)=> e.cart.length > 0 ? e.cart.map((e)=>  <CartCard {...e}  />): <h2 >Cart is empty! <NavLink style={{textDecoration:"none"}} to="/productList">Back to store</NavLink></h2>)
        }
        
        
        </ul>

        <div className="cartBill" style={{ display:userData.map((e)=>e.cart.length > 0 ? "block" : "none" )}}>
                    <select onChange={coupanHandler}  value="k" style={{ marginBottom:"1rem"}}>
                        <option value="all">Apply Coupan</option>
                        <option value="20"> 20%off:NewUser</option>
                        <option value="50">50%off:SummerSale</option>
                    </select>
                    <hr></hr>
                    
                      <h3>Price Details</h3>
                      <hr></hr>


                <p>Price(Items {getCartLength.length}): {useReduce }</p>
                <p>Discount: {discount} </p>
                <p  >Coupan Discount: {coupan === 0 ? "0" :coupan}</p>
                <p>Delivery Charges : FREE</p>
                <p style={{display:coupan > 0 ? "inline" :"none" , padding:"0rem"}}>{ showCpn}</p>
                <button onClick={RemoveCpnHandler} style={{display:coupan > 0 ? "inline" :"none" , border:"none" , backgroundColor:"#faf5ff" ,padding:"0rem"}}><span role="img" aria-label="">❌</span></button>
                <hr></hr>
                <h4><b>Total Price: {useReduce - discount - coupan}</b ></h4>
                <hr></hr>

                <p style={{color:"red"}}>You'll save {discount + coupan } on this order</p>
                <button className="removeCart" onClick={()=>navigate("/checkout")} style={{fontSize:"large" , color:"red" ,borderRadius:"0.5rem", backgroundColor:"white" , border:"1px solid red" , padding:"0.5rem" , fontWeight:"bold"}}> Checkout</button>

                
                </div>
                

        
                


    </div>)
}