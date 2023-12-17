import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { useNavigate } from "react-router-dom"
import { AlertMessage } from "./alertMsg"

export const ProductCard =(item)=>{


    const {_id ,  
     title,
    author,
    price,
    image , rating , quantity , isCart}=item

  

    const{ AddToCartHandler ,RemoveFromCart ,AddToWishlistHandler , RemoveFromWishlist , incrementHandler , decrementHandler   , cart , showAlert , alertMsg , handleAlertClose } = useContext(CartContext)

const navigate = useNavigate()

console.log(cart)












    return(<div key={_id} className="product-card"  >

{
                showAlert &&    <AlertMessage  message={alertMsg} onClose={handleAlertClose} />
            }

    <span className="heartSpan">
      <button  className="heart-button" style={{opacity: JSON.parse(localStorage.getItem("user")).wishlist.find((e)=>e.title === title) ? "1" :"0.1"}} onClick={ JSON.parse(localStorage.getItem("user")).wishlist.find((e)=>e.title === title) ? ()=>RemoveFromWishlist(item): ()=>AddToWishlistHandler(item)}></button>
      </span>
      <span style={{display:"flex" , marginBlock:"0%" , justifyContent:"right"}} > <p>{rating}⭐</p></span>

       

        <img  src={image} alt="" onClick={()=>navigate(`/individual/${_id}`)}></img>
        
        <h3  className="item-title" >{title}  </h3>
        <h4 className="item-author">{author}</h4>
        <p className="item-price">₹{price - 50}<span style={{color:"grey" , textDecoration:"line-through"}}>₹{price}</span></p>
    
        
        {
            isCart && 
        
            <span className="qty"><button  onClick={()=>incrementHandler(_id)}>+</button>  <span className="qtyNum"> {quantity}</span> <button onClick={()=>decrementHandler(_id)}>-</button></span>

       }


        <button className="Cartbtn" onClick={JSON.parse(localStorage.getItem("user")).cart.find((e)=>e.title === title)   ? ()=>RemoveFromCart(item) : ()=>AddToCartHandler(item)}>{JSON.parse(localStorage.getItem("user")).cart.find((e)=>e.title === title) ? "Remove From Cart" : "Add to cart"}</button>
        
       
    
        </div>
    )


    
}

