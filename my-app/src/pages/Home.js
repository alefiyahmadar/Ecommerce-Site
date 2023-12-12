import { useContext } from "react"
import {  useNavigate } from "react-router-dom"
import { CartContext } from "../contexts/contextProvider"
import {categories} from "../backend/db/categories"
import { AlertMessage } from "./alertMsg"


export const HomePage =()=>{

    const {setFilter , filters , showAlert ,alertMsg  , handleAlertClose} =useContext(CartContext)

const navigate = useNavigate()

const getPerHome =(event)=>{

    setFilter({...filters , categoryValue:[...filters.categoryValue , event]})
navigate("/productList")



}


 
    
return(
    <div  >
        <div className="homeMain">
        <div className="image-container">
      <div className="home-bg">


        
        <h3 style={{paddingTop:"5rem" , textAlign:"left" , paddingLeft:"20rem"  , fontSize:"1.8rem"}}>Welcome to LiteraryLinx,</h3>
        <h3 style={{textAlign:"left" , paddingLeft:"20rem" ,paddingTop:"5rem" , fontSize:"2.5rem"}}>Your Gateway to a World of Words and Wonder!</h3>

        <button  className="homestorebtn" onClick={()=>navigate("/productList")}  > Visit Store</button>

   
    
         </div>
         </div>
         </div>
         <div>
            <p style={{fontSize:"1.4rem" , padding:"1rem"}}>Shop by categories</p>
            <div style={{display:"flex" , justifyContent:"space-around" , padding:"1rem" , marginLeft:"4rem" , marginRight:"4rem" , marginBottom:"2rem" , width:"50%" , margin:"auto"}}>
            {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
                
            }
           
        
{
categories.map((item)=><div onClick={()=>getPerHome(item.categoryName)} className="circular" key={item._id}>
    <p className="circleTitle">{item.categoryName}</p>
    <p className="circlePara">{item.description}</p>


</div>)

}
</div>

            

     
         </div>


         

        

        <footer className="footer"  >

            <div style={{display:"flex" , flexDirection:"column"}}>
            <p style={{color:"white" , fontSize:"1.5rem" , padding:"1rem" ,paddingLeft:"10rem" ,paddingBottom:"0%", fontWeight:"bold" }}>LiteraryLinx</p>

            <p style={{color:"white" , fontSize:"1.1rem" ,marginBlock:"0%" , paddingLeft:"10rem" , paddingBottom:"0.5rem"  }}>Books are a uniquely portable magic!</p>

            <p style={{color:"white" , fontSize:"1.1rem" ,marginBlock:"0%" , paddingLeft:"10rem" ,paddingTop:"0.1rem",paddingBottom:"0.5rem" }}>Privacy Policy</p>
            <p style={{color:"white" , fontSize:"1.1rem" ,marginBlock:"0%" , paddingLeft:"10rem" ,paddingBottom:"0.5rem" }}>Terms of use</p>
            <p style={{color:"white"  ,marginBlock:"0%" , paddingLeft:"10rem" , fontSize:"small"  }}>@2022 LiteraryLinx</p>
            </div>
            <div style={{display:"flex" , padding:"1.5rem" , flexDirection:"column"}} >
                    <p style={{fontSize:"larger" , color:"white" , fontWeight:"300" , marginLeft:"20rem"}}>Connect</p>

                    <p style={{ color:"white"  , marginLeft:"20rem" ,marginBlock:"0%" }} onClick={()=>navigate("")}>GitHub</p>
                    
                    
                    <p style={{ color:"white"  , marginLeft:"20rem" ,marginBlock:"0%" , marginBlockStart:"3%" }} onClick={()=>navigate("")}>LinkedIn</p>
                    <p style={{ color:"white"  , marginLeft:"20rem" ,marginBlock:"0%" , marginBlockStart:"3%" }} onClick={()=>navigate("")}>Twitter</p>


            </div>

            <div style={{display:"flex" , padding:"1.5rem" , flexDirection:"column"}} >
                    <p style={{fontSize:"larger" , color:"white" , fontWeight:"300" , marginLeft:"20rem"}}>Connect</p>

                  
                    
                    
                    <p style={{ color:"white"  , marginLeft:"20rem" ,marginBlock:"0%" , marginBlockStart:"3%" }} onClick={()=>navigate("")}>Sign Up</p>
                    <p style={{ color:"white"  , marginLeft:"20rem" ,marginBlock:"0%" , marginBlockStart:"3%" }} onClick={()=>navigate("")}>Sign In</p>


            </div>
        </footer>
    </div>
)

}