import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const ContextProvider =({children})=>{

const [ getProducts , setProducts] = useState([])
const [rangeValue , setRangeValue] = useState("0")
const [filters , setFilter] = useState({categoryValue:[] , rating:"" , sort:""})
const [isLoggedin , SetIsloggedIn] = useState(false)
const [loggedInUser , setLoggedInUser] = useState({})
const [adressArr , setAddressArr] = useState([{id:0 , name:"Mary Jane"  ,house:"301 , Wolf Street" , city:"Brisbane" , state:"West Australia" , country:"Australia" ,pincode:"1234" ,number:"61234589" , selected:true}])
const [discount , SetDiscount] = useState(40)
const [coupan ,setCoupan ] =useState(0)
const [showCpn , setShowCpn] =useState("") 







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
const incrementHandler =(id) =>{

    setProducts((prevItem)=>prevItem.map((e)=>e._id === id ? {...e , quantity:e.quantity + 1}:e))
    SetDiscount(discount + 20)


}


const decrementHandler =(id)=>{
    setProducts((prevItem)=>prevItem.map((e)=>e._id === id ? {...e , quantity:e.quantity - 1}:e))
    SetDiscount(discount - 20)


}

   const useReduce = getProducts.filter((e)=>e.isAddedToCart === true).reduce((acc ,curr)=>acc + curr.price * curr.quantity , 0)
    
   const getCartLength =  getProducts.filter((e)=>e.isAddedToCart === true) 


    return(
        <CartContext.Provider value={{getProducts , setProducts  , AddToCartHandler , RemoveFromCart , AddToWishlistHandler , RemoveFromWishlist , rangeValue , setRangeValue ,getSliderHandler , getPriceData , GetCategoryHandler , GetCategoryData , sortHandler , getSortedData , clearBtn , getCartLength , GetWishlistLength , setFilter , filters , isLoggedin , SetIsloggedIn , loggedInUser , setLoggedInUser , adressArr , setAddressArr , incrementHandler , decrementHandler ,useReduce , discount , SetDiscount ,coupan ,setCoupan , showCpn , setShowCpn }}>
            {children}
        </CartContext.Provider>
    )
}