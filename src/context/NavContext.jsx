import React, {createContext , useState} from "react";

export const Context = createContext();

export const NavContextProvider = ({children}) =>{
       const [project , setProject] = useState(false)
       return(
        <Context.Provider value={{project , setProject}}>
        {children}
        </Context.Provider>
       )
} 
