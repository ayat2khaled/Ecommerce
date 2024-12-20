import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import AuthLayout from "./components/AuthLayout/AuthLayout"
import UserProvider from "./components/Context/User.context"
import GuestRoute from "./components/GuestRoute/GuestRoute"
import CartProvider from "./components/Context/Cart.context"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import CheckOut from "./pages/CheckOut/CheckOut"
import Orders from "./pages/Orders/Orders"
import Cart from "./pages/Cart/Cart.jsx"
import Brands from "./components/Brands/Brands.jsx"
import Products from './components/Products/Products.jsx'
import GridCard from "./components/Categories/GridCard.jsx"


function App() {
 const router = createBrowserRouter([
    {path:"", element: (<ProtectedRoute><Layout/></ProtectedRoute>), children:[
      {index: true , element: <Home/>},
      {path:"cart", element:<Cart/>},
      {path:"product/:id", element:<ProductDetails/>},
      {path:"checkout" , element:<CheckOut/>},
      {path:"allorders" , element:<Orders/>},
      {path:"/category/:id", element: <h2>Category</h2>},
      {path:"brands", element: <Brands/>},
      {path:"products", element: <Products/>},
      {path:"categories", element: <GridCard/>},
      
      

    ]},
    
    {path: "/auth", element: <GuestRoute>
      <AuthLayout/>
     </GuestRoute>,children:[
      {path:"login", element:<Login/>},
      {path:"signup", element:<SignUp/>},
    ]}
  ]);
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} ></RouterProvider>
          <Toaster position="top-right" />
        </CartProvider>
      </UserProvider>
    </>


  ) 
}

export default App
