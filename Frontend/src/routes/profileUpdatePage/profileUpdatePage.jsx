import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./profileUpdatePage.scss";
import apiRequest from "../../lib/apiRequest";

function ProfileUpdatePage() {
  const [avatar, setAvatar] = React.useState([]);
  const [error, setError] = React.useState("");
  const {currentUser, updateUser} = React.useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try{
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        ...data, avatar: ["/noavatar.png"]
      })

      updateUser(res.data);
      navigate("/profile");
    } catch(err){
      console.log(err);
      setError(err.response.data.message);
    }
  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username||null}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email||null}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src="" alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
