import { useContext, useState } from "react"
import { CartContext } from "../contexts/contextProvider"

export const CheckOut = ()=>{




const { getCartLength , useReduce , discount , coupan , showCpn  ,adressArr} = useContext(CartContext)

const [selectedAdress , setSelected] = useState([])
const [select , setSelect] = useState(false)

const getAddress =(id)=>{
const showAdress = adressArr.filter((e)=>e.id === id)
setSelected(showAdress)
setSelect(!select)

}

    return(<div>
        
<h2 style={{padding:"1rem" , textAlign:"center"}}>CheckOut</h2>


{

adressArr.map(({ id , name , house , city , state , country , pincode , number  } )=>{





                    
return(

<div key={id}
className="adressSelect" 
style={{  position:"fixed" , marginTop:"2rem" , paddingLeft:"4rem"}}


>
    <div  >
    <input style={{  paddingRight:"1rem",marginRight:"1rem" }} type="radio"   name="address" onChange={()=>getAddress(id)} />

<h2 >{name}</h2>

<h4>{house} ,{city} ,{state}</h4>
<h4>{country}</h4>
<h4>{pincode}</h4>
<h4>Phone Number {number}</h4>
</div>




</div>
)
}






)
} 

<div style={{display:"flex" ,flexDirection:"column" , marginBottom:"2rem" , float:"right"  , width:"30rem" , paddingRight:"4rem" , paddingTop:"1rem"    }}>


<div className="order">
    <hr></hr>
    <h2 style={{padding:"0.5rem"}} >Order Details</h2>
    <hr ></hr>
<h3 className="items">Items {getCartLength.length} </h3>

   





</div>


<div className="price">
            
            <hr></hr>
            
              <h2 style={{textAlign:"center"}}>Price Details</h2>
              <hr></hr>
        <p>Price(Items {getCartLength.length}): {useReduce }</p>
        <p>Discount: {discount} </p>
        <p  >Coupan Discount: {coupan === 0 ? "0" :coupan}</p>
        <p>Delivery Charges : FREE</p>
        <p style={{display:coupan > 0 ? "inline" :"none" , padding:"0.5rem"}}>{ showCpn}</p>
    
        <hr></hr>
        <p><b>Total Price: {useReduce - discount - coupan}</b ></p>
        <hr></hr>

        
     </div>   

     <div className="adress">
        
        
<div style={{display:"inline" ,paddingLeft:"22rem" }}>

<h3 style={{marginBottom:"1rem" , textAlign:"center" , paddingLeft:"0rem" }}>Delivery To</h3>
{
    selectedAdress.map(({id , name , house , city , state , country , pincode , number})=><div key={id}>
        
<h2 >{name}</h2>

<h4>{house} ,{city} ,{state}</h4>
<h4>{country}</h4>
<h4>{pincode}</h4>
<h4>Phone Number {number}</h4>
    </div>)
}
        
        

        <button style={{padding:"1rem" , backgroundColor:"#a855f7" , border:"none" , borderRadius:"0.5rem" , fontSize:"large" , fontWeight:"bold" , color:"#faf5ff" ,width:"40%" , marginTop:"1rem"}}>Place Order</button>
</div>


     </div>



</div>


        
    </div>)
}