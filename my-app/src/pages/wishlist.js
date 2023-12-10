import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { ProductCard } from "./productCard"
import { AlertMessage } from "./alertMsg"
import { NavLink } from "react-router-dom"

export const GetWishList =()=>{

const { showAlert , alertMsg , handleAlertClose } = useContext(CartContext)



const userData = JSON.parse(localStorage.getItem("user")).wishlist



console.log(userData)
    return(<div>
        <p>wishlist</p>

        <div className="product-grid" style={{margin:"auto" , width:"90%"}}>
            {
                

               userData.length > 0 ? userData.map(((e)=> <ProductCard {...e} />)) : <h2 style={{display:"flex" , width:"90rem" , justifyContent:"center" , paddingTop:"4rem"}}>Wishlist is empty! <NavLink style={{textDecoration:"none"}} to="/productList">Back to store</NavLink></h2>
            }
        </div>
        {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
                
            }

    </div>)
}