import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"

export const ProductCard =(item)=>{

    const {_id ,  
     title,
    author,
    price,
    fiction,nonfiction,horror,
    isAddedToCart,
    isWished, image , rating}=item

    const{cart , setCart , getProducts , setProducts ,wishlist , setWishlist , AddToCartHandler ,RemoveFromCart ,AddToWishlistHandler , RemoveFromWishlist} = useContext(CartContext)







    return(<div key={_id} className="product-card"  >

      <div style={{display:"flex" , justifyContent:"space-between"}}>
      <button className="heart-button" style={{opacity:isWished ? "1" :"0.1"}} onClick={ isWished ? ()=>RemoveFromWishlist(item): ()=>AddToWishlistHandler(item)}></button>
      <p style={{backgroundColor:"red"  , color:"white" , borderRadius:"1rem" , padding:"0.5rem" , marginBlock:"0%" ,marginBlockEnd:"2%" , width:"3rem"  , fontWeight:"bold" , justifyContent:"center" , paddingBottom:"0%" , marginRight:"2rem"}}>{rating}⭐</p>
</div>
       

        <img style={{display:"flex" , width:"80%" , margin:"auto"}} src={image} alt=""></img>
        
        <h3  className="item-title" >{title}  </h3>
        <p className="item-author">{author}</p>
        <p className="item-price">₹{price}</p>
        
        <button className="Cartbtn" onClick={isAddedToCart ? ()=>RemoveFromCart(item) : ()=>AddToCartHandler(item)}>{isAddedToCart ? "Remove From Cart" : "Add to cart"}</button>
        
       
    
        </div>
    )


    
}