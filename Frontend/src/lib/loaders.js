import apiRequest from "./apiRequest";

export const SinglePageLoader = async ({req, params}) =>{
    const id = params.id;

    try{
        const post = await apiRequest.get(`/posts/${id}`);

        return post.data;
    } catch(err){
        console.log(err);
    }
}