import { useContext, useState } from "react"
import { CartContext } from "../contexts/contextProvider"
import { useNavigate, NavLink, useLocation, Await, json } from "react-router-dom"
import { AlertMessage } from "./alertMsg"
import { formatDate } from "../backend/utils/authUtils"
import {  v4 as uuid } from "uuid"

export const GetLogin = () => {

    const { isLoggedin, SetIsloggedIn, loggedInUser, setLoggedInUser, objState, setState , isCarted , setIsCart} = useContext(CartContext)
    const [emaillog, setEmail] = useState("")
    const [passLog, setPassword] = useState("")
    const { showAlert, setShowAlert ,alertMsg , setAlertMsg , handleAlertClose , defaultUser} = useContext(CartContext)


    const navigate = useNavigate()
    const location = useLocation()


    const logInGuestHandler = () => {

        SetIsloggedIn(!isLoggedin)

        navigate(location.state.from.pathname)

        setLoggedInUser({ ...loggedInUser, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com" })

      
        const stringifyDefault = JSON.stringify(defaultUser)

        localStorage.setItem("user" , stringifyDefault)

        setState(defaultUser)

    }

    const loginUser = async () => {

        try {
        

            const creds = {
                email: emaillog,
                password: passLog
            }

            const res = await fetch("/api/auth/login", { method: "POST", body: JSON.stringify(creds) })

        

            const { encodedToken } = await res.json()
            console.log(encodedToken)

            
            

            const checkUser = (JSON.parse(localStorage.getItem("user")))

            const usersArr = JSON.parse(localStorage.getItem("userArray"))
            console.log(usersArr)
            
            
            if(usersArr.find((e)=>e.email === emaillog && e.password === passLog)){

                console.log("truee")

                const logedInUser = usersArr.filter((e)=>e.email === emaillog && e.password === passLog) 
                console.log(logedInUser)

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