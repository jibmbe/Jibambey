const express = require("express");
const app = express();
const colors = require("colors")
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 8800
const connectDB = require("./config/db")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth") 
const dataObj = require("./data")

dotenv.config();
connectDB();
      
   //middleware
   app.use(express.json());
   app.use(helmet());
   app.use(morgan("common"));

   app.use("/api/users", userRoute);
   app.use("/api/auth", authRoute);
   app.use("data", async(req, res) =>{
    res.send(dataObj)
   })


app.listen(port, () => console.log(`server started on port ${port}`))










