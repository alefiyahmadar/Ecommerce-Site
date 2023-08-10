import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { ProductCard } from "./productCard"

export const GetCart = ()=>{

    const {getProducts } = useContext(CartContext)


    console.log(getProducts )


    return(<div style={{marginLeft:"2rem"}} >
        <p>Cart</p>
        <div className="product-grid" style={{marginTop:"2rem" , float:"left" , gridTemplateColumns: "repeat(2, 0fr)" , margin:"0%" }}> 



        {
            getProducts.map((e)=>  e.isAddedToCart?<ProductCard {...e }/> :"")
        }
        </div>
    </div>)
}