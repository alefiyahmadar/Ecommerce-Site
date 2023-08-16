import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { ProductCard } from "./productCard"
import { useNavigate } from "react-router-dom"

export const GetCart = ()=>{

    const {getProducts  , getCartLength , discount , showCpn , setShowCpn, useReduce , coupan , setCoupan  } = useContext(CartContext)

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
    


    
  

    
   
    


    return(<div style={{marginLeft:"2rem"}} >
        <p>Cart</p>
        <div className="product-grid" style={{ float:"right" , gridTemplateColumns: "repeat(3, 1fr)" , paddingBottom:"2rem" }}> 

       

        {
            getProducts.map((e)=>e.isAddedToCart? <ProductCard {...e }  isCart /> :"" )
        }
        
        
        </div>

        <div style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.20)" , width:"25rem" , position:"fixed"  , float :"right"  , paddingTop:"2rem" , paddingBottom:"2rem" , marginLeft:"2rem"}}>
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
                

        


    </div>)
}