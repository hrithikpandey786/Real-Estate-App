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
        const items = await apiRequest.get(`/posts/?${query}`);
        return items;
    } catch(err){
        // console.log(err);
        return null;
    }
}