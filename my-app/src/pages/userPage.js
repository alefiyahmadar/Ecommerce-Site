import { useContext, useState } from "react"
import { CartContext } from "../contexts/contextProvider"
import { useNavigate } from "react-router-dom"

export const GetUserPage = ()=>{
const { SetIsloggedIn , adressArr , setAddressArr   } = useContext(CartContext)
const [showadress , setAdress] = useState(false)
const [newAdress , setNewAdress] = useState(false)


 
const [getName , setName] = useState("")
const [getHouse , setHouse] = useState("")
const [getCity , setCity] = useState("")
const [getState , setgetState] = useState("")
const [getCountry , setCountry] = useState("")
const [getPinCode , setPincode] = useState("")
const [getNumber , setNumber] = useState("")
const [newId , setId] = useState(1)


const navigate = useNavigate()

const LogOutHandler = ()=>{

    SetIsloggedIn(false)
    navigate("/login")
    
    
    
    window.location.reload()

}
const handleAdressBar = ()=>{

    setNewAdress(true)

    setAdress(true)
}
const AddAdress = ()=>{

    

    setId(newId + 1)
        

    const adress = { id:newId , name:getName ,house:getHouse , city:getCity , state:getState , country:getCountry ,pincode:getPinCode ,number:getNumber }
    
    setNewAdress(false)

    
    setAddressArr([...adressArr , adress])
    setName("")
    setHouse("")
    setCity("")
    setgetState("")
    setCountry("")
    setPincode("")
    setNumber("")

}



const removeAdress =(id)=>{

    const useFilter = adressArr.filter((element)=>element.id !== id)
    setAddressArr(useFilter)
    
        }

        const user = JSON.parse(localStorage.getItem("user"))
    


    return(<div className="userContainer" >
        <h2 >Account</h2>

        
<div className="userMenueBtn">
        <button style={{ backgroundColor:showadress ? "white" :"#a855f7",color:showadress?"black" :"white"}} onClick={()=>setAdress(!showadress)} >Profile</button>
        
        
        <button    style={{ backgroundColor:showadress ? "#a855f7" :"white" , color:showadress ? "white" :"black"}} onClick={()=>setAdress(!showadress)} >Address</button>



        <div  className="userAcc" style={{display:showadress ? "none" :"block"}}>

        <p ><span style={{fontWeight:"bold" , paddingRight:"0.5rem"}}>Name</span>  {user.firstName} {user.lastName}</p>

        <p > <span style={{fontWeight:"bold" , paddingRight:"0.5rem"}}>Email</span>  {user.email}</p>

        <button  onClick={LogOutHandler}>Log Out</button>

        </div>
       

        <div  className="userAdress" style={{display:showadress ? "flex" :"none" }}>
            
            {

                adressArr.map((e)=>{

                    const {id , name , house , city , state , country , pincode , number} =e

                    return(<div style={{ display:newAdress ? "none" :"flex" , flexDirection:"column" }} key={id}>
                         <h2>{name}</h2>
                            <p>{house} ,{city} ,{state}</p>
                            <p>{country}</p>
                            <p>{pincode}</p>
                            <p>Phone Number {number}</p>

                            <button id="removeBtn"  onClick={()=>removeAdress(id)} > Remove</button>

                    </div>)
                })
            }
                        <button id="userAdd" style={{display:newAdress ? "none" :"flex" }} onClick={handleAdressBar}  > +Add New Adress</button>


        </div>
        </div>
        <div style={{display:showadress ? "flex" :"none"}}>
        <div className="addressmenu" style={{display:newAdress ? "flex" :"none"   }}>
            

            
            
            <h4>Add New Address</h4>
            
           <input onChange={(e)=>setName(e.target.value)} placeholder="Name"  value={getName} />


            <input   onChange={(e)=>setHouse(e.target.value)} placeholder="House No. , Colony , Road" value={getHouse}  />
            <input   onChange={(e)=>{setCity(e.target.value)}} placeholder="City" value={getCity}  />
            <input onChange={(e)=>setgetState(e.target.value)} placeholder="State"  value={getState} />
            <input  onChange={(e)=>setCountry(e.target.value)} placeholder="Country"  value={getCountry} />
            <input  onChange={(e)=>setPincode(e.target.value)} placeholder="Postal Pin Code" value={getPinCode} />
            <input onChange={(e)=>setNumber(e.target.value)} placeholder="Number" value={getNumber}  />
            <p >
                <button  className="save" onClick={AddAdress} >Save</button>
            <button className="cancel" onClick={()=>setNewAdress(false)}  >Cancel</button>
                </p>

                
         
 

        </div>
        </div>



    </div>)
}