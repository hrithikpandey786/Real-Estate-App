import React, {Suspense} from "react"
import {useNavigate, Navigate, Link, useLoaderData, Await} from "react-router-dom";
import List from "../../components/List/List"
import "./profile.scss";
import Chat from "../../components/Chat/Chat";
import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";
import apiRequest from "../../lib/apiRequest";


export default function Profile(){
    const navigate = useNavigate();
    const {currentUser, updateUser} = React.useContext(AuthContext);
    const profileLoader = useLoaderData();
    // console.log(profileLoader);
    // console.log(posts.postResponse);
    // const {currentUser} = React.useContext(AuthContext);
    // const navigate = useNavigate();
    // React.useEffect(()=>{
    //     if(!currentUser){
    //         navigate("/login");
    //     }
    // }, [currentUser])


    async function handleLogout(event){
        // event.preventDefault();
        try{
            await apiRequest.post("http://localhost:8800/api/auth/logout");    
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
                            Avatar: <img src={currentUser.avatar || "/favicon.png"}></img>
                        </span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>E-mail: <b>{currentUser.email}</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <Link to="/add">
                            <button>Add New Post</button>
                        </Link>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                            resolve={profileLoader.postResponse}
                            errorElement = {<p>Error Loading Posts</p>}
                        >
                        {({postResponse})=>(
                            // posts.postResponse._data.data.userPosts.map(post=>(
                            //     <Card key={post.id} item={post}></Card>
                            // ))
                            <List items={profileLoader.postResponse.data.userPosts}/>
                        )}
                        </Await>
                    </Suspense>
                        {/* <List items={posts.data.userPosts}/> */}
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                            resolve={profileLoader.postResponse}
                            errorElement = {<p>Error Loading Posts</p>}
                        >
                        {({postResponse})=>(
                            // posts.postResponse._data.data.userPosts.map(post=>(
                            //     <Card key={post.id} item={post}></Card>
                            // ))
                            <List items={profileLoader.postResponse.data.savedPosts}/>
                        )}
                        </Await>
                    </Suspense>
                    {/* <List items={posts.data.savedPosts}/> */}
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                            resolve={profileLoader.chatResponse}
                            errorElement = {<p>Error Loading Posts</p>}
                        >
                        {({chatResponse})=>(
                            // posts.postResponse._data.data.userPosts.map(post=>(
                            //     <Card key={post.id} item={post}></Card>
                            // ))
                            <Chat items={profileLoader.chatResponse.data}/>
                        )}
                        </Await>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}