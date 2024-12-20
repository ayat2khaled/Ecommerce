import { createContext, useContext, useState }  from "react";
import {userContext} from "./User.context.jsx"
import axios from "axios";
import toast from "react-hot-toast";

export let CartContext = createContext(null);
export default function CartProvider({children}){
    let {token} = useContext(userContext);
    
    let [cartInfo, setCartInfo] = useState(null)
    async function addProductToCart({productId}){
        let toastId = toast.loading("Adding product...")
       try{
        let options = {
            url: "https://ecommerce.routemisr.com/api/v1/cart",
            method:"POST",
            headers:{
                token
            },
            data:{
                productId
            }
        }
        let {data} = await axios.request(options);
        if(data.status === "success"){
            toast.success(data.message);
            getCartProducts()
        }

       } catch (error){
        console.log(error);

       } finally{
        toast.dismiss(toastId)
       }

    }
    async function getCartProducts() {
        try{
            let options = {
                url: "https://ecommerce.routemisr.com/api/v1/cart",
                method:"GET",
                headers:{
                    token,
                },
              
            }
            let {data} = await axios.request(options);
            setCartInfo(data)
        }catch(error){
            console.log(error);

        }
        
    }
    async function removeProductFromCart({productId}) {
       let toastId = toast.loading("Deleting Product...")
       try{
        let options = {
            url: `https://ecommerce.routemisr.com/api/v1/${productId}`,
            method:"DELETE",
            headers:{
                token,
            },
          
        }
        let {data} = await axios.request(options);
        if (data.status === "success") {
            toast.success("Product has been deleted")
            setCartInfo(data)
            
        }
       } catch(error){
        console.log(error)
       } finally{
        toast.dismiss(toastId)
       }
        
    }
    async function clearCart() {
        let toastId = toast.loading("Clear Cart...")

       try{
        let options = {
            url: "https://ecommerce.routemisr.com/api/v1/cart",
            method:"DELETE",
            headers:{
                token,
            },
          
        }
        let {data} = await axios.request(options);
        if(data.message === "success"){
            toast.success("Cart has been cleared")
            setCartInfo({
                numOfCartItems: 0
            });
        }

       } catch(error){
        console.log(error)
       } finally{
        toast.dismiss(toastId)
       }
    }
    async function updateProductCount({productId, count}) {
    
        try{
            let options = {
                url: `https://ecommerce.routemisr.com/api/v1/${productId}`,
                method:"PUT",
                headers:{
                   token,
                },
                data:{
                    count,
                }
               
            }
            let {data} = await axios.request(options);
            if(data.status === "success"){
                setCartInfo(data)
            }
            
        } catch(error){
            console.log(error)
        } finally{
            toast.dismiss(toastId)
        }
         
     }
    return <CartContext.Provider value={{addProductToCart , getCartProducts , cartInfo, removeProductFromCart , clearCart , updateProductCount}}>
        {children}

    </CartContext.Provider>
}
