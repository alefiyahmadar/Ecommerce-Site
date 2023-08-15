import { useContext, useState } from "react"

import { ProductCard } from "./productCard"
import { CartContext } from "../contexts/contextProvider"

export const ProductList =()=>{


    const {getProducts , setProducts} = useContext(CartContext)
    const {rangeValue  , getSliderHandler  , GetCategoryHandler, sortHandler , getSortedData , clearBtn } = useContext(CartContext)


        
        



    return(<div>
        <div className="sideBar" style={{margin:"0%"}}  >
            
            <div style={{display:"flex" , justifyContent:"space-around" , marginTop:"2rem" }}>
             <p style={{margin:"0%" , marginRight:"75%"}}>Filters</p>< button style={{backgroundColor:"white" , border:"none" , fontSize:"large" , textDecoration:"underline" , cursor:"pointer" }} onClick={clearBtn} >Clear</button>
</div>

            <h3>Rating</h3>
             <input  type="range" min="0"  max="5" value={rangeValue} onChange={getSliderHandler} style={{width:"10rem"}}/>



             <h3>Category</h3>

             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>

             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="checkbox" value="fiction"  onChange={GetCategoryHandler}></input>

             <label for="fiction" >Fiction</label>

             
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="checkbox" value="nonfiction" onChange={GetCategoryHandler}></input>
    
             <label for="nonfiction" >Non-Fiction</label>
             
            
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }} >
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="checkbox" value="horror" onChange={GetCategoryHandler}></input>
             <label for="horror" >Horror</label>
            
             </div>

           
            
            
             <h3>Sort By</h3>

             
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>

             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="radio" value="LowToHigh" name="sort" onChange={sortHandler}></input>

             <label for="LowToHigh" >Price - Low To High</label>

             
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="radio" value="HighToLow" name="sort" onChange={sortHandler}></input>
    
             <label for="HighToLow" >Price - High To Low</label>
             
            
             </div>


             
           
             </div>
        
        <div  className="product-grid" style={{marginTop:"4rem" , marginRight:"2rem"}}>

{
    getSortedData.map((item)=><ProductCard {...item}/>)
}
</div>

    </div>)
}