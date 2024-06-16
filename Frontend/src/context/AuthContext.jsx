import React,{ createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = React.useState(
        JSON.parse(localStorage.getItem("user")) || null
)

    const updateUser = (user) =>{
        setCurrentUser(user);
    }

    React.useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return (<AuthContext.Provider value={{currentUser, updateUser}}>
        {children}
    </AuthContext.Provider>)
}