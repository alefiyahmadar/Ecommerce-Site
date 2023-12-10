import { useContext, useState } from "react"
import { CartContext } from "../contexts/contextProvider"
import { useNavigate, NavLink, useLocation, Await, json } from "react-router-dom"
import { AlertMessage } from "./alertMsg"


export const GetLogin = () => {

    const { isLoggedin, SetIsloggedIn} = useContext(CartContext)
    const [emaillog, setEmail] = useState("")
    const [passLog, setPassword] = useState("")
    const { showAlert, setShowAlert ,alertMsg , setAlertMsg , handleAlertClose , defaultUser  } = useContext(CartContext)


    const navigate = useNavigate()
    const location = useLocation()

    localStorage.setItem("user" , JSON.stringify(defaultUser))

    const logInGuestHandler = () => {

        SetIsloggedIn(!isLoggedin)

        navigate(location.state.from.pathname)

        

      
        const stringifyDefault = JSON.stringify(defaultUser)

        localStorage.setItem("user" , stringifyDefault)

        

    }

    const loginUser =  () => {

        try {
        

          

            
            

            

            const usersArr = JSON.parse(localStorage.getItem("userArray"))
            console.log(usersArr)
            
            
            if(usersArr.find((e)=>e.email === emaillog && e.password === passLog)){

                console.log("truee")

                const logedInUser = usersArr.find((e)=>e.email === emaillog && e.password === passLog) 
                

                localStorage.setItem("user" , JSON.stringify(logedInUser) )

                SetIsloggedIn(!isLoggedin)

                navigate("/productList")
                

            }else{

                console.log("not verified")
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
        <div>
            <div className="login">
                <h2>Log In</h2>


                <input type="email" placeholder="Email" style={{ marginBottom: "1.5rem", padding: "0.7rem", borderRadius: "0.5rem", outline: "none" }} onChange={(e) => setEmail(e.target.value)} value={emaillog} />



                <input type="password" placeholder="Password" style={{ marginBottom: "1.5rem", padding: "0.7rem", borderRadius: "0.5rem", outline: "none" }} onChange={(e) => setPassword(e.target.value)} value={passLog} />

                <button style={{ padding: "0.5rem", backgroundColor: "violet", border: "none", color: "white", fontSize: "large", fontWeight: 'bold', borderRadius: "1rem" }} onClick={loginUser} >Login</button>


                <button onClick={logInGuestHandler} style={{ padding: "0.5rem", backgroundColor: "white", border: "1px solid violet", color: "violet", fontSize: "large", fontWeight: 'bold', borderRadius: "1rem", marginTop: "1.5rem" }} > Login as Guest</button>

                <p>Dont have an acoount? <NavLink to="/signup">Sign Up</NavLink></p>

                {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
                
            }



            </div>


        </div>
    )
}