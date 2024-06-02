import { defer } from "react-router-dom";
import apiRequest from "./apiRequest"

export const singlePageLoader = async ({request, params}) =>{
    // console.log(params);
    const res = await apiRequest.get(`/posts/${params.id}`);
    return res.data;
}

export const listPageLoader = async ({request, params}) =>{
    // console.log(request);
    try{
        const query = request.url.split("?")[1];
        const postPromise = apiRequest.get(`/posts/?${query}`);
        return defer({
            postResponse: postPromise
        })
    } catch(err){
        console.log(err);
        return null;
    }
}