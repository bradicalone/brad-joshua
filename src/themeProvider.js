import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null)

export const ThemeProvider = ({children}) => {
    const [user, setUser] = useState({})
    
    const login = userData => {
        console.log('userData:', userData)
        setUser({...user, ...userData})
    }

    const logout = async () => {
        try {
            const res = await fetch('/logout-user')
            setUser({})
        } catch( err ) {
            console.log('err:', err)
            setUser({})
        }
    }

    const clearUser = () => setUser({})
        
    return (
        <ThemeContext.Provider value={{user, login, logout, clearUser}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}