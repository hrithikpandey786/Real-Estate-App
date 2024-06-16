import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const {currentUser, updateUser} = React.useContext(AuthContext);

  async function handleLogout(){
    try{
      const mssg = await apiRequest.post("/auth/logout");

      updateUser(null);
      navigate("/");
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser.avatar || "/noavatar.png"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username||null}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
