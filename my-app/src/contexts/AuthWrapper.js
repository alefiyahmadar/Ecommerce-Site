import { useContext } from "react"
import { CartContext } from "./contextProvider"

import { Navigate, useLocation } from "react-router-dom"

export const AuthWrapper =({children})=>{

    const { isLoggedin , SetIsloggedIn} = useContext(CartContext)

    const location = useLocation()

    return(
        isLoggedin ? children : <Navigate to="/login"  state={{from :location}}/>
    )
}