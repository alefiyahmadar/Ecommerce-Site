import { createContext, useEffect, useState , React } from "react";
import { users } from "../backend/db/users";
import { formatDate } from "../backend/utils/authUtils";
import {v4 as uuid} from "uuid"
import { useNavigate } from "react-router-dom";

export const CartContext = createContext()

export const ContextProvider =({children})=>{

const [ getProducts , setProducts] = useState([])
const [rangeValue , setRangeValue] = useState("0")
const [isFiction , setIsFiction] = useState(false)
const [isNonFic , setIsNonFic] = useState(false)
const [filters , setFilter] = useState({categoryValue:[] , rating:"" , sort:""})
const [isLoggedin , SetIsloggedIn] = useState(false)
const [loggedInUser , setLoggedInUser] = useState({})
const [adressArr , setAddressArr] = useState([{id:0 , name:"Mary Jane"  ,house:"301 , Wolf Street" , city:"Brisbane" , state:"West Australia" , country:"Australia" ,pincode:"1234" ,number:"61234589" , selected:true}])
const [discount , SetDiscount] = useState(40)
const [coupan ,setCoupan ] =useState(0)
const [showCpn , setShowCpn] =useState("") 
const [showAlert, setShowAlert] = useState(false);
const [alertMsg , setAlertMsg] = useState("")

const [userArray, setUserArray] = useState(users);
const [filterValue , setFilterValue] = useState("")
const [getFilterData , setFilterData] = useState(false)

const [showFilter , setShowFilter ] = useState(window.innerWidth > 425 ? true : false)





const navigate = useNavigate()
console.log(showFilter)









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




const storedUser = JSON.parse(localStorage.getItem("user"))
const userArrayStored = JSON.parse(localStorage.getItem("userArray"))



storedUser ? localStorage.setItem("user" , JSON.stringify(storedUser)) : localStorage.setItem("user" , JSON.stringify(defaultUser))


userArrayStored ? localStorage.setItem("userArray" , JSON.stringify(userArrayStored)) : localStorage.setItem("userArray" , JSON.stringify(userArray))

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



 
const SearchBarHandler =(e)=>{


    isLoggedin === false ?  setShowAlert(true) || setAlertMsg("Please Login") : navigate("/productList")

    console.log(typeof e.target.value)
    setFilterData(true)
    setFilterValue(e.target.value)

    const filterData = getSortedData.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(filterData)






}



const AddToCartHandler = (item)=>{
    const newItm = {...item , isAddedToCart:true}
    const userData = JSON.parse(localStorage.getItem("user"))
    
    

    setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isAddedToCart:true} : e))
    
    
 
    setCart([...cart , newItm ])

    const updateData = {...userData , cart:[...cart , newItm]}
    

    localStorage.setItem("user", JSON.stringify(updateData));


    
    const userArr = JSON.parse(localStorage.getItem("userArray"))
    
    const mapUserArr = userArr.map((e)=>{
        if(e.email === userData.email && e.password === userData.password){

        return {...e , cart:[...cart , newItm]}
        }else{
            return e
        }
    })
    localStorage.setItem("userArray" , JSON.stringify(mapUserArr))



    setShowAlert(true)
    setAlertMsg("Item added to cart")

    
    }
    


    const RemoveFromCart =(item)=>{
            
        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isAddedToCart:false} :e))
        
        const userData = JSON.parse(localStorage.getItem("user"))

        userData.cart = userData.cart.filter((product) => item.title !== product.title);
    

    localStorage.setItem("user", JSON.stringify(userData));

    const userArr = JSON.parse(localStorage.getItem("userArray"))

    const mapUserArr = userArr.map((e)=>{
        if(e.email === userData.email && e.password === userData.password){

        return {...e , cart:e.cart.filter((e)=>e.title !== item.title)}
        }else{
            return e
        }
    })
    
    
    localStorage.setItem("userArray" , JSON.stringify(mapUserArr))
        
        

        setShowAlert(true)
        setAlertMsg("Item removed from cart")


     
        
    
       
    
    }
    const AddToWishlistHandler =(item)=>{

        console.log("clicked")

        
    const newItm = {...item , isWished:true}
    

    
        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isWished:true}:e))

        setWishList([...wishList , newItm])

        const userData = JSON.parse(localStorage.getItem("user"))
        
        
        

        const updateData = {...userData , wishlist:[...userData.wishlist , newItm]}

        
        
    
        localStorage.setItem("user", JSON.stringify(updateData));



