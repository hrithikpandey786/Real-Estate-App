import React from "react";
import "./register.scss";

export default function Register(){
    const [data, setData] = React.useState([{
        username: "",
        email: "",
        password: ""
    }])
    function submittedData(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        const newData = {username: username, email: email, password: password};

        setData(prevData=>{
            const updatedData = [...prevData, newData];
            return updatedData;
        })

        console.log(data);
    }

    return(
        <div className="register">
            <div className="formContainer">
                <form onSubmit={submittedData}>
                    <h1>Create an Account</h1>
                    <input name="username" type="text" placeholder="Username"></input>
                    <input name="email" type="email" placeholder="Email"></input>
                    <input name="password" type="text" placeholder="Password"></input>
                    <button type="submit">Register</button>
                    <a href="/login">Do you have an account?</a>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png"></img>
            </div>
        </div>
    )
}