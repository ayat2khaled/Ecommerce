import { createContext, useState } from "react";
import Cart from "../../pages/Cart/Cart";

export let userContext = createContext("")
export default function UserProvider({children}){
    let [token, setToken] = useState(localStorage.getItem("token"));
    function logOut(){
        setToken(null)
        localStorage.removeItem("token")
    }

    return <userContext.Provider value={{token, setToken, logOut}}>
        {children }

    </userContext.Provider>

}