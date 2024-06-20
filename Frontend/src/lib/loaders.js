import apiRequest from "./apiRequest";
import { defer } from "react-router-dom";


export const SinglePageLoader = async ({req, params}) =>{
    const id = params.id;

    try{
        const post = await apiRequest.get(`/posts/${id}`);

        return post.data;
    } catch(err){
        console.log(err);
    }
}

export const listPageLoader = async ({request, params}) =>{
    const query = request.url.split("?")[1];
    
    try{
        const postPromise = apiRequest.get("/posts?"+query);

        return defer({
            postResponse: postPromise
        })
    } catch(err){
        console.log(err);
    }
} 


export const profilePageLoader = async ({request, params}) =>{
    try{
        const postPromise = apiRequest.get("/users/profilePosts");
        const chatPromise = apiRequest.get("/chats");

        return defer({
            postResponse: postPromise,
            chatResponse: chatPromise
        })
    } catch(err){
        console.log(err);
    }
} 