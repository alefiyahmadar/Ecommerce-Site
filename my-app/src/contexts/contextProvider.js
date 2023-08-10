import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const ContextProvider =({children})=>{

const [ getProducts , setProducts] = useState([])


const fetchData =async()=>{

    try{

const getData = await fetch("/api/products")

const data = await getData.json()

const {products} = data
setProducts(products)




    }catch(e){

console.log(e)

    }

}

useEffect(()=>{
    fetchData()
},[])



const AddToCartHandler = (item)=>{

    setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isAddedToCart:true} : e))
    
    
    
    
    }
    
    const RemoveFromCart =(item)=>{
    
        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isAddedToCart:false} :e))
    
       
    
    }
    const AddToWishlistHandler =(item)=>{
    
    
        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isWished:true}:e))
    
        
    }
    
    const RemoveFromWishlist = (item)=>{
        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isWished:false}:e))
    
    
        
    
    }    

    return(
        <CartContext.Provider value={{getProducts , setProducts  , AddToCartHandler , RemoveFromCart , AddToWishlistHandler , RemoveFromWishlist}}>
            {children}
        </CartContext.Provider>
    )
}