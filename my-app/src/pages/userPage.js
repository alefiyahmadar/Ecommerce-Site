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
    


    return(<div style={{padding:"2rem" , margin:"auto"}} >
        <h2 style={{padding:"0.5rem"}}>account</h2>

       

        <button style={{ backgroundColor:showadress ? "white" :"#a855f7", width:"20%" , padding:"0.7rem"  , fontSize:"large" , fontWeight:"bold" , border:"none" , borderBottom:"0.5px grey solid" , color:showadress?"black" :"white"}} onClick={()=>setAdress(!showadress)} >Profile</button>
        
        
        <button style={{width:"20%" , padding:"0.7rem" , backgroundColor:showadress ? "#a855f7" :"white" , fontSize:"large" , fontWeight:"bold" , border:"none" , borderBottom:"0.5px grey solid" , color:showadress ? "white" :"black"}} onClick={()=>setAdress(!showadress)} >Address</button>

        <div  style={{ display:showadress ? "none" :"flex",  margin:"auto"   , flexDirection:"column" , textAlign:"left" , paddingLeft:"45%"}}>

        <p style={{padding:"1rem" , fontSize:"large" , fontWeight:"bold" , paddingTop:"1rem"}}><span style={{color:"grey"}}>Name</span> {user.firstName} {user.lastName}</p>

        <p style={{padding:"1rem" , fontSize:"large" , fontWeight:"bold" , paddingTop:"0%"}}> <span style={{color:"grey"}}>Email</span> {user.email}</p>

        <button style={{padding:"0.5rem" , width:"15%" , backgroundColor:"red" , color:"white" , border:"none" , marginLeft:"1rem" , fontSize:"large" , fontWeight:"bold" , borderRadius:"0.5rem"}} onClick={LogOutHandler}>Log Out</button>


        </div>

        <div style={{display:showadress ? "flex" :"none" , margin:"auto"   , flexDirection:"column" , textAlign:"left" , paddingLeft:"45%"}}>
            
            {

                adressArr.map((e)=>{

                    const {id , name , house , city , state , country , pincode , number} =e

                    return(<div style={{fontSize:"large" , display:newAdress ? "none" :"block" }} key={id}>
                         <h2>{name}</h2>
                            <p>{house} ,{city} ,{state}</p>
                            <p>{country}</p>
                            <p>{pincode}</p>
                            <p>Phone Number {number}</p>

                            <button  onClick={()=>removeAdress(id)} style={{padding:"0.5rem" , backgroundColor:"white" , color:"red" , border:"1px solid red" , fontSize:"large" , borderRadius:"0.5rem" , width:"5rem" }}> Remove</button>

                    </div>)
                })
            }
                        <button style={{width:"20%" , fontSize:"large" , border:"none" , backgroundColor:"white" , textAlign:"left" , paddingTop:"2rem" , fontWeight:"bold" ,display:newAdress ? "none" :"block" }} onClick={handleAdressBar}  > +Add New Adress</button>


        </div>
        <div style={{display:showadress ? "flex" :"none"}}>
        <div style={{display:newAdress ? "flex" :"none" , flexDirection:"column" , width:"25rem" , margin:"auto" , padding:"1rem"  }}>
            

            
            
            <h3>Add New Adress</h3>
            
           <input style={{padding:"0.5rem" ,fontSize:"large" , marginBottom:"1.5rem" , borderRadius:"0.5rem" , outline:"none"}} onChange={(e)=>setName(e.target.value)} placeholder="Name"  value={getName} />


            <input style={{padding:"0.5rem" ,fontSize:"large"  , marginBottom:"1.5rem" , borderRadius:"0.5rem" , outline:"none"}}  onChange={(e)=>setHouse(e.target.value)} placeholder="House No. , Colony , Road" value={getHouse}  />
            <input style={{padding:"0.5rem" ,fontSize:"large"  , marginBottom:"1.5rem" , borderRadius:"0.5rem" , outline:"none"}}  onChange={(e)=>{setCity(e.target.value)}} placeholder="City" value={getCity}  />
            <input style={{padding:"0.5rem"  ,fontSize:"large" , marginBottom:"1.5rem" , borderRadius:"0.5rem" , outline:"none"}}  onChange={(e)=>setgetState(e.target.value)} placeholder="State"  value={getState} />
            <input style={{padding:"0.5rem" ,fontSize:"large"  , marginBottom:"1.5rem" , borderRadius:"0.5rem" , outline:"none"}}  onChange={(e)=>setCountry(e.target.value)} placeholder="Country"  value={getCountry} />
            <input style={{padding:"0.5rem" ,fontSize:"large"  , marginBottom:"1.5rem" , borderRadius:"0.5rem" , outline:"none"}}  onChange={(e)=>setPincode(e.target.value)} placeholder="Postal Pin Code" value={getPinCode} />
            <input style={{padding:"0.5rem" ,fontSize:"large"  , marginBottom:"1.5rem" , borderRadius:"0.5rem" , outline:"none"}}  onChange={(e)=>setNumber(e.target.value)} placeholder="Number" value={getNumber}  />
            <p style={{display:"flex" , justifyContent:"space-around"}}>
                <button  className="save" onClick={AddAdress} style={{padding:"0.5rem" , backgroundColor:"red" , color:"white" , border:"none" , fontSize:"large" , borderRadius:"0.5rem" , width:"5rem" }}>Save</button>
            <button className="cancel" onClick={()=>setNewAdress(false)} style={{padding:"0.5rem" , backgroundColor:"white" , color:"red" , border:"1px solid red" , fontSize:"large" , borderRadius:"0.5rem" , width:"5rem" }} >Cancel</button>
                </p>

                
         
 

        </div>
        </div>



    </div>)
}