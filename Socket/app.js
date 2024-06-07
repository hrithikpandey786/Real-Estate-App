import {Server} from "socket.io"

const io = new Server({
    cors: "http://localhost:5173"
});

let onlineUser = [];

const addUser = (userId, socketId)=>{
    const userExists = onlineUser.find(user=>user.userId===userId);

    if(!userExists){
        onlineUser.push({userId, socketId});
    }
}

const removeUser = (socketId) =>{
    return onlineUser = onlineUser.filter(user=>user.socketId!==socketId);
}

const getUser = (receiverId) =>{
    return onlineUser.find(user=>user.userId===receiverId);
}

io.on("connection", (socket)=>{
    socket.on("newUser", (userId)=>{
        addUser(userId, socket.id);    
    })

    socket.on("sendMessage", ({receiverId, data})=>{
        const receiver = getUser(receiverId);
        // console.log(receiver);
        if(receiver){
            io.to(receiver.socketId).emit("getMessage", data);
        } else {
            console.log(`receiver with id ${receiverId} not found`, onlineUser);
        }
    })

    socket.on("disconnect", (socketId)=>{
        removeUser(socketId);
    })
})

io.listen("4000");