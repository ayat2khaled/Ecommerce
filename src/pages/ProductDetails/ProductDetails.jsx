import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Loading from "../../components/Loading/Loading"
import { useParams } from 'react-router-dom';
import { CartContext } from '../../components/Context/Cart.context';
import ReactImageGallery from 'react-image-gallery';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"

function ProductDetails() {
    const [relatedProduct, setRelatedProduct] = useState(null);
    const [productDetails , setProductDetails] = useState(null);
    const {addProductToCart} = useContext(CartContext)
    const {id} = useParams();
    async function getProductDetails(){
        const options ={
            url:`https://ecommerce.routemisr.com/api/v1/products/${id}`,
            method:"GET",
        }
        let {data} = await axios.request(options);
        setProductDetails(data.data)
    }
    async function getRelatedProducts(){
        const options ={
            url:`https://ecommerce.routemisr.com/api/v1/products?category[in]=${productDetails.category._id}`,
            method:"GET",
        }
        let {data} = await axios.request(options);
        setRelatedProduct(data.data);
        
    }

    useEffect(()=>{
        getProductDetails();
        
    },[id]);
    useEffect(()=>{
        if (productDetails == null) return;
        getRelatedProducts();
    },[productDetails]);
    return (<>
    {productDetails && relatedProduct ? <>
        <section className='grid grid-cols-12 gap-5'>
        <div className='col-span-3'>
            <ReactImageGallery showPlayButton={false} showFullscreenButton={false} showNav={false} items={productDetails.images.map((image)=> {
                return{original: image, thumbnail: image};
            })}/>
        </div>
        <div className='col-span-9 space-y-4'>
            <div>
              <h2 className='text-2xl font-semibold text-gray-600'>{productDetails.title}</h2>
              <h3 className='text-primary-800 font-semibold'>{productDetails.category.name}</h3>
            </div>
            <p className='text-gray-400'>{productDetails.description}</p>
            <div className='flex justify-between items-center'>
                <span>{productDetails.price} L.E</span>
                <div>
                    <i className='mr-2 fa-solid fa-star text-yellow-500'></i>
                    <span>{productDetails.ratingAverage}</span>
                </div>
                
            </div>
            <button onClick={()=>{
                addProductToCart({productId: id})
            }} className='btn w-full font-semibold bg-primary-800 hover:bg-primary-900 text-white'>Add To Cart</button>
        </div>
    </section> 
    <section>
        <h2 className='text-2xl text-gray-600 my-10'>Related Products</h2>
        <Swiper slidesPerView={6} spaceBetween={15}>
            {relatedProduct.map((product)=> 
            <SwiperSlide>
                (<ProductCard key={product.id} productInfo={product}/>)

            </SwiperSlide>
            )}
        </Swiper>
    </section>
    </>: <Loading /> }
    </>
        
    )
}

export default ProductDetails
