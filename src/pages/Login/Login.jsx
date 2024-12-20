/*import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { object, ref ,string } from 'yup';
import { userContext } from '../../components/Context/User.context';


 
function Login() {
    const {token, setToken}= useContext(userContext);
    const [inCorrectEmailOrPasswordError, setinCorrectEmailOrPasswordError] = useState(null);
    const navigate = useNavigate();
    const [showForgetPassword, setShowForgetPassword] = useState(false);
    const [email, setEmail] = useState("");

    const handleForgetPassword = (e) => {
        e.preventDefault();
        console.log("Email sent to:", email);
        alert("Check your email for password reset instructions.");
        setShowForgetPassword(false);
    };


    
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    
    const validationSchema = object({
        email: string()
           .required("Email is required")
           .email("Email is invalid "),
        password: string().required("Password is required").matches(passwordRegex, "Password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),

    });
    async function sendDataToLogin(values){
        const loadingToastId = toast.loading("waiting...")
        try{
            const options ={
                url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
                method:"POST",
                data: values
            } 
            let {data} = await axios.request(options);
            if(data.message === "success"){
                toast.success("user logged in successfully");
                setToken(data.token);
                localStorage.setItem("token", data.token);
                
                setTimeout(() =>{
                    navigate("/");
                   
                }, 2000);
            }
        } catch(error){
            
            toast.error(error.response.data.message);
            setinCorrectEmailOrPasswordError(error.response.data.message);

        } finally{
            toast.dismiss(loadingToastId)
        }

    }
    const formik = useFormik({
        initialValues:{
           
            "email":"",
            "password":"",
            
        },
        validationSchema,
        onSubmit: sendDataToLogin,
    });
    return( <>
    <div>
      <h1 className='text-xl text-slate-700 font-semibold mb-5'><i className="fa-solid fa-user mr-2"></i>Login</h1>
      <form className='space-y-3 ' onSubmit={formik.handleSubmit} >
        
        <div className="email">
            <input 
              type="email" 
              className='form-control w-full' 
              placeholder='Email Address' 
              value={formik.values.email} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='email'
            />
            {formik.errors.email && formik.touched.email && (<p className='text-red-500 mt-1 text-sm'>*{formik.errors.email}</p>)}
        </div>
        <div className="password">
            <input 
              type="password" 
              className='form-control w-full' 
              placeholder='Password' 
              value={formik.values.password} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='password'
            />
            {formik.errors.password && formik.touched.password && (<p className='text-red-500 mt-1 text-sm'>*{formik.errors.password}</p>)}
            {inCorrectEmailOrPasswordError && (<p className='text-red-500 mt-1 text-sm'>*{inCorrectEmailOrPasswordError}</p>)}
        </div>
        
        <button type='submit' className='btn w-full bg-primary-700 hover:bg-primary-800 text-white'>Login</button>
      </form>
      <p className="text-center text-green-600 mt-4 cursor-pointer hover:underline" onClick={() => setShowForgetPassword(true)}>
            Forget your password?
      </p>
    </div>
      
    </>
    );
}

export default Login*/
























import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { object, ref ,string } from 'yup';
import { userContext } from '../../components/Context/User.context';


 
function Login() {
    const {token, setToken}= useContext(userContext);
    const [inCorrectEmailOrPasswordError, setinCorrectEmailOrPasswordError] = useState(null);
    const navigate = useNavigate();
    const [showForgetPassword, setShowForgetPassword] = useState(false);
    const [email, setEmail] = useState("");

    const handleForgetPassword = (e) => {
        e.preventDefault();
        console.log("Email sent to:", email);
        alert("Check your email for password reset instructions.");
        setShowForgetPassword(false);
    };


    
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    
    const validationSchema = object({
        email: string()
           .required("Email is required")
           .email("Email is invalid "),
        password: string().required("Password is required").matches(passwordRegex, "Password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),

    });
    async function sendDataToLogin(values){
        const loadingToastId = toast.loading("waiting...")
        try{
            const options ={
                url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
                method:"POST",
                data: values
            } 
            let {data} = await axios.request(options);
            if(data.message === "success"){
                toast.success("user logged in successfully");
                setToken(data.token);
                localStorage.setItem("token", data.token);
                
                setTimeout(() =>{
                    navigate("/");
                   
                }, 2000);
            }
        } catch(error){
            
            toast.error(error.response.data.message);
            setinCorrectEmailOrPasswordError(error.response.data.message);

        } finally{
            toast.dismiss(loadingToastId)
        }

    }
    const formik = useFormik({
        initialValues:{
           
            "email":"",
            "password":"",
            
        },
        validationSchema,
        onSubmit: sendDataToLogin,
    });
    return(
    <>
    {!showForgetPassword ?(
    <div>
     < h1 className='text-xl text-slate-700 font-semibold mb-5'><i className="fa-solid fa-user mr-2"></i>Login</h1>
     <form className='space-y-3 ' onSubmit={formik.handleSubmit} >
      
      <div className="email">
          <input 
            type="email" 
            className='form-control w-full' 
            placeholder='Email Address' 
            value={formik.values.email} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='email'
          />
          {formik.errors.email && formik.touched.email && (<p className='text-red-500 mt-1 text-sm'>*{formik.errors.email}</p>)}
      </div>
      <div className="password">
          <input 
            type="password" 
            className='form-control w-full' 
            placeholder='Password' 
            value={formik.values.password} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='password'
          />
          {formik.errors.password && formik.touched.password && (<p className='text-red-500 mt-1 text-sm'>*{formik.errors.password}</p>)}
          {inCorrectEmailOrPasswordError && (<p className='text-red-500 mt-1 text-sm'>*{inCorrectEmailOrPasswordError}</p>)}
      </div>
      
      <button type='submit' className='btn w-full bg-primary-700 hover:bg-primary-800 text-white'>Login</button>
     </form>
     <p className="text-center text-green-600 mt-4 cursor-pointer hover:underline" onClick={() => setShowForgetPassword(true)}>
          Forget your password?
     </p>
    </div>):(
          <div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Reset Password
            </h2>
            <form onSubmit={handleForgetPassword}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Send Reset Link
              </button>
              <p
                className="text-center text-green-500 mt-4 cursor-pointer hover:underline"
                onClick={() => setShowForgetPassword(false)}
              >
                Back to Login
              </p>
            </form>
          </div>
        )}
    </>)

}

export default Login


    