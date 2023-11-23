import { createContext, useEffect, useState } from "react";
import { users } from "../backend/db/users";
import { formatDate } from "../backend/utils/authUtils";
import {v4 as uuid} from "uuid"

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
const [showAlert, setShowAlert] = useState(false);
const [alertMsg , setAlertMsg] = useState("")
const [isCarted , setIsCart] = useState(false)
const [userArray, setUserArray] = useState(users);








const parseObj = JSON.parse(localStorage.getItem("user"))


const [ objState , setState] = useState([parseObj])

const [ cart , setCart ] = useState(localStorage.getItem("user") && localStorage.getItem("user").cart ? localStorage.getItem("user").cart : [])
const [ wishList , setWishList] = useState( localStorage.getItem("user") && localStorage.getItem("user").wishlist ? localStorage.getItem("user").wishlist : [])

const [defaultUser , setDefault] = useState({   _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
cart:[],
wishlist:[]})









// const storedUsers = JSON.parse(localStorage.getItem('userArray'));
//     if (storedUsers) {
//       setUserArray(storedUsers);
//     }

// const initializeUsers = () => {
//     const storedUsers = localStorage.getItem('usersArray');
//     if (storedUsers) {
//       setUserArray(JSON.parse(storedUsers));
//     } else {
//     //   // Initialize with a default user
      
//     //   setUserArray([defaultUser]);
//     //   localStorage.setItem('usersArray', JSON.stringify([defaultUser]));
//     }
//   };



const fetchData =async()=>{



    try{
        

   


const getData = await fetch("/api/products")

const data = await getData.json()

const {products} = data
setProducts(products)



const serializedArr = JSON.stringify(users)











    }catch(e){

console.log(e)

    }

}

useEffect(()=>{
    
  

    fetchData()
    


  
    
},[])



const AddToCartHandler = (item)=>{
    const newItm = {...item , isAddedToCart:true}
    const userData = JSON.parse(localStorage.getItem("user"))

    setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isAddedToCart:true} : e))
    
    

    setCart([...cart , newItm ])

    const updateData = {...userData , cart:[...cart , newItm]}

    localStorage.setItem("user", JSON.stringify(updateData));



    setShowAlert(true)
    setAlertMsg("Item added to cart")

    
    }
    


    const RemoveFromCart =(item)=>{
            
        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isAddedToCart:false} :e))
        
        const userData = JSON.parse(localStorage.getItem("user"))

        userData.cart = userData.cart.filter((product) => item.title !== product.title);
    

    localStorage.setItem("user", JSON.stringify(userData));
    
        
        

        setShowAlert(true)
        setAlertMsg("Item removed from cart")


     
        
    
       
    
    }
    const AddToWishlistHandler =(item)=>{

        
    const newItm = {...item , isWished:true}
    

    
        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isWished:true}:e))

        setWishList([...wishList , newItm])

        const userData = JSON.parse(localStorage.getItem("user"))
        
        
        

        const updateData = {...userData , wishlist:[...userData.wishlist , newItm]}

        
        
    
        localStorage.setItem("user", JSON.stringify(updateData));
setState((prevItem)=>prevItem.map((e)=>item ? {...e , wishlist:[ ...e.wishlist,newItm]} : e))


        setShowAlert(true)
        setAlertMsg( "Item added to wishlist")
    
        
    }

    const GetWishlistLength = getProducts.filter((e)=>e.isWished === true)
    
    const RemoveFromWishlist = (item)=>{


        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isWished:false}:e))

const filterWish = wishList.filter((e)=>e.id !== item.id)


const userData = JSON.parse(localStorage.getItem("user"))

 userData.wishlist = userData.wishlist.filter((product) => item.title !== product.title);
    

    localStorage.setItem("user", JSON.stringify(userData));

        setShowAlert(true)
        setAlertMsg( "Item removed from wishlist")
    
    
        
    
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

   const useReduce = JSON.parse(localStorage.getItem("user")).cart.reduce((acc ,curr)=>acc + curr.price * curr.quantity , 0)
    
   const getCartLength =  getProducts.filter((e)=>e.isAddedToCart === true) 

   const handleAlertClose =()=>{
    setShowAlert(false)
}


    return(
        <CartContext.Provider value={{getProducts , setProducts  , AddToCartHandler , RemoveFromCart , AddToWishlistHandler , RemoveFromWishlist , rangeValue , setRangeValue ,getSliderHandler , getPriceData , GetCategoryHandler , GetCategoryData , sortHandler , getSortedData , clearBtn , getCartLength , GetWishlistLength , setFilter , filters , isLoggedin , SetIsloggedIn , loggedInUser , setLoggedInUser , adressArr , setAddressArr , incrementHandler , decrementHandler ,useReduce , discount , SetDiscount ,coupan ,setCoupan , showCpn , setShowCpn , showAlert , setShowAlert , alertMsg , setAlertMsg , handleAlertClose  , objState , setState , isCarted , setIsCart , cart , setCart , userArray , setUserArray , defaultUser , setDefault}}>
            {children}
        </CartContext.Provider>
    )
}