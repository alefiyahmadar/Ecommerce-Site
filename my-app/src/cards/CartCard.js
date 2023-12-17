import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { useNavigate } from "react-router-dom"

export const CartCard =(item)=>{
const {_id ,  
    title,
   author,
   price,
   image  , quantity } = item

   const {incrementHandler , decrementHandler , AddToCartHandler , RemoveFromCart   } = useContext(CartContext)

   const navigate = useNavigate()

   

   return(<div className="cart">
    <ul>
        <li>
            <div >

                <div className="cartDiv">

            <img  src={image} alt="" onClick={()=>navigate(`/individual/${_id}`)}></img>
            <div className="cardInfo">
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>₹{price - 50} <span style={{   color:"grey" , textDecoration:"line-through" }}>₹{price}</span></p>

                <span className="qty"><button  onClick={()=>incrementHandler(_id)}>+</button>  <span className="qtyNum"> {quantity}</span> <button onClick={()=>decrementHandler(_id)}>-</button></span>
                </div>
                </div>

                <hr></hr>
                

                
        <button className="cartCardBtn" onClick={JSON.parse(localStorage.getItem("user")).cart.find((e)=>e.title === title)   ? ()=>RemoveFromCart(item) : ()=>AddToCartHandler(item)}>{JSON.parse(localStorage.getItem("user")).cart.find((e)=>e.title === title) ? "Remove From Cart" : "Add to cart"}</button>
            </div>

            
        </li>
        
    </ul>
   </div>)



}