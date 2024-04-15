import { useContext , React } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../contexts/contextProvider"

import { ProductDetail } from "../cards/detailCard"

export const GetProductDetail = ()=>{

const {prodId} = useParams()

const {getProducts } = useContext(CartContext)

const getItem = getProducts.filter((e)=>e._id === prodId) 
console.log(getItem)


    return(<div className="DetailContainer">


        <div className="prodDetail">
      

        {
            getItem.map((e)=> <ProductDetail { ...e}/>)
        }
        </div>
    </div>)
}