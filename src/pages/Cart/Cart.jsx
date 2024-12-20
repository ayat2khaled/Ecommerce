import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../components/Context/Cart.context'
import Loading from "../../components/Loading/Loading"
import CartItem from '../../components/CartItem/CartItem'
import { Link } from 'react-router-dom'

function Cart() {
    let {getCartProducts, cartInfo, clearCart} = useContext(CartContext)
    useEffect(()=>{
        getCartProducts()
    },[])
    return <>
        {cartInfo === null ? <Loading/>: <section>
            <div className='flex gap-8 items-center'>
                <i className='fa-brands fa-opencart text-3xl '></i>
                <h2 className='text-xl text-slate-600 font-semibold relative before:absolute before:w-0.5 before:h-3/4 before:bg-slate-600 before:-left-1 before:top-1/2 before:-translate-y-1/2 pl-4'>Your Shopping Cart</h2>
            </div>
            {cartInfo.numOfCartItems ===0 ? <div className='mt-6 bg-gray-100 p-7 rounded-md shadow flex justify-center items-center flex-col gap-3'>
                <h2>Oops! Your cart is empty. Start shopping now by clicking the button below and find something you love!</h2>
                <Link to="/" className='btn bg-primary-600 hover:bg-primary-700 text-white'>Back to Home</Link>
            </div> : <>
                <div className='space-y-4 mt-6'>
                {cartInfo.data.products.map((product)=> <CartItem productInfo={product} key={product._id}/>)}
                </div>
                <div className='mt-5 flex justify-between items-center'>
                    <p className='text-xl'><i className='fa-solid fa-dollar-sign text-xl mr-2 text-primary-600'></i>Your Total Cart Price <span className='text-primary-600 font-bold'>{cartInfo.data.totalCartPrice}</span></p>
                    <button onClick={clearCart} className='btn bg-red-500 hover:bg-red-600 text-white'><i className='fa-solid fa-trash mr-2'></i>Delete Cart</button>
                </div>
                <Link to="/checkout" className='btn bg-primary-500 hover:bg-primary-600 text-white inline-block w-full text-center mt-8'>Next Step (Payment) </Link>
            </>}
            </section>}
    </>
       
    
}

export default Cart
