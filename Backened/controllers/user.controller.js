const prisma = require("../lib/prisma");
const bcrypt = require("bcrypt");

const getUsers = async (req, res)=>{
    try{
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to get Users data"});
    }
}

const getUser = async (req, res)=>{
    const id = req.params.id;
    try{
        const users = await prisma.user.findUnique({
            where:{
                id: id
            }
        });
        return res.status(200).json(users);
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to get user data"});
    }
}

const updateUser = async (req, res)=>{
    const id = req.params.id;
    const tokenId = req.userId;
    const {password, avatar, ...newData} = req.body;
    // console.log(newData);
    if(id!==tokenId){
        return res.status(403).json({message: "Not Authorized"});
    }

    let hashedPassword = null;

    try{

        if(password){
            hashedPassword = await bcrypt.hash(password, 10);
        }

        const updatedUser = await prisma.user.update({
            where:{
                id
            }, data: {
                ...newData,
                ...password && {password: hashedPassword},
                ...avatar && {avatar: avatar[0]}
            }
        });

        const {password: userPassword, ...rest} = updatedUser;

        return res.status(200).json(rest);
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to update data"});
    }
}

const deleteUser = async (req, res)=>{
    const id = req.params.id;
    const tokenId = req.userId;

    if(id!==tokenId){
        return res.status(403).json({message: "Not Authorized"});
    }

    try{
        await prisma.user.delete({
            where:{
                id
            }
        });

        return res.status(200).json("successfully deleted");
    } catch(err){
        console.log(err);
        res.status(403).json({message: "Failed to delete the user"});
    }
}

module.exports = {getUsers, getUser, updateUser, deleteUser};