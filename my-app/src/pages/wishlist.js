import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { ProductCard } from "./productCard"
import { AlertMessage } from "./alertMsg"

export const GetWishList =()=>{

const { showAlert , alertMsg , handleAlertClose } = useContext(CartContext)



const userData = JSON.parse(localStorage.getItem("user")).wishlist



console.log(userData)
    return(<div>
        <p>wishlist</p>

        <div className="product-grid" style={{margin:"auto" , width:"90%"}}>
            {
                

                userData.map(((e)=> <ProductCard {...e} />))
            }
        </div>
        {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
                
            }

    </div>)
}