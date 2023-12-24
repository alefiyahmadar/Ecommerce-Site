import { useContext, useState , React} from "react"
import { CartContext } from "../contexts/contextProvider"
import { useNavigate, NavLink} from "react-router-dom"
import { AlertMessage } from "./alertMsg"


export const GetLogin = () => {

    const { isLoggedin, SetIsloggedIn} = useContext(CartContext)
    const [emaillog, setEmail] = useState("")
    const [passLog, setPassword] = useState("")
    const { showAlert, setShowAlert ,alertMsg , setAlertMsg , handleAlertClose   } = useContext(CartContext)


    const navigate = useNavigate()
    

    

    const logInGuestHandler = () => {

        SetIsloggedIn(!isLoggedin)

        navigate("/productList")
        

        

      
       const defaultUser =  JSON.parse(localStorage.getItem("userArray")).find((e)=>e.password === "adarshbalika")

        localStorage.setItem("user" , JSON.stringify(defaultUser))

        

    }

    const loginUser =  () => {

        try {
        

          

            
            

            

            const usersArr = JSON.parse(localStorage.getItem("userArray"))
          
            
            
            if(usersArr.find((e)=>e.email === emaillog && e.password === passLog)){

        

                const logedInUser = usersArr.find((e)=>e.email === emaillog && e.password === passLog) 
                

                localStorage.setItem("user" , JSON.stringify(logedInUser) )

                SetIsloggedIn(!isLoggedin)

                navigate("/productList")
                

            }else{

               
                setEmail("")
                setPassword("")
                setShowAlert(true)
                setAlertMsg("User Not Found")
            }

        } catch (e) {

            console.error(e)
        }

      



    }



    return (
        <div className="loginContainer">
            <div className="login">
                <h2>Log In</h2>


                <input type="email" placeholder="Email" style={{  outline: "none" }} onChange={(e) => setEmail(e.target.value)} value={emaillog} />



                <input type="password" placeholder="Password" style={{ outline: "none" }} onChange={(e) => setPassword(e.target.value)} value={passLog} />

                <button  onClick={loginUser} >Login</button>


                <button onClick={logInGuestHandler} style={{backgroundColor:"white" , color:"#a855f7" , border:"1px #a855f7 solid"}} > Login as Guest</button>

                <p>Dont have an acoount? <NavLink to="/signup">Sign Up</NavLink></p>

                {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
                
            }



            </div>


        </div>
    )
}