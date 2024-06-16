import React from "react";
import "./login.scss";
import apiRequest from "../../lib/apiRequest";
import { Link } from "react-router-dom";

function Login() {
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(e){
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try{
      const res = await apiRequest.post("/auth/login", {
        username, password
      })
    
      localStorage.setItem("user", JSON.stringify(res.data));
    }catch(err){
      console.log(err);
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
