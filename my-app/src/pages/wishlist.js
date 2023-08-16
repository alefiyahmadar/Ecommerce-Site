import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { ProductCard } from "./productCard"
import { AlertMessage } from "./alertMsg"

export const GetWishList =()=>{

const {getProducts , showAlert , alertMsg , handleAlertClose} = useContext(CartContext)

    return(<div>
        <p>wishlist</p>

        <div className="product-grid" style={{margin:"auto" , width:"90%"}}>
            {
                getProducts.map((e)=>e.isWished ? <ProductCard {...e} />:"")
            }
        </div>
        {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
            }

    </div>)
}