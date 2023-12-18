import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"


export const ProductDetail = (item)=>{



    const {  
        title,
       author,
       price,
       image , rating   , language , fiction , nonfiction , horror}=item

       const {AddToWishlistHandler , AddToCartHandler , RemoveFromCart , RemoveFromWishlist}  = useContext(CartContext)

       

    return(
    
    <div>
    <div className="detailContainer" >

        <img alt="" src={image} className="imageDetail"></img>

<div className="detailInfo">
        <h2>{title} <span>{rating}⭐</span> </h2>
        <h3>₹{price - 50} <span style={{fontSize:"14px" , color:"grey" , textDecoration:"line-through"}}>₹{price}</span></h3>
        <p>⚡Hurry, Only few left!</p>
</div>
        <hr></hr>
        <div className="detailTag">
        <p>🏷️Fastest Delivery</p>
        <p>🏷️Inclusive of All Taxes</p>
        <p>🏷️Cash On Delivery</p>
</div>

<div className="detailAuth">
    <p>Author: <span>{author}</span></p>
    <p>Category: <span>{fiction}{nonfiction}{horror}</span></p>
    <p> Language: <span>{language}</span></p>
</div>


        


    </div>
    <div className="detailBtn">
    <button  style={{backgroundColor:"#a855f7"}} onClick={JSON.parse(localStorage.getItem("user")).cart.find((e)=>e.title === title)   ? ()=>RemoveFromCart(item) : ()=>AddToCartHandler(item)}>{JSON.parse(localStorage.getItem("user")).cart.find((e)=>e.title === title) ? "Remove From Cart" : "Add to cart"}</button>


    <button  onClick={ JSON.parse(localStorage.getItem("user")).wishlist.find((e)=>e.title === title) ? ()=>RemoveFromWishlist(item): ()=>AddToWishlistHandler(item)} style={{backgroundColor:"grey"}}>{ JSON.parse(localStorage.getItem("user")).wishlist.find((e)=>e.title === title) ?"Remove from Wishlist": "Add to Wishlist "}</button>
</div>



    </div>)
}