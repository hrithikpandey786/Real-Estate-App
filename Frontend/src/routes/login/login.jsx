import React from "react";
import "./login.scss";
import apiRequest from "../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const {currentUser, updateUser} = React.useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e){
    setError(null);
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try{
      const res = await apiRequest.post("/auth/login", {
        username, password
      })

      const {password: hashedPassword, ...rest} = res.data;
      
      {updateUser(rest);}
      navigate("/");    
    }catch(err){
      console.log(err);
      setError(err.response.data.message);
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