const userArr = JSON.parse(localStorage.getItem("userArray"))
    
    const mapUserArr = userArr.map((e)=>{
        if(e.email === userData.email && e.password === userData.password){

        return {...e , wishlist:[...wishList , newItm]}
        }else{
            return e
        }
    })


    localStorage.setItem("userArray" , JSON.stringify(mapUserArr))


        setShowAlert(true)
        setAlertMsg( "Item added to wishlist")
    
        
    }

    const GetWishlistLength = getProducts.filter((e)=>e.isWished === true)



    
    const RemoveFromWishlist = (item)=>{


        setProducts((prevItem)=>prevItem.map((e)=>e._id === item._id ? {...e , isWished:false}:e))




const userData = JSON.parse(localStorage.getItem("user"))

 userData.wishlist = userData.wishlist.filter((product) => item.title !== product.title);
    

    localStorage.setItem("user", JSON.stringify(userData));



    
const userArr = JSON.parse(localStorage.getItem("userArray"))
    
const mapUserArr = userArr.map((e)=>{
    if(e.email === userData.email && e.password === userData.password){

    return {...e , wishlist:e.wishlist.filter((product)=>product.title !== item.title)}
    }else{
        return e
    }
})


localStorage.setItem("userArray" , JSON.stringify(mapUserArr))


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

    

  


    const isSimilar = filters.categoryValue.find((e)=>e === event.target.value)



    setFilter({...filters , categoryValue:isSimilar?filters.categoryValue.filter((e)=>e !== event.target.value): [...filters.categoryValue , event.target.value]})
    
}


const GetCategoryData = filters.categoryValue.length > 0 ? getPriceData.filter((item)=>filters.categoryValue.some((cat)=>item[cat])):getPriceData

const sortHandler =(e)=>{


setFilter({...filters , sort:e.target.value})
}

const getSortedData = filters.sort ? GetCategoryData.sort((a,b)=>filters.sort === "LowToHigh" ? a.price - b.price : b.price - a.price) :GetCategoryData

const getDataFiltered = getFilterData === true ? getSortedData.filter((item)=>item.title.toLowerCase().includes(filterValue.toLowerCase())) : getSortedData

console.log(getDataFiltered)


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

   const useReduce =  JSON.parse(localStorage.getItem("user")).cart.reduce((acc ,curr)=>acc + curr.price * curr.quantity , 0)
    
   const getCartLength =  getProducts.filter((e)=>e.isAddedToCart === true) 

   const handleAlertClose =()=>{
    setShowAlert(false)
}


    return(
        <CartContext.Provider value={{getProducts , setProducts  , AddToCartHandler , RemoveFromCart , AddToWishlistHandler , RemoveFromWishlist , rangeValue , setRangeValue ,getSliderHandler , getPriceData , GetCategoryHandler , GetCategoryData , sortHandler , getSortedData , clearBtn , getCartLength , GetWishlistLength , setFilter , filters , isLoggedin , SetIsloggedIn , loggedInUser , setLoggedInUser , adressArr , setAddressArr , incrementHandler , decrementHandler ,useReduce , discount , SetDiscount ,coupan ,setCoupan , showCpn , setShowCpn , showAlert , setShowAlert , alertMsg , setAlertMsg , handleAlertClose   
         , cart , setCart , userArray , setUserArray , defaultUser , setDefault , isFiction , setIsFiction , isNonFic , setIsNonFic , SearchBarHandler , getDataFiltered  , showFilter , setShowFilter}}>
            {children}
        </CartContext.Provider>
    )
}