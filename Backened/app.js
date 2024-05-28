const express = require("express");
const app = express();
const authRoute = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const testRoute = require("./routes/test.route");

app.use(cors({origin: process.env.CLIENT_URL, credentials: true}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);

app.listen(8800, ()=>{
    console.log("Server is listening on port 8800...");
})