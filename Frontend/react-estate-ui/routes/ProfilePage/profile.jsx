import React from "react"
import List from "../../components/List/List"
import "./profile.scss";
import Chat from "../../components/Chat/Chat";

export default function Profile(){
    function handleLogout(event){
        event.preventDefault();

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
                            Avatar: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                        </span>
                        <span>Username: <b>John Doe</b></span>
                        <span>E-mail: <b>john@email.com</b></span>
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