const express = require("express");
const app = express();
const authRoute = require("./routes/auth.route");

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(8800, ()=>{
    console.log("Server is listening on port 8800...");
})