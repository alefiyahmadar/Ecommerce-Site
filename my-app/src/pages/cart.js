import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { ProductCard } from "./productCard"
import { NavLink,  useNavigate } from "react-router-dom"
import { AlertMessage } from "./alertMsg"

export const GetCart = ()=>{

    const { getCartLength , discount , showCpn , setShowCpn, useReduce , coupan , setCoupan  , showAlert , alertMsg , handleAlertClose    } = useContext(CartContext)

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

    
    



    return(<div style={{marginLeft:"2rem"}} >
        <p style={{fontSize:"1.5rem"}}>Cart</p>

        <div className="product-grid cartProduct" > 

       

        {
           

              userData.map((e)=> e.cart.length > 0 ? e.cart.map((e)=>  <ProductCard {...e} isCart />): <h2 style={{display:"flex" , width:"50rem" , justifyContent:"center" , paddingTop:"4rem"}}>Cart is empty! <NavLink style={{textDecoration:"none"}} to="/productList">Back to store</NavLink></h2>)
        }
        
        
        </div>

        <div className="cartBill" style={{ display:userData.map((e)=>e.cart.length > 0 ? "block" : "none" )}}>
                    <select onChange={coupanHandler}  value="k" style={{ marginBottom:"1rem"}}>
                        <option value="all">Apply Coupan</option>
                        <option value="20"> 20%off:NewUser</option>
                        <option value="50">50%off:SummerSale</option>
                    </select>
                    <hr></hr>
                    
                      <h2>Price Details</h2>
                      <hr></hr>


                <p>Price(Items {getCartLength.length}): {useReduce }</p>
                <p>Discount: {discount} </p>
                <p  >Coupan Discount: {coupan === 0 ? "0" :coupan}</p>
                <p>Delivery Charges : FREE</p>
                <p style={{display:coupan > 0 ? "inline" :"none" , padding:"0.5rem"}}>{ showCpn}</p>
                <button onClick={RemoveCpnHandler} style={{display:coupan > 0 ? "inline" :"none" , border:"none" , backgroundColor:"#faf5ff" ,padding:"0.5rem"}}>❌</button>
                <hr></hr>
                <p><b>Total Price: {useReduce - discount - coupan}</b ></p>
                <hr></hr>

                <p style={{color:"red"}}>You'll save {discount + coupan } on this order</p>
                <button className="removeCart" onClick={()=>navigate("/checkout")} style={{fontSize:"large" , color:"red" ,borderRadius:"0.5rem", backgroundColor:"white" , border:"1px solid red" , padding:"0.5rem" , fontWeight:"bold"}}> Checkout</button>

                
                </div>
                

        
                {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
            }


    </div>)
}