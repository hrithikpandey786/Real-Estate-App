const prisma = require("../lib/prisma.js");

const getPosts = async (req, res) =>{
    try{
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to get Posts"});
    }
}

const getPost = async (req, res) =>{
    const id = req.params.id;
    
    try{
        const post = await prisma.post.findUnique({
            where: {id},
            include:{
                postDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true
                    }
                }
            }
        })
        res.status(200).json(post);
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to get the Posts"});
    }
}

const addPost = async (req, res) =>{
    // const id = req.params.id;
    const tokenId = req.userId;
    const body = req.body;

    // if(id!==tokenId){
    //     return res.status(403).json({message: "Not Authorized"});
    // }
    
    try{
        const newPost = await prisma.post.create({
            data: {
                ...body.postData,
                userId: tokenId,
                postDetail: {
                    create: body.postDetail,
                    // postId: tokenId
                }
            }
        })
        return res.status(200).json(newPost);
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to add Post"});
    }
}

const updatePost = (req, res) =>{
    try{

    } catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to update the Post"});
    }
}

const deletePost = async (req, res) =>{
    const tokenId = req.userId;
    const id = req.params.id;

    try{
        const post = await prisma.post.findUnique({
            where: {
                id
            }
        })

        if(post.userId!==tokenId){
            return res.status(403).json({message: "Not Authorized"});
        }

        await prisma.postDetail.delete({
            where: {
                postId: id
            }
        })

        await prisma.post.delete({
            where: {
                id
            }
        })
        res.status(200).json({message: "Post deleted"});
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to delete the Post"});
    }
}

module.exports = {getPosts, getPost, addPost, updatePost, deletePost};