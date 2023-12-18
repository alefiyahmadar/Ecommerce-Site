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



        
        <h3  >Welcome to LiteraryLinx,</h3>
        <h2 >Your Gateway to a World of Words and Wonder!</h2>

        <button  className="homestorebtn" onClick={()=>navigate("/productList")}  > Visit Store</button>

   
    
         </div>
         </div>
         </div>
         <div style={{width:"100%"}}>
            <p style={{fontSize:"1.4rem" , padding:"1rem" ,paddingBottom:"0%" , marginBottom:"0%",  display:"flex" , justifyContent:"center"}}>Shop by categories</p>
            <div style={{display:"flex" , justifyContent:"space-around" , padding:"0rem" , marginLeft:"4rem" , marginRight:"4rem" , marginBottom:"2rem" , width:"50%" , margin:"auto"}}>
            {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
                
            }
           
     <ul className="circularContainer" >   
{
categories.map((item)=><li onClick={()=>getPerHome(item.categoryName)} className="circular" key={item._id}>
    
    <p className="circleTitle">{item.categoryName}</p>
    <p className="circlePara">{item.description}</p>


</li>)

}
</ul>
</div>

            

     
         </div>


         

        

        <footer className="footer"  >

            <ul className="footerUl">

            <div  >
            <p style={{color:"white" , fontSize:"1.5rem" , padding:"1rem"  ,paddingBottom:"0%", fontWeight:"bold" }}>LiteraryLinx</p>

            <p style={{color:"white" , fontSize:"1.1rem" ,marginBlock:"0%"  , paddingBottom:"0.5rem"  }}>Books are a uniquely portable magic!</p>

            <p style={{color:"white" , fontSize:"1.1rem" ,marginBlock:"0%"  ,paddingTop:"0.1rem",paddingBottom:"0.5rem" }}>Privacy Policy</p>
            <p style={{color:"white" , fontSize:"1.1rem" ,marginBlock:"0%"  ,paddingBottom:"0.5rem" }}>Terms of use</p>
            <p style={{color:"white"  ,marginBlock:"0%"  , fontSize:"small"  }}>@2022 LiteraryLinx</p>
            </div>
            <div  >
                    <p style={{fontSize:"larger" , color:"white" , fontWeight:"300" ,marginBlockStart:"5%" , marginBlockEnd:"2%" }}>Connect</p>

                    <p  onClick={()=>navigate("")}>GitHub</p>
                    
                    
                    <p  onClick={()=>navigate("")}>LinkedIn</p>
                    <p  onClick={()=>navigate("")}>Twitter</p>


            </div>

            <div  >
                    <p style={{fontSize:"larger" , color:"white" , fontWeight:"300" , marginBlockStart:"5%" , marginBlockEnd:"2%" }}>Connect</p>

                  
                    
                    
                    <p  onClick={()=>navigate("")}>Sign Up</p>
                    <p  onClick={()=>navigate("")}>Sign In</p>


            </div>
            </ul>
        </footer>
    </div>
)

}