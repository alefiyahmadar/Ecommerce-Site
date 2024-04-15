import { useContext , React } from "react"
import { CartContext } from "../contexts/contextProvider"
import { useNavigate } from "react-router-dom"


export const ProductCard =(item)=>{


    const {_id ,  
     title, 
    author,
    price,
    image , rating }=item

  

    const{ AddToCartHandler ,RemoveFromCart ,AddToWishlistHandler , RemoveFromWishlist   , cart  } = useContext(CartContext)

const navigate = useNavigate()

console.log(cart)












    return(<div key={_id} className="product-card"   >



    <span className="heartSpan">
        
      <button  className="heart-button" onClick={ JSON.parse(localStorage.getItem("user")).wishlist.find((e)=>e.title === title) ? ()=>RemoveFromWishlist(item): ()=>AddToWishlistHandler(item)} style={{opacity: JSON.parse(localStorage.getItem("user")).wishlist.find((e)=>e.title === title) ? "1" :"0.4"}}  ></button>

      <p className="rating">{rating}<span role="img" aria-label="" >⭐</span></p>
      </span>
      

       

        <img  src={image} alt="" onClick={()=>navigate(`/individual/${_id}`)}></img>
        
        <h3  className="item-title" >{title}  </h3>
        <h4 className="item-author">{author}</h4>
        <p className="item-price">₹{price - 50}<span style={{color:"grey" , textDecoration:"line-through"}}>₹{price}</span></p>
    
        
       


        <button className="Cartbtn" onClick={JSON.parse(localStorage.getItem("user")).cart.find((e)=>e.title === title)   ? ()=>RemoveFromCart(item) : ()=>AddToCartHandler(item)}>{JSON.parse(localStorage.getItem("user")).cart.find((e)=>e.title === title) ? "Remove From Cart" : "Add to cart"}</button>
        
       
    
        </div>
    )


    
}

