import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { useNavigate , NavLink, useLocation } from "react-router-dom"

export const GetLogin =()=>{

const {isLoggedin , SetIsloggedIn ,loggedInUser , setLoggedInUser} = useContext(CartContext)


const navigate = useNavigate()
const location = useLocation()


const logInGuestHandler = ()=>{
 
    SetIsloggedIn(!isLoggedin)

    navigate(location.state.from.pathname)

    setLoggedInUser({...loggedInUser , firstName:"John" , lastName:"Doe" , email:"johndoe@gmail.com"})

    
}


    return(
        <div>
           <div className="login">
            <h2>Log In</h2>

        
            <input type="email"  placeholder="Email" style={{marginBottom:"1.5rem" , padding:"0.7rem" , borderRadius:"0.5rem" , outline:"none"}}/>

                    
    
                <input type="password" placeholder="Password" style={{marginBottom:"1.5rem" , padding:"0.7rem" , borderRadius:"0.5rem" , outline:"none"}}/>

                <button style={{padding:"0.5rem" , backgroundColor:"violet" , border:"none" , color:"white" , fontSize:"large" , fontWeight:'bold' , borderRadius:"1rem"}} >Login</button>


                <button  onClick={logInGuestHandler} style={{padding:"0.5rem" , backgroundColor:"white" , border:"1px solid violet" , color:"violet" , fontSize:"large" , fontWeight:'bold' , borderRadius:"1rem" ,marginTop:"1.5rem"}} > Login as Guest</button>

                <p>Dont have an acoount? <NavLink to="/signup">Sign Up</NavLink></p>

                
                
        </div>

            
        </div>
    )
}