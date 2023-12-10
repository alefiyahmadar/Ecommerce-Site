import { useContext } from "react"

import { ProductCard } from "./productCard"
import { CartContext } from "../contexts/contextProvider"
import { AlertMessage } from "./alertMsg"

export const ProductList =()=>{



    const {rangeValue  , getSliderHandler  , GetCategoryHandler, sortHandler  , clearBtn ,showAlert  , alertMsg  ,handleAlertClose  , filters , getDataFiltered } = useContext(CartContext)


        
        



    return(<div>
        <div className="sideBar" style={{margin:"0%"}}  >
            {
                showAlert &&    <AlertMessage message={alertMsg} onClose={handleAlertClose} />
            }


            
            <div style={{display:"flex" , justifyContent:"space-around" , marginTop:"2rem" }}>
             <p style={{margin:"0%" , marginRight:"75%"}}>Filters</p>< button style={{backgroundColor:"white" , border:"none" , fontSize:"large" , textDecoration:"underline" , cursor:"pointer" }} onClick={clearBtn} >Clear</button>
</div>

            <h3>Rating</h3>
            <p>{rangeValue}</p>
            
             <input  type="range" min="0"  max="5" value={rangeValue} onChange={getSliderHandler} style={{width:"10rem"}}/>



             <h3>Category</h3>
             
             

             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>

             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}} checked={filters.categoryValue.find((e)=> e === "fiction") ? true : false} type="checkbox" value="fiction"   onChange={GetCategoryHandler} ></input>

             <label htmlFor="fiction"  >Fiction</label>

             
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="checkbox" value="nonfiction" 
             checked={filters.categoryValue.find((e)=> e === "nonfiction") ? true : false}
              onChange={GetCategoryHandler}></input>
    
             <label htmlFor="nonfiction"  >Non-Fiction</label>
             
            
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }} >
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="checkbox" value="horror" checked={filters.categoryValue.find((e)=> e === "horror") ? true : false} onChange={GetCategoryHandler}></input>
             <label htmlFor="horror" >Horror</label>
            
             </div>

           
            
            
             <h3>Sort By</h3>

             
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>

             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="radio" value="LowToHigh" name="sort" onChange={sortHandler} checked={filters.sort === "LowToHigh" ? true : false }></input>

             <label htmlFor="LowToHigh" >Price - Low To High</label>

             
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="radio" value="HighToLow" name="sort" onChange={sortHandler} checked={filters.sort === "HighToLow" ? true : false }></input>
    
             <label htmlFor="HighToLow" >Price - High To Low</label>
             
            
             </div>


             
           
             </div>
        
        <div  className="product-grid" style={{marginTop:"4rem" , marginRight:"2rem"}}>

            

{
 
 
      getDataFiltered.length > 0 ?  getDataFiltered.map((item)=><ProductCard {...item}/>) : <h2 style={{display:"flex" , width:"50rem"}}>Sorry , Products are not available for chosen category.</h2>
}
</div>

    </div>)
}