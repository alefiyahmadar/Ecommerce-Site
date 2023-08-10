import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"

export const ProductCard =(item)=>{

    const {_id ,  
     title,
    author,
    price,
    categoryName,
    isAddedToCart,
    isWished, image}=item

    const{cart , setCart , getProducts , setProducts ,wishlist , setWishlist , AddToCartHandler ,RemoveFromCart ,AddToWishlistHandler , RemoveFromWishlist} = useContext(CartContext)





console.log(getProducts)


    return(<div key={_id} className="product-card"  >
       
      <button className="heart-button" style={{opacity:isWished ? "1" :"0.1"}} onClick={ isWished ? ()=>RemoveFromWishlist(item): ()=>AddToWishlistHandler(item)}></button>

       

        <img style={{display:"flex" , width:"100%"}} src={image} alt=""></img>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>Price {price}</p>
        <p>{categoryName}</p>
        <button onClick={isAddedToCart ? ()=>RemoveFromCart(item) : ()=>AddToCartHandler(item)}>{isAddedToCart ? "Remove From Cart" : "Add to cart"}</button>
        </div>
    )


    
}