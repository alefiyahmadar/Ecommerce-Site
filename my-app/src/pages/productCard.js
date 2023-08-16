import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { useNavigate } from "react-router-dom"

export const ProductCard =(item)=>{

    const {_id ,  
     title,
    author,
    price,
    
    isAddedToCart,
    isWished, image , rating , quantity , isCart}=item

    const{ AddToCartHandler ,RemoveFromCart ,AddToWishlistHandler , RemoveFromWishlist , incrementHandler , decrementHandler } = useContext(CartContext)

const navigate = useNavigate()





    return(<div key={_id} className="product-card"  >

      <div style={{display:"flex" , justifyContent:"space-between"}}>
      <button className="heart-button" style={{opacity:isWished ? "1" :"0.1"}} onClick={ isWished ? ()=>RemoveFromWishlist(item): ()=>AddToWishlistHandler(item)}></button>
      <p style={{backgroundColor:"red"  , color:"white" , borderRadius:"1rem" , padding:"0.5rem" , marginBlock:"0%" ,marginBlockEnd:"2%" , width:"3rem"  , fontWeight:"bold" , justifyContent:"center" , paddingBottom:"0%" , marginRight:"2rem"}}>{rating}⭐</p>
</div>
       

        <img style={{display:"flex" , width:"80%" , margin:"auto"}} src={image} alt="" onClick={()=>navigate(`/individual/${_id}`)}></img>
        
        <h3  className="item-title" >{title}  </h3>
        <p className="item-author">{author}</p>
        <p className="item-price">₹{price}</p>
        {
            isCart && 
        
            <span className="qty"><button  onClick={()=>incrementHandler(_id)}>+</button>  <span className="qtyNum"> {quantity}</span> <button onClick={()=>decrementHandler(_id)}>-</button></span>

       }
        <button className="Cartbtn" onClick={isAddedToCart ? ()=>RemoveFromCart(item) : ()=>AddToCartHandler(item)}>{isAddedToCart ? "Remove From Cart" : "Add to cart"}</button>
        
       
    
        </div>
    )


    
}