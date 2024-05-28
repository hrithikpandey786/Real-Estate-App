import React from "react"
import List from "../../components/List/List"
import "./profile.scss";
import Chat from "../../components/Chat/Chat";
import { AuthContext } from "../../context/AuthContext";

export default function Profile(){
    
    const {currentUser, updateUser} = React.useContext(AuthContext);
    
    function handleLogout(event){
        // event.preventDefault();

        localStorage.removeItem("user");
    }

    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>
                            Avatar: <img src={currentUser.avatar || "/favicon.png"}></img>
                        </span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>E-mail: <b>{currentUser.email}</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Add New Post</button>
                    </div>
                        <List/>
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List/>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}