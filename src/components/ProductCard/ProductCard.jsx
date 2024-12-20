import React, { useContext } from 'react'
import { CartContext } from '../Context/Cart.context';
import { Link } from 'react-router-dom';


function ProductCard({productInfo}) {
    const {imageCover, title, price, category, ratingsAverage, id } = productInfo;
    let {addProductToCart} = useContext(CartContext)
    return <>
      <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 shadow-lg rounded-md overflow-hidden'>
        <div className='relative'>
          <img 
            src={imageCover} 
            className='w-full'
            alt=""
          />
          <div className="layer opacity-0 hover:opacity-100 transition-opacity duration-300 flex gap-2 items-center justify-center absolute w-full h-full left-0 top-0 bg-black bg-opacity-15">
            <div className="icon cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-6 w-10 h-10 rounded-full bg-primary-50 text-sm text-white flex justify-center items-center">
                <i className='fa-solid fa-heart'></i>
            </div>
            <div onClick={()=>{
              addProductToCart({productId: id })
            }} className="icon cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-6 w-10 h-10 rounded-full bg-primary-50 text-sm text-white flex justify-center items-center">
                <i className='fa-solid fa-cart-shopping'></i>
            </div>
            <Link to={`/product/${id}`} className="icon cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-6 w-10 h-10 rounded-full bg-primary-50 text-sm text-white flex justify-center items-center">
                <i className='fa-solid fa-eye'></i>
            </Link>

          </div>
        </div>
        <div className='p-3'>
            <h3 className='text-primary-50'>{category.name}</h3>
            <h2 className='text-lg font-semibold line-clamp-2 '>{title}</h2>
            <div className='flex items-center justify-between mt-4'>
                <span>{price} L.E</span>
                <div className='flex gap-1 items-center'>
                    <i className='fa-solid fa-star text-yellow-500'></i>
                    <span>{ratingsAverage}</span>
                </div>
            </div>
        </div>
       
      </div>
    </>
}

export default ProductCard
