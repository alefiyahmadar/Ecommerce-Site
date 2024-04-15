import {  React } from "react"

import { NavLink } from "react-router-dom"

import { WishlistCard } from "../cards/wishlistCard"
import { ProductCard } from "../cards/productCard"


export const GetWishList =()=>{





const userData = JSON.parse(localStorage.getItem("user")).wishlist



console.log(userData)
    return(<div className="cartContainer"  >
        <p  className="wishHeader">Wishlist <span>({userData.length})</span></p>
 
 <div >

        <ul className={window.innerWidth > 450 ? "product-grid" :"cartProduct"} >

            
            {
                window.innerWidth < 450 ?

               userData.length > 0 ? userData.map(((e)=> <WishlistCard {...e} />)) : <h2 >Wishlist is empty! <NavLink style={{textDecoration:"none"}} to="/productList">Back to store</NavLink></h2>

               :

               userData.length > 0 ? userData.map(((e)=> <ProductCard {...e} />)) : <h2 >Wishlist is empty! <NavLink style={{textDecoration:"none"}} to="/productList">Back to store</NavLink></h2>



            }
        </ul>
        </div>
        
    </div>)
}