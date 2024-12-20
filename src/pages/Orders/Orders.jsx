import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../components/Context/User.context';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { Link } from 'react-router-dom';

function Orders() {
    async function getUserOrders(){
        const [orders, setOrders] = useState(null);
        const {token} = useContext(userContext);
        let {id} = jwtDecode(token);
   
        try{
            const options ={
                url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
                method:"GET",
                
            }
            let {data} = await axios.request(options);
            setOrders(data)
            
                
        
        } catch(error){
            console.log(error);
        } 
        
        
    }
    useEffect(()=>{
        getUserOrders()

    },[])







    return (<>
    {orders ? <section className='space-y-4'>
        {orders.map((order)=><div key={order.id} className="order p-4 border-2 border-gray-500 border-opacity-25 rounded-lg">
            <header className='flex justify-between items-center'>
                <div>
                    <h2 className='text-gray-500'>Order ID</h2>
                    <span className='text-lg font-semibold text-gray-700'>${order.id}</span>
                </div>
                <div>
                    {order.isPaid? <span className='font-cairo inline-block px-3 py-1 mx-2 bg-lime-500 text-white font-semibold rounded-full'> تم الدفع</span> : <span className='font-cairo inline-block px-3 py-1 mx-2 bg-red-500 text-white font-semibold rounded-full'>غير مدفوع</span> }
                    {order.isDelivered ? <span className='font-cairo inline-block px-3 py-1 bg-lime-500 text-white font-semibold rounded-full'>تم الاستلام </span> : <span className='font-cairo inline-block px-3 py-1 bg-blue-500 text-white font-semibold rounded-full'>قيدالتوصيل</span>}
                </div>
            </header>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-4 mt-4'>
                {order.cartItems.map((product) => <div key={product._id} className="product-item overflow-hidden border-2 border-gray-400 border-opacity-30 rounded-lg">
                    <img src={product.product.imageCover} alt="" className='w-full' />
                    <div className='p-4'>
                     <h3 className='text-lg font-semibold line-clamp-2'><Link to={`/product/${product.product.id}`}>{product.product.title}</Link></h3>
                     <div className='flex mt-2 justify-between items-center'>
                        <p><span className='font-bold underline'>Count:</span>{product.count}</p>
                        <span>{product.price} L.E</span>
                     </div>
                    </div>
                </div>)}
            </div>
            <p className='text-lg mt-4'>Your Total Order Price is <span className='mx-1 font-bold text-primary-400'>{order.totalOrderPrice}</span>L.E</p>
        </div>)}
    </section>: <Loading/>}
    </>
        
    )
}

export default Orders
