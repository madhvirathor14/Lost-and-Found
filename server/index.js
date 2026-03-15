require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const mongoose = require("mongoose");
const main =  require("./Routes/main")
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded());
const cors = require("cors");

app.use(
  cors({
    origin: "https://lost-and-found-bay-six.vercel.app", // Replace "*" with your React frontend's origin
    credentials: true,
  })
);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb connected")
});
app.use('/',main)
app.listen(process.env.PORT, () => {
  console.log("listening on the port 5000");
});
