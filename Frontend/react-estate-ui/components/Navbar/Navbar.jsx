import React from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar(){
    const {currentUser} = React.useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState(true);

    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png"></img>
                    <span>LamaEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contacts</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                {
                
                (currentUser)?
                    <>
                        <div className="user">
                            <img src={currentUser.avatar || "/favicon.png"}></img>
                            <span>{currentUser.username}</span>
                            <Link to="/profile" className="profile">
                                <div className="notification">3</div>
                                <span>Profile</span>
                            </Link>
                        </div>
                    </>
                :
                    <>
                        <a href="/login">Sign in</a>
                        <a href="/register" className="register">Sign up</a>
                        <div className="menuIcon">
                            <img src="/menu.png" onClick={()=>setOpen(prev=>!prev)}></img>
                        </div>
                        <div className={open?"menu active":"menu"}>
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Contacts</a>
                            <a href="/">Agents</a>
                            <a href="/login">Sign in</a>
                            <a href="/signup">Sign up</a>
                        </div>
                    </>
                }    
            </div>
        </nav>
    )
}