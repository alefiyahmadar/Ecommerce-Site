
import {React} from "react" 
import { useContext, useEffect  } from "react"
import { CartContext } from "../contexts/contextProvider"
import { NavLink, useNavigate } from "react-router-dom"




export const GetSignUp =()=>{



    

    const {loggedInUser , setLoggedInUser , isLoggedin , SetIsloggedIn   , userArray , setUserArray  } = useContext(CartContext)


    const navigate = useNavigate()




    const SignUpHandler = async()=>{

        try{

            

                const creds = {

                    
                        email:loggedInUser.email, password:loggedInUser.password, someUserAttribute1:loggedInUser.firstName, someUserAttribute2:loggedInUser.lastName
                      
                     
                }
                
                const res = await fetch("/api/auth/signup" , { method:"POST" , body:JSON.stringify(creds) })

                
                



                const {createdUser } = await res.json()
                

                    const serializedObj = JSON.stringify(createdUser)
                    console.log(serializedObj)
                    
                    

                


              localStorage.setItem("user" , serializedObj)

            


              

              const userIn = JSON.parse(localStorage.getItem("user"))

              const updatedUserArray = [...userArray, userIn];

              setUserArray(updatedUserArray);
    localStorage.setItem('userArray', JSON.stringify(updatedUserArray));
    

              

        }catch(e){
            console.error(e)
        }

        SetIsloggedIn(!isLoggedin)

        navigate("/productList")

        




    }

    useEffect(()=>{

        
        const storedUsers = localStorage.getItem('userArray');
        if (storedUsers) {
          setUserArray(JSON.parse(storedUsers));
        }
    },[setUserArray])
   

  

    

    
   


    return(
        <div className="signupContainer">
        <div className="signup">

            <h3 >Sign Up</h3>
            <input type="text" placeholder="FirstName" style={{ outline:"none"}} onChange={(e)=>setLoggedInUser({...loggedInUser , firstName:e.target.value})} />

            
            <input type="text" placeholder="LastName" style={{ outline:"none"}} onChange={(e)=>setLoggedInUser({...loggedInUser , lastName:e.target.value})} / >



                <input type="email" placeholder="Email" style={{ outline:"none"}} onChange={(e)=>setLoggedInUser({...loggedInUser , email:e.target.value})} />

                <input type="password" placeholder="Password" style={{ outline:"none"}} onChange={(e)=>setLoggedInUser({...loggedInUser , password:e.target.value})}/>

                <button  onClick={SignUpHandler}>Sign Up</button>
                
               

        </div>

        <p>Already have an account? <NavLink style={{textDecoration:"none"}} to="/login">Login</NavLink> </p>
        </div>

    )
}