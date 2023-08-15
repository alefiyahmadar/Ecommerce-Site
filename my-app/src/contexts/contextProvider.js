import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const ContextProvider =({children})=>{

const [ getProducts , setProducts] = useState([])
const [rangeValue , setRangeValue] = useState("0")
const [filters , setFilter] = useState({categoryValue:[] , rating:"" , sort:""})
const [isLoggedin , SetIsloggedIn] = useState(false)




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
    

const getCartLength =  getProducts.filter((e)=>e.isAddedToCart === true) 




    const RemoveFromCart =(item)=>{
    
        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isAddedToCart:false} :e))
    
       
    
    }
    const AddToWishlistHandler =(item)=>{
    
    
        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isWished:true}:e))
    
        
    }

    const GetWishlistLength = getProducts.filter((e)=>e.isWished === true)
    
    const RemoveFromWishlist = (item)=>{
        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isWished:false}:e))
    
    
        
    
    }    

    const getSliderHandler =(e)=>{

setRangeValue(e.target.value)
console.log(rangeValue)
        

setFilter({...filters ,  rating:e.target.value})
    }
    
    const getPriceData = filters.rating > 0 ? getProducts.filter((e)=>e.rating >= Number(filters.rating)) : getProducts


const GetCategoryHandler =(event)=>{

    


    setFilter({...filters , categoryValue:[...filters.categoryValue , event.target.value]})

    const isSimilar = filters.categoryValue.find((e)=>e === event.target.value)



    setFilter({...filters , categoryValue:isSimilar?filters.categoryValue.filter((e)=>e !== event.target.value): [...filters.categoryValue , event.target.value]})
    
}


const GetCategoryData = filters.categoryValue.length > 0 ? getPriceData.filter((item)=>filters.categoryValue.some((cat)=>item[cat])):getPriceData

const sortHandler =(e)=>{


setFilter({...filters , sort:e.target.value})
}

const getSortedData = filters.sort ? GetCategoryData.sort((a,b)=>filters.sort === "LowToHigh" ? a.price - b.price : b.price - a.price) :GetCategoryData


const clearBtn =()=>{

    setFilter({...filters , categoryValue:[] , sort:"" , rating:""})
    setRangeValue("0")
    
}



    return(
        <CartContext.Provider value={{getProducts , setProducts  , AddToCartHandler , RemoveFromCart , AddToWishlistHandler , RemoveFromWishlist , rangeValue , setRangeValue ,getSliderHandler , getPriceData , GetCategoryHandler , GetCategoryData , sortHandler , getSortedData , clearBtn , getCartLength , GetWishlistLength , setFilter , filters , isLoggedin , SetIsloggedIn}}>
            {children}
        </CartContext.Provider>
    )
}