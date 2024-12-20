import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer"

export default function AuthLayout() {
    return <>
      <Navbar/>
      <div className="container py-12 pb-10 pt-20">
      <Outlet/>
      </div>
      <Footer/>
    </>
}


