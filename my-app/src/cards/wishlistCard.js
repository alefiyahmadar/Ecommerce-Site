import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../contexts/contextProvider"

export const WishlistCard = (item)=>{

const {_id ,  
    title,
   author,
   price,
   image , rating , quantity } = item

   const {AddToCartHandler , RemoveFromCart ,RemoveFromWishlist} = useContext(CartContext)

   const navigate = useNavigate()


   return(
    <div className="wishlistContainer" >
        
        <ul  >
     
        <li>
            <div >
                
            
            
                <div className="wishDiv">

                
                
            
            

            <img  src={image} alt="" onClick={()=>navigate(`/individual/${_id}`)}></img>

            
            
            <div className="wishInfo">

            <img onClick={()=>RemoveFromWishlist(item)}  width="20" height="20" src="https://img.icons8.com/ios/25/delete--v1.png" alt="delete--v1"/>
            

            

            
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>₹{price - 50} <span style={{   color:"grey" , textDecoration:"line-through" }}>₹{price}</span></p>

            
                <button  onClick={JSON.parse(localStorage.getItem("user")).cart.find((e)=>e.title === title)   ? ()=>RemoveFromCart(item) : ()=>AddToCartHandler(item)}>{JSON.parse(localStorage.getItem("user")).cart.find((e)=>e.title === title) ? "Remove From Cart" : "Add To Cart"}</button>

                </div>


                </div>

        
                

                
       
            </div>

            
        </li>
        
    </ul>
    </div>
   )


}