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

const removeUser = (userId) =>{
    onlineUser = onlineUser.filter(user=>user.userId!==userId);
}

const getUser = (socketId) =>{
    const user = onlineUser.find(user=>user.socketId===socketId);
}

io.on("connection", (socket)=>{
    socket.on("newUser", (userId)=>{
        addUser(userId, socket.id);    
    })

    socket.on("disconnect", (userId)=>{
        removeUser(userId);
    })

    socket.on("sendMessage", (receiverId, data)=>{
        const receiver = getUser(receiverId);
        io.to(receiver.socketId).emit("getMessage", data);
    })
})

io.listen("4000");