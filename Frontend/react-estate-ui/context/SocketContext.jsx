import React from "react"
import {io} from "socket.io-client";

export const SocketContext = React.createContext();

export const SocketContextProvider = ({children})=>{
    const [socket, setSocket] = React.useState(null);

    React.useEffect(()=>{
        setSocket(io("http://localhost:4000"));
    }, [])
    
    return (<SocketContext.Provider value={{socket}}>
        {children}
    </SocketContext.Provider>
    )
}
