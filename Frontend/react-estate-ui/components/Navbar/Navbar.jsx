import React from "react";

export default function Navbar(){
    const [open, setOpen] = React.useState(false);

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
                <a href="/">Sign in</a>
                <a href="/" className="register">Sign up</a>
                <div className="menuIcon">
                    <img src="/menu.png" onClick={()=>setOpen(prev=>!prev)}></img>
                </div>
                <div className={open?"menu active":"menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contacts</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    )
}