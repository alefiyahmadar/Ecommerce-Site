import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../contexts/contextProvider"
import { ProductCard } from "./productCard"

export const GetProductDetail = ()=>{

const {prodId} = useParams()

const {getProducts} = useContext(CartContext)

const getItem = getProducts.filter((e)=>e._id === prodId) 
console.log(getItem)


    return(<div style={{margin:"auto" , padding:"2rem" , marginTop:"2rem"  }}>
        <div style={{ marginLeft:"35%" , width:"30rem" }}>
        {
            getItem.map((e)=> <ProductCard { ...e}/>)
        }
        </div>
    </div>)
}