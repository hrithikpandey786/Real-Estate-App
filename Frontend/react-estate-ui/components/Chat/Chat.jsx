import React from "react";
import "./chat.scss";

export default function Chat(){
    const [chat, setChat] = React.useState(true);

    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                    <span>John Doe</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                    <span>John Doe</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                    <span>John Doe</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                    <span>John Doe</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                    <span>John Doe</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
            </div>
            {chat && <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                        John Doe
                    </div>
                        <span className="close" onClick={()=>setChat(!chat)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage own">
                        <p>Lorem, ipsum dolor sit amet </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum dolor sit amet </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem, ipsum dolor sit amet </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum dolor sit amet </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage ">
                        <p>Lorem, ipsum dolor sit amet </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum dolor sit amet </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem, ipsum dolor sit amet </p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
            }
        </div>
    )
}