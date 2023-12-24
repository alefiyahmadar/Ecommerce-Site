import { useContext , React } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../contexts/contextProvider"
import { AlertMessage } from "./alertMsg"
import { ProductDetail } from "../cards/detailCard"

export const GetProductDetail = ()=>{

const {prodId} = useParams()

const {getProducts , alertMsg , handleAlertClose , showAlert} = useContext(CartContext)

const getItem = getProducts.filter((e)=>e._id === prodId) 
console.log(getItem)


    return(<div className="DetailContainer">
        <div className="prodDetail">
        {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
            }

        {
            getItem.map((e)=> <ProductDetail { ...e}/>)
        }
        </div>
    </div>)
}