import { useContext } from "react"

import { ProductCard } from "../cards/productCard"
import { CartContext } from "../contexts/contextProvider"


export const ProductList =()=>{



    const {rangeValue  , getSliderHandler  , GetCategoryHandler, sortHandler  , clearBtn   , filters , getDataFiltered , showFilter  } = useContext(CartContext)


        
        



    return(<div className="productlistDiv">
        <div className="sideBar" style={{margin:"0%" , display:showFilter ? "flex" : "none"}}  >
           


            <span >
        <div style={{ display:"flex"  }}>
             <h4 style={{margin:"0%" , fontSize:"large"}}>Filters</h4>< button style={{ textDecoration:"underline" , cursor:"pointer" }} onClick={clearBtn} >Clear</button>
</div>

            <h3>Rating</h3>
            <p>{rangeValue}</p>
            
             <input  type="range" min="0"  max="5" value={rangeValue} onChange={getSliderHandler} style={{width:"10rem"}}/>



             <h3>Category</h3>
             
             

             <div >

             <input  checked={filters.categoryValue.find((e)=> e === "fiction") ? true : false} type="checkbox" value="fiction"   onChange={GetCategoryHandler} ></input>

             <label htmlFor="fiction"  >Fiction</label>

             
             </div>
             <div >
             <input  type="checkbox" value="nonfiction" 
             checked={filters.categoryValue.find((e)=> e === "nonfiction") ? true : false}
              onChange={GetCategoryHandler}></input>
    
             <label htmlFor="nonfiction"  >Non-Fiction</label>
             
            
             </div>
             <div  >
             <input   type="checkbox" value="horror" checked={filters.categoryValue.find((e)=> e === "horror") ? true : false} onChange={GetCategoryHandler}></input>
             <label htmlFor="horror" >Horror</label>
            
             </div>

           
            
            
             <h3>Sort By</h3>

             
             <div >

             <input   type="radio" value="LowToHigh" name="sort" onChange={sortHandler} checked={filters.sort === "LowToHigh" ? true : false }></input>

             <label htmlFor="LowToHigh" >Price - Low To High</label>

             
             </div>
             <div >
             <input  type="radio" value="HighToLow" name="sort" onChange={sortHandler} checked={filters.sort === "HighToLow" ? true : false }></input>
    
             <label htmlFor="HighToLow" >Price - High To Low</label>
             
            
             </div>


             </span>
           
             </div>
             
             
        
        <div  className="product-grid" style={{marginTop:"4rem" }}>

            

{
 
 
      getDataFiltered.length > 0 ?  getDataFiltered.map((item)=><ProductCard {...item}/>) : <h2 >Sorry , Products are not available for chosen category.</h2>
}
</div>


    </div>)
}