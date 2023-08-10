import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { ProductCard } from "./productCard"

export const GetWishList =()=>{

const {getProducts} = useContext(CartContext)

    return(<div>
        <p>wishlist</p>

        <div className="product-grid">
            {
                getProducts.map((e)=>e.isWished ? <ProductCard {...e} />:"")
            }
        </div>
    </div>)
}