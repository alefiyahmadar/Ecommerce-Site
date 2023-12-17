import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { ProductCard } from "./productCard"
import { AlertMessage } from "./alertMsg"
import { NavLink } from "react-router-dom"

import { WishlistCard } from "../cards/wishlistCard"


export const GetWishList =()=>{

const { showAlert , alertMsg , handleAlertClose  } = useContext(CartContext)



const userData = JSON.parse(localStorage.getItem("user")).wishlist



console.log(userData)
    return(<div className="cartContainer" >
        <p className="wishHeader">Wishlist <span>({userData.length})</span></p>

        <ul className="cartProduct" >
            {
                

               userData.length > 0 ? userData.map(((e)=> <WishlistCard {...e} />)) : <h2 >Wishlist is empty! <NavLink style={{textDecoration:"none"}} to="/productList">Back to store</NavLink></h2>
            }
        </ul>
        {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
                
            }

    </div>)
}