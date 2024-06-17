import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./profileUpdatePage.scss";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/Upload Widget/uploadWidget";

function ProfileUpdatePage() {
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const {currentUser, updateUser} = React.useContext(AuthContext);
  const [avatar, setAvatar] = React.useState(currentUser.avatar);
  const navigate = useNavigate();

  async function handleSubmit(e){
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    
    try{
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username, password, email, avatar
      })

      updateUser(res.data);
      navigate("/profile");
    } catch(err){
      console.log(err);
      setError(err.response.data.message);
    } finally{
      setIsLoading(false);
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
          <button disabled={isLoading} type="submit">Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar || "/noavatar.png"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "dbmigo1jw",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
