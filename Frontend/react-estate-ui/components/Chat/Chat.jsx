import React, { useContext } from "react";
import "./chat.scss";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import {format} from "timeago.js";

export default function Chat({items}){
    const [chat, setChat] = React.useState(null);
    const {currentUser, updateUser} = useContext(AuthContext);
    
    async function handleOpenChat(item){
        // console.log(item);
        try{
            // console.log(item);
            const chats = await apiRequest.get(`/chats/${item.id}`);
            
            setChat([chats.data, item.receiver]);
            // console.log(chat[0])
        } catch(err){   
            console.log(err);
        }
    }

    async function handleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const text = formData.get("text");
        
        if(!text)
            return;
        
        try{
            const message = await apiRequest.put(`/message/${chat[0].id}`,{text});
            // console.log(message.data);
            // console.log(chat)
            setChat(prev=>{
                prev, prev[0].messages = [...prev[0].messages, message.data]
            })
            
            event.target.reset();
        } catch(err){
            console.log(err);
        }
    }

    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                {
                    items.map(item=>{
                        return <div key={item.id} className="message" onClick={()=>handleOpenChat(item)} style={{backgroundColor: item.seenBy.includes(currentUser.id)?"white":"#fecd514e"}}>
                            <img src={item.receiver.avatar || "/noavatar.png"}></img>
                            <span>{item.receiver.username}</span>
                            <p>{item.lastMessage}</p>
                        </div>
                    })
                }
            </div>
            {chat && <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src={chat[1].avatar || "/noavatar.png"}/>
                        {chat[1].username}
                    </div>
                        <span className="close" onClick={()=>setChat(null)}>X</span>
                </div>
                <div className="center">
                    {
                        chat[0].messages.map(m=>{
                            return <div className="chatMessage own" key={m.id} style={{
                                alignSelf: m.userId===currentUser.id?"flex-end":"flex-start",
                                textAlign: m.userId===currentUser.id?"right":"left"
                            }}>
                                <p>{m.text}</p>
                                <span>{format(m.createdAt)}</span>
                            </div>
                        })
                    }
                </div>
                <form onSubmit={handleSubmit}>
                    <div  className="bottom">
                        <textarea name="text"></textarea>
                        <button>Send</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}