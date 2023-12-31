import { useContext , React} from "react"
import {  useNavigate } from "react-router-dom"
import { CartContext } from "../contexts/contextProvider"
import {categories} from "../backend/db/categories"



export const HomePage =()=>{

    const {setFilter , filters } =useContext(CartContext)

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

            <div className="about" >
            <p style={{ fontSize:"larger" , color:"white" , fontWeight:"300" ,marginBlockStart:"5%" , marginBlockEnd:"2%" }}>LiteraryLinx</p>

            <p >Books are a uniquely portable magic!</p>

            <p >Privacy Policy</p>
            <p >Terms of use</p>
            <p >@2022 LiteraryLinx</p>
            </div>
            <div className="connect"  >
                    <p style={{fontSize:"larger" , color:"white" , fontWeight:"300" ,marginBlockStart:"5%" , marginBlockEnd:"2%" }}>Connect</p>

                    <p  onClick={()=>navigate("")}>GitHub</p>
                    
                    
                    <p  onClick={()=>navigate("")}>LinkedIn</p>
                    <p  onClick={()=>navigate("")}>Twitter</p>


            </div>

            <div className="resources"  >
                    <p style={{fontSize:"larger" , color:"white" , fontWeight:"300" , marginBlockStart:"5%" , marginBlockEnd:"2%" }}>Resources</p>

                  
                    
                    
                    <p  onClick={()=>navigate("")}>Sign Up</p>
                    <p  onClick={()=>navigate("")}>Sign In</p>


            </div>
            </ul>
        </footer>
    </div>
)

}