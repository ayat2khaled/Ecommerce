import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../components/Context/Cart.context';
import { userContext } from '../../components/Context/User.context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function CheckOut() {
    let navigate = useNavigate();
    const {cartInfo} = useContext(CartContext);
    const {token} = useContext(userContext);
    const [paymentMethod , setPaymentMethod] = useState(null)
    async function handleCashOrder(values){
        let toastId = toast.loading("making an order...");
        try{
            const options ={
                url:`https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.cartId}`,
                method:"POST",
                headers:{
                    token
                },
                data: values
            }
            let {data} = await axios.request(options);
            if (data.status =="success") {
                toast.success("Order has been created");
                setTimeout(()=>{
                    navigate("/allorders");

                },2000)
   
                
            }
        } catch(error){
            console.log(error);
        } finally{
            toast.dismiss(toastId)
        }
        
        
    }
    async function handleOnlinePayment(values){
        try{
            const options ={
                url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.cartId}?url=${location.origin}`,
                method:"POST",
                headers:{
                    token
                },
                data: values
            }
            let {data} = await axios.request(options);
            if (data.status =="success") {
                toast.loading("redirecting you to stripe");
                setTimeout(()=>{
                    location.href = data.session.url

                },2000)
   
                
            }
        } catch(error){
            console.log(error);
        }
        
        
    }


    const formik = useFormik({
        initialValues:{
            shippingAddress:{
                details:"",
                phone:"",
                city:"",
            },
        },
        onSubmit: (values)=>{
            if (paymentMethod == "cash") handleCashOrder(values);
            else handleOnlinePayment(values);
        },
    });
    return (
    <>
       <h1 className='text-xl font-semibold text-gray-700 mb-4'>Shipping Address</h1>
       <form className='space-y-2' onSubmit={formik.handleSubmit}>
        <div className="city">
            <input 
             type="text"
             placeholder='City' 
             className='form-control w-full' 
             value={formik.values.shippingAddress.city} 
             onChange={formik.handleChange} 
             name='shippingAddress.city'/>
        </div>
        <div className="phone">
            <input 
             type="tel"
             placeholder='Phone' 
             className='form-control w-full' 
             value={formik.values.shippingAddress.phone} 
             onChange={formik.handleChange} 
             name='shippingAddress.phone'/>
        </div>
        <div className="details">
            <textarea 
             placeholder='details' 
             className='form-control w-full' 
             value={formik.values.shippingAddress.details} 
             onChange={formik.handleChange} 
             name='shippingAddress.details'></textarea>
        </div>
        <button onClick={()=>{setPaymentMethod("cash")}} type='submit' className='btn bg-blue-500 hover:bg-blue-600 text-white'>Cash Order</button>
        <button onClick={()=>{setPaymentMethod("online")}} type='submit' className='btn bg-lime-500 ml-2 hover:bg-lime-600 text-white'>Online Payment</button>
       </form>
    </>
        
    )
}

export default CheckOut
