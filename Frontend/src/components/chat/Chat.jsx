import React, { Suspense, useState } from "react";
import "./chat.scss";
import { Await, useLoaderData } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import {format} from "timeago.js";
import { AuthContext } from "../../context/AuthContext";


function Chat() {

  const [chat, setChat] = useState(null);
  const chats = useLoaderData();
  const {currentUser} = React.useContext(AuthContext);

  async function handleOpenChat(id, receiver){
    try{
      const res = await apiRequest.get("/chats/"+id);

      setChat({...res.data, receiver});
    } catch(err){
      console.log(err);
    }
  }

  async function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");

    if(!text){
      return;
    }

    try{
      const res = await apiRequest.put(`/message/${chat.id}`, {text});

      setChat(prev=>({...prev, messages:[...prev.messages, res.data]}));

      e.target.reset();
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <Await  resolve={chats.chatResponse}
            errorElement={<p>Error Loading Posts!</p>}
          >
            {chatResponse=>chatResponse.data.map(chat=>{
              return <div className="message" key={chat.id} onClick={()=>handleOpenChat(chat.id, chat.receiver)}
                        style={{backgroundColor:chat.seenBy.includes(currentUser.id)?"white":"#fecd514e"}}
                    >
              <img
                src={chat.receiver.avatar || "/noavatar.png"}
                alt=""
              />
              <span>{chat.receiver.username}</span>
              <p>{chat.lastMessage}</p>
            </div>
            })
            }
          </Await>
        </Suspense>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src={chat.receiver.avatar || "/noavatar.png"}
                alt=""
              />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            {/* <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div> */}
            {chat.messages.map(mssg=>{
              return <div className="chatMessage" key={mssg.id}
                        style={{
                          alignSelf: mssg.userId===currentUser.id?"flex-end":"flex-start",
                          textAlign: mssg.userId===currentUser.id?"right":"left"
                        }}
                      >
                <p>{mssg.text}</p>
                <span>{format(mssg.createdAt)}</span>
              </div>
            })}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="bottom">
              <textarea name="text"></textarea>
              <button>Send</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
