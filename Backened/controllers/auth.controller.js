const bcrypt = require("bcrypt");

const register = async (req, res)=>{
    const {password} = req.body;
    // res.send(password);
    const hashedPassword = await bcrypt.hash(password, 10);

    res.send(hashedPassword);
}

const login = (req, res)=>{
    res.send("login");
}

const logout = (req, res)=>{
    res.send("logout");
}

module.exports = {register, login, logout};