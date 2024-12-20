import React, { useContext, useEffect } from 'react'
import freshCartLogo from "../../assets/images/freshcart-logo.svg"
import { NavLink, Link } from 'react-router-dom'
import { userContext } from '../Context/User.context'
import { CartContext } from '../Context/Cart.context';

function Navbar() {
    const {token, logOut} = useContext(userContext);
    const {cartInfo , getCartProducts} = useContext(CartContext);
    useEffect(()=>{
        getCartProducts()
    },[])
    return <>
     <nav className='py-3 bg-slate-100 shadow fixed top-0 left-0 right-0 z-50'>
        <div className="container flex items-center gap-12">
            <a href="">
                <img src={freshCartLogo} alt="FreshCart Logo" />
            </a>
            {token ? <ul className='flex gap-5 items-center'>
                <li>
                    <NavLink  className={(isActive)=>{
                        return `relative before:absolute before:w-0 before:max-h-0.5 before:bg-primary-800 before:left-0 before:-bottom-1 hover:before:w-full before:transition-[width] before:duration-300 ${isActive ? "before:!w-full font-semibold" : "" }`
                    }} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>{
                        return `relative before:absolute before:w-0 before:max-h-0.5 before:bg-primary-800 before:left-0 before:-bottom-1 hover:before:w-full before:transition-[width] before:duration-300 ${isActive ? "before:!w-full font-semibold" : "" }`
                    }} to="/products">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>{
                        return `relative before:absolute before:w-0 before:max-h-0.5 before:bg-primary-800 before:left-0 before:-bottom-1 hover:before:w-full before:transition-[width] before:duration-300 ${isActive ? "before:!w-full font-semibold" : "" }`
                    }} to="/categories">
                       Categories
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>{
                        return `relative before:absolute before:w-0 before:max-h-0.5 before:bg-primary-800 before:left-0 before:-bottom-1 hover:before:w-full before:transition-[width] before:duration-300 ${isActive ? "before:!w-full font-semibold" : "" }`
                    }} to="/brands">
                        Brands
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>{
                        return `relative before:absolute before:w-0 before:max-h-0.5 before:bg-primary-800 before:left-0 before:-bottom-1 hover:before:w-full before:transition-[width] before:duration-300 ${isActive ? "before:!w-full font-semibold" : "" }`
                    }} to="/allorders">
                        Orders
                    </NavLink>
                </li>
            </ul> : "" }
            {token ? <Link to="/cart" className="cart relative cursor-pointer ml-auto">
               <i className="fa-solid fa-cart-shopping text-lg"></i>
               <div className="cart-counter flex justify-center items-center absolute right-0 top-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-800 text-white">
                 {cartInfo === null ? <i className='fa-solid fa-spinner text-sm fa-spin'></i> : <span className='text-sm font-semibold'>{cartInfo.numOfCartItems}</span>}
               </div>
            </Link> : ""}
            <ul className={`flex gap-5 items-center ${!token && "ms-auto"}`}>
                <li>
                    <a href="https://instagram.com" target='_blank'></a>
                    <i className='fa-brands fa-instagram'></i>
                </li>
                <li>
                    <a href="https://facebook.com" target='_blank'></a>
                    <i className='fa-brands fa-facebook'></i>
                </li>
                <li>
                    <a href="https://tiktok.com" target='_blank'></a>
                    <i className='fa-brands fa-tiktok'></i>
                </li>
                <li>
                    <a href="https://twitter.com" target='_blank'></a>
                    <i className='fa-brands fa-twitter'></i>
                </li>
                <li>
                    <a href="https://linkedin.com" target='_blank'></a>
                    <i className='fa-brands fa-linkedin'></i>
                </li>
                <li>
                    <a href="https://youtube.com" target='_blank'></a>
                    <i className='fa-brands fa-youtube'></i>
                </li>
            </ul>
            <ul className='flex gap-5 items-center'>
                {!token ? <>
                    <li>
                    <NavLink className={(isActive)=>{
                        return `relative before:absolute before:w-0 before:max-h-0.5 before:bg-primary-800 before:left-0 before:-bottom-1 hover:before:w-full before:transition-[width] before:duration-300 ${isActive ? "before:!w-full font-semibold" : "" }`
                    }} to="/auth/signup">
                        Sign Up
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>{
                        return `relative before:absolute before:w-0 before:max-h-0.5 before:bg-primary-800 before:left-0 before:-bottom-1 hover:before:w-full before:transition-[width] before:duration-300 ${isActive ? "before:!w-full font-semibold" : "" }`
                    }} to="/auth/login">
                        Login
                    </NavLink>
                </li>
                </> : <li className='cursor-pointer'>
                    <NavLink onClick={logOut} className={(isActive)=>{
                        return `relative before:absolute before:w-0 before:max-h-0.5 before:bg-primary-800 before:left-0 before:-bottom-1 hover:before:w-full before:transition-[width] before:duration-300 ${isActive ? "before:!w-full font-semibold" : "" }`
                    }} to="">
                      <i className="fa-solid fa-right-from-bracket text-lg"></i>
                    </NavLink>
                </li> }
                
            </ul>
        </div>
     </nav>
    </>
}

export default Navbar
