import { useContext } from "react"

import { ProductCard } from "./productCard"
import { CartContext } from "../contexts/contextProvider"

export const ProductList =()=>{


    const {getProducts , setProducts} = useContext(CartContext)

    return(<div>
        <div className="sideBar" style={{margin:"0%"}}  >
            
            
             <p>Filters</p>


            <h3>Price</h3>
             <input  type="range"  style={{width:"10rem"}}/>

             <h3>Category</h3>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>

             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="checkbox" value="fiction"></input>

             <label for="fiction" >Fiction</label>

             
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="checkbox" value="non-fiction"></input>
    
             <label for="fiction" >Non-Fiction</label>
             
            
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }} >
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="checkbox" value="horror"></input>
             <label for="fiction" >Horror</label>
            
             </div>

             <h3>Ratings</h3>

             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>

             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="radio" value="1"></input>

             <label for="fiction" >1 star & above</label>

             
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="radio" value="2"></input>
    
             <label for="fiction" >2 star & above</label>
             
            
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }} >
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="radio" value="3"></input>
             <label for="fiction" >3 star & above</label>
            
             </div>

             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }} >
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="radio" value="4"></input>
             <label for="fiction" >4 star & above</label>
            
             </div>
             <h3>Sort By</h3>

             
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>

             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="radio" value="LowToHigh"></input>

             <label for="LowToHigh" >Price - Low To High</label>

             
             </div>
             <div style={{display:"block" , fontSize:"large" , marginBottom:"0.5rem"  }}>
             <input style={{width:"15px" , height:"15px" , marginLeft:"0.5rem"}}  type="radio" value="HighToLow"></input>
    
             <label for="HighToLow" >Price - High To Low</label>
             
            
             </div>


             
           
             </div>
        
        <div  className="product-grid" style={{marginTop:"4rem"}}>

{
    getProducts.map((item)=><ProductCard {...item}/>)
}
</div>

    </div>)
}