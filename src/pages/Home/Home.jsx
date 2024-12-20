import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import axios from 'axios';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import CategorySlider from "../../components/CategorySlider/CategorySlider"
import Loading from "../../components/Loading/Loading"
import Search from "../../components/Search/Search"

function Home() {
    const [products ,setProducts] = useState(null);
    async function getProducts(){
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/products",
        method:"GET"
      }
      const {data} = await axios.request(options);
      setProducts(data.data)
    }
    useEffect(()=>{
      getProducts();
    },[]);
    return <>

          <HomeSlider/>
          <CategorySlider/>
          <Search/>
          {products? (
           <div className='grid grid-cols-12 gap-4'>
              {products.map((product)=> (
                <ProductCard key={product._id} productInfo = {product} />))}
           </div>
          ) :(<Loading />)}
       
    </>
}

export default Home
