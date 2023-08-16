import { useContext } from "react"
import { CartContext } from "../contexts/contextProvider"
import { NavLink, useNavigate } from "react-router-dom"

export const GetSignUp =()=>{

    const {loggedInUser , setLoggedInUser , isLoggedin , SetIsloggedIn} = useContext(CartContext)

    const navigate = useNavigate()


    const SignUpHandler = ()=>{

        SetIsloggedIn(!isLoggedin)

        navigate("/productList")


    }
   


    return(
        <div className="login">

            <h3>Sign Up</h3>
            <input type="text" placeholder="FirstName" style={{marginBottom:"1.5rem" , padding:"0.7rem" , borderRadius:"0.5rem" , outline:"none"}} onChange={(e)=>setLoggedInUser({...loggedInUser , firstName:e.target.value})} />

            
            <input type="text" placeholder="LastName" style={{marginBottom:"1.5rem" , padding:"0.7rem" , borderRadius:"0.5rem" , outline:"none"}} onChange={(e)=>setLoggedInUser({...loggedInUser , lastName:e.target.value})} / >



                <input type="email" placeholder="Email" style={{marginBottom:"1.5rem" , padding:"0.7rem" , borderRadius:"0.5rem" , outline:"none"}} onChange={(e)=>setLoggedInUser({...loggedInUser , email:e.target.value})} />

                <input type="password" placeholder="Password" style={{marginBottom:"1.5rem" , padding:"0.7rem" , borderRadius:"0.5rem" , outline:"none"}}/>

                <button style={{padding:"0.5rem" , backgroundColor:"violet" , border:"none" , color:"white" , fontSize:"large" , fontWeight:'bold' , borderRadius:"1rem"}} onClick={SignUpHandler}>Sign Up</button>
                
                <p>Already have an account? <NavLink style={{textDecoration:"none"}} to="/login">Login</NavLink> </p>

        </div>
    )
}