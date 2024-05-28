const prisma = require("../lib/prisma");

const getUsers = async (req, res)=>{
    try{
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
    } catch(err){
        console.log(err);
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
        return res.status(404).json(err);
    }
}

module.exports = {getUsers, getUser};